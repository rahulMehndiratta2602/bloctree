import { useEffect, useState } from "react";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

type PhantomEvent = "disconnect" | "connect" | "accountChanged";

interface ConnectOpts {
    onlyIfTrusted: boolean;
}

interface PhantomProvider {
    connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
    disconnect: () => Promise<void>;
    on: (event: PhantomEvent, callback: (args: any) => void) => void;
    isPhantom: boolean;
    publicKey?: PublicKey;
}

type WindowWithSolana = Window & { 
    solana?: PhantomProvider;
}

export const usePhantom = () => {
    const [walletAvail, setWalletAvail] = useState(false);
    const [provider, setProvider] = useState<PhantomProvider | null>(null);
    const [connected, setConnected] = useState(false);
    const [pubKey, setPubKey] = useState<PublicKey | null>(null);
    const [balance, setBalance] = useState<number | null>(null);

    useEffect(() => {
        if ("solana" in window) {
            const solWindow = window as WindowWithSolana;
            if (solWindow?.solana?.isPhantom) {
                setProvider(solWindow.solana);
                setWalletAvail(true);

                solWindow.solana.connect({ onlyIfTrusted: true })
                    .then(({ publicKey }) => {
                        setConnected(true);
                        setPubKey(publicKey);
                        fetchBalance(publicKey);
                    })
                    .catch(err => {
                        console.error("Eager connection failed:", err);
                    });
            }
        }
    }, []);

    useEffect(() => {
        if (provider) {
            provider.on("connect", (publicKey: PublicKey) => {
                setConnected(true);
                setPubKey(publicKey);
                fetchBalance(publicKey);
            });

            provider.on("disconnect", () => {
                setConnected(false);
                setPubKey(null);
                setBalance(null);
            });

            provider.on("accountChanged", (publicKey: PublicKey) => {
                setPubKey(publicKey);
                fetchBalance(publicKey);
            });
        }
    }, [provider]);

    const connect = async () => {
        try {
            const { publicKey } = await provider?.connect()!;
            setConnected(true);
            setPubKey(publicKey);
            fetchBalance(publicKey);
        } catch (err) {
            console.error("Connect ERROR:", err);
        }
    };

    const disconnect = async () => {
        try {
            await provider?.disconnect();
            setConnected(false);
            setPubKey(null);
            setBalance(null);
        } catch (err) {
            console.error("Disconnect ERROR:", err);
        }
    };

    const fetchBalance = async (publicKey: PublicKey) => {
        try {
            const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");
            const balance = await connection.getBalance(publicKey);
            setBalance(balance / 1e9); // Convert lamports to SOL
        } catch (err) {
            console.error("Failed to fetch balance:", err);
        }
    };

    return {
        walletAvail,
        connected,
        pubKey,
        balance,
        connect,
        disconnect,
    };
};

"use client";
import React, { FC, useEffect, useState } from "react";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import axios from 'axios';
import Link from "next/link";

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

const Connect2Phantom: FC = () => {
    const [walletAvail, setWalletAvail] = useState(false);
    const [provider, setProvider] = useState<PhantomProvider | null>(null);
    const [connected, setConnected] = useState(false);
    const [pubKey, setPubKey] = useState<PublicKey | null>(null);
    const [balance, setBalance] = useState<number | null>(null);

    useEffect(() => {
        console.log("useEffect - Checking for Phantom Wallet...");

        if ("solana" in window) {
            console.log("Phantom Wallet found in window object.");

            const solWindow = window as WindowWithSolana;
            if (solWindow?.solana?.isPhantom) {
                console.log("Phantom Wallet is available and recognized.");
                setProvider(solWindow.solana);
                setWalletAvail(true);

                console.log("Phantom Provider object:", solWindow.solana);

                solWindow.solana.connect({ onlyIfTrusted: true })
                    .then(({ publicKey }) => {
                        console.log("Eager connection successful with public key:", publicKey.toBase58());
                        setConnected(true);
                        setPubKey(publicKey);
                        // fetchBalance(publicKey);
                        saveWalletAddress(publicKey); // Save wallet address to backend
                    })
                    .catch(err => {
                        console.error("Eager connection failed:", err);
                    });
            } else {
                console.log("Phantom Wallet is not recognized.");
            }
        } else {
            console.log("Phantom Wallet is not available in the window object.");
        }
    }, []);

    useEffect(() => {
        if (provider) {
            console.log("Provider is set, attaching event listeners...");

            provider.on("connect", (publicKey: PublicKey) => {
                console.log("Connect event triggered with public key:", publicKey.toBase58());
                setConnected(true);
                setPubKey(publicKey);
                // fetchBalance(publicKey);
                saveWalletAddress(publicKey); // Save wallet address to backend
            });

            provider.on("disconnect", () => {
                console.log("Disconnect event triggered.");
                setConnected(false);
                setPubKey(null);
                setBalance(null);
            });

            provider.on("accountChanged", (publicKey: PublicKey) => {
                console.log("Account changed event triggered with public key:", publicKey.toBase58());
                setPubKey(publicKey);
                // fetchBalance(publicKey);
            });
        } else {
            console.log("Provider is not set. Event listeners not attached.");
        }
    }, [provider]);

    const connectHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        console.log("Connect button clicked.");
        provider?.connect()
            .then(({ publicKey }) => {
                console.log("Connection successful with public key:", publicKey.toBase58());
                setPubKey(publicKey);
                // fetchBalance(publicKey);
                saveWalletAddress(publicKey); // Save wallet address to backend
            })
            .catch(err => {
                console.error("Connect ERROR:", err);
            });
    };

    const disconnectHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        console.log("Disconnect button clicked.");
        provider?.disconnect()
            .then(() => {
                console.log("Disconnected successfully.");
                setBalance(null);
            })
            .catch(err => {
                console.error("Disconnect ERROR:", err);
            });
    };

    // const fetchBalance = async (publicKey: PublicKey) => {
    //     try {
    //         const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");
    //         const balance = await connection.getBalance(publicKey);
    //         console.log(`Balance for ${publicKey.toBase58()}: ${balance / 1e9} SOL`);
    //         setBalance(balance / 1e9); // Convert lamports to SOL
    //     } catch (err) {
    //         console.error("Failed to fetch balance:", err);
    //     }
    // };

    const saveWalletAddress = async (publicKey: PublicKey) => {
        try {
            const walletAddress = publicKey.toBase58();
            const response = await axios.post('http://localhost:3001/save-wallet', { walletAddress });
            console.log("Wallet address saved successfully.", response.data);

            console.log(response);


            // You can access the passkey from the response if needed
            // const { passkey } = response.data;
            // console.log("Generated passkey:", passkey);

        } catch (err) {
            console.error("Failed to save wallet address:", err);
        }
    };
    return (
        <>
            {walletAvail ? (
                <>
                    <button disabled={connected} onClick={connectHandler}><Link href="/dashboard">Connect your Wallet</Link></button>
                    {/* <button disabled={!connected} onClick={disconnectHandler}>Disconnect from Phantom</button> */}
                    {/* {connected && pubKey ? (
                        <div>
                            <p>Your public key is: {pubKey.toBase58()}</p>

                        </div>
                    ) : null} */}
                </>
            ) : (
                <p>Oops! Phantom is not available. Go get it <a href="https://phantom.app/">here</a>.</p>
            )}
        </>
    );
};

export default Connect2Phantom;

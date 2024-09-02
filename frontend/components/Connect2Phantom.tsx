'use client';
import React, { FC, useEffect } from 'react';
import { PublicKey } from '@solana/web3.js';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { usePhantom } from '@/components/usePhantom'; // Custom hook for managing Phantom connection

const Connect2Phantom: FC = () => {
    const router = useRouter(); // Initialize the router
    const { connected, pubKey, connect } = usePhantom();
    const [walletAvail, setWalletAvail] = React.useState(false);

    useEffect(() => {
        if ("solana" in window) {
            interface WindowWithSolana extends Window {
                solana: any; 
            }
            
            const solWindow = window as WindowWithSolana;
            if (solWindow?.solana?.isPhantom) {
                setWalletAvail(true);
                if (solWindow.solana.publicKey) {
                    
                    const { publicKey } = solWindow.solana;
                    saveWalletAddress(publicKey);
                }
            }
        }
    }, []);

    useEffect(() => {
        if (connected) {
            router.push("/dashboard");
        }
    }, [connected, router]);

    const handleConnect = async () => {
        try {
            await connect();
        } catch (err) {
            console.error("Connect ERROR:", err);
        }
    };

    const saveWalletAddress = async (publicKey: PublicKey) => {
        try {
            const walletAddress = publicKey.toBase58();
            await axios.post('http://localhost:3001/save-wallet', { walletAddress });
            console.log("Wallet address saved successfully.");
        } catch (err) {
            console.error("Failed to save wallet address:", err);
        }
    };

    return (
        <>
            {walletAvail ? (
                <>
                    <button disabled={connected} onClick={handleConnect}>
                        Connect your Wallet
                    </button>
                    {pubKey && connected && router.push("/dashboard")}
                </>
            ) : (
                <p>Oops! Phantom is not available. Go get it <a href="https://phantom.app/">here</a>.</p>
            )}
        </>
    );
};

export default Connect2Phantom;

'use client';
'use client';
import React, { useState } from 'react';
import Link from 'next/link'; // Import the Link component from 'next/link'
import { Sidebar, SidebarBody, SidebarLink } from './ui/sidebar';
import {
    IconArrowLeft,
    IconBrandTabler,
    IconSettings,
    IconUserBolt,
    IconLogout,
} from '@tabler/icons-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePhantom } from '@/components/usePhantom'; // Custom hook for managing Phantom connection
import { useRouter } from 'next/navigation'; // Import useRouter
import { motion } from 'framer-motion';

export function SidebarDemo() {
    const router = useRouter(); // Initialize the router
    const [open, setOpen] = useState(false);
    const { connected, disconnect } = usePhantom();

    const handleLogout = async () => {
        await disconnect(); // Call the disconnect function
        router.push('/'); // Redirect to the main page
    };

    const { pubKey } = usePhantom(); // Replace 'your_public_key' with the actual value of pubKey

    const links = [
        {
            label: 'Feed',
            href: '#',
            icon: (
                <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: 'Solana Wallet',
            href: '#',
            icon: (
                <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: 'NFT Gallery',
            href: '#',
            icon: (
                <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: 'WordCell Blogs ',
            href: `https://mirror.xyz/${pubKey}`,
            icon: (
                <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
    ];

    return (
        <div
            className={cn(
                'rounded-md flex flex-col md:flex-row bg-background dark:bg-background flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden w-screen',
                'h-screen'
            )}
        >
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10 bg-background dark:bg-background">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        <>
                            <Logo />
                        </>
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink
                                    key={idx}
                                    link={link}
                                    className="rounded-lg hover:bg-primary-gradient hover:shadow-[0_9px_15px_rgba(8,_112,_184,_0.7)]"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <SidebarLink
                            link={{
                                label: 'cromatikap',
                                href: '#',
                                icon: (
                                    <Image
                                        src="https://arweave.net/I7VhhYfEvhJXxFtlIwRML4ydY7mh8A57PpVkco1hsrA"
                                        className="h-7 w-7 flex-shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar"
                                    />
                                ),
                            }}
                        />
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 rounded-lg bg-red-600 hover:bg-red-700 text-white py-2 px-3"
                        >
                            <IconLogout className="h-5 w-5 flex-shrink-0" />
                            <span>Logout</span>
                        </button>
                    </div>
                </SidebarBody>
            </Sidebar>
            <Dashboard />
        </div>
    );
}

// Other components like Logo and Dashboard stay the same.

export const Logo = () => {
    return (
        <Link
            href="/"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <Image src="/img/logo.png" alt="logo-image" width={24} height={24} />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium text-black dark:text-white whitespace-pre"
            >
                BlocTree
            </motion.span>
        </Link>
    );
};

export const LogoIcon = () => {
    return (
        <Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
        </Link>
    );
};

// Dummy dashboard component with content
const Dashboard = () => {
    return (
        <div className="flex flex-1">
            <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
                <div className="flex gap-2">
                    {[...new Array(4)].map((i) => (
                        <div
                            key={'first' + i}
                            className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
                        ></div>
                    ))}
                </div>
                <div className="flex gap-2 flex-1">
                    {[...new Array(2)].map((i) => (
                        <div
                            key={'second' + i}
                            className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

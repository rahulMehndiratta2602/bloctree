'use client';
import Link from 'next/link';
import { Container } from './container';
import { Button } from './button';
import { Hamburger } from './icons/hamburger';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { SignIn } from './signIn';
import Connect2Phantom from './Connect2Phantom';
import Image from 'next/image';

export const Header = () => {
    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
    return (
        <header className="fixed z-20 top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]">
            <Container className="flex h-[var(--navigation-height)] ">
                <Link className="flex items-center text-md" href="/">
                    <Image
                        src="/img/logo.png"
                        alt="logo-image"
                        width={23}
                        height={23}
                        className="mr-[0.6rem]"
                    />
                    BlocTree
                </Link>
                <nav
                    className={twMerge(
                        'min-h-0 py-2 px-2 md:p-0 md:h-full  md:block absolute right-8 top-8 z-50 bg-background rounded-md [&_a:hover]:bg-white [&a:hover]:text-background md:[&_a:hover]:bg-opacity-0 md:[&a:hover]:text-grey [&_a]:w-[100px] [&_a]:rounded-sm [&_a]:p-1 md:[&_a]:w-auto md:[&_a]:rounded-none md:[&_a]:p-0 bg-opacity-70 md:bg-opacity-0 md:top-0 md:right-0  md:relative',
                        hamburgerMenuIsOpen ? '[&_a]:block ' : 'hidden'
                    )}
                >
                    <ul className="flex flex-col items-start justify-start md:flex-row h-full md:items-center [&_a]:text-sm [&_li]:ml-2 md:[&_li]:ml-6 [&_a:hover]:text-grey [&_a]:transition-colors">
                        <li>
                            <Link href="/">Features</Link>
                        </li>
                        <li className="">
                            <Link href="/">Customers</Link>
                        </li>
                        <li className="">
                            <Link href="/">Integrations</Link>
                        </li>
                        <li>
                            <Link href="/">About Us</Link>
                        </li>
                    </ul>
                </nav>
                <div className="ml-auto h-full flex items-center">
                    <Link className="text-sm mr-6 block" href="/signin">
                        Log in
                    </Link>
                    {/* <Button>
                        <Link href="/signin">Connect your Wallet</Link>
                    </Button> */}
                    <Button>
                        <Connect2Phantom />
                    </Button>
                    {/* <Button>
                        <Link href="/signin">Connect your Wallet</Link>
                    </Button> */}
                    <button
                        className="ml-6 block md:hidden"
                        onClick={() => {
                            setHamburgerMenuIsOpen(!hamburgerMenuIsOpen);
                        }}
                    >
                        <span className="sr-only">Toggle Menu</span>
                        <Hamburger />
                    </button>
                </div>
            </Container>
        </header>
    );
};

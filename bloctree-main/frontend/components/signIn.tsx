"use client"; // Add this line at the top

import { useState } from 'react';
import Image from 'next/image';
import walletsImage from '@/public/img/wallets.webp';
import passKeyImage from '@/public/img/passkey.webp';
import { SignInCarousel } from './signInCarousel';
import { Button } from './button';
import Link from 'next/link';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { DialogComponent } from './dialogComponent';
import { PasskeyModal } from './PasskeyModal'; // Import the modal component

export const SignIn = () => {
    const [isPasskeyModalOpen, setIsPasskeyModalOpen] = useState(false);

    const openPasskeyModal = () => setIsPasskeyModalOpen(true);
    const closePasskeyModal = () => setIsPasskeyModalOpen(false);

    return (
        <div className="w-screen h-screen flex md:flex-row flex-col-reverse overflow-hidden">
            <main className="w-full h-[50vh] md:h-screen md:w-[50vw] bg-page-gradient bg-background grid grid-cols-1 xs:grid-cols-2 sm:gap-6 md:flex md:flex-col px-6 sm:px-4 md:px-10 py-[2rem] md:py-[4rem] lg:py-[8.0rem] gap-2 md:gap-10 z-20">
                <h1 className="text-[1.8rem] sm:text-lg md:text-xl font-bold">
                    Select Sign In Option
                </h1>
                <section className="flex flex-col md:gap-6">
                    <DialogComponent btnName={"Connect Wallet"} btnDesc={"Enter Solana Details"} walletsImage={walletsImage} />
                    <div
                        className="flex items-center gap-2 md:gap-4 px-4 py-2 rounded-lg hover:bg-primary-gradient hover:shadow-[0_10px_50px_rgba(8,_112,_184,_0.7)] cursor-pointer"
                        onClick={openPasskeyModal} // Add onClick to open modal
                    >
                        <Image
                            src={passKeyImage}
                            alt="wallets Image"
                            className="cursor-pointer w-8 md:w-12"
                        />
                        <h2 className="text-sm md:text-nm font-bold cursor-pointer">
                            Login with Passkey
                        </h2>
                    </div>
                </section>
            </main>
            <div className='absolute ml-10 z-30'>
                <Link href="/" className='p-5'>
                    <FaLongArrowAltLeft size='4rem' />
                </Link>
            </div>
            <div className="w-full h-[50vh] md:h-screen md:w-[50vw] bg-secondary-gradient-background-vertical md:bg-secondary-gradient-background overflow-hidden">
                <SignInCarousel />
            </div>

            {/* Passkey Modal */}
            <PasskeyModal isOpen={isPasskeyModalOpen} onClose={closePasskeyModal} />
        </div>
    );
};

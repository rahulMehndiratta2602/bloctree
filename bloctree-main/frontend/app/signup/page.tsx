"use client"; // Add this line at the top
import React from 'react';
import Image from 'next/image';
import walletsImage from '@/public/img/wallets.webp';
import { SignInCarousel } from '@/components/signInCarousel';
import Link from 'next/link';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { DialogComponent } from '@/components/dialogComponent'; // Adjusted for the connect wallet functionality

const SignUp = () => {
    return (
        <div className="w-screen h-screen flex md:flex-row flex-col-reverse overflow-hidden">
            <main className="w-full h-[50vh] md:h-screen md:w-[50vw] bg-page-gradient bg-background grid grid-cols-1 xs:grid-cols-2 sm:gap-6 md:flex md:flex-col px-6 sm:px-4 md:px-10 py-[2rem] md:py-[4rem] lg:py-[8.0rem] gap-2 md:gap-10 z-20">
                <h1 className="text-[1.8rem] sm:text-lg md:text-xl font-bold">
                    Select Sign Up Option
                </h1>
                <section className="flex flex-col md:gap-6">
                    {/* Connect Wallet Button */}
                    <DialogComponent btnName={"Connect Wallet"} btnDesc={"Enter Wallet Address"} walletsImage={walletsImage} />

                    {/* Already Signed Up? Sign In Link */}
                    <p className="text-sm md:text-nm font-medium mt-4">
                        Already Signed Up? <Link href="/signin" className="text-blue-500 hover:underline">Sign In</Link>
                    </p>
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
        </div>
    );
};

export default SignUp;


import Image from 'next/image';
import walletsImage from '@/public/img/wallets.webp';
import passKeyImage from '@/public/img/passkey.webp';
import { SignInCarousel } from './signInCarousel';
import { Button } from './button';
import Link from 'next/link';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { DialogComponent } from './dialogComponent';
import SwiperCarousel from './swiperCarousel';
import { IoClose } from 'react-icons/io5';

export const SignIn = () => {
    return (
        <div className="w-screen h-screen flex md:flex-row flex-col-reverse overflow-hidden">
            <main className="relative w-full h-[50vh] md:h-screen md:w-[50vw]  bg-page-gradient bg-background grid grid-cols-1 xs:grid-cols-2 sm:gap-6 md:flex md:flex-col px-6 sm:px-4 md:px-10 py-[2rem] md:py-[4rem] lg:py-[8.0rem] gap-2 md:gap-10 z-20">
                <div className="absolute top-0 left-2 ml-4 z-30">
                    <Link
                        className="p-5 cursor-pointer hidden md:flex items-center text-lg font-bold"
                        href="/"
                    >
                        <Image
                            src="/img/logo.png"
                            alt="logo-image"
                            width={50}
                            height={50}
                            className="mr-[1rem]"
                        />
                        BlocTree
                    </Link>
                </div>
                <h1 className="text-[1.8rem] md:mt-10 sm:text-lg md:text-xl font-bold ">
                    Select Sign In Option
                </h1>
                <section className="flex flex-col  md:gap-6">
                    {/* <div className="flex items-center gap-2 md:gap-4 px-4 py-2 rounded-lg hover:bg-primary-gradient hover:shadow-[0_10px_50px_rgba(8,_112,_184,_0.7)] cursor-pointer">
                        <Image
                            src={walletsImage}
                            alt="wallets Image"
                            className="cursor-pointer w-8 md:w-12"
                        />
                        <h2 className="text-sm md:text-nm font-bold cursor-pointer">
                            <DialogComponent btnName={"Connect Wallet"} />
                        </h2>
                    </div> */}
                    <DialogComponent
                        btnName={'Connect Wallet'}
                        btnDesc={'Enter Solana Details'}
                        walletsImage={walletsImage}
                        placeholder={'Wallet Connection'}
                    />
                    <div className="flex items-center gap-2 md:gap-4 px-4 py-2 rounded-lg hover:bg-primary-gradient hover:shadow-[0_10px_50px_rgba(8,_112,_184,_0.7)] cursor-pointer">
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
                <h3 className="text-xs md:text-md text-grey">New here?</h3>
                <section className="flex flex-col  md:gap-6">
                    <DialogComponent
                        btnName={'Register with a New Wallet'}
                        btnDesc={''}
                        walletsImage={walletsImage}
                    />
                    <div className="flex items-center gap-2 md:gap-4 px-4 py-2 rounded-lg hover:bg-primary-gradient hover:shadow-[0_10px_50px_rgba(8,_112,_184,_0.7)] cursor-pointer">
                        <Image
                            src={passKeyImage}
                            alt="wallets Image"
                            className="cursor-pointer w-8 md:w-12"
                        />
                        <h2 className="text-sm md:text-nm font-bold cursor-pointer">
                            Create new passkey
                        </h2>
                    </div>
                </section>
            </main>
            <div className="w-full h-[50vh] px-4 py-4 md:h-screen md:w-[50vw]  bg-secondary-gradient-background-vertical md:bg-secondary-gradient-background overflow-hidden">
                {/* "1,2,3,5,7,21,28,30" */}
                {/* <SignInCarousel /> */}
                <SwiperCarousel />
            </div>
        </div>
    );
};

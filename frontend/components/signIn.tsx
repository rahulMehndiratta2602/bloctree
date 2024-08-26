import Image from 'next/image';
import walletsImage from '@/public/img/wallets.webp';
import passKeyImage from '@/public/img/passkey.webp';
import { SignInCarousel } from './signInCarousel';
export const SignIn = () => {
    return (
        <div className="flex">
            <main className="w-[50%] bg-background flex flex-col px-12 py-[8.0rem] gap-10">
                <h1 className="text-xl font-bold">Select Sign In Option</h1>
                <section className="flex flex-col gap-8">
                    <div className="flex items-center gap-4">
                        <Image
                            src={walletsImage}
                            alt="wallets Image"
                            width={45}
                            className="cursor-pointer"
                        />
                        <h2 className="text-nm font-bold cursor-pointer">Connect Wallet</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image
                            src={passKeyImage}
                            alt="wallets Image"
                            width={45}
                            className="cursor-pointer"
                        />
                        <h2 className="text-nm font-bold cursor-pointer">Login with Passkey</h2>
                    </div>
                </section>
                <h3 className="text-md text-grey">New here?</h3>
                <section className="flex flex-col gap-8">
                    <div className="flex items-center gap-4">
                        <Image
                            src={walletsImage}
                            alt="wallets Image"
                            width={45}
                            className="cursor-pointer"
                        />
                        <h2 className="text-nm font-bold cursor-pointer">
                            Register with a New Wallet
                        </h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image
                            src={passKeyImage}
                            alt="wallets Image"
                            width={45}
                            className="cursor-pointer"
                        />
                        <h2 className="text-nm font-bold cursor-pointer">Create new passkey</h2>
                    </div>
                </section>
            </main>
            <div className="w-[50%] bg-grey ">
                <SignInCarousel />
            </div>
        </div>
    );
};

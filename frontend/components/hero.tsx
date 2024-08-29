interface HeroProps {
    children: React.ReactNode;
}
interface HeroElementProps {
    children: React.ReactNode;
}

export const Hero = ({ children }: HeroProps) => {
    return (
        <div className="text-center pt-[10rem]">
            {children}
        </div>
    );
};
export const HeroTitle = ({ children }: HeroProps) => {
    return <h1 className="md:text-5xl text-[3.5rem] sm:text-[6rem] font-helvetica font-extrabold my-6">{children}</h1>;
};
export const HeroSubtitle = ({ children }: HeroProps) => {
    return <p className="text-xs sm:text-md md:text-lg md:w-[70%] lg:w-1/2 mx-auto mb-12">{children}</p>;
};

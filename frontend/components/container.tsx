import { twMerge } from 'tailwind-merge';
export const Container = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <div className={twMerge('max-w-[120rem] mx-auto px-8', className)}>{children}</div>;
};

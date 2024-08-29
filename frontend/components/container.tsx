import { twMerge } from 'tailwind-merge';
export const Container = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <div className={twMerge('max-w-screen overflow-y-clip overflow-x-hidden relative mx-auto px-8', className)}>{children}</div>;
};

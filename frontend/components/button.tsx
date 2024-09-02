import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { cva, VariantProps } from 'class-variance-authority';
interface ButtonProps extends VariantProps<typeof buttonClasses> {
    children: React.ReactNode;
}

const buttonClasses = cva('rounded-full flex items-center cursor-pointer', {
    variants: {
        variant: {
            primary: 'bg-primary-gradient hover:text-shadow hover:shadow-primary',
            secondary: '',
            tertiary: '',
        },
        size: {
            small: 'text-xs px-3 h-7',
            medium: 'text-sm px-4 h-8 ',
            large: 'text-md px-6 h-12',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'medium',
    },
});
export const Button = ({ children, variant, size }: ButtonProps) => {
    return <div className={twMerge(buttonClasses({ variant, size }))}>{children}</div>;
};

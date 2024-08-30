import { twMerge } from 'tailwind-merge';

export const CarouselSlideNumber = ({ cardIndex, count }: { cardIndex: number; count: number }) => {
    return (
        <div className="flex w-full items-center justify-center gap-2 absolute bottom-10">
            {Array.from({ length: count }).map((_, i) => {
                return (
                    <div
                        className={twMerge(
                            'w-2 h-2 border-2 border-white rounded-full ',
                            i == cardIndex ? 'bg-white' : ''
                        )}
                        key={i}
                    ></div>
                );
            })}
        </div>
    );
};

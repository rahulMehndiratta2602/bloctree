'use client';
import Image from 'next/image';
import bloctreeFeatures from '@/data/caraouselData';
import { useEffect, useState } from 'react';
import { CarouselSlideNumber } from './carouselSlideNumber';
import { TbCircleChevronLeft, TbCircleChevronRight } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';
export const SignInCarousel = () => {
    const [cardIndex, setCardIndex] = useState(0);
    const count = bloctreeFeatures.length; // Adjust this based on the number of images you have
    useEffect(() => {
        let slider = setInterval(() => {
            setCardIndex((cardIndex + 1) % count);
        }, 80000);
        return () => clearInterval(slider);
    }, [cardIndex, count]);
    return (
        <div className=" ">
            {Array.from({ length: count }).map((_, index) => {
                let position = 'nextSlide';
                if (index === cardIndex) {
                    position = 'activeSlide';
                }
                if (index === cardIndex - 1 || (cardIndex === 0 && index === count - 1)) {
                    position = 'lastSlide';
                }
                return (
                    <article
                        key={index}
                        className={twMerge(
                            'absolute top-0 left-0 md:left-[50%] opacity-0 z-[1]  transition-all duration-[700ms]',
                            position
                        )}
                    >
                        <div className=" grid grid-cols-2 md:flex md:flex-col md:gap-y-4 md:px-6 md:items-center md:py-12">
                            <div className="md:flex md:flex-col md:gap-y-4 md:items-center ">
                                <h1 className="md:text-xl md:font-bold md:text-center">
                                    {bloctreeFeatures[cardIndex].headline}
                                </h1>
                                <h2 className="md:text-sm md:text-center">
                                    {bloctreeFeatures[cardIndex].subHeadline}
                                </h2>
                            </div>
                            <div className="md:flex md:items-center md:gap-4">
                                <div
                                    className="cursor-pointer"
                                    onClick={() => setCardIndex((cardIndex - 1 + count) % count)}
                                >
                                    <TbCircleChevronLeft size={24} />
                                </div>
                                <div
                                    className="p-6 bg-background bg-opacity-40 mt-8 rounded-[2rem]  backdrop-blur-lg border-1
                    border-white border-opacity-40 shadow-[0_30px_50px_rgba(8,_112,_184,_0.7)]"
                                >
                                    <Image
                                        src={`/img/carousel_signIn_${cardIndex + 1}.jpeg`}
                                        priority={true}
                                        alt={`carousel_${cardIndex + 1}`}
                                        width={500}
                                        height={500}
                                        className="rounded-[2rem] shadow-[0_30px_50px_rgba(8,_112,_184,_0.7)] "
                                    />
                                </div>
                                <div
                                    className="cursor-pointer"
                                    onClick={() => setCardIndex((cardIndex + 1) % count)}
                                >
                                    <TbCircleChevronRight size={24} />
                                </div>
                            </div>
                        </div>
                    </article>
                );
            })}
            {/* Slide Number */}

            <div className="relative h-screen w-[50vw]">
                <CarouselSlideNumber cardIndex={cardIndex} count={count} />
            </div>
        </div>
    );
};

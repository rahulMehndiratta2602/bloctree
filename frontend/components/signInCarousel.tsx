import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import signIn1 from '@/public/img/carousel_signIn_1.jpeg';
import signIn2 from '@/public/img/carousel_signIn_2.jpeg';
import signIn3 from '@/public/img/carousel_signIn_3.jpeg';
import signIn4 from '@/public/img/carousel_signIn_4.jpeg';
export const SignInCarousel = () => {
    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem>
                    <Image src={signIn1} priority={true} alt="c1" width={500} height={500} />;
                </CarouselItem>
                <CarouselItem>
                    <Image src={signIn2} priority={true} alt="c1" width={500} height={500} />;
                </CarouselItem>
                <CarouselItem>
                    <Image src={signIn3} priority={true} alt="c1" width={500} height={500} />;
                </CarouselItem>
                <CarouselItem>
                    <Image src={signIn4} priority={true} alt="c1" width={500} height={500} />;
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

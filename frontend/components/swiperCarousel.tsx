'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import Image from 'next/image';
import bloctreeFeatures from '@/data/caraouselData';
import { CarouselSlideNumber } from './carouselSlideNumber';
import { TbCircleChevronLeft, TbCircleChevronRight } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';

export default function SwiperCarousel() {
  return (
    <>
      <Swiper 
        navigation={true} 
        modules={[Navigation]} 
        className="mySwiper"
        loop={true}
        centeredSlides={true}
        grabCursor={true}
      >
        {
          [1,2,3,4,5,6].map((i) => (
            <SwiperSlide key={i}>
              <div className='flex justify-center items-center'>
                <Image
                  src={`/img/carousel_signIn_${i}.jpeg`}
                  priority={true}
                  alt={`carousel_${i}`}
                  width={500}
                  height={500}
                  className="rounded-[2rem] shadow-[0_30px_50px_rgba(8,_112,_184,_0.7)]"
                />
              </div>
            </SwiperSlide>
          ))
        }
        
      </Swiper>
    </>
  );
}
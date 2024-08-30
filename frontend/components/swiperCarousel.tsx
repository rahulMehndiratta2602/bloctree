'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

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
        className="mySwiper"
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        pagination={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay, Pagination]} 
      >
        {
          [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <SwiperSlide key={i}>
              <div className='flex flex-col mt-[10vh] justify-center items-center'>
                <div className="swiper-text flex flex-col md:h-[20vh]">
                  <h1 className="md:text-xl pb-5 md:font-bold md:text-center">{bloctreeFeatures[i - 1].headline}</h1>
                  <h2 className="md:text-sm pb-5 md:text-center">{bloctreeFeatures[i - 1].subHeadline}</h2>
                </div>
                <div
                  className="p-6 bg-background bg-opacity-40 mt-8 rounded-[2rem]  backdrop-blur-lg border-1
    border-white border-opacity-40 shadow-[0_30px_50px_rgba(8,_112,_184,_0.7)]"
                >
                  <Image
                    src={`/img/carousel_signIn_${i}.jpeg`}
                    priority={true}
                    alt={`carousel_${i}`}
                    width={500}
                    height={500}
                    className="rounded-[2rem] shadow-[0_30px_50px_rgba(8,_112,_184,_0.7)]"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))
        }
        
      </Swiper>
    </>
  );
}
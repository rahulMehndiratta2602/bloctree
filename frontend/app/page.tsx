import { Container } from '@/components/container';
import { Hero, HeroSubtitle, HeroTitle } from '@/components/hero';
import Image from 'next/image';
import heroImage from '@/public/img/hero.webp';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { Header } from '@/components/header';
import React, { FC, useEffect, useState } from "react";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import axios from 'axios';


export default function Home() {
    return (
        <div>
            <Header />
            <main className="pt-[var(--navigation-height)] bg-page-gradient">
                <Container>
                    <Hero>
                        <HeroTitle>
                            Your
                            <span className="relative m-2 text-transparent font-extrabold wireframe-web3">
                                Web3
                            </span>
                            Hub in <br /> One Link.
                        </HeroTitle>
                        <HeroSubtitle>
                            Join 50M+ users simplifying their digital presence with Linktree.
                            Connect your
                            <span className=" text-yellow-400">
                                {' '}
                                Web3 Projects, NFTs, and Social Profiles
                            </span>{' '}
                            all in one place—effortlessly share and manage everything with a single
                            link.
                        </HeroSubtitle>
                        <Image
                            className="md:hidden"
                            src={heroImage}
                            priority={true}
                            alt="Hero Image"
                        />
                        <ContainerScroll>
                            <Image src={heroImage} priority={true} alt="Hero Image" />
                        </ContainerScroll>
                    </Hero>
                    <div className="blur-circle z-[-1] h-[30rem] w-[30rem] sm:h-[45rem] sm:w-[45rem] md:h-[60rem] md:w-[60rem] rounded-full bg-secondary-gradient-background-vertical bg-opacity-90 blur-3xl absolute top-[5vh] left-0 lg:left-[30vh] animate-moveLeftRight"></div>
                    <div className="blur-circle z-[-1] h-[30rem] w-[30rem] sm:h-[45rem] sm:w-[45rem] md:h-[60rem] md:w-[60rem] rounded-full bg-primary-gradient bg-opacity-90 blur-3xl absolute top-[7vh] left-[10vh] xs:left-[20vh] md:left-[40vh] lg:left-[70vh] animate-moveRightLeft"></div>
                </Container>
            </main>
        </div>
    );
}

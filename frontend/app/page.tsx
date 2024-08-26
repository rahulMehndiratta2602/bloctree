import { Container } from '@/components/container';
import { Hero, HeroSubtitle, HeroTitle } from '@/components/hero';
import Image from 'next/image';
import heroImage from '@/public/img/hero.webp';
export default function Home() {
    return (
        <Container>
            <Hero>
                <HeroTitle>
                    Your Web3 Hub in
                    <br />
                    One Link .
                </HeroTitle>
                <HeroSubtitle>
                    Join 50M+ users simplifying their digital presence with Linktree. Connect your
                    Web3 projects, NFTs, and social profiles all in one place—effortlessly share and
                    manage everything with a single link.
                </HeroSubtitle>
                <Image src={heroImage} priority={true} alt="Hero Image" />
            </Hero>
        </Container>
    );
}

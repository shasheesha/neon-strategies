import CustomButton from "@/components/CustomButton";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import GetInTouchBanner from "@/components/sections/GetInTouchBanner";
import Hero from "@/components/sections/Hero";
import OurProcess from "@/components/sections/OurProcess";
import ParallaxBanner from "@/components/sections/ParallaxBanner";
import VideoBanner from "@/components/sections/VideoBanner";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero />
    <VideoBanner />
    <WhatWeDo />
    <About />
    <ParallaxBanner />
    <FAQ />
    <OurProcess />
    <Contact />
    <GetInTouchBanner />
    </>
  );
}

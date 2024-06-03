import AnimationFadeUp from "@/components/animation/AnimationFadeUp";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import GetInTouchBanner from "@/components/sections/GetInTouchBanner";
import Hero from "@/components/sections/Hero";
import OurProcess from "@/components/sections/OurProcess";
import ParallaxBanner from "@/components/sections/ParallaxBanner";
import VideoBanner from "@/components/sections/VideoBanner";
import WhatWeDo from "@/components/sections/WhatWeDo";
import dynamic from "next/dynamic";

const DynamicHero = dynamic(() => import("@/components/sections/Hero"), {ssr: false})

export default function Home() {
  return (
    <>
    <AnimationFadeUp>
      <DynamicHero />    
    </AnimationFadeUp>
    <AnimationFadeUp>
      <VideoBanner />
    </AnimationFadeUp>
    <AnimationFadeUp>
      <WhatWeDo />
    </AnimationFadeUp>
    <AnimationFadeUp>
      <About />
    </AnimationFadeUp>
    {/* <AnimationFadeUp> */}
      <ParallaxBanner />
    {/* </AnimationFadeUp> */}
    <AnimationFadeUp>
      <FAQ />
    </AnimationFadeUp>
    <AnimationFadeUp>
      <OurProcess />
    </AnimationFadeUp>
    <AnimationFadeUp>
      <Contact />
    </AnimationFadeUp>
    <AnimationFadeUp>
      <GetInTouchBanner />
    </AnimationFadeUp>
    </>
  );
}

import LinkWithArrow from "@/components/LinkWithArrow";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";

export default function Home() {
  return (
    <>
    <Hero />
    <WhatWeDo />
    <About />

    
    <section className="">
      <div className="container mx-auto">
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: 'auto' }}
        >
          <source src="https://www.youtube.com/watch?v=LSRNmhLS76o&ab_channel=CodeCommerce" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       
      </div>
 
    </section>




    </>
  );
}

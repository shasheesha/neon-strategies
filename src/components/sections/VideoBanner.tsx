"use client";
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VideoBanner: React.FC = () =>{

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when at least 50% is visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ width: '100vw', marginLeft: 0 });
    } else {
      controls.start({ width: '80%', marginLeft: '10%' });
    }
  }, [controls, inView]);


    return(
        <>
            <motion.section ref={ref} animate={controls} initial={{ width: '80%', marginLeft: '10%' }} transition={{ duration: 0.5 }} className="h-full bg-gray-300" >
              <video className="w-full" width="320" height="240" muted loop autoPlay preload="auto">
                <source src="/video.mp4" type="video/mp4" />
                <track
                  src="/video.mp4"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>
            </motion.section>
    </>
    )
}

export default VideoBanner;
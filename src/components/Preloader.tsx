"use client"
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Preloader: React.FC = () => {
    useEffect(() => {
      const timeline = gsap.timeline();
      
      timeline.to(".encus-preloader-animation", {
          opacity: 1,
      });

      timeline.fromTo(
          ".encus-animation-1 .encus-h3", {
              y: "30px",
              opacity: 0
          }, {
              y: "0px",
              opacity: 1,
              stagger: 0.4
          },
      );

      timeline.to(".encus-animation-1 .encus-h3", {
          opacity: 0,
          y: '-30',
      }, "+=.3");

      timeline.fromTo(".encus-reveal-box", 0.1, {
          opacity: 0,
      }, {
          opacity: 1,
          x: '-30',
      });

      timeline.to(".encus-reveal-box", 0.45, {
          width: "100%",
          x: 0,
      }, "+=.1");
      timeline.to(".encus-reveal-box", {
          right: "0"
      });
      timeline.to(".encus-reveal-box", 0.3, {
          width: "0%"
      });
      timeline.fromTo(".encus-animation-2 .encus-h3", {
          opacity: 0,
      }, {
          opacity: 1,
      }, "-=.5");
      timeline.to(".encus-animation-2 .encus-h3", 0.6, {
          opacity: 0,
          y: '-30'
      }, "+=.5");
      timeline.to(".encus-preloader", 0.8, {
          opacity: 0,
          ease: 'sine',
      }, "+=.2");
      timeline.fromTo(".encus-up", 0.8, {
          opacity: 0,
          y: 40,
          scale: .98,
          ease: 'sine',

      }, {
          y: 0,
          opacity: 1,
          scale: 1,
          onComplete: function () {
              document.querySelector(`.${'encus-preloader'}`)?.classList.add('encus-hidden');
          },
      }, "-=1");
    }, []);
  
    return (
      <div className="fixed inset-0 z-50 bg-gray-100 encus-preloader">
          <div className="relative h-screen opacity-0 encus-preloader-animation text-gray-800">
              <div className="flex justify-center items-center absolute inset-0 encus-animation-1">
                  <p className="text-2xl font-medium opacity-0 encus-h3 mr-4">Design</p>
                  <p className="text-2xl font-medium opacity-0 encus-h3 mr-4">Develop</p>
                  <p className="text-2xl font-medium opacity-0 encus-h3 mr-4">Creativity</p>
              </div>
              <div className="flex justify-center items-center absolute inset-0 encus-animation-2 flex-col md:flex-row">
                  <div className="relative px-8 encus-reveal-frame">
                      <p className="absolute inset-0 h-full bg-blue-600 opacity-0 encus-reveal-box z-20"></p>
                      <p className="text-3xl font-medium opacity-0 encus-h3">Neon Strategies</p>
                      <p className='encus-up'></p>
                  </div>
              </div>
          </div>
      </div>
    );
  };

export default Preloader;

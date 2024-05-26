"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/ImageCarousel.module.css';

interface ImageCarouselProps {
  images: string[];
}

const MultiImageCardCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    console.log("next-test-log");
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000); 

    return () => clearInterval(interval);
  }, [currentIndex]); 

  return (
    <div className="flex flex-col items-end relative">
      <div className="flex flex-row gap-4 justify-end mb-8">
        {/* <button onClick={prevImage} className="rotate-180 border-2 rounded-full border-black px-2 py-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 19 13.388">
            <path id="Vector_1" data-name="Vector 1" d="M17.036,6H0M12.214,0,18,6l-5.786,6" transform="translate(0 0.694)" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
          </svg>
        </button> */}
        <button onClick={nextImage} className="border-2 rounded-full border-black px-2 py-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 19 13.388">
            <path id="Vector_1" data-name="Vector 1" d="M17.036,6H0M12.214,0,18,6l-5.786,6" transform="translate(0 0.694)" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
          </svg>
        </button>
      </div>

      <div className={`${styles.imageContainer} flex justify-center`}>
      <div className="over-layer absolute h-webkit-fill-available w-32 z-30 right-0 bg-gradient-to-l from-white to-transparent"></div>
      <div className="over-layer absolute h-webkit-fill-available w-8 z-30 left-0 bg-gradient-to-l from-transparent to-white "></div>

        <div className={styles.imageSlider} style={{ transform: `translateX(-${currentIndex * 50}%)` }} >

          {images.map((src, index) => (
            <div className={styles.imageCard} key={index}>
              <Image priority width={810} height={540} className='w-full rounded' src={src} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiImageCardCarousel;

"use client"
import React, { useState } from 'react';
import styles from '@/styles/ImageCarousel.module.css';

interface ImageCarouselProps {
  images: string[];
}

const MultiImageCardCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-end relative">
      <div className="flex flex-row gap-4 justify-end mb-8">
        <button onClick={prevImage} className="rotate-180 border-2 rounded-full border-black px-2 py-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 19 13.388">
            <path id="Vector_1" data-name="Vector 1" d="M17.036,6H0M12.214,0,18,6l-5.786,6" transform="translate(0 0.694)" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
          </svg>
        </button>
        <button onClick={nextImage} className="border-2 rounded-full border-black px-2 py-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 19 13.388">
            <path id="Vector_1" data-name="Vector 1" d="M17.036,6H0M12.214,0,18,6l-5.786,6" transform="translate(0 0.694)" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
          </svg>
        </button>
      </div>

      <div className={`${styles.imageContainer} flex justify-center`}>
        <div
          className={styles.imageSlider}
          style={{ transform: `translateX(-${currentIndex * 75}%)` }}
        >
          {images.map((src, index) => (
            <div className={styles.imageCard} key={index}>
              <img className='w-full rounded' src={src} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiImageCardCarousel;

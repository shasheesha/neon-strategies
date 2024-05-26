"use client"
import React, { useEffect, useRef, useState } from 'react';
import AnimationFadeUp from './animation/AnimationFadeUp';

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState<string | number>('0px');
    const contentRef = useRef<HTMLDivElement>(null);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current?.scrollHeight || 'auto');
    } else {
      setHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200 pl-8 pr-8 md:pl-10 md:pr-10 lg:pl-20 py-6 md:py-10 lg:py-14">
      <button className="w-full flex justify-between items-center text-left focus:outline-none" onClick={toggleOpen}>
        <span className="font-bold text-base md:text-lg lg:text-xl">{title}</span>
        <span>  
            <div className={`${isOpen ? "" : "rotate-180"} duration-500 ease-in-out`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24.023" height="13.426" viewBox="0 0 24.023 13.426">
                    <path id="Vector_4" data-name="Vector 4" d="M21.195,0,10.6,10.6,0,0" transform="translate(22.609 12.012) rotate(180)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"/>
                </svg>
            </div>
        </span>
      </button>
      <div ref={contentRef} style={{ maxHeight: height }} className="overflow-hidden transition-max-height duration-500 ease-in-out pr-0 sm:pr-20 md:pr-32 lg:pr-52">
        <div className="text-grayone font-medium text-base md:text-lg lg:text-xl leading-normal md:leading-relaxed lg:leading-loose pt-6 md:pt-10 lg:pt-14">{content}</div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: AccordionItemProps[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <>
    <div className="w-full">
      {items.map((item, index) => (
        <AnimationFadeUp>
          <AccordionItem key={index} title={item.title} content={item.content} />
        </AnimationFadeUp>

      ))}
    </div>
    </>
  );
};

export default Accordion;

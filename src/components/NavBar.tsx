"use client"

import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { useState } from "react";


const NavBar: React.FC = () =>{

  const [isMegamenuOpen, setIsMegamenuOpen] = useState(false);
  
  const toggleMegamenu = () => {
    setIsMegamenuOpen(!isMegamenuOpen);
  };


  const handleScrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  
    return(
        <>
        


        <nav className="bg-white fixed w-full z-50">
      <div className="container mx-auto flex flex-row items-center justify-between py-7">
        <div className="logo">
          <Link href="#">
            <Image src={'/logo.svg'} alt="Logo" className="object-contain object-center rounded w-32" width={100} height={100} />
          </Link>
        </div>
        
        <div className="items-center hidden lg:flex justify-between">
          <ul className="flex flex-row font-mediump-0 space-x-8 rtl:space-x-reverse flex-row mt-0 border-0 bg-white ">
            <li>
              <div onClick={() => handleScrollToSection('about')} className="block cursor-pointer rounded bg-transparent text-base font-medium text-grayone p-0 hover:text-blue-700 transition ease-in-out duration-300 delay-100">About</div>
            </li>
            <li>
              <div onClick={() => handleScrollToSection('services')} className="block cursor-pointer rounded bg-transparent text-base font-medium text-grayone p-0 hover:text-blue-700 transition ease-in-out duration-300 delay-100">Services</div>
            </li>
            <li>
              <div onClick={() => handleScrollToSection('process')} className="block cursor-pointer rounded bg-transparent text-base font-medium text-grayone p-0 hover:text-blue-700 transition ease-in-out duration-300 delay-100">Process</div>
            </li>
            <li>
              <div onClick={() => handleScrollToSection('faq')} className="block cursor-pointer rounded bg-transparent text-base font-medium text-grayone p-0 hover:text-blue-700 transition ease-in-out duration-300 delay-100">FAQ</div>
            </li>
            <li>
              <div onClick={() => handleScrollToSection('contact')} className="block cursor-pointer rounded bg-transparent text-base font-medium text-grayone p-0 hover:text-blue-700 transition ease-in-out duration-300 delay-100">Contact</div>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-row gap-10 justify-center items-center">
          <CustomButton btnName={"Let's Talk"} classNames={"py-2 px-4 bg-blue border-2 border-blue text-white text-sm hidden lg:block"} />
          
          <div className="relative flex flex-col gap-2 lg:hidden cursor-pointer opacity-50 hover:opacity-100 transition easy-in-out duration-300" onClick={toggleMegamenu}>
            <div className="bg-grayone-800 rounded-full" style={{ width: 50, height: 5 }}></div>
            <div className="bg-grayone-800 rounded-full" style={{ width: 50, height: 5 }}></div>
            <div className="bg-grayone-800 rounded-full" style={{ width: 50, height: 5 }}></div>
          </div>
        </div>
      </div>

      {isMegamenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-40">
          <div className="container mx-auto py-6">
            <ul className="flex flex-col space-y-4">
              <li>
                <div onClick={() => handleScrollToSection('about')} className="block cursor-pointer rounded bg-transparent text-base font-medium text-grayone p-0 hover:text-blue-700 transition ease-in-out duration-300 delay-100">About</div>
              </li>
              <li>
                <div onClick={() => handleScrollToSection('services')} className="block cursor-pointer rounded bg-transparent text-base font-medium text-grayone p-0 hover:text-blue-700 transition ease-in-out duration-300 delay-100">Services</div>
              </li>
              <li>
                <div onClick={() => handleScrollToSection('process')} className="block cursor-pointer rounded bg-transparent text-base font-medium text-grayone p-0 hover:text-blue-700 transition ease-in-out duration-300 delay-100">Process</div>
              </li>
              <li>
                <div onClick={() => handleScrollToSection('faq')} className="block cursor-pointer rounded bg-transparent text-base font-medium text-grayone p-0 hover:text-blue-700 transition ease-in-out duration-300 delay-100">FAQ</div>
              </li>
              <li>
                <div onClick={() => handleScrollToSection('contact')} className="block cursor-pointer rounded bg-transparent text-base font-medium text-grayone p-0 hover:text-blue-700 transition ease-in-out duration-300 delay-100">Contact</div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>


        </>
    )
}

export default NavBar;
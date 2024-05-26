"use client"

import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { useState } from "react";


const NavBar: React.FC = () =>{

  const [isMegamenuOpen, setIsMegamenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };



  const toggleMegamenu = () => {
    setIsMegamenuOpen(!isMegamenuOpen);
  };

  const handleScrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if(isMegamenuOpen === true){
        setIsMegamenuOpen(!isMegamenuOpen);
      }
      if(isServicesDropdownOpen === true){
        setIsServicesDropdownOpen(!isServicesDropdownOpen);
      }

    }
  };

  return(
    <>
      <nav className="bg-white fixed w-full z-40">
        <div className="container mx-auto flex flex-row items-center justify-between py-7 px-5">
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
              <li className="relative">
                <div onClick={toggleServicesDropdown} className="block cursor-pointer rounded bg-transparent text-base font-medium text-grayone p-0 hover:text-blue-700 transition ease-in-out duration-300 delay-100">Services</div>
                
                  <ul className={`absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg overflow-hidden px-5 transition-max-height ease-in-out duration-1000 delay-100 ${isServicesDropdownOpen ? 'max-h-screen' : 'max-h-0 opacity-0'}`}>
                    <li>
                      <div onClick={() => handleScrollToSection('digital-marketing')} className="block cursor-pointer p-2 hover:bg-gray-100">Digital Marketing</div>
                    </li>
                    <li>
                      <div onClick={() => handleScrollToSection('branding')} className="block cursor-pointer p-2 hover:bg-gray-100">Branding</div>
                    </li>
                    <li>
                      <div onClick={() => handleScrollToSection('creative-services')} className="block cursor-pointer p-2 hover:bg-gray-100">Creative Services</div>
                    </li>
                  </ul>
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
            <CustomButton btnName={"Let's Talk"} hoverAnimationClasses="bg-white" classNames={"py-2 px-4 bg-blue border-2 border-blue text-white text-sm hidden hover:text-blue lg:block"} />
            
            <div className="relative flex flex-col gap-2 lg:hidden cursor-pointer opacity-50 hover:opacity-100 transition easy-in-out duration-300" onClick={toggleMegamenu}>
              <div className="bg-grayone-800 rounded-full" style={{ width: 50, height: 5 }}></div>
              <div className="bg-grayone-800 rounded-full" style={{ width: 50, height: 5 }}></div>
              <div className="bg-grayone-800 rounded-full" style={{ width: 50, height: 5 }}></div>
            </div>
          </div>
        </div>

        <div className={`absolute top-16 left-0 w-full bg-white shadow-lg z-40 overflow-hidden pt-0 px-5 transition-max-height ease-in-out duration-1000 delay-100 ${isMegamenuOpen ? 'pt-4 max-h-screen' : 'max-h-0'}`}>
          <div className="container mx-auto py-6">
            <ul className="flex flex-col space-y-4">
              <li>
                <div onClick={() => handleScrollToSection('about')} className="block cursor-pointer rounded bg-transparent text-base font-medium text-grayone p-0 hover:text-blue-700 transition ease-in-out duration-300 delay-100">About</div>
              </li>
              <li>
                <div onClick={toggleServicesDropdown} className="block cursor-pointer rounded bg-transparent text-base font-medium text-grayone p-0 hover:text-blue-700 transition ease-in-out duration-300 delay-100">Services</div>
                <ul className={`relative left-0 mt-2 w-full bg-white overflow-hidden px-5 transition-max-height ease-in-out duration-1000 delay-100 ${isServicesDropdownOpen ? 'max-h-screen' : 'max-h-0'}`}>
                    <li>
                      <div onClick={() => handleScrollToSection('digital-marketing')} className="block cursor-pointer p-2 hover:bg-gray-100">Digital Marketing</div>
                    </li>
                    <li>
                      <div onClick={() => handleScrollToSection('branding')} className="block cursor-pointer p-2 hover:bg-gray-100">Branding</div>
                    </li>
                    <li>
                      <div onClick={() => handleScrollToSection('creative-services')} className="block cursor-pointer p-2 hover:bg-gray-100">Creative Services</div>
                    </li>
                  </ul>
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
              <li className="flex flex-row justify-center py-5">
              <CustomButton btnName={"Let's Talk"} withArrow={true} arrowClassNames="stroke-blue group-hover:stroke-white" hoverAnimationClasses="bg-blue" classNames={"py-2 px-4 bg-white border-2 border-blue text-blue hover:text-white text-base w-96"} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;

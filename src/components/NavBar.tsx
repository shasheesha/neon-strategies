"use client"
import { Dropdown } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";


const NavBar: React.FC = () =>{

    return(
        <>
        


        <nav className="bg-white fixed w-full z-50">
          <div className="container mx-auto flex flex-row items-center justify-between py-7">
            <div className="logo">
              <Link href="#">
              <Image
                      src={'/logo.svg'}
                      alt="Picture of the author"
                      className="object-contain object-center rounded w-32"
                      width={100}
                      height={100}
                    />
              </Link>
            </div>
            
            <div className="items-center justify-between">
              <ul className="flex flex-row font-mediump-0 space-x-8 rtl:space-x-reverse flex-row mt-0 border-0 bg-white ">
                <li>
                  <Link href="#" className="block rounded bg-transparent text-base font-medium text-grayone p-0 hover:text-blue-700 transition ease-in-out duration-300 delay-100">About</Link>
                </li>
                <li>
                  <Link href="#" className="block rounded bg-transparent text-base font-medium text-grayone p-0 hover:text-blue-700 transition ease-in-out duration-300 delay-100">Services</Link>
                </li>
                <li>
                  <Link href="#" className="block rounded bg-transparent text-base font-medium text-grayone p-0 hover:text-blue-700 transition ease-in-out duration-300 delay-100">Process</Link>
                </li>
                <li>
                  <Link href="#" className="block rounded bg-transparent text-base font-medium text-grayone p-0 hover:text-blue-700 transition ease-in-out duration-300 delay-100">FAQ</Link>
                </li>
                <li>
                  <Link href="#" className="block rounded bg-transparent text-base font-medium text-grayone p-0 hover:text-blue-700 transition ease-in-out duration-300 delay-100">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <CustomButton btnName={"Let's Talk"} classNames={"py-2 px-4 bg-blue border-2 border-blue text-white text-sm"} />
            </div>
          </div>
        </nav>


        </>
    )
}

export default NavBar;
import Link from "next/link";

const Footer: React.FC = () =>{

    return(
        <>
        <section>
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-11 px-5 lg:px-0">
                    <div>
                        <p className="font-bold text-sm md:text-base mb-3 sm:mb-5 lg:mb-10">ADDRESS</p>
                        <div className="flex flex-col sm:flex-row justify-start gap-4 lg:gap-3 xl:gap-10">
                            <p className="font-normal text-grayone leading-normal text-sm md:text-base lg:text-lg xl:text-xl">Neon Strategies Ltd.<br />123 Marketing Street,<br />London, W1A 1AA<br />United Kingdom</p>
                            <p className="font-normal text-grayone leading-normal text-sm md:text-base lg:text-lg xl:text-xl">Monday - Friday: 9:00 AM - 6:00 PM</p>                        
                        </div>
                    </div>
                    <div className="flex flex-row justify-start lg:justify-end">
                        <div className="flex flex-col justify-start ">
                            <p className="font-bold text-sm md:text-base mb-3 sm:mb-5 lg:mb-10 text-start">FOLLOW US</p>
                            <div className="flex flex-row justify-end gap-2 md:gap-3 scale-75 md:scale-100 -left-5 md:left-0 relative ">
                                <Link href={"https://linkedin.com/"}target="_blank"  className="group relative overflow-hidden cursor-pointer rounded-full p-2 border-2 border-grayone flex justify-center items-center" style={{width:'40px', height: '40px'}}>
                                    <svg className="relative z-10" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_10)">
                                            <path className="group-hover:fill-white transition-fill ease-in-out duration-1000 delay-100" d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z" fill="#000000"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1_10">
                                            <rect width="48" height="48" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    <div className={`z-0 w-32 h-20 absolute top-0 -left-32 group-hover:left-0 transition-left ease-in-out duration-1000 delay-100 bg-grayone`}></div>
                                </Link>

                                <Link href={"https://www.facebook.com/"} target="_blank" className="group relative overflow-hidden cursor-pointer rounded-full p-2 border-2 border-grayone flex justify-center items-center" style={{width:'40px', height: '40px'}}>
                                    <svg className="relative z-10" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_2)">
                                            <path className="group-hover:fill-white transition-fill ease-in-out duration-1000 delay-100" d="M24 0C10.7453 0 0 10.7453 0 24C0 35.255 7.74912 44.6995 18.2026 47.2934V31.3344H13.2538V24H18.2026V20.8397C18.2026 12.671 21.8995 8.8848 29.9194 8.8848C31.44 8.8848 34.0637 9.18336 35.137 9.48096V16.129C34.5706 16.0694 33.5866 16.0397 32.3645 16.0397C28.4294 16.0397 26.9088 17.5306 26.9088 21.4061V24H34.7482L33.4013 31.3344H26.9088V47.8243C38.7926 46.3891 48.001 36.2707 48.001 24C48 10.7453 37.2547 0 24 0Z" fill="#000000"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1_2">
                                            <rect width="48" height="48" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    <div className={`z-0 w-32 h-20 absolute top-0 -left-32 group-hover:left-0 transition-left ease-in-out duration-1000 delay-100 bg-grayone`}></div>
                                </Link>                      
                                
                                <Link href={"https://x.com/"} target="_blank" className="group relative overflow-hidden cursor-pointer rounded-full p-2 border-2 border-grayone flex justify-center items-center" style={{width:'40px', height: '40px'}}>
                                    <svg className="relative z-10" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="group-hover:fill-white transition-fill ease-in-out duration-1000 delay-100" d="M36.6526 3.8078H43.3995L28.6594 20.6548L46 43.5797H32.4225L21.7881 29.6759L9.61989 43.5797H2.86886L18.6349 25.56L2 3.8078H15.9222L25.5348 16.5165L36.6526 3.8078ZM34.2846 39.5414H38.0232L13.8908 7.63406H9.87892L34.2846 39.5414Z" fill="#000000"/>
                                    </svg>
                                    <div className={`z-0 w-32 h-20 absolute top-0 -left-32 group-hover:left-0 transition-left ease-in-out duration-1000 delay-100 bg-grayone`}></div>
                                </Link>

                                <Link href={"https://www.instagram.com/"} target="_blank" className="group relative overflow-hidden cursor-pointer rounded-full p-2 border-2 border-grayone flex justify-center items-center" style={{width:'40px', height: '40px'}}>
                                    <svg className="relative z-10" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_6)">
                                            <path className="group-hover:fill-white transition-fill ease-in-out duration-1000 delay-100" d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="#000000"/>
                                            <path className="group-hover:fill-white transition-fill ease-in-out duration-1000 delay-100" d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="#000000"/>
                                            <path className="group-hover:fill-white transition-fill ease-in-out duration-1000 delay-100" d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z" fill="#000000"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1_6">
                                            <rect width="48" height="48" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    <div className={`z-0 w-32 h-20 absolute top-0 -left-32 group-hover:left-0 transition-left ease-in-out duration-1000 delay-100 bg-grayone`}></div>
                                </Link>                      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line w-full bg-grayone-300 h-px"></div>

            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 xl:gap-5 my-8 sm:my-8 lg:my-12">
                    <div className="text-sm md:text-base font-normal flex flex-row justify-center lg:justify-start"><p>© 2024 Neon Strategies, All rights reserved.</p></div>
                    <div className="text-nowrap flex flex-row justify-center"><p><Link href={"#"} className="underline text-sm md:text-base font-normal">Privacy Policy</Link> | <Link href={"#"} className="underline text-sm md:text-base font-normal">Term & Conditions</Link></p></div>
                    <div className="text-sm md:text-base col-span-1 text-nowrap font-normal flex flex-row justify-center lg:justify-end"><p>Website by <Link href={"#"} className="underline">Smashy Design</Link></p></div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Footer;
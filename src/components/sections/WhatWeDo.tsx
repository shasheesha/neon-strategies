import LinkWithArrow from "../LinkWithArrow";
import MultiImageCardCarousel from "../MultiImageCardCarousel";

const WhatWeDo: React.FC = () => {

    const DigitalMarketing = [
      '/images/digital-marketing/dm-1.png',
      '/images/digital-marketing/dm-2.png',
      '/images/digital-marketing/dm-1.png',
      '/images/digital-marketing/dm-2.png',
    ];
    const Branding = [
      '/images/branding/b-1.png',
      '/images/branding/b-2.png',
      '/images/branding/b-1.png',
      '/images/branding/b-2.png',
    ];
    const CreativeServices = [
      '/images/creative-services/cs-1.png',
      '/images/creative-services/cs-2.png',
      '/images/creative-services/cs-1.png',
      '/images/creative-services/cs-2.png',
    ];

    return(
        <>
        <section className="pt-20 pb-10 lg:pt-40 lg:pb-20" id="services">
            <div className="container mx-auto">
                <div className="px-10 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 mb-10 sm:mb-28">
                      <div>
                        <p className="text-sm sm:text-base font-bold mb-3 sm:mt-5 sm:mb-6 lg:mb-0">WHAT WE DO</p>  
                      </div>
                      <div className="lg:col-span-2">
                        <p className="text-2xl font-light leading-tight mb-5 sm:mb-10 md:mb-14 md:text-3xl lg:text-4xl xl:text-5xl lg:leading-normal xl:leading-normal">A comprehensive range of marketing services designed to elevate your brand and drive success.</p>    
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 mb-10 md:mt-16 md:mb-16 lg:mt-24 lg:mb-24">
                      <div className="md:pr-16 lg:pr-20 xl:pr-36 flex flex-col justify-between">
                        <div>
                          <div className="mb-6 sm:mb-8">
                            <p className="text-xl sm:text-2xl md:text-3xl font-bold">Digital Marketing</p>
                          </div>
                          <div className="mb-6 sm:mb-8">
                            <p className="text-sm sm:text-base font-medium text-grayone">At Neon Strategies, we harness the power of digital marketing to elevate your brand and connect you with your target audience. Our comprehensive digital marketing services are designed to drive traffic, increase engagement, and boost conversions.</p>
                          </div>
                          <div className="flex flex-wrap gap-2 md:flex-row md:gap-5 mb-10">
                            <div className="text-xs sm:text-sm font-medium rounded-full px-5 py-2 bg-tagbg_gray text-grayone w-fit">SEO</div>
                            <div className="text-xs sm:text-sm font-medium rounded-full px-5 py-2 bg-tagbg_gray text-grayone w-fit">Social Media Marketing</div>
                            <div className="text-xs sm:text-sm font-medium rounded-full px-5 py-2 bg-tagbg_gray text-grayone w-fit">Content Marketing</div>
                          </div>
                        </div>
                        <div>
                          <LinkWithArrow href={"#"} label={"Learn More"} />
                        </div>
                      </div>
                      <div className="">
                        <MultiImageCardCarousel images={DigitalMarketing}/>
                      </div>
                    </div>

                    <div className="line w-full bg-grayone-300 h-px"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 mb-10 md:mt-16 md:mb-16 lg:mt-24 lg:mb-24">
                      <div className="md:pr-16 lg:pr-20 xl:pr-36 flex flex-col justify-between">
                        <div>
                          <div className="mb-6 sm:mb-8">
                            <p className="text-xl sm:text-2xl md:text-3xl font-bold">Branding</p>
                          </div>
                          <div className="mb-6 sm:mb-8">
                            <p className="text-sm sm:text-base font-medium text-grayone">At Neon Strategies, we understand that a strong brand is the foundation of any successful business. Our branding services are designed to create a memorable and impactful brand identity that resonates with your target audience and sets you apart from the competition.</p>
                          </div>
                          <div className="flex flex-wrap gap-2 md:flex-row md:gap-5 mb-10">
                            <div className="text-xs sm:text-sm font-medium rounded-full px-5 py-2 bg-tagbg_gray text-grayone w-fit">Brand Strategy</div>
                            <div className="text-xs sm:text-sm font-medium rounded-full px-5 py-2 bg-tagbg_gray text-grayone w-fit">Logo Design</div>
                            <div className="text-xs sm:text-sm font-medium rounded-full px-5 py-2 bg-tagbg_gray text-grayone w-fit">Brand Identity</div>
                          </div>
                        </div>
                        <div>
                          <LinkWithArrow href={"#"} label={"Learn More"} />
                        </div>
                      </div>
                      <div className="">
                        <MultiImageCardCarousel images={Branding}/>
                      </div>
                    </div>

                    <div className="line w-full bg-grayone-300 h-px"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 mb-10 md:mt-16 md:mb-16 lg:mt-24 lg:mb-24">
                      <div className="md:pr-16 lg:pr-20 xl:pr-36 flex flex-col justify-between">
                        <div>
                          <div className="mb-6 sm:mb-8">
                            <p className="text-xl sm:text-2xl md:text-3xl font-bold">Creative Services</p>
                          </div>
                          <div className="mb-6 sm:mb-8">
                            <p className="text-sm sm:text-base font-medium text-grayone">At Neon Strategies, our Creative Services team is dedicated to bringing your vision to life with innovative and captivating designs. We believe that creativity is at the heart of effective marketing, and we strive to create visual content that not only captures attention but also drives engagement and results.</p>
                          </div>
                          <div className="flex flex-wrap gap-2 md:flex-row md:gap-5 mb-10">
                            <div className="text-xs sm:text-sm font-medium rounded-full px-5 py-2 bg-tagbg_gray text-grayone w-fit">Graphic Design</div>
                            <div className="text-xs sm:text-sm font-medium rounded-full px-5 py-2 bg-tagbg_gray text-grayone w-fit">Photography</div>
                          </div>
                        </div>
                        <div>
                          <LinkWithArrow href={"#"} label={"Learn More"} />
                        </div>
                      </div>
                      <div className="">
                        <MultiImageCardCarousel images={CreativeServices}/>
                      </div>
                    </div>

                    <div className="line w-full bg-grayone-300 h-px"></div>
                </div>
              </div>
            </section>
    </>
    )
}

export default WhatWeDo;
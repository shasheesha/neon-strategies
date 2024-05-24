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
        <section className="pt-40 pb-20">
            <div className="container mx-auto">
                <div className="px-20">
                    <div className="grid grid-cols-3 gap-1 mb-28">
                      <div>
                        <p className="text-base font-bold mt-5">WHAT WE DO</p>  
                      </div>
                      <div className="col-span-2">
                        <p className="text-5xl font-light leading-normal">A comprehensive range of marketing services designed to elevate your brand and drive success.</p>    
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-24 mb-24">
                      <div className="md:pr-36 flex flex-col justify-between">
                        <div>
                          <div className="mb-8">
                            <p className="text-3xl font-bold">Digital Marketing</p>
                          </div>
                          <div className="mb-8">
                            <p className="text-base font-medium text-grayone">At Neon Strategies, we harness the power of digital marketing to elevate your brand and connect you with your target audience. Our comprehensive digital marketing services are designed to drive traffic, increase engagement, and boost conversions.</p>
                          </div>
                          <div className="flex flex-row gap-5">
                            <div className="text-sm font-medium rounded-full px-5 py-2 bg-tagbg_gray text-grayone">SEO</div>
                            <div className="text-sm font-medium rounded-full px-5 py-2 bg-tagbg_gray text-grayone">Social Media Marketing</div>
                            <div className="text-sm font-medium rounded-full px-5 py-2 bg-tagbg_gray text-grayone">Content Marketing</div>
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

                    <div className="grid grid-cols-2 gap-2 mt-24 mb-24">
                      <div className="md:pr-36 flex flex-col justify-between">
                        <div>
                          <div className="mb-8">
                            <p className="text-3xl font-semibold">Branding</p>
                          </div>
                          <div className="mb-8">
                            <p className="text-base font-medium text-grayone">At Neon Strategies, we understand that a strong brand is the foundation of any successful business. Our branding services are designed to create a memorable and impactful brand identity that resonates with your target audience and sets you apart from the competition.</p>
                          </div>
                          <div className="flex flex-row gap-5">
                            <div className="text-sm font-medium rounded-full px-5 py-2 bg-tagbg_gray text-grayone">Brand Strategy</div>
                            <div className="text-sm font-medium rounded-full px-5 py-2 bg-tagbg_gray text-grayone">Logo Design</div>
                            <div className="text-sm font-medium rounded-full px-5 py-2 bg-tagbg_gray text-grayone">Brand Identity</div>
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

                    <div className="grid grid-cols-2 gap-2 mt-24 mb-24">
                      <div className="md:pr-36 flex flex-col justify-between">
                        <div>
                          <div className="mb-8">
                            <p className="text-3xl font-semibold">Creative Services</p>
                          </div>
                          <div className="mb-8">
                            <p className="text-base font-medium text-grayone">At Neon Strategies, our Creative Services team is dedicated to bringing your vision to life with innovative and captivating designs. We believe that creativity is at the heart of effective marketing, and we strive to create visual content that not only captures attention but also drives engagement and results.</p>
                          </div>
                          <div className="flex flex-row gap-5">
                            <div className="text-sm font-medium rounded-full px-5 py-2 bg-tagbg_gray text-grayone">Graphic Design</div>
                            <div className="text-sm font-medium rounded-full px-5 py-2 bg-tagbg_gray text-grayone">Photography</div>
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
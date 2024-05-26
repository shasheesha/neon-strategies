"use client"
import Image from "next/image";
import LinkWithArrow from "../LinkWithArrow";
import CustomButton from "../CustomButton";

const OurProcess: React.FC = () => {

    const handleScrollToSection = (id:string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return(
        <>
        
        <section className="pt-14 pb-14 md:pt-20 md:pb-20 lg:pt-40 lg:pb-40 bg-bg_gray" id="process">
              <div className="container mx-auto px-5 xl:px-0">
                <div className="">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-8 pr-20">
                    <div>
                      <p className="text-sm sm:text-base font-bold mb-3 sm:mt-5 md:mb-6 lg:mb-0">OUR PROCESS AT NEON STRATEGIES</p>  
                    </div>
                    <div className="lg:col-span-2">
                        <p className="text-2xl font-light leading-tight mb-5 sm:mb-10 md:mb-14 md:text-3xl lg:text-4xl xl:text-5xl lg:leading-normal xl:leading-normal">Our process at Neon Strategies is designed to be thorough, flexible, and client-focused</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-5 xl:gap-10">
                    <div className="pr-5 md:pr-8 xl:pr-36 pb-5">
                        <p className="text-sm lg:text-base font-bold leading-relaxed lg:leading-loose mb-4 lg:mb-8 lx:mb-16">We ensures your marketing remains effective and relevant.</p>
                        <p className="text-sm lg:text-base font-medium leading-relaxed lg:leading-loose">At Neon Strategies, we believe that a well-defined process is key to delivering exceptional results. Our approach is collaborative, transparent, and tailored to meet the unique needs of each client. Here’s a step-by-step overview of how we work:</p>
                    </div>

                        <div className="p-6 lg:p-8 xl:p-12 rounded bg-white block flex flex-col justify-between cursor-pointer hover:bg-white-800 hover:scale-105 transition ease-in-out duration-300">
                            <div className="card-content">
                                <div className="icon mb-4 lg:mb-8 xl:mb-16">
                                    <img width={72} height={72} src={"/icons/op-1.png"} className="w-14 md:w-16 lg:w-20" alt={"Research & Analysis"} />
                                </div>
                                <p className="text-lg md:text-xl lg:text-2xl font-medium leading-normal mb-3 lg:mb-6">Research & Analysis</p>
                                <p className="text-sm lg:text-base font-medium leading-normal text-grayone mb-8 lg:mb-14">Our team conducts thorough market research and competitive analysis to gain insights into your industry and audience. We use this data to inform our strategies and ensure they are aligned with current market trends and customer behaviors.</p>
                            </div>
                            <LinkWithArrow label={"Read More"} />
                        </div>

                        <div className="p-6 lg:p-8 xl:p-12 rounded bg-white block flex flex-col justify-between cursor-pointer hover:bg-white-800 hover:scale-105 transition ease-in-out duration-300">
                            <div className="card-content flex flex-col justify-between">
                                <div className="icon mb-4 lg:mb-8 xl:mb-16">
                                    <img width={72} height={72} src={"/icons/op-1.png"} className="w-14 md:w-16 lg:w-20" alt={"Research & Analysis"} />
                                </div>
                                <p className="text-lg md:text-xl lg:text-2xl font-medium leading-normal mb-3 lg:mb-6">Creative Concepting</p>
                                <p className="text-sm lg:text-base font-medium leading-normal text-grayone mb-8 lg:mb-14">Our creative team brainstorms and develops innovative concepts that align with your brand and strategy. We focus on creating compelling visuals and messages that resonate with your audience and differentiate your brand from the competition.</p>
                            </div>
                            <LinkWithArrow label={"Read More"} />
                        </div>

                        <div className="p-6 lg:p-8 xl:p-12 rounded bg-white block flex flex-col justify-between cursor-pointer hover:bg-white-800 hover:scale-105 transition ease-in-out duration-300">
                            <div className="card-content flex flex-col justify-between">
                                <div className="icon mb-4 lg:mb-8 xl:mb-16">
                                    <img width={72} height={72} src={"/icons/op-1.png"} className="w-14 md:w-16 lg:w-20" alt={"Research & Analysis"} />
                                </div>
                                <p className="text-lg md:text-xl lg:text-2xl font-medium leading-normal mb-3 lg:mb-6">Implementation</p>
                                <p className="text-sm lg:text-base font-medium leading-normal text-grayone mb-8 lg:mb-14">With a solid strategy and creative concepts in place, we move to the implementation phase. Our team executes the marketing plan across various channels, ensuring each element is aligned and working towards your goals. This includes launching campaigns, creating content, and optimizing your digital presence.</p>
                            </div>
                            <LinkWithArrow label={"Read More"} />
                        </div>
                    
                        <div className="p-6 lg:p-8 xl:p-12 rounded bg-white block flex flex-col justify-between cursor-pointer hover:bg-white-800 hover:scale-105 transition ease-in-out duration-300">
                            <div className="card-content flex flex-col justify-between">
                                <div className="icon mb-4 lg:mb-8 xl:mb-16">
                                    <img width={72} height={72} src={"/icons/op-1.png"} className="w-14 md:w-16 lg:w-20" alt={"Research & Analysis"} />
                                </div>
                                <p className="text-lg md:text-xl lg:text-2xl font-medium leading-normal mb-3 lg:mb-6">Monitoring & Optimization</p>
                                <p className="text-sm lg:text-base font-medium leading-normal text-grayone mb-8 lg:mb-14">We continuously monitor the performance of our campaigns and strategies using advanced analytics tools. By tracking KPIs and other metrics, we gain insights into what’s working and what can be improved. We make data-driven adjustments to optimize performance and maximize ROI.</p>
                            </div>
                            <LinkWithArrow label={"Read More"} />
                        </div>
                    
                    <div className="flex flex-col pt-5 justify-center items-center">
                        <CustomButton btnName={"Contact Us to Get Started"} withArrow={true} onClick={() => handleScrollToSection('contact')} arrowClassNames="stroke-grayone group-hover:stroke-white" classNames={"py-3 px-4 md:py-3 md:px-5 lg:py-4 lg:px-6 xl:py-4 xl:px-7 text-base md:text-lg lg:text-xl border-2 border-grayone hover:bg-grayone hover:text-white"} />
                    </div>
                </div>


              </div>

            </section>
        </>
    )
}

export default OurProcess;
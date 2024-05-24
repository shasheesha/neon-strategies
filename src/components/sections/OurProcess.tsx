"use client"
import Image from "next/image";
import LinkWithArrow from "../LinkWithArrow";
import CustomButton from "../CustomButton";

const OurProcess: React.FC = () => {

    return(
        <>
        
        <section className="pt-40 pb-40 bg-bg_gray">
              <div className="container mx-auto">
                <div className="mb-20">
                  <div className="grid grid-cols-3 gap-1 pr-20">
                    <div>
                      <p className="text-base font-bold mt-5">OUR PROCESS AT NEON STRATEGIES</p>  
                    </div>
                    <div className="col-span-2">
                        <p className="text-5xl font-light mb-14 leading-normal">Our process at Neon Strategies is designed to be thorough, flexible, and client-focused</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-10">
                    <div className="pr-36">
                        <p className="text-base font-bold leading-loose mb-16">We ensures your marketing remains effective and relevant.</p>
                        <p className="text-base font-medium leading-loose">At Neon Strategies, we believe that a well-defined process is key to delivering exceptional results. Our approach is collaborative, transparent, and tailored to meet the unique needs of each client. Here’s a step-by-step overview of how we work:</p>
                    </div>

                        <div className="p-12 rounded bg-white block flex flex-col justify-between">
                            <div className="card-content">
                                <div className="icon mb-16">
                                    <img width={72} height={72} src={"/icons/op-1.png"} alt={"Research & Analysis"} />
                                </div>
                                <p className="text-2xl font-medium leading-normal mb-6">Research & Analysis</p>
                                <p className="text-base font-medium leading-normal text-grayone mb-14">Our team conducts thorough market research and competitive analysis to gain insights into your industry and audience. We use this data to inform our strategies and ensure they are aligned with current market trends and customer behaviors.</p>
                            </div>
                            <LinkWithArrow href={"#"} label={"Read More"} />
                        </div>

                        <div className="p-12 rounded bg-white block flex flex-col justify-between">
                            <div className="card-content flex flex-col justify-between">
                                <div className="icon mb-16">
                                    <img width={72} height={72} src={"/icons/op-1.png"} alt={"Research & Analysis"} />
                                </div>
                                <p className="text-2xl font-medium leading-normal mb-6">Creative Concepting</p>
                                <p className="text-base font-medium leading-normal text-grayone mb-14">Our creative team brainstorms and develops innovative concepts that align with your brand and strategy. We focus on creating compelling visuals and messages that resonate with your audience and differentiate your brand from the competition.</p>
                            </div>
                            <LinkWithArrow href={"#"} label={"Read More"} />
                        </div>

                        <div className="p-12 rounded bg-white block flex flex-col justify-between">
                            <div className="card-content flex flex-col justify-between">
                                <div className="icon mb-16">
                                    <img width={72} height={72} src={"/icons/op-1.png"} alt={"Research & Analysis"} />
                                </div>
                                <p className="text-2xl font-medium leading-normal mb-6">Implementation</p>
                                <p className="text-base font-medium leading-normal text-grayone mb-14">With a solid strategy and creative concepts in place, we move to the implementation phase. Our team executes the marketing plan across various channels, ensuring each element is aligned and working towards your goals. This includes launching campaigns, creating content, and optimizing your digital presence.</p>
                            </div>
                            <LinkWithArrow href={"#"} label={"Read More"} />
                        </div>
                    
                        <div className="p-12 rounded bg-white block flex flex-col justify-between">
                            <div className="card-content flex flex-col justify-between">
                                <div className="icon mb-16">
                                    <img width={72} height={72} src={"/icons/op-1.png"} alt={"Research & Analysis"} />
                                </div>
                                <p className="text-2xl font-medium leading-normal mb-6">Monitoring & Optimization</p>
                                <p className="text-base font-medium leading-normal text-grayone mb-14">We continuously monitor the performance of our campaigns and strategies using advanced analytics tools. By tracking KPIs and other metrics, we gain insights into what’s working and what can be improved. We make data-driven adjustments to optimize performance and maximize ROI.</p>
                            </div>
                            <LinkWithArrow href={"#"} label={"Read More"} />
                        </div>
                    
                    <div className="flex flex-col justify-center items-center">
                        <CustomButton btnName={"Contact Us to Get Started"} withArrow={true} classNames={"py-4 px-7 border-2 border-grayone hover:bg-grayone hover:text-white"} />
                    </div>
                </div>


              </div>

            </section>
        </>
    )
}

export default OurProcess;
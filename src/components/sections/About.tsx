"use client"
import CustomButton from "../CustomButton";

const About: React.FC = () => {

  const handleScrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return(
        <>
            <section className="pt-10 pb-10 lg:pt-20 lg:pb-20" id="about">
              <div className="container mx-auto">
                <div className="px-10 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 mb-10 sm:mb-28">
                      <div>
                        <p className="text-sm sm:text-base font-bold mb-3 sm:mt-5 sm:mb-6 lg:mb-0">ABOUT US</p>  
                      </div>
                      <div className="lg:col-span-2">
                        <p className="text-2xl font-light leading-tight mb-5 sm:mb-10 md:mb-14 md:text-3xl lg:text-4xl xl:text-5xl lg:leading-normal xl:leading-normal">Our Mission</p>
                        <p className="text-base md:text-lg lg:text-xl font-medium text-grayone mb-4 sm:mb-8">To light up your brand with cutting-edge marketing strategies that drive growth and enhance brand visibility.</p>
                        <p className="text-base md:text-lg lg:text-xl font-medium text-grayone mb-8 sm:mb-16">Neon Strategies is a full-service marketing agency dedicated to energizing your brand through creative and effective marketing solutions. Founded in 2017, we have been at the forefront of marketing innovation, helping businesses of all sizes achieve their goals.</p>
                        <div className="">
                          <CustomButton btnName={"Contact Us Today"} withArrow={true} onClick={() => handleScrollToSection('contact')} arrowClassNames="stroke-white group-hover:stroke-blue" classNames={"py-2 px-4 md:py-3 md:px-5 lg:py-4 lg:px-6 xl:py-4 xl:px-7 text-base md:text-lg lg:text-xl text-white bg-blue border-2 border-blue hover:bg-white hover:text-blue"} />
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </section>
        </>
    )
}

export default About;
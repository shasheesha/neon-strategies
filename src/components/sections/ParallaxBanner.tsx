"use client"
import CustomButton from "../CustomButton";

const ParallaxBanner: React.FC = () => {

  const handleScrollToSection = (id:string) => {
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return(
        <>
        <section className=" h-screen bg-gradient-to-r from-blue-500 to-black-500 relative bg-fixed overflow-hidden bg-center bg-no-repeat bg-cover z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed" style={{ backgroundImage: `url(/images/parallax.png)`}} />
          <div className="container mx-auto h-screen py-40 px-5 flex flex-row items-end justify-center md:justify-end">
            <CustomButton btnName={"Let's get in touch"} withArrow={true} onClick={() => handleScrollToSection('contact')} arrowClassNames="stroke-white group-hover:stroke-black" classNames={"absolute z-40 border-2 border-white py-2 px-4 md:py-3 md:px-5 lg:py-4 lg:px-6 xl:py-4 xl:px-7 text-base md:text-lg lg:text-xl text-white hover:bg-white hover:text-black"} />
          </div>
        </section>
        </>
    )
}
export default ParallaxBanner;
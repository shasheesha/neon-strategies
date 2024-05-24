import CustomButton from "../CustomButton";

const ParallaxBanner: React.FC = () => {

    return(
        <>
        <section className=" h-screen bg-gradient-to-r from-blue-500 to-black-500 relative bg-fixed overflow-hidden bg-center bg-no-repeat bg-cover z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed" style={{ backgroundImage: `url(/images/parallax.png)`}} />
          <div className="container mx-auto h-screen py-40 flex flex-row items-end justify-end">
            <CustomButton btnName={"Let's get in touch"} withArrow={true} classNames={"absolute z-40 border-2 border-white text-xl text-white py-3 px-6 hover:bg-white hover:text-black"} />
          </div>
        </section>
        </>
    )
}
export default ParallaxBanner;
import LinkWithArrow from "../LinkWithArrow"

const Hero: React.FC = () => {

    return(
        <>
            <section className="pt-40 pb-10 sm:pb-20">
              <div className="container mx-auto">
                <div className="px-10 lg:px-20">
                  <div className="mb-10 xl:mb-24">
                    <p className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl lg:leading-normal lg:pr-0 xl:pr-96">Ignite Your Brand’s Potential with Neon Strategies</p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
                    <div>
                      <p className="text-sm sm:text-base font-bold mb-3 sm:mb-6 lg:mb-0">WELCOME TO NEON STRATEGIES</p>  
                    </div>
                    <div className="lg:col-span-2">
                      <p className="text-base md:text-lg lg:text-xl mb-8 sm:mb-16 font-medium text-grayone">At Neon Strategies, we illuminate your brand with innovative and dynamic marketing solutions. Our team of experts is committed to transforming your vision into reality with strategies that deliver measurable results and sustainable growth.</p>
                      <div className="">
                        <LinkWithArrow href={"#"} label={"Start Your Journey with Us!"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </>
    )
}

export default Hero;
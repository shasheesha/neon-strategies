import LinkWithArrow from "../LinkWithArrow"

const Hero: React.FC = () => {

    return(
        <>
            <section className="pt-40 pb-20">
              <div className="container mx-auto px-20">
                <div className="mb-24">
                  <p className="text-6xl leading-snug font-bold md:pr-96">Ignite Your Brand’s Potential with Neon Strategies</p>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  <div>
                    <p className="text-base font-bold">WELCOME TO NEON STRATEGIES</p>  
                  </div>
                  <div className="col-span-2">
                    <p className="text-xl mb-16 font-medium">At Neon Strategies, we illuminate your brand with innovative and dynamic marketing solutions. Our team of experts is committed to transforming your vision into reality with strategies that deliver measurable results and sustainable growth.</p>
                    <div className="">
                      <LinkWithArrow href={"#"} label={"Start Your Journey with Us!"} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </>
    )
}

export default Hero;
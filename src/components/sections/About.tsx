import LinkWithArrow from "../LinkWithArrow"

const About: React.FC = () => {

    return(
        <>
            <section className="pt-40 pb-20">
              <div className="container mx-auto px-20">
                <div className="grid grid-cols-3 gap-1">
                  <div>
                    <p className="text-base font-bold">ABOUT US</p>  
                  </div>
                  <div className="col-span-2">
                  <p className="text-5xl font-light mb-14">Our Mission</p>
                    <p className="text-xl font-medium mb-8">To light up your brand with cutting-edge marketing strategies that drive growth and enhance brand visibility.</p>
                    <p className="text-xl font-medium mb-16">Neon Strategies is a full-service marketing agency dedicated to energizing your brand through creative and effective marketing solutions. Founded in 2017, we have been at the forefront of marketing innovation, helping businesses of all sizes achieve their goals.</p>
                    <div className="">
                      <LinkWithArrow href={"#"} label={"Contact Us Today"} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </>
    )
}

export default About;
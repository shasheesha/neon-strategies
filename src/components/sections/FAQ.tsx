import Accordion from "../Accordion";
import LinkWithArrow from "../button/LinkWithArrow";

const FAQItems = [
    {
      title: 'What services does Neon Strategies offer?',
      content: 'We offer a comprehensive range of marketing services, including Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing), Branding (Brand Strategy, Logo Design, Brand Identity), Creative Services (Graphic Design, Video Production, Photography), and Web Development (Website Design, E-commerce Solutions, UX/UI Design).',
    },
    {
      title: 'How does Neon Strategies approach a new project?',
      content: 'We offer a comprehensive range of marketing services, including Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing), Branding (Brand Strategy, Logo Design, Brand Identity), Creative Services (Graphic Design, Video Production, Photography), and Web Development (Website Design, E-commerce Solutions, UX/UI Design).',
    },
    {
      title: 'Can you help improve our existing marketing strategies?',
      content: 'We offer a comprehensive range of marketing services, including Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing), Branding (Brand Strategy, Logo Design, Brand Identity), Creative Services (Graphic Design, Video Production, Photography), and Web Development (Website Design, E-commerce Solutions, UX/UI Design).',
    },
    {
      title: 'What industries does Neon Strategies specialize in?',
      content: 'We offer a comprehensive range of marketing services, including Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing), Branding (Brand Strategy, Logo Design, Brand Identity), Creative Services (Graphic Design, Video Production, Photography), and Web Development (Website Design, E-commerce Solutions, UX/UI Design).',
    },
    {
      title: 'How long does it take to see results from a marketing campaign?',
      content: 'We offer a comprehensive range of marketing services, including Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing), Branding (Brand Strategy, Logo Design, Brand Identity), Creative Services (Graphic Design, Video Production, Photography), and Web Development (Website Design, E-commerce Solutions, UX/UI Design).',
    },
  ];

const FAQ: React.FC = () => {

    return(
        <>    
            <section className="pt-20 pb-10 lg:pt-40 lg:pb-20" id="faq">
              <div className="container mx-auto">
                <div className="px-10 mb-10 lg:px-20 lg:mb-20">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
                    <div>
                      <p className="text-sm sm:text-base font-bold mb-3 sm:mt-5 sm:mb-6 lg:mb-0">FAQ</p>  
                    </div>
                    <div className="lg:col-span-2">
                    <p className="text-2xl font-light leading-tight mb-5 sm:mb-10 md:mb-14 md:text-3xl lg:text-4xl xl:text-5xl lg:leading-normal xl:leading-normal">Find Your Answers Here</p>
                      <p className="text-base md:text-lg lg:text-xl font-medium text-grayone ">Our services at Neon Strategies are tailored to meet the unique needs of your business, ensuring that your brand not only stands out but also connects deeply with your audience.</p>
                    </div>
                  </div>
                </div>

                <div className="line w-full bg-grayone-300 h-px"></div>
                <Accordion items={FAQItems} />

              </div>



            </section>
        </>
    )
}

export default FAQ;
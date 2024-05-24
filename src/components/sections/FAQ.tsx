import Accordion from "../Accordion";
import LinkWithArrow from "../LinkWithArrow";

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
            <section className="pt-40 pb-20">
              <div className="container mx-auto">
                <div className="px-20 mb-20">
                  <div className="grid grid-cols-3 gap-1">
                    <div>
                      <p className="text-base font-bold mt-5">FAQ</p>  
                    </div>
                    <div className="col-span-2">
                    <p className="text-5xl font-light mb-14 leading-normal">Find Your Answers Here</p>
                      <p className="text-xl font-medium text-grayone">Our services at Neon Strategies are tailored to meet the unique needs of your business, ensuring that your brand not only stands out but also connects deeply with your audience.</p>
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
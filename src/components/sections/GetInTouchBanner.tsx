import Link from "next/link"
import CustomButton from "../CustomButton";


const GetInTouchBanner: React.FC = () =>{

    return(
        <>
        <section className="pt-5 pb-6 md:pt-10 md:pb-10 lg:pt-20 lg:pb-20 xl:pt-40 xl:pb-40">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <CustomButton btnName={"Get In Touch"} classNames={"bg-darkblue border-2 border-darkblue px-8 py-2 sm:px-10 sm:py-3 md:px-12 md:py-4 lg:px-14 lg:py-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-normal mb-4 lg:mb-7 "} />
                <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-center mb-4 lg:mb-8 px-5 lg:px-10 xl:px-20 leading-tight">We’d love to hear from you! Whether you’re ready to start your project or just have a question, feel free to reach out.</p>
                <Link href={"#"} className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-center">info@neostrategies.com</Link>
            </div>
        </section>
        </>
    )
}

export default GetInTouchBanner;
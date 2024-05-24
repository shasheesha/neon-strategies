import Link from "next/link"
import CustomButton from "../CustomButton";


const GetInTouchBanner: React.FC = () =>{

    return(
        <>
        <section className="pt-40 pb-20">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <CustomButton btnName={"Get In Touch"} classNames={"bg-darkblue border-2 border-darkblue px-14 py-5 text-4xl text-white font-normal mb-7"} />
                <p className="text-7xl font-normal text-center mb-8 px-20 leading-tight">We’d love to hear from you! Whether you’re ready to start your project or just have a question, feel free to reach out.</p>
                <Link href={"#"} className="text-4xl font-normal text-center">info@neostrategies.com</Link>
            </div>
        </section>
        </>
    )
}

export default GetInTouchBanner;
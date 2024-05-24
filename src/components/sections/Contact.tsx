"use client"
import { useForm } from "react-hook-form";
import CustomField from "../CustomField";
import CustomTextArea from "../CustomTextArea";
import CustomButton from "../CustomButton";
import Image from "next/image";
import SideImage from "@/images/branding/b-1.png";

type FormValues = {
    name : string
}

const Contact: React.FC = () => {

    const {register,handleSubmit,formState: { errors }} = useForm<FormValues>();

  
    const send = (data : any) => {
      console.log(data);
    }
      
    return(
        <>
        
        <section className="pt-40 pb-20">
              <div className="container mx-auto">
                <div className="px-20 mb-20 grid grid-cols-2 gap-10">
                    <div className="flex flex-col justify-start">
                        <p className="text-5xl font-light leading-normal mb-16">Nice to Meet You!</p>
                        <form action="contact-form" onSubmit={handleSubmit(send)}>
                            <CustomField inputType={"text"} inputId={"fname"} label="Your Name" register={register} errors={errors} isRequired={"Your name is required"} />
                            <CustomField inputType={"text"} inputId={"lname"} label="Your Phone Number" register={register} errors={errors} isRequired={"Your contact number is required"} />
                            <CustomTextArea inputType={"textarea"} inputId={"brief"} label="Brief your project" register={register} errors={errors} isRequired={"Project brief is required"} />

                            <CustomButton btnName={"Submit"} submit={true} classNames="px-10 py-3 bg-blue text-white min-w-64 border-2 border-blue hover:bg-white hover:text-blue hover:font-semibold" />
                        </form>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                    <Image
                      src={'/images/branding/b-1.png'}
                      alt="Picture of the author"
                      className="aspect-[3/4] object-cover object-center rounded w-96"
                      width={540}
                      height={540}
                    />
                    </div>
                </div>
            </div>        

            <div className="line w-full bg-grayone-300 h-px"></div>

        </section>
        </>
    )
}

export default Contact;
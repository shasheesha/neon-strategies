"use client"
import { useForm } from "react-hook-form";
import CustomField from "../CustomField";
import CustomTextArea from "../CustomTextArea";
import CustomButton from "../CustomButton";
import Image from "next/image";
import CustomSelect from "../CustomSelect";

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
        
        <section className="pt-14 pb-10 lg:pt-40 lg:pb-20" id="contact">
              <div className="container mx-auto">
                <div className="px-5 md:px-10 lx:px-20 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="flex flex-col justify-start">
                        <p className="text-2xl font-light leading-tight mb-5 sm:mb-10 md:mb-14 lg:mb-16 md:text-3xl lg:text-4xl xl:text-5xl lg:leading-normal xl:leading-normal">Nice to Meet You!</p>
                        <form action="contact-form" onSubmit={handleSubmit(send)}>
                            <CustomField inputType={"text"} inputId={"fname"} label="Your Name" register={register} errors={errors} isRequired={"Your name is required"} />
                            <CustomField inputType={"text"} inputId={"lname"} label="Your Phone Number" register={register} errors={errors} isRequired={"Your contact number is required"} />
                            <CustomSelect inputId={"how"} register={register} errors={errors} isRequired={false} />
                            <CustomTextArea inputId={"brief"} label="Brief your project" register={register} errors={errors} isRequired={"Project brief is required"} />

                            <CustomButton btnName={"Submit"} submit={true} hoverAnimationClasses="bg-white" classNames="px-6 py-2 lg:px-8 lg:py-2 xl:px-10 xl:py-3 bg-blue mt-10 text-white min-w-32 md:min-w-56 xl:min-w-64 border-2 border-blue hover:text-blue hover:font-semibold" />
                        </form>
                    </div>
                    <div className="hidden lg:flex flex-col justify-center items-center">
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
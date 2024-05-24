import Link from "next/link";



const Footer: React.FC = () =>{

    return(
        <>
        <section>
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-5 my-11">
                    <div>
                        <p className="font-bold text-base mb-10">ADDRESS</p>
                        <div className="flex flex-row justify-start gap-10">
                            <p className="font-normal text-grayone leading-normal text-xl">Neon Strategies Ltd.<br />123 Marketing Street,<br />London, W1A 1AA<br />United Kingdom</p>
                            <p className="font-normal text-grayone leading-normal text-xl">Monday - Friday: 9:00 AM - 6:00 PM</p>                        
                        </div>
                    </div>
                    <div className="flex flex-row justify-end">
                        <div className="flex flex-col justify-start">
                            <p className="font-bold text-base mb-10">FOLLOW US</p>
                            <div className="flex flex-row justify-end gap-10">
                               <div className="rounded-full p-2 border-2 border-grayone">A</div>                      
                               <div className="rounded-full p-2 border-2 border-grayone">A</div>                      
                               <div className="rounded-full p-2 border-2 border-grayone">A</div>                      
                               <div className="rounded-full p-2 border-2 border-grayone">A</div>                      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line w-full bg-grayone-300 h-px"></div>

            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-5 my-12">
                    <div className="text-base font-normal"><p>© 2024 Neon Strategies, All rights reserved.</p></div>
                    <div className="text-nowrap flex flex-row justify-center"><p><Link href={"#"} className="underline text-base font-normal">Privacy Policy</Link> | <Link href={"#"} className="underline text-base font-normal">Term & Conditions</Link></p></div>
                    <div className="col-span-2 md:col-span-1 text-nowrap text-base font-normal flex flex-row md:justify-end"><p>Website by <Link href={"#"} className="underline">Smashy Design</Link></p></div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Footer;
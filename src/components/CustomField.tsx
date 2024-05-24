import "@/styles/CustomField.css";

interface Props{
    inputType : string;
    inputId : string;
    register : any;
    errors : any;
    isRequired : any | false;
    label? : string;
    placeholder? : string;
}

const CustomField: React.FC<Props> = ({inputType, inputId, register, errors, label, placeholder, isRequired}) =>{

    return (
      <>
      	<div className="input-group relative overflow-hidden mt-5 pt-3">
		    	<input type={inputType} name={inputId} className="relative w-full text-sm md:text-base lg:text-lg xl:text-xl border-t-transparent border-l-transparent border-r-transparent focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:ring-0 outline-none border-b-px border-grayone-500 py-3 px-2 z-5" placeholder={placeholder} {...register(inputId, { required: isRequired })} required/>
		    	<label className="absolute text-sm md:text-base lg:text-lg xl:text-xl">{label}</label>
		    	<span className="line"></span>
            {errors[inputId] && (
              <span className="absolute text-red-600 py-0.5 px-2 text-xs">
                {errors[inputId].message}
              </span>
            )}
		    </div>
      </>
    
    );
  };
  
  export default CustomField;
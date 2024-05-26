import "@/styles/CustomField.css";

interface Props{
    inputId : string;
    register : any;
    errors : any;
    isRequired : any | false;
    label? : string;
    placeholder? : string;
}

const CustomSelect: React.FC<Props> = ({inputId, register, errors, label, placeholder, isRequired}) =>{

  
    return (
      <>
      	<div className="input-group relative overflow-hidden mt-5 pt-3">
		    	<select defaultValue={"None"} name={inputId} className="relative w-full text-sm md:text-base lg:text-lg xl:text-xl border-t-transparent border-l-transparent border-r-transparent focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:ring-0 outline-none border-b-px border-grayone-500 py-3 px-2 z-5" placeholder={placeholder} {...register(inputId, { required: isRequired })} required>
		    	  <option className="text-sm md:text-base lg:text-lg xl:text-xl text-grayone-500 opacity-5" value="none" selected>How do you know about us?</option>
		    	  <option className="text-sm md:text-base lg:text-lg xl:text-xl " value="linkedin">LinkedIn</option>
		    	  <option className="text-sm md:text-base lg:text-lg xl:text-xl " value="facebook">Facebook</option>
		    	  <option className="text-sm md:text-base lg:text-lg xl:text-xl " value="instagram">Instagram</option>
		    	  <option className="text-sm md:text-base lg:text-lg xl:text-xl " value="friend">Friend</option>
          </select>
          <label className="absolute">{label}</label>
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
  
  export default CustomSelect;
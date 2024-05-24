"use client"

import { useState } from "react";

interface Props{
    inputType : string;
    inputId : string;
    register : any;
    errors : any;
    isRequired : any | false;
    label? : string;
    placeholder? : string;
}

const CustomTextArea: React.FC<Props> = ({inputType, inputId, register, errors, label, placeholder, isRequired}) =>{

    const [hasContent, setHasContent] = useState(false);

    const handleInputChange = (e: any) => {
      setHasContent(e.target.value !== '');
    };
  
    return (
      <div className="relative mb-11">
        <textarea
          type={inputType}
          id={inputId}
          {...register(inputId, { required: isRequired })}
          placeholder={placeholder}
          onChange={handleInputChange}
          className={`border-grayone-300 focus:border-transparent focus:ring-0 peer block w-full border-t-0 border-l-0 border-r-0 border-b-2 border-grayone pt-2.5 pb-2 bg-transparent text-xl font-normal text-black outline-none focus:border-b-2 focus:border-gray-500 focus:outline-none disabled:border-0 disabled:bg-gray-200 placeholder:opacity-0 focus:placeholder:opacity-100 transition-colors ${hasContent ? 'valid' : ''}`}
        ></textarea>
        <label
          className={`absolute left-1.5 top-2.5 text-xl font-normal text-grayone pointer-events-none transition-all peer-placeholder-shown:top-10 peer-placeholder-shown:text-lg peer-placeholder-shown:text-grayone-500 peer-focus:top-[-20px] peer-focus:text-base peer-focus:left-[-10] peer-focus:text-grayone-700 ${hasContent ? 'top-[-20px] left-[-10] text-base text-grayone-700' : ''}`}
        >
          {label}
        </label>
        {errors[inputId] && (
          <span className="absolute text-red-600 py-0.5 px-2 text-xs">
            {errors[inputId].message}
          </span>
        )}
      </div>
    );
  };
  
  export default CustomTextArea;
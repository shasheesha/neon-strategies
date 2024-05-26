

interface Props{
    submit?: boolean | false;
    btnName: string;
    classNames: string;
    arrowClassNames?: string;
    hoverAnimationClasses?: string;
    withArrow?: boolean | false;
    onClick?: () => void;
}

const CustomButton: React.FC<Props> = ({submit, btnName, classNames, arrowClassNames, withArrow, hoverAnimationClasses, onClick}) => {

    return(
        <>
        <button type={submit === true ? "submit" : "button"} onClick={onClick} className={`group relative overflow-hidden flex flex-row gap-5 justify-center items-center font-medium rounded-full text-nowrap transition ease-in-out duration-300 delay-100 ${classNames}`}>
            <span className="relative z-10">{btnName}</span>
            <div className={`z-0 w-96 h-20 absolute top-0 -left-96 group-hover:left-0 transition-left ease-in-out duration-1000 delay-100 ${hoverAnimationClasses}`}></div>
            {withArrow === true? (<div className="flex items-center relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 19 13.388">
                  <path className={`${arrowClassNames} transition ease-in-out duration-300 delay-100`} id="Vector_1" data-name="Vector 1" d="M17.036,6H0M12.214,0,18,6l-5.786,6" transform="translate(0 0.694)" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
                </svg>
            </div>)
             :""}
        </button></>
    )
}
export default CustomButton;
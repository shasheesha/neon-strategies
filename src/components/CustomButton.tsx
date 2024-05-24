

interface Props{
    submit?: boolean | false;
    btnName: string;
    classNames: string;
    withArrow?: boolean | false;
    onClick?: () => void;
}

const CustomButton: React.FC<Props> = ({submit, btnName, classNames, withArrow, onClick}) => {

    return(
        <>
        <button type={submit === true ? "submit" : "button"} onClick={onClick} className={`flex flex-row gap-5 justify-center items-center font-medium rounded-full text-nowrap transition ease-in-out duration-300 delay-100 ${classNames}`}>
            <span>{btnName}</span>
            {withArrow === true? (<div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 19 13.388">
                  <path id="Vector_1" data-name="Vector 1" d="M17.036,6H0M12.214,0,18,6l-5.786,6" transform="translate(0 0.694)" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
                </svg>
            </div>)
             :""}
        </button></>
    )
}
export default CustomButton;
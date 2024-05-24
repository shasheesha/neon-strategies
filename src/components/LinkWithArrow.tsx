import Link from "next/link";

interface Props {
    href: string;
    label: string;
}

const LinkWithArrow: React.FC<Props> = ({href, label}) => {

    return(
        <>
        <Link href={href} className="flex flex-row">
            <p className="mr-4 text-base underline font-semibold">{label}</p>
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 19 13.388">
                  <path id="Vector_1" data-name="Vector 1" d="M17.036,6H0M12.214,0,18,6l-5.786,6" transform="translate(0 0.694)" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
                </svg>
            </div>
        </Link>
        </>
    )
}

export default LinkWithArrow;
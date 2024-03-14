import Image from "next/image";
import linkedinIcon from "../../../../public/svg/linkedinIcon.svg";
import githubIcon from "../../../../public/svg/githubIcon.svg";
import mailIcon from "../../../../public/svg/mailIcon.svg";


export function Socialbar () {
    return(<ul className="hidden md:flex md:flex-row md:gap-6">
    <li className="font-semibold hover:cursor-pointer hover:scale-125 transition ease-in-out duration-150">
        <a href="/#aboutMe">about</a>
    </li>
    <li className="  hover:cursor-pointer hover:scale-125 transition ease-in-out duration-150">
        <a
            href="https://www.linkedin.com/in/zoe-barkan-a1aa17252/"
            target="_blank"
        >
            <Image src={linkedinIcon} alt={""} width="24" />
        </a>
    </li>

    <li className="hover:cursor-pointer hover:scale-125 transition ease-in-out duration-150">
        <a href="https://github.com/Zoe181991" target="_blank">
            <Image src={githubIcon} alt={""} width="24" />
        </a>
    </li>

    <li className="hover:cursor-pointer hover:scale-125 transition ease-in-out duration-150">
        <a href="mailto:zoebarkan@gmail.com" target="_blank">
            <Image src={mailIcon} alt={""} width={"24"} />
        </a>
    </li>

</ul>)}
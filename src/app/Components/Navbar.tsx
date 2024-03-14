'use client'
import Image from "next/image";
import { useState } from "react";
import logo from "../../../public/faviconZoe.png";
import linkedinIcon from "../../../public/svg/linkedinIcon.svg";
import githubIcon from "../../../public/svg/githubIcon.svg";
import mailIcon from "../../../public/svg/mailIcon.svg";
import menuBarIcon from "../../../public/svg/menuBar.svg";


export function Navbar() {

    const [mobileNav, setMobileNav] = useState(false);

    return(
        
    <nav className="flex h-1/6 flex-row justify-between p-12  items-center">

        <a href="/">
            <div className=" flex items-center gap-1 cursor-pointer ">
                <Image className="logoIcon" src={logo} alt={"Zoe"} width={36} />
            </div>
        </a>

        <ul className="hidden md:flex md:flex-row md:gap-4  ">
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

        </ul>

        <button
            className="md:hidden flex"
            onClick={() => setMobileNav(!mobileNav)}
        >
            <Image src={menuBarIcon} alt={"menu"} width={36} height={36} />
        </button>
    </nav>
)}
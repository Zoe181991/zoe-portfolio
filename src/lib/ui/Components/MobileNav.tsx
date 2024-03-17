'use client'

export function MobileNav (){return(<ul className="flex justify-between  flex-col items-center w-full gap-1 ">
    <li className="font-semibold hover:cursor-pointer hover:scale-125 transition ease-in-out duration-150">
        <a href="/#aboutMe">about</a>
    </li>
    <li className="  hover:cursor-pointer hover:scale-125 transition ease-in-out duration-150">
        <a href="https://www.linkedin.com/in/zoe-barkan-a1aa17252/"
            target="_blank">
            linkedin
        </a>
    </li>
    <li className="hover:cursor-pointer hover:scale-125 transition ease-in-out duration-150">
        <a href="https://github.com/Zoe181991" target="_blank">
            github
        </a>
    </li>
    <li className="hover:cursor-pointer hover:scale-125 transition ease-in-out duration-150">
        <a href="mailto:zoebarkan@gmail.com" target="_blank">
            email
        </a>
    </li>
</ul>

)}
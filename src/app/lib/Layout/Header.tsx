"use client"
import laptopImg from "../../../../public/laptop.jpg";
import Image from "next/image";
import logo from "*.png";

export function Header()


{ return(

    <div className="flex px-16 py-8 justify-between">
        <div className="flex">Hello</div>
        <Image src={laptopImg} alt={"laptop"} width={350} height={350} />

    </div>


)}

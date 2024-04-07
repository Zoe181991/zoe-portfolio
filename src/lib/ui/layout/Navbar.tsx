"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "../../../../public/faviconZoe.png";
import menuBarIcon from "../../../../public/svg/menuBar.svg";
import { Socialbar } from "../Components/Socialbar";
import { MobileNav } from "../Components/MobileNav";
export function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  const basePath = require("../../../../next.config.mjs").basePath;
  const homePage = basePath ? "/".concat(basePath) : "/";
  return (
    <nav className="flex h-20 flex-row justify-between py-6 px-12 md:px-16 lg:px-24  items-center">
      <a href={homePage}>
        <div className=" flex items-center gap-1 cursor-pointer ">
          <Image className="logoIcon" src={logo} alt={"Zoe"} width={36} />
        </div>
      </a>
      <Socialbar />

      <button
        className="md:hidden flex"
        onClick={() => setMobileNav(!mobileNav)}
      >
        <Image src={menuBarIcon} alt={"menu"} width={36} height={36} />
      </button>

      {/*mobile menu*/}
      <div
        className={
          mobileNav
            ? "transition ease-in-out duration-150 pb-6 md:hidden z-10  border-b-2 border-base-1 flex  h-1/4  flex-col fixed top-20 left-0 bg-base-1   w-full "
            : "hidden"
        }
      >
        <MobileNav />
      </div>
    </nav>
  );
}

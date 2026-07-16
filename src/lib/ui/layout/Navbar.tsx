"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "../../../../public/faviconZoe.png";
import menuBarIcon from "../../../../public/svg/menuBar.svg";
import { NavLinks } from "../Components/NavLinks";
import { MobileNav } from "../Components/MobileNav";
import { LanguageToggle } from "../Components/LanguageToggle";
import { WhatsAppCTA } from "../Components/WhatsAppCTA";
import { content } from "../text/content";
import { useLanguage } from "../context/LanguageContext";
export function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);
  const { language } = useLanguage();

  return (
    <nav className="sticky top-0 z-20 flex justify-center px-4 pt-4 md:px-8 md:pt-6">
      <div className="flex w-full max-w-5xl flex-row items-center justify-between rounded-full border border-base-4 border-opacity-10 bg-base-1 px-5 py-2.5 shadow-sm md:px-8 md:py-3">
        <a href="/">
          <div className="flex items-center gap-1 cursor-pointer">
            <Image className="logoIcon rounded-full" src={logo} alt={"Zoe"} width={32} />
          </div>
        </a>
        <div className="hidden md:flex md:flex-row md:items-center md:gap-6">
          <NavLinks />
          <LanguageToggle />
          <WhatsAppCTA
            label={content[language].nav.cta}
            className="btn-gradient inline-flex items-center gap-2 text-sm font-semibold text-base-1 px-5 py-2"
          />
        </div>

        <button
          className="md:hidden flex"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <Image src={menuBarIcon} alt={"menu"} width={28} height={28} />
        </button>
      </div>

      {/*mobile menu*/}
      <div
        className={
          mobileNav
            ? "transition ease-in-out duration-150 pb-6 md:hidden z-10 flex flex-col absolute top-full mt-2 left-4 right-4 rounded-2xl border border-base-4 border-opacity-10 bg-base-1 shadow-sm"
            : "hidden"
        }
      >
        <MobileNav />
      </div>
    </nav>
  );
}

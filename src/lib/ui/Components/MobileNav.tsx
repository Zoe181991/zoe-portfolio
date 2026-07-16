"use client";

import { LanguageToggle } from "./LanguageToggle";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { content } from "../text/content";
import { useLanguage } from "../context/LanguageContext";

export function MobileNav() {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col items-center text-center w-full">
      <div className="py-3 border-b border-base-4 border-opacity-10 w-full flex justify-center">
        <LanguageToggle />
      </div>
      <div className="py-3 w-full rounded-xl text-base-4 hover:bg-[#EE81F1] hover:text-base-1 font-semibold hover:cursor-pointer transition ease-in-out duration-200">
        <a href="#aboutMe">{content[language].nav.about}</a>
      </div>
      <div className="py-3 w-full rounded-xl text-base-4 hover:bg-[#EE81F1] hover:text-base-1 font-semibold hover:cursor-pointer transition ease-in-out duration-200">
        <a href="#projects">{content[language].nav.portfolio}</a>
      </div>
      <div className="py-3 mt-1">
        <WhatsAppCTA label={content[language].nav.cta} />
      </div>
    </div>
  );
}

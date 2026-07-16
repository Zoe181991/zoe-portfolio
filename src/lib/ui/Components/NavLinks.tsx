"use client";
import { content } from "../text/content";
import { useLanguage } from "../context/LanguageContext";

export function NavLinks() {
  const { language } = useLanguage();
  return (
    <ul className="hidden md:flex md:flex-row md:items-center md:gap-6">
      <li className="font-semibold text-base-4 hover:text-base-2 hover:cursor-pointer transition ease-in-out duration-150">
        <a href="#aboutMe">{content[language].nav.about}</a>
      </li>
      <li className="font-semibold text-base-4 hover:text-base-2 hover:cursor-pointer transition ease-in-out duration-150">
        <a href="#projects">{content[language].nav.portfolio}</a>
      </li>
    </ul>
  );
}

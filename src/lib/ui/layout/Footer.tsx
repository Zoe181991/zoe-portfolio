"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../../../app/globals.css";
import { content } from "../text/content";
import { useLanguage } from "../context/LanguageContext";
import whatsappIcon from "../../../../public/whatsappIcon.svg";
import phoneIcon from "../../../../public/phoneIcon.svg";
import mailIcon from "../../../../public/mailIcon.svg";
import linkedinIcon from "../../../../public/linkedinIcon.svg";
import githubIconColored from "../../../../public/githubIconColored.svg";
import { Reveal } from "../Components/Reveal";

export function Footer() {
  const { language } = useLanguage();
  const { heading, whatsapp, phone, moreLinksHeading, accessibility, privacy, copyright } =
    content[language].footer;
  const isHebrew = language === "he";
  const rowClass = `group flex items-center gap-3 transition-transform duration-200 hover:scale-90 ${
    isHebrew ? "flex-row justify-end" : "flex-row-reverse justify-start"
  }`;

  return (
    <footer
      id="contact"
      className="mt-8 flex flex-col w-full px-4 md:px-12 lg:px-24 py-12 bg-base-1 items-start"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mb-10">
        <Reveal className={`flex flex-col items-start gap-4 ${isHebrew ? "text-right" : "text-left"}`}>
          <h2 className="font-heading text-3xl font-bold text-base-2 transition-all duration-200 hover:scale-90 hover:text-base-2 cursor-default">{heading}</h2>
          <a href="https://api.whatsapp.com/send?phone=972509181991&text=%D7%94%D7%99%D7%99%20%D7%96%D7%95%D7%90%D7%99%2C%20%D7%90%D7%A0%D7%99%20%D7%A8%D7%95%D7%A6%D7%94%20%D7%A9%D7%AA%D7%A1%D7%A4%D7%A8%D7%99%20%D7%9C%D7%99%20%D7%A2%D7%95%D7%93%20%D7%A2%D7%9C%20%D7%91%D7%A0%D7%99%D7%99%D7%AA%20%D7%90%D7%AA%D7%A8%2F%D7%A2%D7%9E%D7%95%D7%93%20%D7%A0%D7%97%D7%99%D7%AA%D7%94" target="_blank" rel="noopener noreferrer" className={rowClass}>
            <Image src={whatsappIcon} alt="" width={22} height={22} />
            <span className="text-base-4 group-hover:text-base-2 transition-colors duration-200">{whatsapp}</span>
          </a>
          <a href="tel:+972509181991" aria-label={phone} className={rowClass}>
            <Image src={phoneIcon} alt="" width={22} height={22} />
            <span className="text-base-4 group-hover:text-base-2 transition-colors duration-200">050-918-1991</span>
          </a>
          <a href="mailto:zoebarkan@gmail.com" className={rowClass}>
            <Image src={mailIcon} alt="" width={22} height={22} />
            <span className="text-base-4 group-hover:text-base-2 transition-colors duration-200">zoebarkan@gmail.com</span>
          </a>
        </Reveal>

        <Reveal delay={120} className={`flex flex-col items-start gap-4 ${isHebrew ? "text-right" : "text-left"}`}>
          <h2 className="font-heading text-3xl font-bold text-base-2 transition-all duration-200 hover:scale-90 hover:text-base-2 cursor-default">{moreLinksHeading}</h2>
          <div className={`flex flex-row gap-4 ${isHebrew ? "justify-end" : "justify-start"}`}>
            <a
              href="https://www.linkedin.com/in/zoe-barkan-a1aa17252/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-200 hover:scale-90"
            >
              <Image src={linkedinIcon} alt="LinkedIn" width={22} height={22} />
            </a>
            <a
              href="https://github.com/Zoe181991"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-200 hover:scale-90"
            >
              <Image src={githubIconColored} alt="GitHub" width={22} height={22} />
            </a>
          </div>
          <Link
            href="/accessibility"
            className="inline-block text-sm text-base-4 text-opacity-70 underline transition-all duration-200 hover:scale-90 hover:text-base-2 hover:text-opacity-100"
          >
            {accessibility}
          </Link>
          <Link
            href="/privacy"
            className="inline-block text-sm text-base-4 text-opacity-70 underline transition-all duration-200 hover:scale-90 hover:text-base-2 hover:text-opacity-100"
          >
            {privacy}
          </Link>
        </Reveal>
      </div>

      <div
        className={`text-xs text-base-4 text-opacity-80 ${
          isHebrew ? "text-right" : "text-left"
        }`}
      >
        {copyright}
      </div>
    </footer>
  );
}

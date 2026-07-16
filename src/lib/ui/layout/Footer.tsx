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
  const rowClass = `flex items-center gap-3 ${
    isHebrew ? "flex-row justify-end" : "flex-row-reverse justify-start"
  }`;

  return (
    <div
      id="contact"
      className="mt-8 flex flex-col w-full px-8 md:px-16 py-12 bg-base-1 items-start"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-3xl mb-10">
        <Reveal className={`flex flex-col items-start gap-4 ${isHebrew ? "text-right" : "text-left"}`}>
          <h2 className="font-heading text-2xl font-bold text-base-4">{heading}</h2>
          <a href="https://wa.me/972509181991" target="_blank" rel="noopener noreferrer" className={rowClass}>
            <Image src={whatsappIcon} alt="" width={22} height={22} />
            <span className="text-base-4">{whatsapp}</span>
          </a>
          <a href="tel:+972509181991" aria-label={phone} className={rowClass}>
            <Image src={phoneIcon} alt="" width={22} height={22} />
            <span className="text-base-4">050-918-1991</span>
          </a>
          <a href="mailto:zoebarkan@gmail.com" className={rowClass}>
            <Image src={mailIcon} alt="" width={22} height={22} />
            <span className="text-base-4">zoebarkan@gmail.com</span>
          </a>
        </Reveal>

        <Reveal delay={120} className={`flex flex-col items-start gap-4 ${isHebrew ? "text-right" : "text-left"}`}>
          <h2 className="font-heading text-2xl font-bold text-base-4">{moreLinksHeading}</h2>
          <div className={`flex flex-row gap-4 ${isHebrew ? "justify-end" : "justify-start"}`}>
            <a href="https://www.linkedin.com/in/zoe-barkan-a1aa17252/" target="_blank" rel="noopener noreferrer">
              <Image src={linkedinIcon} alt="LinkedIn" width={22} height={22} />
            </a>
            <a href="https://github.com/Zoe181991" target="_blank" rel="noopener noreferrer">
              <Image src={githubIconColored} alt="GitHub" width={22} height={22} />
            </a>
          </div>
          <Link href="/accessibility" className="text-sm text-base-4 text-opacity-70 hover:text-opacity-100 underline">
            {accessibility}
          </Link>
          <Link href="/privacy" className="text-sm text-base-4 text-opacity-70 hover:text-opacity-100 underline">
            {privacy}
          </Link>
        </Reveal>
      </div>

      <div
        className={`text-xs text-base-4 text-opacity-60 ${
          isHebrew ? "text-right" : "text-left"
        }`}
      >
        {copyright}
      </div>
    </div>
  );
}

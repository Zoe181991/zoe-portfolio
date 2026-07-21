"use client";

import Image from "next/image";
import { Reveal } from "../Components/Reveal";
import { TypingText } from "../Components/TypingText";
import { WhatsAppCTA } from "../Components/WhatsAppCTA";
import { content } from "../text/content";
import { useLanguage } from "../context/LanguageContext";

interface headerProps {
  h1: string;
  h2?: string;
  badges?: string[];
}

export function Header({ h1, h2, badges }: headerProps) {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col w-full justify-center items-center pt-16 pb-8 px-4 md:px-12 lg:px-24">
      <Reveal className="flex flex-col md:flex-row items-center gap-10 md:gap-12 w-full max-w-4xl">
        <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-start">
          <h1 className="font-logo text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-base-2 to-base-4">
            {h1}
          </h1>

          {h2 && (
            <TypingText
              text={h2}
              className="text-lg md:text-2xl font-bold text-base-2"
            />
          )}

          {badges && badges.length > 0 && (
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className="text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full border border-base-2 border-opacity-30 text-base-2"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          <WhatsAppCTA
            label={content[language].nav.cta}
            className="btn-gradient btn-lift mt-2 inline-flex items-center gap-2 text-sm font-semibold text-base-1 px-6 py-3"
          />
        </div>

        <div className="relative shrink-0">
          <div className="absolute -top-3 -right-3 w-56 h-56 md:w-64 md:h-64 rounded-full bg-base-3 opacity-60 blur-0" />
          <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-sm">
            <Image
              unoptimized
              fill
              src="/images/profileImageHero.jpg"
              alt=""
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
          </div>
          <span className="absolute bottom-1 left-1 w-3.5 h-3.5 rounded-full bg-[#FD8928]" />
          <span className="absolute top-2 left-[-6px] w-2.5 h-2.5 rounded-full bg-[#EE81F1]" />
        </div>
      </Reveal>
    </div>
  );
}

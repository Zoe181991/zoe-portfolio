"use client";
import { content } from "../text/content";
import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "./Reveal";

export function WhatYouGet() {
  const { language } = useLanguage();
  const { whatYouGet } = content[language];
  const isHebrew = language === "he";
  const alignClass = isHebrew ? "text-right" : "text-left";

  return (
    <div className={`w-full max-w-5xl flex flex-col gap-4 mx-auto ${alignClass}`}>
      <Reveal className="font-heading text-3xl font-bold text-base-2">
        <h2>{whatYouGet.sectionTitle}</h2>
      </Reveal>
      <div className="flex flex-col gap-4">
        {whatYouGet.items.map((item, index) => (
          <Reveal
            key={index}
            delay={index * 100}
            className="flex flex-row gap-3 items-start rounded-2xl bg-white bg-opacity-90 p-4 shadow-sm"
          >
            <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-base-2 text-base-1 text-sm font-bold">
              {index + 1}
            </span>
            <p className={`text-base-4 text-opacity-90 ${alignClass}`}>
              {item}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

"use client";
import { content } from "../text/content";
import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "./Reveal";

export function ValueProp() {
  const { language } = useLanguage();
  const { problem, advantages, whatYouGet } = content[language];
  const isHebrew = language === "he";
  const alignClass = isHebrew ? "text-right" : "text-left";

  return (
    <div className="w-full flex flex-col items-center gap-16">
      <div className={`w-full max-w-2xl flex flex-col gap-4 ${alignClass}`}>
        <Reveal className="font-heading text-3xl font-bold text-base-4">
          {problem.sectionTitle}
        </Reveal>
        {problem.paragraphs.map((paragraph, index) => (
          <Reveal
            key={index}
            delay={index * 80}
            className="text-base-4 text-opacity-80"
          >
            {paragraph}
          </Reveal>
        ))}
      </div>

      <div className={`w-full max-w-2xl flex flex-col gap-4 ${alignClass}`}>
        <Reveal className="font-heading text-3xl font-bold text-base-4">
          {advantages.sectionTitle}
        </Reveal>
        {advantages.paragraphs.map((paragraph, index) => (
          <Reveal
            key={index}
            delay={index * 80}
            className="text-base-4 text-opacity-80"
          >
            {paragraph}
          </Reveal>
        ))}
      </div>

      <div className={`w-full max-w-2xl flex flex-col gap-4 ${alignClass}`}>
        <Reveal className="font-heading text-3xl font-bold text-base-4">
          {whatYouGet.sectionTitle}
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
    </div>
  );
}

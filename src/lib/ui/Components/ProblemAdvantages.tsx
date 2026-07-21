"use client";
import { content } from "../text/content";
import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "./Reveal";

export function ProblemAdvantages() {
  const { language } = useLanguage();
  const { problem, advantages } = content[language];
  const isHebrew = language === "he";
  const alignClass = isHebrew ? "text-right" : "text-left";

  return (
    <div className="w-full flex flex-col items-center gap-16">
      <div className={`w-full max-w-2xl flex flex-col gap-4 ${alignClass}`}>
        <Reveal className="font-heading text-3xl font-bold text-base-2">
          <h2>{problem.sectionTitle}</h2>
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
        <Reveal className="font-heading text-3xl font-bold text-base-2">
          <h2>{advantages.sectionTitle}</h2>
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
    </div>
  );
}

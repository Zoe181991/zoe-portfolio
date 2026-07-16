"use client";
import { content } from "../text/content";
import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "./Reveal";

export function WhoItsFor() {
  const { language } = useLanguage();
  const { sectionTitle, audiences, cta } = content[language].whoItsFor;
  const isHebrew = language === "he";

  return (
    <div className="w-full flex flex-col items-center">
      <Reveal className="font-heading flex mb-8 text-3xl font-bold text-base-4">
        {sectionTitle}
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {audiences.map((audience, index) => (
          <Reveal
            key={index}
            delay={index * 120}
            className={`rounded-2xl bg-white border border-base-4 border-opacity-10 shadow-sm p-6 lg:p-8 ${
              isHebrew ? "text-right" : "text-left"
            }`}
          >
            <h3 className="text-xl font-bold text-base-2 mb-3">
              {audience.title}
            </h3>
            <p className="text-base-4 text-opacity-80">
              {audience.description}
            </p>
          </Reveal>
        ))}
      </div>
      <Reveal delay={240} className="mt-12">
        <a
          href="#projects"
          className="btn-gradient inline-flex text-sm md:text-base font-semibold text-base-1 px-7 py-3"
        >
          {cta}
        </a>
      </Reveal>
    </div>
  );
}

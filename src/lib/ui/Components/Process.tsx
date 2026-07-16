"use client";
import { content } from "../text/content";
import { useLanguage } from "../context/LanguageContext";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { Reveal } from "./Reveal";

export function Process() {
  const { language } = useLanguage();
  const { sectionTitle, intro, steps, cta } = content[language].process;
  const isHebrew = language === "he";

  return (
    <div className="w-full flex flex-col items-center">
      <Reveal className="font-heading flex mb-3 text-3xl font-bold text-base-4">
        {sectionTitle}
      </Reveal>
      <Reveal delay={80} className="max-w-2xl mb-8 text-center">
        <p className="text-base-4 text-opacity-80">{intro}</p>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {steps.map((step, index) => (
          <Reveal
            key={index}
            delay={index * 120}
            className={`flex flex-col gap-2 rounded-2xl bg-base-5 bg-opacity-90 p-6 ${
              isHebrew ? "text-right" : "text-left"
            }`}
          >
            <span className="text-sm font-bold text-base-3">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-bold text-white">{step.title}</h3>
            <p className="text-sm text-white text-opacity-80">
              {step.description}
            </p>
          </Reveal>
        ))}
      </div>
      <Reveal delay={480}>
        <WhatsAppCTA
          label={cta}
          className="btn-gradient mt-10 inline-flex items-center gap-2 text-sm md:text-base font-semibold text-base-1 px-7 py-3"
        />
      </Reveal>
    </div>
  );
}

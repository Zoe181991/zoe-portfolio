"use client";
import { content } from "../text/content";
import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "./Reveal";

export function Process() {
  const { language } = useLanguage();
  const { sectionTitle, intro, steps } = content[language].process;
  const isHebrew = language === "he";

  return (
    <div className="w-full flex flex-col items-center">
      <Reveal className="font-heading flex justify-start mb-3 text-3xl font-bold text-base-2 w-full max-w-5xl">
        <h2>{sectionTitle}</h2>
      </Reveal>
      <Reveal delay={80} className="max-w-2xl mb-8 text-center">
        <p className="text-base-4 text-opacity-80">{intro}</p>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {steps.map((step, index) => (
          <Reveal
            key={index}
            delay={index * 150}
            duration={1500}
            className="flex flex-col"
          >
            <div
              className={`flex flex-col flex-1 gap-2 rounded-2xl bg-base-5 bg-opacity-90 p-6 shadow-sm hover:shadow-lg hover:scale-90 transition-all duration-300 ${
                isHebrew ? "text-right" : "text-left"
              }`}
            >
              <span className="text-sm font-bold text-base-3">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              {step.description && (
                <p className="text-sm text-white text-opacity-80">
                  {step.description}
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

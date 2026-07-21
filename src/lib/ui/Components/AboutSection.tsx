"use client";
import React from "react";
import Image from "next/image";
import { content } from "../text/content";
import { useLanguage } from "../context/LanguageContext";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { Reveal } from "./Reveal";
import { SkillIcon, SkillIconKey } from "./SkillIcon";

const skillIconKeys: SkillIconKey[] = [
  "wix",
  "wordpress",
  "flag",
  "pen",
  "devices",
  "canva",
  "video",
];

export function AboutSection() {
  const { language } = useLanguage();
  const { heading, bio, ctaLabel, skillsHeading, skills } =
    content[language].about;
  const isHebrew = language === "he";

  return (
    <div className="w-full flex flex-col items-center lg:items-start lg:flex-row h-full gap-4 lg:gap-12">
      <div className="flex w-full lg:w-2/3 flex-col h-full max-w-2xl">
        <Reveal className="font-heading text-3xl mt-2 font-bold flex justify-start">
          <h2>{heading}</h2>
        </Reveal>
        <Reveal
          delay={100}
          className={`inline-flex flex-col text-base md:text-lg  gap-4 mt-10 mb-8 bg-white bg-opacity-90 rounded-2xl p-6 lg:p-10 ${
            isHebrew ? "text-right" : "text-left"
          }`}
        >
          <ul className="opacity-100 text-md lg:text-lg text-base-4 leading-relaxed space-y-3.5">
            {bio.map((paragraph, index) => (
              <li key={index}>{paragraph}</li>
            ))}
          </ul>
          <WhatsAppCTA
            label={ctaLabel}
            className="btn-gradient btn-lift self-center md:self-start mt-2 inline-flex items-center gap-2 text-sm md:text-base font-semibold text-base-1 px-7 py-3"
          />
        </Reveal>
        <Reveal
          delay={200}
          className="gap-4 mt-2 mb-8 bg-base-5 bg-opacity-30 rounded-2xl p-6 lg:p-10"
        >
          <h3 className="font-heading flex justify-start text-3xl font-bold mb-7 text-base-2">
            {skillsHeading}
          </h3>
          <div className="flex flex-wrap gap-3 w-full">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 text-base-4 text-xs md:text-sm px-4 py-2 rounded-full border border-base-1 bg-base-1 bg-opacity-90"
              >
                {skillIconKeys[index] && <SkillIcon name={skillIconKeys[index]} />}
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={150} className="lg:w-1/3">
        <div className="flex group transition transition-all ease-in-out duration-500 hover:rotate-6 relative z-10">
          <Image
            unoptimized
            src={`/images/profileImage1.jpg`}
            width={450}
            height={600}
            alt="profile"
          />
        </div>
      </Reveal>
    </div>
  );
}

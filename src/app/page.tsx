"use client";
import {
  Footer,
  Header,
  Navbar,
  Section,
  AboutSection,
  WhoItsFor,
  ProblemAdvantages,
  WhatYouGet,
  ProjectsGrid,
  Process,
  Reveal,
} from "ui";
import { content } from "@/lib/ui/text/content";
import { useLanguage } from "@/lib/ui/context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-body-bg-dots ">
        <div className="bg-body-bg-shapes scroll-smooth	">
          <Header
            h1={content[language].hero.name}
            h2={content[language].hero.tagline}
            badges={content[language].hero.badges}
          />

          <Section id="whyMe">
            <ProblemAdvantages />
          </Section>

          <Section id="whoItsFor">
            <WhoItsFor />
          </Section>

          <Section id="whatYouGet">
            <WhatYouGet />
          </Section>

          <Section id="projects">
            <Reveal className="font-heading flex justify-start mb-10 text-3xl font-bold text-base-2 w-full">
              <h2>{content[language].projects.sectionTitle}</h2>
            </Reveal>
            <div className="w-full flex flex-col items-center">
              <ProjectsGrid />
            </div>
          </Section>

          <Section id="aboutMe">
            <AboutSection />
          </Section>

          <Section id="process">
            <Process />
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}

"use client";
import {
  Footer,
  Header,
  Navbar,
  Section,
  AboutSection,
  WhoItsFor,
  ValueProp,
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

          <Section id="whoItsFor">
            <WhoItsFor />
          </Section>

          <Section id="whyMe">
            <ValueProp />
          </Section>

          <Section id="projects">
            <Reveal className="font-heading flex mb-10 text-3xl font-bold text-base-4">
              {content[language].projects.sectionTitle}
            </Reveal>
            <div className="w-full flex flex-col items-center">
              <ProjectsGrid />
            </div>
          </Section>

          <div className="w-full px-8">
            <Section id="aboutMe">
              <AboutSection />
            </Section>
          </div>

          <Section id="process">
            <Process />
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}

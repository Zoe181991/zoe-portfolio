"use client";
import {
  Footer,
  Header,
  Navbar,
  Section,
  Card,
  AboutSection,
  WhoItsFor,
  Process,
  Reveal,
} from "ui";
import { WebsitesCards } from "ui";
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

          <Section id="projects">
            <Reveal className="font-heading flex mb-10 text-3xl font-bold text-base-4">
              {content[language].projects.sectionTitle}
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
              {WebsitesCards.map((card, index) => (
                <Reveal key={card.id} delay={(index % 3) * 120}>
                  <Card
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    link={card.link}
                    newWindow
                  />
                </Reveal>
              ))}
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

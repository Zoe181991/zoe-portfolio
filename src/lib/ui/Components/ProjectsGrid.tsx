"use client";
import { useState } from "react";
import { Card } from "./Card";
import { Reveal } from "./Reveal";
import { WebsitesCards } from "../text/WebsitesCards";
import { content } from "../text/content";
import { useLanguage } from "../context/LanguageContext";

const INITIAL_COUNT = 8;

export function ProjectsGrid() {
  const { language } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const visibleCards = expanded
    ? WebsitesCards
    : WebsitesCards.slice(0, INITIAL_COUNT);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {visibleCards.map((card, index) => (
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
      {!expanded && WebsitesCards.length > INITIAL_COUNT && (
        <button
          onClick={() => setExpanded(true)}
          className="btn-gradient btn-lift mt-10 text-sm md:text-base font-semibold text-base-1 px-7 py-3"
        >
          {content[language].projects.showMore}
        </button>
      )}
    </>
  );
}

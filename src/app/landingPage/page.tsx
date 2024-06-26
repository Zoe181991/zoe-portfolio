import { Footer, Header, Navbar, Section, Card, AboutSection } from "ui";
import { WebsitesCards } from "ui";
import { Varela_Round } from "next/font/google";
import React from "react";

const varela = Varela_Round({ subsets: [], weight: ["400"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-body-bg-dots ">
        <div className="bg-body-bg-shapes scroll-smooth	">
          <Header h1={"Websites"} h2={"examples"} />
          <Section id="projects">
            <div className="flex mb-4 text-3xl font-bold text-base-4  ">
              <span className={varela.className}>הפרויקטים שלי</span>
            </div>
            <div className="flex-col flex  lg:flex-row justify-between items-center gap-2 w-full ">
              {WebsitesCards.map((card) => (
                <Card
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  link={card.link}
                  skills={card.skills}
                  newWindow={true}
                  rtl={true}
                />
              ))}
            </div>
          </Section>

          <div className="bg-about-bg-image w-full  bg-cover px-8"></div>
        </div>
      </main>
      <Footer />
    </>
  );
}

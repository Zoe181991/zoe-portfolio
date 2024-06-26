import { Footer, Header, Navbar, Section, Card, AboutSection } from "ui";
import { WebsitesCards } from "ui";
import { Open_Sans } from "next/font/google";
import React from "react";

const openSans = Open_Sans({ subsets: [], weight: ["400"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-body-bg-dots ">
        <div className="bg-body-bg-shapes scroll-smooth	">
          <Header h1={"Zoe Barkan"} />
          <Section id="projects">
            <div className="flex mb-4 text-3xl font-bold text-base-4  ">
              <span className={openSans.className}>הפרויקטים שלי</span>
            </div>
            <div className="">
              <div className=" justify-items-center  grid-cols-1 lg:grid-cols-3 grid   gap-4 w-full ">
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
            </div>
          </Section>

          <div className="bg-about-bg-image w-full  bg-cover px-8"></div>
        </div>
      </main>
      <Footer />
    </>
  );
}

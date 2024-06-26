import { Footer, Header, Navbar, Section, Card, AboutSection } from "ui";
import { CardContent } from "ui";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-body-bg-dots ">
        <div className="bg-body-bg-shapes scroll-smooth	">
          <Header h1={"Zoe Barkan"} h2={"fullstack developer"} />
          <Section id="projects">
            <div className="flex mb-4 text-3xl font-bold text-base-4  ">
              Projects{" "}
            </div>
            <div className="flex-col flex  lg:flex-row justify-between items-center gap-2 w-full ">
              {CardContent.map((card) => (
                <Card
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  link={card.link}
                  skills={card.skills}
                />
              ))}
            </div>
          </Section>

          <div className="bg-about-bg-image w-full  bg-cover px-8">
            <Section id="aboutMe">
              <AboutSection />
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

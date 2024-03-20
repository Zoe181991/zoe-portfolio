import { Footer, Header, Navbar, Section, Card, AboutSection } from "ui";
import { CardContent } from "ui";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-body-bg-dots ">
        <div className="bg-body-bg-shapes scroll-smooth	">
          <Header />

          <Section id="projects">
            <div className="m-4 font-semibold"> Projects</div>
            <div className="flex-col flex md:flex-row justify-between w-full gap-8">
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
          <Section id="aboutMe">
            about
            <AboutSection />
          </Section>
          <div className=" bg-about-bg-image w-full h-screen bg-cover	"></div>

          <Footer />
        </div>
      </main>
    </>
  );
}

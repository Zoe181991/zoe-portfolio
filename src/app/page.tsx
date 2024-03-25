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
            <div className="flex mb-4 text-2xl font-semibold"> Projects</div>
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

          <div className=" bg-about-bg-image w-full  bg-cover p-8	">
            <Section id="aboutMe">
              <div className="mb-6 text-2xl font-semibold"> About me</div>
              <AboutSection  />
            </Section>

          </div>

        </div>

      </main>
      <Footer />

    </>
  );
}

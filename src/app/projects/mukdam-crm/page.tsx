import { Section, Footer, Navbar } from "ui";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col bg-body-bg-dots ">
        <div className="bg-body-bg-shapes scroll-smooth h-screen	">
          <Section id="aboutMe">mukdam-crm</Section>
          <Footer />
        </div>
      </main>
    </>
  );
}

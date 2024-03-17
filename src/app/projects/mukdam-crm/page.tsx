import { Section, Footer, Navbar, HeadLine } from "ui";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col bg-body-bg-dots ">
        <div className="bg-body-bg-shapes scroll-smooth h-screen	">
          <div className=" flex flex-row justify-center p-24 max-h-fit min-h-10 ">
            <div className="w-full max-w-desktop flex grow flex-col">
              <HeadLine text={"Mukdam CRM system"} />
              <div className="text-md mt-4">
                NextJS | TypeScript | Drizzle ORM | TailwindCSS{" "}
              </div>

              <div className="text-white mt-8 flex flex-row w-3/4 lg:w-1/2">
                I built a CRM system to manage Accounts and Tokens with full
                CRUD options. This system is crafted to connect to Make (an
                automation software) using specific endpoints that retrieve data
                and connect to the onboarding workflow on WhatsApp.
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

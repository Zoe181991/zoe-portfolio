import { Section, Footer, Navbar, HeadLine } from "ui";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col bg-body-bg-dots ">
        <div className="bg-body-bg-shapes scroll-smooth h-screen flex	">
          <div className=" flex flex-row justify-center p-24  max-h-fit min-h-10 ">
            <div className="w-full max-w-desktop flex grow flex-col">
              <div className="flex flex-col basis-1/3">
              <HeadLine text={"Mukdam CRM system"} />
              <div className="text-md mt-4">
                NextJS | TypeScript | Drizzle ORM | TailwindCSS{" "}
              </div>
              </div>
              <div className="text-white mt-8 flex flex-col basis-2/3 lg:w-1/2">
                <p>
                Mukdam is a service that enables you to monitor and manage your pension information. The user registers the service via WhatsApp chat and subsequently receives a monthly report .
                </p>
              <p>
                The goal of my project was to replace a third-party CRM system with an insourced system. The CRM system I built is used for Account management and connects to Make (an automation software) that handles the WhatsApp communication.
            </p>
              <p>
                The CRM system contains an interface for the account manager and has full CRUD options. The backend has endpoints for the account management and specific endpoints for querying that are used by the Make processes.
            </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />

      </main>
    </>
  );
}

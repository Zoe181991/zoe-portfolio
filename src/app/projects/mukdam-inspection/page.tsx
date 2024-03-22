import {Section, Footer, Navbar, HeadLine, ImageGallery} from "ui";

export default function Home() {

    const imagesURLS = [{text:"1", url:"../../../../public/svg/mailIcon.svg"}, {text:"2", url:"../../../../public/svg/githubIcon.svg"}, {text:"3", url:"../../../../public/svg/likedinIcon.svg"}]

    return (
    <>
        <Navbar />

        <main className="flex flex-col bg-body-bg-dots ">
            <div className="bg-body-bg-shapes scroll-smooth h-screen flex	">
                <div className="w-full flex flex-row justify-center p-24  max-h-fit min-h-10 ">
                    <div className="w-full max-w-desktop flex grow gap-4">
                        <div className="flex  flex-col basis-1/2">
                            <HeadLine text={"Mukdam Inspection system"} />
                            <div className="text-md mt-4">
                                PostgreSQL | Drizzle ORM | NextJS  | TypeScript |  | TailwindCSS | DaisyUI | HeadlessUI | NestJS                            </div>
                            <div className="text-white mt-8 flex flex-col gap-6 ">
                                <p>
                                    Mukdam is a service that enables you to monitor and manage your pension information. The user registers the service via WhatsApp chat and subsequently receives a monthly report.                                </p>
                                <p>
                                    The project had 4 parts:
                                    Writing complex queries in PostgreSQL using JSON/JSONB
                                    Writing the algorithm that performs the checks
                                    Building a front-end dashboard for managing the inspections (used by the account manager)
                                    Assimilating the results from the inspection system in the front-end monthly report
                                </p>
                                <p>
                                    The data received from the insurance companies arrives in XML files with a certain structure and is translated into long, complex JSON fields. The first step in this project was to extract the correct data from the correct fields in order to build the monthly report. The queries were written in PostgreSQL using JSON/JSONB. Later on, I re-wrote parts of the code using Drizzle ORM.                                </p>

                            <p>The next step of this project was to perform checks for the information received from the insurance companies. Each policy’s current data is compared to the data from the last month, or to the initial data from the insurance company. The inspection system checks for deviations in the management fees, changes in the investment strategies, deviations in the expected balance, missing policies, or new policies. </p>
                            <p>I designed the dashboard using TailwindCSS, HeadlessUI, and DaisyUI and built unique reusable components for usage across the entire app.</p>
                            </div>
                        </div>
                        <div className="basis-1/2 flex flex-col gap-4 mt-8 justify-items-start">
                            <ImageGallery imagesURLS={imagesURLS}/>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </main>
    </>
  );
}

import {Section, Footer, Navbar, HeadLine, ImageGallery, ImageGalleryMukdamCrmContent} from "ui";
import {ImageGalleryMukdamInspectionContent} from "ui";
import Image from "next/image";
import arrowRight from "../../../../public/svg/arrowRight.svg";
import Link from "next/link";
import React from "react";

export default function Home() {

    const imagesURLS = [{text:"1", url:"../../../../public/svg/mailIcon.svg"}, {text:"2", url:"../../../../public/svg/githubIcon.svg"}, {text:"3", url:"../../../../public/svg/likedinIcon.svg"}]

    return (
    <>
        <Navbar />
        <main className="flex flex-col bg-body-bg-dots ">
            <div className="bg-body-bg-shapes scroll-smooth	">
                <div className="w-full flex flex-col justify-center pt-8 pb-24 px-12 md:px-24  max-h-fit min-h-10 mb-8 ">


                    <div className="flex flex-row gap-8 items-center ">
                        <Link href="/" className="btn btn-circle text-base-3 hover:bg-white hover:bg-opacity-60 hover:text-base-1">❮</Link>
                        <div>
                            <HeadLine text={"Mukdam Inspection System"} />

                            <div className="text-sm lg:text-md mt-4 text-base-4">
                                NextJS | TypeScript | Drizzle ORM | TailwindCSS{" "}
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-between flex-col lg:flex-row mt-8 gap-4 lg:gap-8">

                        <div className="h-fit flex flex-col basis-3/5 mockup-browser border border-base-300 bg-base-1">
                            <div className="mockup-browser-toolbar">
                                <div className="input border border-base-300">https://mukdam-demo.com</div>
                            </div>
                            <div className="flex justify-center  border-t border-base-300">
                                <ImageGallery imagesURLS={ImageGalleryMukdamInspectionContent} projectName={"mukdam-inspection"}/>
                            </div>
                        </div>

                        <div className="flex flex-col basis-2/5  gap-8 text-white">
                                <p>
                                    Mukdam is a service that enables you to monitor and manage your pension information. The user registers the service via WhatsApp chat and subsequently receives a monthly report.</p>
                                <div className="flex flex-col relative ">
                                    <div className=" bg-base-2 rounded-md  z-0 p-4 flex flex-col">
                                        <p className="mb-2">The project had 4 parts:</p>
                                        <ul className="space-y-3.5">
                                            <li>
                                                <Image src={arrowRight} alt={"menu"} width={24} height={24} style={{display:"inline", marginRight:10}} />Writing complex queries in PostgreSQL using JSON/JSONB</li>
                                            <li><Image src={arrowRight} alt={"menu"} width={24} height={24} style={{display:"inline", marginRight:10}} /> Writing the algorithm that performs the checks</li>
                                            <li><Image src={arrowRight} alt={"menu"} width={24} height={24} style={{display:"inline", marginRight:10}} /> Building a front-end dashboard for managing the inspections (used by the account manager)
                                            </li>
                                            <li><Image src={arrowRight} alt={"menu"} width={24} height={24} style={{display:"inline", marginRight:10}} /> Assimilating the results from the inspection system in the front-end monthly report</li>
                                        </ul>
                                    </div>
                                    <div className="w-[calc(100%+1rem)]  opacity-60 rounded-md h-full -z-50  bg-gradient-to-r from-base-2 to-base-4 absolute  -bottom-3 -left-3  border-b-base-2 border-b-2"></div>
                                </div>

                                <p>
                                    The data received from the insurance companies arrives in XML files with a certain structure and is translated into long, complex JSON fields. The first step in this project was to extract the correct data from the correct fields in order to build the monthly report. The queries were written in PostgreSQL using JSON/JSONB. Later on, I re-wrote parts of the code using Drizzle ORM.                                </p>

                                <p>The next step of this project was to perform checks for the information received from the insurance companies. Each policy’s current data is compared to the data from the last month, or to the initial data from the insurance company. The inspection system checks for deviations in the management fees, changes in the investment strategies, deviations in the expected balance, missing policies, or new policies. </p>
                                <p>I designed the dashboard using TailwindCSS, HeadlessUI, and DaisyUI and built unique reusable components for usage across the entire app.</p>

                        </div>
                    </div>

                </div>

            </div>

        </main>

        <Footer />


    </>
  );
}

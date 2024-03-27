import {Section, Footer, Navbar, HeadLine, ImageGallery, ImageGalleryMukdamInspectionContent} from "ui";
import {ImageGalleryMukdamCrmContent} from "ui";
import Image from "next/image";
import arrowRight from "../../../../public/svg/arrowRight.svg";
export default function Home() {

  return (
    <>
      <Navbar />

      <main className="flex flex-col bg-body-bg-dots ">
        <div className="bg-body-bg-shapes scroll-smooth	">


            <div className="w-full flex flex-col justify-center pt-8 pb-24 px-12 md:px-24  max-h-fit min-h-10 mb-8 ">
            <HeadLine text={"Mukdam CRM system"} />
            <div className="text-sm lg:text-md mt-4 text-base-4">
              NextJS | TypeScript | Drizzle ORM | TailwindCSS{" "}
            </div>
                <div className="w-full flex justify-between flex-col lg:flex-row mt-8 gap-4 lg:gap-8">

                        <div className="h-fit flex flex-col basis-3/5 mockup-browser border border-base-300 bg-base-1">
                            <div className="mockup-browser-toolbar">
                                <div className="input border border-base-300">https://mukdam-demo.com</div>
                            </div>
                            <div className="flex justify-center  border-t border-base-300">
                                <ImageGallery imagesURLS={ImageGalleryMukdamCrmContent}/>
                            </div>
                        </div>

                    <div className="flex flex-col basis-2/5  gap-8 text-white">
                        <p>
                            Mukdam is a service that enables you to monitor and manage your pension information. The user registers the service via WhatsApp chat and subsequently receives a monthly report.</p>
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

                {/*<div className="w-full flex max-h-lvh justify-between flex-col mt-8 lg:flex-row grow shrink gap-16  sm:gap-28 md:gap-32 grow shrink  lg:gap-8">*/}
        {/*      <div className=" lg:w-1/2 w-full max-h-fit 	">*/}
        {/*        <ImageGallery imagesURLS={ImageGalleryMukdamCrmContent}/>*/}
        {/*      </div>*/}
        {/*      <div className="h-8 md:h-10"></div>*/}
        {/*      <div className="flex flex-col h-full lg:w-1/2 text-white gap-6 lg:mt-0 ">*/}
        {/*        <p>*/}
        {/*          Mukdam is a service that enables you to monitor and manage your pension information. The user registers the service via WhatsApp chat and subsequently receives a monthly report.</p>*/}
        {/*        <div className="flex flex-col relative ">*/}
        {/*          <p>*/}
        {/*            Mukdam is a service that enables you to monitor and manage your pension information. The user registers the service via WhatsApp chat and subsequently receives a monthly report .*/}
        {/*          </p>*/}
        {/*          <p>*/}
        {/*            The goal of my project was to replace a third-party CRM system with an insourced system. The CRM system I built is used for Account management and connects to Make (an automation software) that handles the WhatsApp communication.*/}
        {/*          </p>*/}
        {/*          <p>*/}
        {/*            The CRM system contains an interface for the account manager and has full CRUD options. The backend has endpoints for the account management and specific endpoints for querying that are used by the Make processes.*/}
        {/*          </p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        </div>
          </div>
        </div>
      </main>
      <Footer />



    </>
  );
}

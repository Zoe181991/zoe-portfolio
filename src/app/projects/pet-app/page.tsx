import {Section, Footer, Navbar, HeadLine, ImageGallery, ImageGalleryMukdamCrmContent} from "ui";
import {ImageGalleryPetAppContent} from "ui";
import Link from "next/link";
import React from "react";

export default function Home() {

  return (
    <>
      <Navbar />
        <main className="flex flex-col bg-body-bg-dots ">
            <div className="bg-body-bg-shapes scroll-smooth	">
                <div className="w-full flex flex-col justify-center pt-8 pb-24 px-12 md:px-24  max-h-fit min-h-10 mb-8 ">
                    <div className="flex flex-row gap-8 items-center ">
                        <Link href="/" className="btn btn-circle text-base-3 hover:bg-white hover:bg-opacity-60 hover:text-base-1">❮</Link>
                        <div>
                            <HeadLine text={"Pet App"} />

                            <div className="text-sm lg:text-md mt-4 text-base-4">
                                React | MongoDB | Vercel | ChakraUI | Node.js
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-between flex-col lg:flex-row mt-8 gap-4 lg:gap-8">
                        <div className="h-fit flex flex-col basis-3/5 mockup-browser border border-base-300 bg-base-1">
                            <div className="mockup-browser-toolbar">
                                <div className="input border border-base-300">https://mukdam-demo.com</div>
                            </div>
                            <div className="flex justify-center  border-t border-base-300">
                                <ImageGallery imagesURLS={ImageGalleryPetAppContent} projectName={"mukdam-crm"}/>
                            </div>
                        </div>

                        <div className="flex flex-col basis-2/5  gap-8 text-white">
                            <p>
                                Get a pet today! Pawsitive adoptions allow you to get the pet you have always wished for.
                                Search for your pet and save it to your wishlist. You can register and adopt or foster it for a short period of time.                   </p>
                            <p>
                                I had a great time putting this app together, I learned a lot about the meaning of being a full-stack developer and crafting the entire app end-to-end.                  </p>

                            <p>This was the final project of my studies at the ITC full-stack development bootcamp. The project had three main parts:
                                Building the front-end using ChakraUI and additional code - guest preview, user preview, and manager preview.
                                Building the backend database using MongoDB.
                                Deploying the app using Vercel.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </main>


        <Footer />
    </>
  );
}


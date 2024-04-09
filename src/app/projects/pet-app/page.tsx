import { Footer, Navbar, HeadLine, ImageGallery } from "ui";
import Image from "next/image";
import { ImageGalleryPetAppContent } from "ui";
import Link from "next/link";
import React from "react";
import petAppLogo from "../../../../public/images/projects/pet-app/logo.png";
import arrowRight from "../../../../public/svg/arrowRight.svg";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-body-bg-dots ">
        <div className="bg-body-bg-shapes scroll-smooth	">
          <div className="w-full flex flex-col justify-center pt-8 pb-24 px-12 md:px-24  max-h-fit min-h-10 mb-8 ">
            <div className="flex flex-row gap-8 items-center ">
              <Link
                href="/"
                className="btn btn-circle text-base-3 hover:bg-white hover:bg-opacity-60 hover:text-base-1"
              >
                ❮
              </Link>
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
                  <div className="input border border-base-300">
                    https://pawsitive-adoptions.com
                  </div>
                </div>
                <div className="flex justify-center  border-t border-base-300">
                  <ImageGallery
                    imagesURLS={ImageGalleryPetAppContent}
                    projectName={"pet-app"}
                  />
                </div>
              </div>

              <div className="flex flex-col basis-2/5  gap-8 text-white">
                <div className="flex gap-6  w-full">
                  <a
                    className="w-full"
                    href="https://pet-app-fe.vercel.app/"
                    target={"_blank"}
                  >
                    <div className="h-16 w-full flex gap-8 items-center hover:bg-base-5 hover:bg-opacity-60  flex border-base-2 border-2 hover:cursor-pointer hover:transition hover:transition-all hover:ease-in-out hover:duration-150 hover:scale-105 flex-row flex text-lg font-extrabold text-base-2 rounded-md px-4 py-2 ">
                      <Image
                        src={petAppLogo}
                        width={70}
                        height={70}
                        alt={"logo"}
                      />
                      <div className="">Live ❯</div>
                    </div>
                  </a>

                  <a
                    className="w-full"
                    href="https://github.com/Zoe181991/petAppFE"
                    target={"_blank"}
                  >
                    <div className="h-16 w-full flex gap-8 items-center hover:bg-base-5 hover:bg-opacity-60  flex border-base-2 border-2 hover:cursor-pointer hover:transition hover:transition-all hover:ease-in-out hover:duration-150 hover:scale-105 flex-row flex text-lg font-extrabold text-base-2 rounded-md px-4 py-2 ">
                      <svg
                        stroke="white"
                        fill="white"
                        stroke-width="0"
                        viewBox="0 0 448 580"
                        className="icon h-10 w-10 "
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                      </svg>
                      <div>Code ❯</div>
                    </div>
                  </a>
                </div>
                <p>
                  Get a pet today! Pawsitive adoptions allow you to get the pet
                  you have always wished for. Search for your pet and save it to
                  your wishlist. You can register and adopt or foster it for a
                  short period of time.{" "}
                </p>

                <div className=" bg-base-2 rounded-md  z-0 p-4 flex flex-col">
                  <p className="mb-2">
                    {" "}
                    This was the final project of my studies at the ITC
                    full-stack development bootcamp. The project had three main
                    parts:
                  </p>
                  <ul className="space-y-3.5">
                    <li>
                      <Image
                        src={arrowRight}
                        alt={"menu"}
                        width={24}
                        height={24}
                        style={{ display: "inline", marginRight: 10 }}
                      />{" "}
                      Building the front-end using ChakraUI and additional code
                      - guest preview, user preview, and admin preview.
                    </li>
                    <li>
                      <Image
                        src={arrowRight}
                        alt={"menu"}
                        width={24}
                        height={24}
                        style={{ display: "inline", marginRight: 10 }}
                      />{" "}
                      Building the backend database using MongoDB.
                    </li>
                    <li>
                      <Image
                        src={arrowRight}
                        alt={"menu"}
                        width={24}
                        height={24}
                        style={{ display: "inline", marginRight: 10 }}
                      />{" "}
                      Deploying the app using Vercel.
                    </li>
                  </ul>
                </div>
                <p>
                  I had a great time putting this app together, I learned a lot
                  about the meaning of being a full-stack developer and crafting
                  the entire app end-to-end.{" "}
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

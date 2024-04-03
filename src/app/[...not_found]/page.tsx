import { Footer, Navbar } from "ui";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-body-bg-dots ">
        <div className="bg-body-bg-shapes scroll-smooth	">
          <div className="h-screen">
            <div className="m-30 p-40 items-center flex flex-col ">
              <h1 className="text-6xl text-white font-bold  opacity-50 px-4 py-2 rounded-md">
                Page not found – 404!
              </h1>

              <div className="mt-5 hover:transition hover:transition-all hover:ease-in-out hover:duration-150 hover:scale-105 flex-row flex text-lg font-extrabold text-base-1 rounded-md px-4 py-2  bg-gradient-to-r from-base-2 to-base-4">
                <a href="/">Back to home page ❯</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

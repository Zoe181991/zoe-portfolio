"use client";
import React from "react";
import { Footer, Header, Navbar, content, useLanguage } from "../lib/ui";

function NotFound() {
  const { language } = useLanguage();
  const { title, message, backHome } = content[language].notFound;

  return (
    <div>
      <Navbar />
      <main className="flex flex-col bg-body-bg-dots ">
        <div className="bg-body-bg-shapes scroll-smooth	">
          <Header h1={title} h2={message} />
          <a href="/">
            <div className="w-full bg-main flex justify-center items-center gap-1 cursor-pointer ">
              <div className="h-full w-fit items-center hover:bg-base-5 hover:bg-opacity-90 hover:text-base-1 border-base-2 border-2 hover:cursor-pointer hover:transition hover:transition-all hover:ease-in-out hover:duration-150 hover:scale-105 flex-row flex text-lg font-extrabold text-base-2 rounded-md px-4 py-2 ">
                <div className="text-sm md:text-lg ">{backHome}</div>
              </div>
            </div>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;

import React from "react";
import { Footer, Header, Navbar } from "../lib/ui";
function NotFound(props) {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col bg-body-bg-dots ">
        <div className="bg-body-bg-shapes scroll-smooth	">
          <Header h1={"Oops!"} h2={"404 - sorry, this page was not found!"} />
          <a href="/">
            <div className="w-full bg-main flex justify-center items-center gap-1 cursor-pointer ">
              <div className="h-full w-fit items-center hover:bg-base-5 hover:bg-opacity-60   border-base-2 border-2 hover:cursor-pointer hover:transition hover:transition-all hover:ease-in-out hover:duration-150 hover:scale-105 flex-row flex text-lg font-extrabold text-base-2 rounded-md px-4 py-2 ">
                <div className="text-sm md:text-lg ">Take me back home ❯</div>
              </div>
            </div>
          </a>
          <div className="bg-about-bg-image w-full  bg-cover px-8"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;

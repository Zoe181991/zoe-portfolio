import React from "react";
import "../../../app/globals.css";

export function Footer() {
  return (
    <div className="mt-16 bottom-0 flex flex-col w-full px-16 bg-base-1 h-48 justify-center items-center">
      <ul className="flex flex-row gap-8">
        <li className="hover:transition hover:transition-all hover:ease-in-out hover:duration-150 hover:scale-125 flex-row flex text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-base-2 to-base-4">
          <a
            href="https://www.linkedin.com/in/zoe-barkan-a1aa17252/"
            target="_blank"
          >
            linkedin
          </a>
        </li>
        <li className="hover:transition hover:transition-all hover:ease-in-out hover:duration-150 hover:scale-125 flex-row flex text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-base-2 to-base-4">
          <a href="https://github.com/Zoe181991" target="_blank">
            github
          </a>
        </li>
        <li className="hover:transition hover:transition-all hover:ease-in-out hover:duration-150 hover:scale-125 flex-row flex text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-base-2 to-base-4">
          <a href="mailto:zoebarkan@gmail.com" target="_blank">
            email
          </a>
        </li>
      </ul>
      <div className="text-xs mt-8 font-light">
        © Copyright 2023 by Zoe Barkan
      </div>
    </div>
  );
}

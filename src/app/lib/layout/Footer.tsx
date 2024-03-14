import React from "react";
import "../../../app/globals.css";

export function Footer() {
  return (
    <div className="flex flex-col w-full px-16 bg-base-1 h-48 justify-center items-center">
      <ul className="flex flex-row gap-6">
        <li className="flex-row flex text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-cyan-200">
          linkedin
        </li>
        <li className="flex-row flex text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-cyan-200">
          github
        </li>
        <li className="flex-row flex text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-cyan-200">
          email
        </li>
      </ul>
      <div className="mt-2 font-light">© Copyright 2023 by Zoe Barkan</div>
    </div>
  );
}

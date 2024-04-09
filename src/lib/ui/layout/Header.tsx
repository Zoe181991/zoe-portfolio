"use client";

import hover3d from "../../utils/hover";
import { useRef } from "react";
import Image from "next/image";

export function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  const borderHover = hover3d(headerRef, { x: 30, y: -40, z: 30 });
  const imageHover = hover3d(headerRef, { x: 20, y: -5, z: 11 });

  return (
    <div
      className="flex flex-col w-full justify-center items-center pt-8 px-6"
      ref={headerRef}
    >
      <div
        className="mb-8 p-1 border border-base-4 border-4 rounded-md h-72 w-4/5 sm:w-3/4 md:w-3/5 flex flex-col gap-4 justify-center items-center "
        style={{ transform: borderHover.transform }}
      >
        <div className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-base-2 to-base-4">
          Zoe Barkan
        </div>

        <div className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-base-2 to-base-4">
          fullstack developer
        </div>
      </div>
      <div className="-translate-x-2">
        <Image
          src={`/images/arrow.png`}
          alt={"arrow"}
          width={250}
          height={350}
        />
      </div>
    </div>
  );
}

"use client";
import laptopImg from "../../../../public/laptop.jpg";
import Image from "next/image";
import logo from "*.png";
import hover3d from "@/app/lib/utils/hover";
import { useRef } from "react";

export function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  const borderHover = hover3d(headerRef, { x: 30, y: -40, z: 30 });
  const imageHover = hover3d(headerRef, { x: 20, y: -5, z: 11 });

  return (
    <div className="flex px-16 py-8 justify-center" ref={headerRef}>
      <div
        className="p-1 border border-base-4 border-4 rounded-md h-72 w-3/5 "
        style={{ transform: borderHover.transform }}
      >
        {/*<Image*/}
        {/*  style={{*/}
        {/*    transform: imageHover.transform,*/}
        {/*    transition: "all 0.5s ease-in-out",*/}
        {/*  }}*/}
        {/*  src={laptopImg}*/}
        {/*  alt={"laptop"}*/}
        {/*  width={350}*/}
        {/*  height={350}*/}
        {/*/>*/}
      </div>
    </div>
  );
}

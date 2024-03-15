"use client";

import Image from "next/image";
import { coverage } from "browserslist";

interface CardProps {
  title: string;
  image: string;
  description?: string;
  link?: string;
}

export function Card({ title, description, image, link }: CardProps) {
  return (
    <div className="w-80 h-96 relative bg-base-1  p-1.5 border-2 border-base-2 rounded-md transition transition-all ease-in-out duration-300">
      <Image src={image} alt={title} width={300} height={300} />
      <div className="z-10">
        <h3 className="py-6 px-2  text-white font-bold inline-block bg-base-1 ">
          {title}
        </h3>
        <p>{description}</p>
      </div>
      <div className=" rounded-lg h-full w-full bg-gradient-to-r from-base-2 to-base-4 absolute -z-10 -bottom-2 -left-2  border-b-base-2 border-b-2"></div>
    </div>
  );
}

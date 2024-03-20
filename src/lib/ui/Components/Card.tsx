"use client";
import Image from "next/image";
import { SkillsIcons } from "ui";
import Link from "next/link";

interface CardProps {
  title: string;
  image: string;
  description?: string;
  link: string;
  skills?: string[];
}
export function Card({ title, description, image, link, skills }: CardProps) {
  return (
    <Link href={link}>
      <div className="z-10 w-80 h-96 flex flex-col justify-between  bg-base-1 hover:cursor-pointer border-2 border-base-2 rounded-md transition transition-all ease-in-out duration-300 ">
        <Image src={image} alt={title} objectFit="cover" width={350} height={300} />

          <div className="flex flex-col w-full p-8">
            <div className="flex flex-col w-full">
          <h3 className="hover:transition hover:translate-x-2 mb-2    text-white font-bold ">
            {title}
          </h3>
          <p className="mt-2">{description}</p>
          </div>

          <div className="flex flex-row gap-4 mt-8">
            {skills &&
              skills.map((skill, index) => {
                const skillIcon =
                  SkillsIcons[skill as keyof typeof SkillsIcons];
                const url = `/svg/skills/${skillIcon}.svg`;
                return (
                  <Image
                    src={url}
                    alt={skill}
                    width={30}
                    height={30}
                    key={index}
                  />
                );
              })}{" "}
          </div>
      </div>



      <div className="w-[calc(100%+1rem)] rounded-md h-full  bg-gradient-to-r from-base-2 to-base-4 absolute -z-10 -bottom-3 -left-3  border-b-base-2 border-b-2"></div>
      </div>
    </Link>
  );
}

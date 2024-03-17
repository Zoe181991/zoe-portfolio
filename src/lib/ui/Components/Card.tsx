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
      <div className=" w-80 h-96 relative bg-base-1 hover:cursor-pointer  p-2 border-2 border-base-2 rounded-md transition transition-all ease-in-out duration-300 ">
        <Image src={image} alt={title} width={300} height={300} />
        <div className="z-10 py-6 px-2 flex flex-col  justify-between">
          <h3 className="hover:transition hover:translate-x-2 pb-2    text-white font-bold inline-block ">
            {title}
          </h3>
          <p>{description}</p>

          <div className="mt-6 flex flex-row gap-4 items-end place-content-end">
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

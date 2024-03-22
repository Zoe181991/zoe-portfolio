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
      <div className=" w-80 h-96 relative flex flex-col justify-between bg-base-1 hover:cursor-pointer  p-2 border-2 border-base-2 rounded-md transition transition-all ease-in-out duration-300 ">
        <Image unoptimized src={image} alt={title} width={300} height={300} />

          <h3 className="hover:transition hover:translate-x-2 mt-0 px-2 text-white text-xl font-bold inline-block ">
            {title}
          </h3>
        <div className="z-10 py-2 px-2 flex flex-col  ">

        <p>{description}</p>
        </div>

          <div className=" flex flex-row gap-4 px-2 mb-4 ">
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
        <div className="w-[calc(100%+1rem)] rounded-md h-full  bg-gradient-to-r from-base-2 to-base-4 absolute -z-10 -bottom-3 -left-3  border-b-base-2 border-b-2"></div>

      </div>



    </Link>
  );
}

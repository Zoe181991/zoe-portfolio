"use client";
import React from "react";
import Image from "next/image";
import { Rubik_Scribble } from "next/font/google";
import { SkillsIcons } from "@/lib/ui";
import { MySkills } from "@/lib/ui/text/MySkills";

const rubikScribble = Rubik_Scribble({ subsets: ["latin"], weight: ["400"] });

interface props {
  props?: any;
}
export function AboutSection({ props }: props) {
  return (
    <div className="w-full flex flex-col items-center lg:items-start lg:flex-row h-full gap-4 lg:gap-12 ">
      <div className="flex w-full lg:w-2/3 flex-col h-full max-w-2xl">
        <div className="text-6xl mt-2 font-semibold flex justify-center md:justify-start ">
          <span className={rubikScribble.className}> HEY!</span>
        </div>
        <div className=" inline-flex flex-col text-sm md:text-lg  gap-4 mt-10 mb-8 bg-base-3 bg-opacity-60 md:bg-opacity-80 rounded-md p-6 lg:p-10">
          <ul className="opacity-100 text-md lg:text-lg text-white space-y-3.5">
            <li> My name is Zoe Barkan and I’m a full-stack developer.</li>

            <li>
              I love coding, learning new technologies and finding the best way
              to combine them in my work.{" "}
            </li>
            <li>I'm always curious and always learning…</li>

            <li>
              I come with a well developed set of soft-skills and wide
              experience working in dynamic environments as a social
              entrepreneur and co-founder of several organizations. I enjoy
              working in a team.
            </li>
          </ul>
        </div>
        <div className="gap-4 mt-2 mb-8 bg-base-5 bg-opacity-60 md:bg-opacity-80 rounded-md  p-6 lg:p-10">
          <div className="flex justify-center md:justify-start text-4xl font-semibold mb-7 text-white">
            <span className={rubikScribble.className}> MY SKILLS</span>
          </div>
          <div className="flex grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-4 lg:gap-4 w-full   ">
            {MySkills.map((skill, index) => {
              const skillIcon = SkillsIcons[skill as keyof typeof SkillsIcons];
              const url = `/svg/skills/${skillIcon}.svg`;
              return (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    src={url}
                    alt={skill}
                    width={35}
                    height={35}
                    key={index}
                    quality={75}
                  />
                  <span className="text-white text-xs mt-2">{skill}</span>
                </div>
              );
            })}{" "}
          </div>
        </div>
      </div>

      <div className="flex lg:w-1/3  group transition transition-all ease-in-out duration-500 hover:rotate-6 relative z-10 ">
        <Image
          unoptimized
          src={`/images/profileImage1.jpg`}
          width={450}
          height={600}
          alt="profile image"
        />
      </div>
    </div>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import { Rubik_Scribble } from "next/font/google";
import { Card, CardContent, SkillsIcons } from "@/lib/ui";
import { MySkills } from "@/lib/ui/text/MySkills";

const rubikScribble = Rubik_Scribble({ subsets: ["latin"], weight: ["400"] });

interface props {
  props?: any;
}
export function AboutSection({ props }: props) {
  return (
    <div className=" flex flex-col items-center lg:items-start md:flex-row h-full gap-4 lg:gap-12 ">
      <div className="flex flex-col h-full max-w-2xl">
        <div className="text-6xl font-semibold">
          <span className={rubikScribble.className}> HEY!</span>
        </div>
        <div className="text-xl inline-flex flex-col text-md md:text-lg  gap-4 mt-10 mb-8 bg-base-3 bg-opacity-60 md:bg-opacity-80 rounded-md p-10">
          <ul className="opacity-100 text-white space-y-3.5">
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
        <div className="gap-4 mt-2 mb-8 bg-base-5 bg-opacity-60 md:bg-opacity-80 rounded-md p-10">
          <div className="text-4xl font-semibold mb-5 text-white">
            <span className={rubikScribble.className}> MY SKILLS</span>
          </div>
          <div className="flex  gap-6 w-full flex-wrap  ">
            {MySkills.map((skill, index) => {
              const skillIcon = SkillsIcons[skill as keyof typeof SkillsIcons];
              const url = `/svg/skills/${skillIcon}.svg`;
              return (
                <div className="flex flex-col items-center">
                  <Image
                    src={url}
                    alt={skill}
                    width={40}
                    height={40}
                    key={index}
                  />
                  <span className="text-white text-xs mt-2">{skill}</span>
                </div>
              );
            })}{" "}
          </div>
        </div>
      </div>

      <div className="flex group hover:rotate-6 relative z-10 transition transition-all ease-in-out duration-250">
        <Image
          unoptimized
          src={"/images/profileImage1.png"}
          width={450}
          height={600}
          alt="profile image"
        />

        <div className=" group-hover:w-[calc(100%+1.5rem)] group-hover:h-[calc(100%+1.5rem)] group-hover:rounded-sm group-hover:-bottom-5 group-hover:-left-5  group-hover:bg-gradient-to-r group-hover:from-base-2 group-hover:to-base-4 group-hover:absolute group-hover:-z-10 "></div>
      </div>
    </div>
  );
}

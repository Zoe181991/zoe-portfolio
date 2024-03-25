'use client';
import React from "react";
import Image from "next/image";

interface props {
  props?:any;
}
export function AboutSection({props}:props) {
  return (

      <div className="flex flex-col items-center lg:items-start lg:flex-row h-full gap-4 lg:gap-12 " >

              <div className=" bg-gradient-to-r from-base-2 to-base-4 relative w-max h-max justify-center rounded-md p-8" >
                  <Image style={{borderRadius:"8px"}}  src={"/images/profileImage.jpg"} width={450} height={600}  alt="profile image" />

                  {/*<div className="w-[calc(100%+4rem)] h-[calc(100%+4rem)] rounded-md bottom-3 left-2 right-2 top-3  bg-gradient-to-r from-base-2 to-base-4 absolute -z-10"></div>*/}

              </div>
          <div className="flex flex-col gap-10 w-full h-full">
              <div className="relative">
              <div className="absolute top-0 left-0 text-4xl font-bold text-white rotate-12">
                  Hi !
              </div>
              </div>
              <div className="text-xl inline-flex flex-col text-lg  gap-4"  >


                  <div>        My name is Zoe Barkan and I’m a full-stack developer.
                  </div>
                  <div>      I love coding, learning new technologies, and finding the best way to combine them in my work. I'm always curious and always learning…
                  </div>

                  <div>      I come with a well developed set of soft-skills and wide experience working in dynamic environments as a social entrepreneur and co-founder of several organizations. I enjoy working in teams.
                  </div>


              </div>
          </div>
      </div>


  )
}

"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../text/content";

interface CardProps {
  title: { he: string; en: string };
  image: string;
  description?: { he: string; en: string };
  link: string;
  newWindow?: boolean;
}

export function Card({ title, description, image, link, newWindow }: CardProps) {
  const { language } = useLanguage();

  return (
    <Link
      href={link}
      rel="noopener noreferrer"
      target={newWindow ? "_blank" : ""}
      className="group block w-full aspect-square rounded-2xl bg-white bg-opacity-90 border border-base-4 border-opacity-10 shadow-sm hover:shadow-lg hover:scale-90 transition-all duration-300 overflow-hidden"
    >
      <div className="flex h-full flex-col">
        <div className="flex flex-col h-1/2 w-full shrink-0 overflow-hidden">
          <div
            className="flex items-center gap-1.5 px-3 py-2 bg-white border-b border-base-4 border-opacity-10 shrink-0"
            style={{ direction: "ltr" }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#580952]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FD8928]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#EE81F1]" />
          </div>
          <div className="relative flex-1 w-full">
            <Image
              unoptimized
              fill
              src={image}
              alt={title[language]}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="flex-1 min-h-0 flex flex-col items-center gap-2 p-5 pb-[10px] overflow-hidden text-center">
          <h3 className="text-base md:text-lg font-bold text-base-4 leading-tight line-clamp-2">
            {title[language]}
          </h3>
          {description && (
            <p className="text-sm text-base-4 text-opacity-70 line-clamp-2">
              {description[language]}
            </p>
          )}
          <span className="inline-flex w-fit items-center gap-1.5 text-xs md:text-sm font-semibold px-4 py-1.5 mt-auto rounded-full border border-base-2 border-opacity-30 text-base-2">
            {content[language].projects.visitSite}
          </span>
        </div>
      </div>
    </Link>
  );
}

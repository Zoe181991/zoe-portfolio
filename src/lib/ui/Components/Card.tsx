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
  const isHebrew = language === "he";

  return (
    <Link
      href={link}
      rel="noopener noreferrer"
      target={newWindow ? "_blank" : ""}
      className="group block w-full aspect-square rounded-2xl bg-white border border-base-4 border-opacity-10 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      <div className="flex h-full flex-col">
        <div className="relative h-1/2 w-full shrink-0">
          <Image
            unoptimized
            fill
            src={image}
            alt={title[language]}
            style={{ objectFit: "cover" }}
          />
        </div>

        <div
          className={`flex-1 min-h-0 flex flex-col gap-2 p-5 pb-4 overflow-hidden ${
            isHebrew ? "text-right" : "text-left"
          }`}
        >
          <h3 className="text-xl md:text-2xl font-extrabold text-base-4 leading-tight">
            {title[language]}
          </h3>
          {description && (
            <p className="text-sm text-base-4 text-opacity-70 line-clamp-2">
              {description[language]}
            </p>
          )}
          <span
            className={`btn-gradient inline-flex w-fit items-center gap-1.5 text-base-1 text-xs md:text-sm font-semibold px-4 py-2 mt-auto ${
              isHebrew ? "self-end" : "self-start"
            }`}
          >
            {content[language].projects.visitSite}
          </span>
        </div>
      </div>
    </Link>
  );
}

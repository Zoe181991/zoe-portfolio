"use client";

import { Reveal } from "../Components/Reveal";
import { TypingText } from "../Components/TypingText";

interface headerProps {
  h1: string;
  h2?: string;
  badges?: string[];
}

export function Header({ h1, h2, badges }: headerProps) {
  return (
    <div className="flex flex-col w-full justify-center items-center pt-16 pb-8 px-6">
      <Reveal className="flex flex-col items-center">
        <div className="flex flex-col gap-5 justify-center items-center max-w-3xl">
          <div className="font-heading text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-base-2 to-base-4">
            {h1}
          </div>

          {h2 && (
            <TypingText
              text={h2}
              className="text-lg md:text-2xl font-bold text-center text-base-2"
            />
          )}

          {badges && badges.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className="text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full border border-base-2 border-opacity-30 text-base-2"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>
      </Reveal>
    </div>
  );
}

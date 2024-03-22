import React from "react";

interface HeadLineProps {
  text: string;
}
export function HeadLine({ text }: HeadLineProps) {
  return (
    <div className="flex-row flex text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-base-2 to-base-4">
      {text}
    </div>
  );
}

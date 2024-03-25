import React from "react";
import "../../../app/globals.css";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
}

export function Section({ id, children, ref }: SectionProps) {
  return (
    <section
      id={id}
      className="mt-4 flex flex-row justify-center items-center px-12 py-8  lg:px-24  max-h-fit min-h-10"
    >
      <div className="w-full max-w-desktop">
        <div className="flex grow flex-col justify-center items-center">
          {children}
        </div>
      </div>
    </section>
  );
}

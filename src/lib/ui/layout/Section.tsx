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
      className="mb-8 mt-0 flex flex-row justify-center items-center px-12 py-16  lg:px-24 lg:py-12  max-h-fit min-h-10"
    >
      <div className="w-full max-w-desktop">
        <div className="flex grow flex-col justify-center items-center">
          {children}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import "../../../app/globals.css";

interface SectionProps {
    id?: string;
    children: React.ReactNode;
}

export function Section({ id, children }: SectionProps) {
    return (
        <section id={id} className="flex flex-row justify-center p-24 h-80 bg-base-3">
            <div className="w-full max-w-desktop">
                <div className="flex grow flex-col justify-center items-center">
                    {children}
                </div>
            </div>
        </section>
    );
}

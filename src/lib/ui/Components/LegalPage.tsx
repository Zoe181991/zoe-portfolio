"use client";
import Link from "next/link";
import { Navbar } from "../layout/Navbar";
import { Footer } from "../layout/Footer";
import { Section } from "../layout/Section";
import { useLanguage } from "../context/LanguageContext";
import { LegalPageContent } from "../text/legalContent";

interface LegalPageProps {
  content: Record<"he" | "en", LegalPageContent>;
}

export function LegalPage({ content }: LegalPageProps) {
  const { language } = useLanguage();
  const { title, paragraphs, backHome } = content[language];
  const isHebrew = language === "he";

  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-body-bg-dots min-h-screen">
        <div className="bg-body-bg-shapes">
          <Section>
            <div
              className={`w-full max-w-2xl flex flex-col gap-4 ${
                isHebrew ? "text-right" : "text-left"
              }`}
            >
              <h1 className="text-3xl font-bold text-base-4 mb-2">{title}</h1>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base-4 text-opacity-80">
                  {paragraph}
                </p>
              ))}
              <Link
                href="/"
                className="mt-4 text-sm font-semibold text-base-2 underline w-fit"
              >
                {backHome}
              </Link>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}

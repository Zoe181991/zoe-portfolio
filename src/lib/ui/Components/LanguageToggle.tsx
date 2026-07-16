"use client";
import { useLanguage } from "../context/LanguageContext";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm font-semibold border border-base-2 rounded-full px-3 py-1 hover:bg-base-2 hover:text-base-1 transition ease-in-out duration-150"
      aria-label="toggle language"
    >
      {language === "he" ? "EN" : "עב"}
    </button>
  );
}

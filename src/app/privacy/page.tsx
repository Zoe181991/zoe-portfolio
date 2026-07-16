"use client";
import { LegalPage } from "@/lib/ui/Components/LegalPage";
import { privacyContent } from "@/lib/ui/text/legalContent";

export default function PrivacyPage() {
  return <LegalPage content={privacyContent} />;
}

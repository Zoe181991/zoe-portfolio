"use client";
import { LegalPage } from "@/lib/ui/Components/LegalPage";
import { accessibilityContent } from "@/lib/ui/text/legalContent";

export default function AccessibilityPage() {
  return <LegalPage content={accessibilityContent} />;
}

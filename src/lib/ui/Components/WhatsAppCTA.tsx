"use client";
import Image from "next/image";
import whatsappIconLight from "../../../../public/whatsappIconLight.svg";

interface WhatsAppCTAProps {
  label: string;
  className?: string;
}

const baseClasses =
  "btn-gradient inline-flex items-center gap-2 text-sm font-semibold text-base-1 px-6 py-3";

export function WhatsAppCTA({ label, className }: WhatsAppCTAProps) {
  return (
    <a
      href="https://wa.me/972509181991"
      target="_blank"
      rel="noopener noreferrer"
      className={className ?? baseClasses}
    >
      <Image src={whatsappIconLight} alt="" width={18} height={18} />
      <span>{label}</span>
    </a>
  );
}

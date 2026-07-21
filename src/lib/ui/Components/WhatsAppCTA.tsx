"use client";
import Image from "next/image";
import whatsappIconLight from "../../../../public/whatsappIconLight.svg";

interface WhatsAppCTAProps {
  label: string;
  className?: string;
}

const baseClasses =
  "btn-gradient btn-lift inline-flex items-center gap-2 text-sm font-semibold text-base-1 px-6 py-3";

export function WhatsAppCTA({ label, className }: WhatsAppCTAProps) {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=972509181991&text=%D7%94%D7%99%D7%99%20%D7%96%D7%95%D7%90%D7%99%2C%20%D7%90%D7%A0%D7%99%20%D7%A8%D7%95%D7%A6%D7%94%20%D7%A9%D7%AA%D7%A1%D7%A4%D7%A8%D7%99%20%D7%9C%D7%99%20%D7%A2%D7%95%D7%93%20%D7%A2%D7%9C%20%D7%91%D7%A0%D7%99%D7%99%D7%AA%20%D7%90%D7%AA%D7%A8%2F%D7%A2%D7%9E%D7%95%D7%93%20%D7%A0%D7%97%D7%99%D7%AA%D7%94"
      target="_blank"
      rel="noopener noreferrer"
      className={className ?? baseClasses}
    >
      <Image src={whatsappIconLight} alt="" width={18} height={18} />
      <span>{label}</span>
    </a>
  );
}

"use client";
import Image from "next/image";

export type SkillIconKey =
  | "wix"
  | "wordpress"
  | "canva"
  | "flag"
  | "pen"
  | "devices"
  | "video";

const outlinePaths: Partial<Record<SkillIconKey, React.ReactNode>> = {
  flag: (
    <>
      <path d="M5 3v18" />
      <path d="M5 4h11l-2.5 4L16 12H5" />
    </>
  ),
  pen: (
    <>
      <path d="M4 20l1-4.5L15.5 5l3.5 3.5L8.5 19 4 20z" />
      <path d="M13 7l3.5 3.5" />
    </>
  ),
  devices: (
    <>
      <rect x="3" y="5" width="13" height="9" rx="1" />
      <path d="M7 18h5" />
      <rect x="17" y="10" width="4" height="7" rx="1" />
    </>
  ),
  video: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="M16 10l5-3v10l-5-3" />
    </>
  ),
};

function BrandIcon({ name }: { name: "wix" | "wordpress" | "canva" }) {
  if (name === "wix") {
    return (
      <Image
        unoptimized
        src="/icons/wix.png"
        alt=""
        width={18}
        height={18}
        style={{ width: "auto", height: "12px" }}
      />
    );
  }
  if (name === "wordpress") {
    return (
      <Image unoptimized src="/icons/wordpress.png" alt="" width={18} height={18} />
    );
  }
  return <Image unoptimized src="/icons/canva.png" alt="" width={18} height={18} />;
}

export function SkillIcon({ name }: { name: SkillIconKey }) {
  if (name === "wix" || name === "wordpress" || name === "canva") {
    return <BrandIcon name={name} />;
  }

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {outlinePaths[name]}
    </svg>
  );
}

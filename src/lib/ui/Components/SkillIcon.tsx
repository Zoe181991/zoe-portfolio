"use client";

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
      <svg width="18" height="18" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" fill="#0C0B0B" />
        <text
          x="12"
          y="16.5"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fontFamily="sans-serif"
          fill="#FFFFFF"
        >
          w
        </text>
      </svg>
    );
  }
  if (name === "wordpress") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" fill="#00749C" />
        <text
          x="12"
          y="16.5"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fontFamily="sans-serif"
          fill="#FFFFFF"
        >
          W
        </text>
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="canva-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C4CC" />
          <stop offset="100%" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="11" fill="url(#canva-grad)" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontSize="12"
        fontWeight="700"
        fontFamily="sans-serif"
        fill="#FFFFFF"
      >
        C
      </text>
    </svg>
  );
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

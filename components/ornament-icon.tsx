import type React from "react";

type OrnamentIconName =
  | "archive"
  | "article"
  | "calendar"
  | "contact"
  | "gallery"
  | "heritage"
  | "lurie"
  | "pearls"
  | "synagogue"
  | "tour"
  | "video";

type OrnamentIconProps = {
  name: OrnamentIconName;
  className?: string;
};

const paths: Record<OrnamentIconName, React.ReactNode> = {
  archive: (
    <>
      <path d="M6 5.5h12v13H6z" />
      <path d="M8.5 8h7M8.5 11h7M8.5 14h4.5" />
      <path d="M9 3.5h6" />
    </>
  ),
  article: (
    <>
      <path d="M7 4.5h10v15H7z" />
      <path d="M9.5 8h5M9.5 11h5M9.5 14h3.5" />
      <path d="M5 6.5h2M17 6.5h2" />
    </>
  ),
  calendar: (
    <>
      <path d="M5 6.5h14v12H5z" />
      <path d="M5 10h14M8 4v4M16 4v4" />
      <path d="M9 13h2M13 13h2M9 16h2" />
    </>
  ),
  contact: (
    <>
      <path d="M4.5 6.5h15v11h-15z" />
      <path d="m5 7 7 5.5L19 7" />
      <path d="m8 14-3 3M16 14l3 3" />
    </>
  ),
  gallery: (
    <>
      <path d="M4.5 6.5h15v11h-15z" />
      <path d="m7 15 3.2-3.2 2.2 2.2 1.8-2.4 3.3 3.4" />
      <path d="M9 9.5h.1" />
    </>
  ),
  heritage: (
    <>
      <path d="M12 4.5 18.5 8v7L12 19.5 5.5 15V8z" />
      <path d="M12 4.5V12M18.5 8 12 12 5.5 8M12 19.5V12" />
    </>
  ),
  lurie: (
    <>
      <path d="M5.5 19V9.5L12 5l6.5 4.5V19" />
      <path d="M8 19v-7h8v7M10 19v-4h4v4" />
      <path d="M9 8.8h.1M15 8.8h.1" />
    </>
  ),
  pearls: (
    <>
      <path d="M12 3.8v16.4M3.8 12h16.4" />
      <path d="m6.2 6.2 11.6 11.6M17.8 6.2 6.2 17.8" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  synagogue: (
    <>
      <path d="M5.5 19V9.5L12 4l6.5 5.5V19" />
      <path d="M8 19v-6.5h8V19M10 19v-4h4v4" />
      <path d="M12 4v4M9.5 9h5" />
      <path d="M6.8 8.4V6.8M17.2 8.4V6.8" />
    </>
  ),
  tour: (
    <>
      <path d="M6 18.5V5.5l6-2 6 2v13l-6-2z" />
      <path d="M12 3.5v13M8.5 8.5h1M14.5 7.5h1M14.5 12h1M8.5 13h1" />
    </>
  ),
  video: (
    <>
      <path d="M5 6.5h10.5v11H5z" />
      <path d="m15.5 10 4-2.5v9l-4-2.5z" />
      <path d="m9 9.5 4 2.5-4 2.5z" />
    </>
  )
};

export function OrnamentIcon({ name, className = "" }: OrnamentIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={`ornament-icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
    >
      {paths[name]}
    </svg>
  );
}

export type { OrnamentIconName };

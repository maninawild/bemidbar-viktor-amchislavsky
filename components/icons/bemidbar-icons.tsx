import type React from "react";

type BemidbarIconProps = {
  className?: string;
};

function IconShell({ children, className = "" }: BemidbarIconProps & { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      className={`bemidbar-line-icon ${className}`}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.45"
    >
      {children}
    </svg>
  );
}

function MagenDavid() {
  return (
    <>
      <path d="m24 13.5 8.6 15H15.4z" />
      <path d="m24 34.5-8.6-15h17.2z" />
    </>
  );
}

export function IconPetersburgTours({ className }: BemidbarIconProps) {
  return (
    <IconShell className={className}>
      <path d="M7 37.5h34" />
      <path d="M10 37.5V18l14-7 14 7v19.5" />
      <path d="M15 37.5V23h18v14.5" />
      <path d="M18.5 37.5v-7.8h11v7.8" />
      <path d="M14 20.5h20M18 16.5h12" />
      <path d="M16 26.5h3.2M28.8 26.5H32" />
      <path d="M9 42c5-3.8 10.2-4.2 15-1.2 4.5 2.8 9.2 2.4 15-1.2" />
      <path d="m36.5 38.4 2.5 1.2-1 2.7" />
    </IconShell>
  );
}

export function IconSynagogueLibrary({ className }: BemidbarIconProps) {
  return (
    <IconShell className={className}>
      <path d="M8.5 38V20.5L24 8l15.5 12.5V38" />
      <path d="M14 38V24.5c0-5.8 4.2-10 10-10s10 4.2 10 10V38" />
      <path d="M18 38V27.5h12V38" />
      <path d="M24 8v8.5M19.2 17.5h9.6" />
      <path d="M12 40.5c3.8-2.6 7.8-2.8 12 0 4.2-2.8 8.2-2.6 12 0" />
      <path d="M12 32.5c3.8-2.4 7.8-2.5 12 .2 4.2-2.7 8.2-2.6 12-.2" />
      <path d="M12 32.5v8M36 32.5v8M24 32.7v7.8" />
    </IconShell>
  );
}

export function IconJewishHeritage({ className }: BemidbarIconProps) {
  return (
    <IconShell className={className}>
      <MagenDavid />
      <path d="M9.5 39h29" />
      <path d="M14 39V21.5h6.5V39" />
      <path d="M27.5 39V21.5H34V39" />
      <path d="M11.5 21.5h25M13.5 17.5h21" />
      <path d="M12 13.5h24l-12-6z" />
      <path d="M18 30h12" />
      <path d="M18 34h12" />
    </IconShell>
  );
}

export function IconJewishPearls({ className }: BemidbarIconProps) {
  return (
    <IconShell className={className}>
      <MagenDavid />
      <circle cx="24" cy="24" r="4.4" />
      <path d="M24 5.5v5M24 37.5v5M5.5 24h5M37.5 24h5" />
      <path d="m10.7 10.7 3.5 3.5M33.8 33.8l3.5 3.5M37.3 10.7l-3.5 3.5M14.2 33.8l-3.5 3.5" />
      <path d="M16.8 24c0-4 3.2-7.2 7.2-7.2M31.2 24c0 4-3.2 7.2-7.2 7.2" />
    </IconShell>
  );
}

export type BemidbarTrustIconName = "lurie" | "synagogue" | "heritage" | "pearls";

const trustIcons = {
  lurie: IconPetersburgTours,
  synagogue: IconSynagogueLibrary,
  heritage: IconJewishHeritage,
  pearls: IconJewishPearls
};

export function BemidbarTrustIcon({
  name,
  className
}: BemidbarIconProps & { name: BemidbarTrustIconName }) {
  const Component = trustIcons[name];
  return <Component className={className} />;
}

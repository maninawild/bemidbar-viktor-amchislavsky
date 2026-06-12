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
      strokeWidth="1.8"
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
      <path d="M8 40h32" />
      <path d="M12 38V20h24v18" />
      <path d="M9 20 24 10l15 10" />
      <path d="M16 26h4M28 26h4" />
      <path d="M16 32h4M28 32h4" />
      <path d="M22 38V28h4v10" />
    </IconShell>
  );
}

export function IconSynagogueLibrary({ className }: BemidbarIconProps) {
  return (
    <IconShell className={className}>
      <path d="M8 40h32" />
      <path d="M13 40V24c0-6.2 4.6-11 11-11s11 4.8 11 11v16" />
      <path d="M18 40v-8a6 6 0 0 1 12 0v8" />
      <path d="M11 27h4M33 27h4" />
      <path d="M24 8v5" />
      <g transform="translate(24 24) scale(.5) translate(-24 -24)">
        <MagenDavid />
      </g>
    </IconShell>
  );
}

export function IconJewishHeritage({ className }: BemidbarIconProps) {
  return (
    <IconShell className={className}>
      <path d="M10 14h10c2.2 0 4 1.8 4 4v22c0-2.2-1.8-4-4-4H10z" />
      <path d="M38 14H28c-2.2 0-4 1.8-4 4v22c0-2.2 1.8-4 4-4h10z" />
      <path d="M24 18v22" />
      <path d="M15 22h5M15 28h5M28 22h5M28 28h5" />
    </IconShell>
  );
}

export function IconJewishPearls({ className }: BemidbarIconProps) {
  return (
    <IconShell className={className}>
      <MagenDavid />
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

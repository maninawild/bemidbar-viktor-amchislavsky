import Image from "next/image";

type BemidbarLogoVariant = "header" | "hero" | "footer" | "icon";
type BemidbarLogoTheme = "dark" | "light";

type BemidbarLogoProps = {
  variant?: BemidbarLogoVariant;
  theme?: BemidbarLogoTheme;
  showSubtitle?: boolean;
  className?: string;
};

export function BemidbarLogo({
  variant = "header",
  theme = "dark",
  showSubtitle = false,
  className
}: BemidbarLogoProps) {
  const src = getLogoSrc({ variant, theme, showSubtitle });
  const classes = ["bemidbar-logo", `bemidbar-logo-${variant}`, className].filter(Boolean).join(" ");

  return (
    <Image
      className={classes}
      src={src}
      alt={variant === "icon" ? "Бемидбар" : "БЕМИДБАР"}
      width={variant === "icon" ? 64 : showSubtitle ? 960 : 760}
      height={variant === "icon" ? 64 : showSubtitle ? 300 : 140}
      priority={variant === "hero"}
      decoding="async"
    />
  );
}

function getLogoSrc({
  variant,
  theme,
  showSubtitle
}: {
  variant: BemidbarLogoVariant;
  theme: BemidbarLogoTheme;
  showSubtitle: boolean;
}) {
  if (variant === "icon") return "/favicon.svg";
  if (!showSubtitle) return "/brand/bemidbar-wordmark.svg";
  return theme === "light" ? "/brand/bemidbar-logo-light.svg" : "/brand/bemidbar-logo-dark.svg";
}

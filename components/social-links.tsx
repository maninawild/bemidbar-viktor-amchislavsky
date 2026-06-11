import { site } from "@/lib/site";

type SocialLink = {
  href: string;
  label: string;
  icon: "facebook" | "instagram" | "vk";
};

const socialLinks = [
  { href: site.vk, label: "VK Виктора Амчиславского", icon: "vk" },
  { href: site.facebook, label: "Facebook Виктора Амчиславского", icon: "facebook" },
  { href: site.instagram, label: "Instagram Виктора Амчиславского", icon: "instagram" }
] satisfies SocialLink[];

const links: SocialLink[] = socialLinks.filter((link) => Boolean(link.href));

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  if (icon === "facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M14.2 8.1V6.7c0-.7.5-.9.9-.9h2.2V2.2L14.2 2c-3.4 0-4.5 2.1-4.5 4.3v1.8H7v3.7h2.7V22h4.1V11.8h3.1l.5-3.7h-3.2Z" />
      </svg>
    );
  }

  if (icon === "instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M7.3 2h9.4A5.3 5.3 0 0 1 22 7.3v9.4a5.3 5.3 0 0 1-5.3 5.3H7.3A5.3 5.3 0 0 1 2 16.7V7.3A5.3 5.3 0 0 1 7.3 2Zm0 2A3.3 3.3 0 0 0 4 7.3v9.4A3.3 3.3 0 0 0 7.3 20h9.4a3.3 3.3 0 0 0 3.3-3.3V7.3A3.3 3.3 0 0 0 16.7 4H7.3Zm4.7 3.3A4.7 4.7 0 1 1 12 16.7a4.7 4.7 0 0 1 0-9.4Zm0 2A2.7 2.7 0 1 0 12 14.7a2.7 2.7 0 0 0 0-5.4Zm5.1-2.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
      </svg>
    );
  }

  if (icon === "vk") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M3.4 7.2c.1 5.9 3.1 9.4 8.5 9.4h.3v-3.4c2 .2 3.5 1.6 4.1 3.4h3.2c-.8-2.7-2.8-4.2-4.1-4.8 1.3-.8 3.1-2.6 3.6-4.6h-2.9c-.6 1.9-2.2 3.6-3.9 3.8V7.2H9.3v6.7C7.5 13.4 5.2 11.5 5.1 7.2H3.4Z" />
      </svg>
    );
  }

  return null;
}

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`social-links ${className}`} aria-label="Социальные ссылки">
      {links.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} title={link.label}>
          <SocialIcon icon={link.icon} />
          <span>{link.icon === "vk" ? "VK" : link.icon === "facebook" ? "FB" : "IG"}</span>
        </a>
      ))}
    </div>
  );
}

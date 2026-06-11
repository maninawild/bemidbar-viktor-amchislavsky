import Link from "next/link";
import { navItems, site } from "@/lib/site";
import { ProtectedEmail } from "@/components/protected-email";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <p className="footer-title">{site.name}</p>
        <p>Еврейский Петербург</p>
      </div>
      <nav aria-label="Навигация в подвале">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="footer-contact">
        <ProtectedEmail className="email-action footer-email" />
        <SocialLinks />
      </div>
    </footer>
  );
}

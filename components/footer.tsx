import Link from "next/link";
import { BemidbarLogo } from "@/components/bemidbar-logo";
import { navItems } from "@/lib/site";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <BemidbarLogo variant="footer" theme="dark" showSubtitle />
      </div>
      <nav aria-label="Навигация в подвале">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="footer-contact">
        <Link className="email-action footer-email" href="/contacts">
          Оставить заявку
        </Link>
        <SocialLinks />
      </div>
    </footer>
  );
}

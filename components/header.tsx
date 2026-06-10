"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, site } from "@/lib/site";
import { SocialLinks } from "@/components/social-links";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="На главную">
        <span>{site.name}</span>
        <small>{site.subtitle}</small>
      </Link>
      <nav className="nav" aria-label="Основная навигация">
        {navItems.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={isActive ? "active" : undefined}
              key={item.href}
              href={item.href}
              prefetch={item.href !== "/"}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <SocialLinks className="header-socials" />
    </header>
  );
}

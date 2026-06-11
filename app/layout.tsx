import type { Metadata } from "next";
import { Cormorant_Garamond, Cormorant_Unicase, Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";
import { ogImage, personJsonLd, seoKeywords, websiteJsonLd } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

const cormorantUnicase = Cormorant_Unicase({
  subsets: ["cyrillic", "latin"],
  variable: "--font-wordmark",
  weight: ["500", "600", "700"]
});

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.subtitle}`,
    template: `%s — ${site.name}`
  },
  description:
    "Авторские экскурсии, лекции и статьи Виктора Амчиславского о еврейском Петербурге, русско-еврейской истории и культурной памяти.",
  keywords: seoKeywords,
  openGraph: {
    title: `${site.name} — ${site.subtitle}`,
    description:
      "Интеллектуальный портал Виктора Амчиславского: еврейский Петербург, история, культура, лекции и экскурсии.",
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: "website",
    images: [ogImage]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.subtitle}`,
    description:
      "Еврейский Петербург, Большая Хоральная синагога, русско-еврейская история, экскурсии, лекции и статьи Виктора Амчиславского.",
    images: [ogImage.url]
  },
  alternates: {
    canonical: "/",
    languages: {
      ru: "/",
      en: "/en",
      yi: "/yi"
    }
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${cormorantUnicase.variable} ${inter.variable}`}>
      <body>
        <JsonLd data={[websiteJsonLd, personJsonLd]} />
        {children}
      </body>
    </html>
  );
}

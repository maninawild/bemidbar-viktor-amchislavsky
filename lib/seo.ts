import type { Metadata } from "next";
import { site } from "@/lib/site";

export const seoKeywords = [
  "Виктор Амчиславский",
  "Бемидбар",
  "еврейский Петербург",
  "экскурсии по еврейскому Петербургу",
  "гид по еврейскому Петербургу",
  "Большая Хоральная синагога",
  "экскурсия по Большой Хоральной синагоге",
  "русско-еврейская история",
  "история евреев Петербурга",
  "еврейское наследие Санкт-Петербурга",
  "лекции по еврейской истории",
  "культурология Петербурга",
  "Дом культуры Льва Лурье",
  "Jewish Pearls",
  "Петербург Марка Шагала",
  "Айн Рэнд в Петербурге",
  "Иосиф Бродский Петербург",
  "хасидизм в Петербурге",
  "каббалистический Петербург"
];

export const ogImage = {
  url: "/brand/bemidbar-og.png",
  width: 1200,
  height: 630,
  alt: "Бемидбар — Еврейский Петербург, Виктор Амчиславский"
};

export function pageMetadata({
  title,
  description,
  path,
  type = "website"
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  return {
    title: {
      absolute: title
    },
    description,
    keywords: seoKeywords,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: `${site.url}${path}`,
      siteName: site.name,
      locale: site.locale,
      type,
      images: [ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url]
    }
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`
    }))
  };
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Виктор Амчиславский",
  url: site.url,
  image: `${site.url}/images/viktor/viktor-amchislavsky-hero.webp`,
  jobTitle: "Историк, гид, лектор, исследователь русско-еврейского наследия",
  description:
    "Виктор Амчиславский — историк, краевед, гид по еврейскому Петербургу, автор экскурсий Дома культуры Льва Лурье и создатель проекта Jewish Pearls.",
  worksFor: [
    {
      "@type": "Organization",
      name: "Дом культуры Льва Лурье",
      url: "https://dklurie.ru/"
    },
    {
      "@type": "Organization",
      name: "Большая Хоральная синагога Санкт-Петербурга"
    }
  ],
  knowsAbout: seoKeywords,
  sameAs: [site.lurieProfile, site.facebook, site.instagram, site.vk]
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  alternateName: "Интеллектуальный портал Виктора Амчиславского",
  url: site.url,
  inLanguage: "ru",
  description:
    "Бемидбар — авторский сайт Виктора Амчиславского об экскурсиях, лекциях, статьях и архиве еврейского Петербурга.",
  publisher: {
    "@type": "Person",
    name: "Виктор Амчиславский"
  }
};

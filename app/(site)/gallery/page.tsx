import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { galleryCategories, galleryItems } from "@/lib/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Галерея | Виктор Амчиславский и еврейский Петербург",
  description:
    "Галерея Виктора Амчиславского: еврейский Петербург, экскурсии, лекции, архивные изображения, Большая Хоральная синагога и Дом культуры Льва Лурье.",
  path: "/gallery"
});

type GalleryPageProps = {
  searchParams?: {
    category?: string;
  };
};

function isActive(category: string | undefined, value: string) {
  return value === "Все" ? !category || category === "Все" : category === value;
}

export default function GalleryPage({ searchParams }: GalleryPageProps) {
  const selectedCategory = searchParams?.category ?? "Все";
  const visibleItems =
    selectedCategory === "Все"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Визуальный архив</p>
        <h1>Галерея</h1>
        <p>
          Кураторская подборка изображений, связанных с экскурсиями, лекциями,
          архивными публикациями и работой Виктора Амчиславского. Все изображения
          хранятся локально в проекте.
        </p>
      </section>

      <section className="section gallery-section">
        <div className="archive-toolbar" aria-label="Фильтры галереи">
          {galleryCategories.map((category) => (
            <Link
              className={isActive(searchParams?.category, category) ? "filter-chip active" : "filter-chip"}
              href={category === "Все" ? "/gallery" : `/gallery?category=${encodeURIComponent(category)}`}
              key={category}
            >
              {category}
            </Link>
          ))}
        </div>

        <div className="gallery-grid">
          {visibleItems.map((item) => (
            <article className="gallery-card" key={`${item.category}-${item.title}`}>
              <div className="gallery-card-image">
                <Image
                  src={item.image}
                  alt={`${item.title}: ${item.caption}`}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <div className="gallery-card-copy">
                <div className="archive-card-top">
                  <span className="badge">{item.category}</span>
                  <span>{item.year}</span>
                </div>
                <h2>{item.title}</h2>
                <p>{item.caption}</p>
                <div className="archive-card-bottom">
                  <span>{item.source}</span>
                  {item.relatedRoute && <span>{item.relatedRoute}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Главная", path: "/" }, { name: "Галерея", path: "/gallery" }])}
      />
    </>
  );
}

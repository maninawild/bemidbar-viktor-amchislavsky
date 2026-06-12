import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { OrnamentIcon } from "@/components/ornament-icon";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Библиотека | Бемидбар",
  description:
    "Библиотека Бемидбар: будущая подборка книг, статей, архивных источников и исследовательских заметок по истории еврейского Петербурга.",
  path: "/library"
});

export default function LibraryPage() {
  return (
    <>
      <section className="page-hero library-hero">
        <p className="eyebrow">Бемидбар</p>
        <h1>Библиотека</h1>
        <p>
          Раздел находится в разработке. Здесь будут собраны книги, статьи,
          архивные источники, рекомендованные материалы и исследовательские
          заметки по истории еврейского Петербурга, русско-еврейскому наследию
          и культурной памяти города.
        </p>
      </section>

      <section className="section library-placeholder">
        <div className="library-mark">
          <OrnamentIcon name="archive" />
          <OrnamentIcon name="article" />
          <OrnamentIcon name="heritage" />
        </div>
      </section>

      <JsonLd data={breadcrumbJsonLd([{ name: "Главная", path: "/" }, { name: "Библиотека", path: "/library" }])} />
    </>
  );
}

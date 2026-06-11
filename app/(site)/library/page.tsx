import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { OrnamentIcon } from "@/components/ornament-icon";
import { VideoEmbed } from "@/components/video-embed";
import { archiveItems } from "@/lib/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Библиотека | Бемидбар",
  description:
    "Библиотека Бемидбар: будущая подборка книг, статей, архивных источников и исследовательских заметок по истории еврейского Петербурга.",
  path: "/library"
});

export default function LibraryPage() {
  const videoItems = archiveItems.filter((item) => item.videoUrl).slice(0, 2);

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

      <section className="section library-video-shelf light-section">
        <div className="section-heading">
          <p className="eyebrow">Видеоисточники</p>
          <h2>Лекции из публичного видеоархива</h2>
        </div>
        <div className="video-grid">
          {videoItems.map((item) => (
            <article className="video-card" key={item.title}>
              <VideoEmbed title={`${item.title} — ${item.source}`} videoUrl={item.videoUrl!} />
              <div className="video-card-copy">
                <span className="badge">{item.source}</span>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <JsonLd data={breadcrumbJsonLd([{ name: "Главная", path: "/" }, { name: "Библиотека", path: "/library" }])} />
    </>
  );
}

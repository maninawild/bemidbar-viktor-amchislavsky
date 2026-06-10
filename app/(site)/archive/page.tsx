import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { archiveFilters, archiveItems, type ArchiveItem } from "@/lib/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Архив Виктора Амчиславского | Фото, видео, публикации и маршруты",
  description:
    "Архив Виктора Амчиславского: фото, видео, лекции по еврейской истории, статьи, упоминания, публикации и маршруты о еврейском Петербурге.",
  path: "/archive"
});

type ArchivePageProps = {
  searchParams?: {
    type?: string;
  };
};

function isActiveFilter(type: string | undefined, value: string) {
  return value === "all" ? !type || type === "all" : type === value;
}

function getYouTubeTitle(item: ArchiveItem) {
  return `${item.title} — ${item.source}`;
}

export default function ArchivePage({ searchParams }: ArchivePageProps) {
  const selectedType = searchParams?.type ?? "all";
  const visibleItems =
    selectedType === "all" ? archiveItems : archiveItems.filter((item) => item.type === selectedType);
  const videoItems = archiveItems.filter((item) => item.videoUrl);

  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Медиатека и источники</p>
        <h1>Архив</h1>
        <p>
          Кураторский архив ссылок, видео, публикаций, маршрутов и внешних страниц,
          связанных с работой Виктора Амчиславского. Раздел подготовлен для будущих
          материалов, которые будут добавляться постепенно.
        </p>
      </section>

      <section className="section archive-video-section">
        <div className="section-heading">
          <p className="eyebrow">Видео</p>
          <h2>Лекции Виктора Амчиславского для НКО «Ева»</h2>
        </div>
        <div className="video-grid">
          {videoItems.map((item) => (
            <article className="video-card" key={item.title}>
              <div className="video-frame">
                <iframe
                  src={item.videoUrl}
                  title={getYouTubeTitle(item)}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="video-card-copy">
                <span className="badge">{item.source}</span>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                {item.externalUrl && (
                  <a className="text-link" href={item.externalUrl} target="_blank" rel="noreferrer">
                    Открыть на YouTube
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section archive-hub">
        <div className="archive-toolbar" aria-label="Фильтры архива">
          {archiveFilters.map((filter) => (
            <Link
              className={isActiveFilter(searchParams?.type, filter.value) ? "filter-chip active" : "filter-chip"}
              href={filter.value === "all" ? "/archive" : `/archive?type=${encodeURIComponent(filter.value)}`}
              key={filter.value}
            >
              {filter.label}
            </Link>
          ))}
        </div>

        <div className="archive-grid">
          {visibleItems.map((item) => (
            <article className="archive-card" key={`${item.type}-${item.title}`}>
              {item.image && (
                <div className="archive-card-image">
                  <Image
                    src={item.image}
                    alt={`${item.title}: архивное изображение для раздела Виктора Амчиславского`}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
              )}
              <div className="archive-card-top">
                <span className="badge">{item.type}</span>
                <span>{item.date}</span>
              </div>
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
              <div className="tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="archive-card-bottom">
                <span>{item.source}</span>
                {item.externalUrl && (
                  <a href={item.externalUrl} target="_blank" rel="noreferrer">
                    Открыть источник
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Главная", path: "/" }, { name: "Архив", path: "/archive" }])}
      />
    </>
  );
}

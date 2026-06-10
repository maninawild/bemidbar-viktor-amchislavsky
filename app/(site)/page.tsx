import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { ContactBlock } from "@/components/contact-block";
import { JsonLd } from "@/components/json-ld";
import { ReviewsSection } from "@/components/reviews-section";
import { StatusStrip } from "@/components/status-strip";
import { bio, positioning, services, site, statusPhrase, trustMarker } from "@/lib/site";
import { getArticles } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Бемидбар — Виктор Амчиславский | Еврейский Петербург, экскурсии, лекции, статьи",
  description:
    "Бемидбар — авторский сайт Виктора Амчиславского: еврейский Петербург, экскурсии по Большой Хоральной синагоге, лекции по русско-еврейской истории, статьи и архив.",
  path: "/"
});

export default function HomePage() {
  const articles = getArticles().slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Еврейский Петербург · История · Культурная память</p>
          <h1 className="hero-wordmark">Бемидбар</h1>
          <p className="subtitle">Интеллектуальный портал Виктора Амчиславского</p>
          <p className="hero-trust">{trustMarker}</p>
          <p className="hero-status">{statusPhrase}</p>
          <p className="lead">{positioning}</p>
          <div className="actions">
            <Link className="button button-primary" href="/tours#contact">
              Выбрать экскурсию
            </Link>
            <Link className="button button-secondary" href="/contacts">
              Связаться с Виктором
            </Link>
          </div>
        </div>
        <figure className="hero-image">
          <Image
            src="/images/viktor/viktor-amchislavsky-hero.webp"
            alt="Портрет Виктора Амчиславского, историка и гида по еврейскому Петербургу"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 46vw"
          />
          <figcaption>Виктор Амчиславский, Петербург</figcaption>
        </figure>
      </section>

      <StatusStrip />

      <section className="section seo-text">
        <p className="eyebrow">Бемидбар</p>
        <h2>Еврейский Петербург, городская память и русско-еврейская история</h2>
        <p>
          Бемидбар — авторский сайт Виктора Амчиславского: историка, краеведа,
          исследователя русско-еврейского наследия и гида по еврейскому
          Петербургу. Здесь собраны экскурсии, лекции, статьи, архивные
          материалы, видео и маршруты о Большой Хоральной синагоге, городских
          легендах, культурной памяти и еврейской истории Санкт-Петербурга.
        </p>
        <div className="seo-link-row" aria-label="Ключевые разделы сайта">
          <Link className="text-link" href="/tours">
            Экскурсии по еврейскому Петербургу
          </Link>
          <Link className="text-link" href="/archive">
            Архив и видео
          </Link>
          <Link className="text-link" href="/reviews">
            Отзывы слушателей
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Экскурсии и лекции</p>
          <h2>Город как архив, текст и живое свидетельство</h2>
        </div>
        <div className="service-preview">
          {services.slice(0, 6).map((service) => (
            <article className="service-card" key={service.title}>
              <span aria-hidden="true">✦</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
        <Link className="text-link" href="/tours">
          Все направления
        </Link>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">О Викторе</p>
          <h2>Историк, краевед, исследователь русско-еврейского наследия</h2>
        </div>
        <p>{bio}</p>
        <Link className="text-link" href="/about">
          Подробнее
        </Link>
      </section>

      <ReviewsSection limit={3} />

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Статьи</p>
          <h2>Тексты о памяти, городе и традиции</h2>
        </div>
        <div className="article-grid">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
        <Link className="text-link" href="/articles">
          Читать статьи
        </Link>
      </section>

      <ContactBlock />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Бемидбар — Виктор Амчиславский",
          url: `${site.url}/`,
          inLanguage: "ru",
          about: {
            "@type": "Person",
            name: "Виктор Амчиславский"
          }
        }}
      />
    </>
  );
}

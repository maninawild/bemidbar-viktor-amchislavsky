import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { ContactBlock } from "@/components/contact-block";
import { BemidbarTrustIcon } from "@/components/icons/bemidbar-icons";
import { JsonLd } from "@/components/json-ld";
import { OrnamentIcon, type OrnamentIconName } from "@/components/ornament-icon";
import { ReviewsSection } from "@/components/reviews-section";
import { StatusStrip } from "@/components/status-strip";
import {
  archiveItems,
  bio,
  galleryItems,
  jewishPearls,
  services,
  site,
  statusPhrase,
  trustMarker,
  trustPartners
} from "@/lib/site";
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
  const featuredArticle = articles[0];
  const featuredVideo = archiveItems.find((item) => item.videoUrl);
  const featuredArchive = archiveItems.find((item) => item.image) ?? archiveItems[0];
  const featuredPhoto = galleryItems.find((item) => item.category === "Архив") ?? galleryItems[0];
  const latestMaterials = [
    featuredArchive && {
      label: featuredArchive.type,
      title: featuredArchive.title,
      text: featuredArchive.excerpt,
      href: "/archive",
      icon: "archive" as OrnamentIconName
    },
    featuredArticle && {
      label: "Статья",
      title: featuredArticle.title,
      text: featuredArticle.excerpt,
      href: `/articles/${featuredArticle.slug}`,
      icon: "article" as OrnamentIconName
    },
    featuredVideo && {
      label: "Видео",
      title: featuredVideo.title,
      text: featuredVideo.excerpt,
      href: "/archive?type=Видео",
      icon: "video" as OrnamentIconName
    }
  ].filter((item): item is { label: string; title: string; text: string; href: string; icon: OrnamentIconName } => Boolean(item));
  const todayItems = [
    featuredArticle && {
      label: "статья",
      title: featuredArticle.title,
      text: featuredArticle.excerpt,
      href: `/articles/${featuredArticle.slug}`,
      cta: "Читать",
      image: "/images/archive/spbsj-jewish-petersburg.jpg"
    },
    {
      label: "экскурсия",
      title: "Еврейский Петербург: дворы и судьбы",
      text: services[1]?.text ?? "Авторский маршрут по еврейскому Петербургу.",
      href: "/tours",
      cta: "Оставить заявку",
      image: "/images/routes/evrei-peterburga-cover.webp"
    },
    featuredVideo && {
      label: "видео",
      title: featuredVideo.title,
      text: featuredVideo.excerpt,
      href: "/archive?type=Видео",
      cta: "Смотреть",
      image: "/images/viktor-1.jpg"
    }
  ].filter((item): item is { label: string; title: string; text: string; href: string; cta: string; image: string } => Boolean(item));

  const todayIcon = (label: string): OrnamentIconName => {
    if (label === "экскурсия") return "tour";
    if (label === "видео") return "video";
    return "article";
  };

  const cleanCaption = (caption: string) => caption;

  const cleanArchiveText = (text: string) => text.trim();

  return (
    <>
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <Image
            src="/images/viktor-1.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">портал Виктора Амчиславского</p>
          <h1>Еврейский Петербург</h1>
          <p className="hero-subline">История, память и люди.</p>
          <p className="lead">
            Авторские экскурсии, лекции и исследования о еврейском Петербурге,
            городской памяти и скрытых слоях истории.
          </p>
          <div className="actions">
            <Link className="button button-primary" href="/tours#contact">
              Оставить заявку
            </Link>
            <Link className="button button-secondary" href="/about">
              О проекте
            </Link>
          </div>
        </div>
      </section>

      <StatusStrip />

      <section className="section split-section viktor-identity light-section">
        <div>
          <p className="eyebrow">Автор портала</p>
          <h2>Виктор Амчиславский</h2>
        </div>
        <div>
          <p className="hero-status">{statusPhrase}</p>
          <p>{bio}</p>
          <Link className="text-link" href="/about">
            О Викторе
          </Link>
        </div>
      </section>

      <section className="section trust-section compact-section light-section">
        <div className="section-heading">
          <p className="eyebrow">Мы доверяем</p>
          <h2>Партнёры, площадки и культурный контекст</h2>
        </div>
        <div className="trust-grid trust-partner-grid" aria-label="Партнёры и источники доверия">
          {trustPartners.map((partner) => (
            <a href={partner.href} key={partner.href} target="_blank" rel="noreferrer">
              <BemidbarTrustIcon name={partner.icon} />
              <span>{partner.title}</span>
              <small>{partner.description}</small>
            </a>
          ))}
        </div>
      </section>

      <section className="section jewish-pearls-section light-section">
        <div className="jewish-pearls-card">
          <BemidbarTrustIcon name="pearls" />
          <div>
            <p className="eyebrow">{jewishPearls.status}</p>
            <h2>{jewishPearls.title}</h2>
            <p>{jewishPearls.description}</p>
          </div>
          <Link className="button button-secondary" href="/jewish-pearls">
            О проекте
          </Link>
        </div>
      </section>

      <section className="section home-digest light-section">
        <div className="digest-column today-column">
          <div className="section-heading">
            <p className="eyebrow">Сегодня в Бемидбар</p>
            <h2>Новые тексты, маршруты и видео</h2>
          </div>
          <div className="today-grid">
            {todayItems.map((item) => (
              <article className="today-card" key={item.title}>
                <div className="today-card-image">
                  <Image src={item.image} alt="" fill sizes="(max-width: 900px) 100vw, 18vw" />
                </div>
                <span className="badge badge-with-icon"><OrnamentIcon name={todayIcon(item.label)} />{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link className="text-link" href={item.href}>
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="digest-column archive-feature">
          <div className="section-heading">
            <p className="eyebrow">Из архива</p>
            <Link className="section-more" href="/archive">
              Смотреть весь архив
            </Link>
          </div>
          <article className="archive-feature-card">
            {featuredArchive.image && (
              <div className="archive-feature-image">
                <Image src={featuredArchive.image} alt={`${featuredArchive.title}: архивный материал`} fill sizes="(max-width: 900px) 100vw, 34vw" />
              </div>
            )}
            <OrnamentIcon name="archive" />
            <h2>{featuredArchive.title}</h2>
            <p>{cleanArchiveText(featuredArchive.excerpt)}</p>
            <span>{featuredArchive.date} · {featuredArchive.source}</span>
          </article>
        </div>

        <div className="digest-column gallery-feature">
          <div className="section-heading">
            <p className="eyebrow">Новое в галерее</p>
            <Link className="section-more" href="/gallery">
              Смотреть все
            </Link>
          </div>
          <div className="gallery-mini-grid">
            {galleryItems.map((item) => (
              <div className="gallery-mini" key={item.title}>
                <Image src={item.image} alt={`${item.title}: ${cleanCaption(item.caption)}`} fill sizes="(max-width: 900px) 33vw, 10vw" />
              </div>
            ))}
          </div>
          <p>Фотографии и документы из архива еврейского Петербурга.</p>
        </div>
      </section>

      <section className="section seo-text light-section">
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

      <section className="section archive-slice light-section">
        <div className="section-heading">
          <p className="eyebrow">Из архива</p>
          <h2>Тексты, видео и визуальная память</h2>
        </div>
        <div className="archive-slice-grid">
          {featuredArticle && (
            <article className="archive-slice-card">
                <span className="badge badge-with-icon"><OrnamentIcon name="article" />статья</span>
              <h3>{featuredArticle.title}</h3>
              <p>{featuredArticle.excerpt}</p>
              <Link className="text-link" href={`/articles/${featuredArticle.slug}`}>
                Читать
              </Link>
            </article>
          )}
          {featuredVideo && (
            <article className="archive-slice-card">
              <span className="badge badge-with-icon"><OrnamentIcon name="video" />видео</span>
              <h3>{featuredVideo.title}</h3>
              <p>{featuredVideo.excerpt}</p>
              <Link className="text-link" href="/archive?type=Видео">
                Смотреть в архиве
              </Link>
            </article>
          )}
          {featuredPhoto && (
            <article className="archive-slice-card archive-slice-photo">
              <div className="archive-slice-image">
                <Image src={featuredPhoto.image} alt={`${featuredPhoto.title}: ${cleanCaption(featuredPhoto.caption)}`} fill sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <span className="badge badge-with-icon"><OrnamentIcon name="gallery" />фото</span>
              <h3>{featuredPhoto.title}</h3>
              <Link className="text-link" href="/gallery">
                В галерею
              </Link>
            </article>
          )}
        </div>
      </section>

      <section className="section light-section">
        <div className="section-heading">
          <p className="eyebrow">Экскурсии и лекции</p>
          <h2>Город как архив, текст и живое свидетельство</h2>
        </div>
        <div className="service-preview">
          {services.slice(0, 6).map((service) => (
            <article className="service-card" key={service.title}>
              <OrnamentIcon name="tour" />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
        <Link className="text-link" href="/tours">
          Все направления
        </Link>
      </section>

      <ReviewsSection limit={3} />

      <section className="section light-section">
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

      <section className="section latest-materials light-section">
        <div className="section-heading">
          <p className="eyebrow">Последние материалы</p>
          <h2>Новые поступления архива и библиотеки</h2>
        </div>
        <div className="latest-materials-grid">
          {latestMaterials.map((item) => (
            <article className="latest-material-card" key={`${item.label}-${item.title}`}>
              <span className="badge badge-with-icon"><OrnamentIcon name={item.icon} />{item.label}</span>
              <h3>{item.title}</h3>
              <p>{cleanArchiveText(item.text)}</p>
              <Link className="text-link" href={item.href}>
                Открыть
              </Link>
            </article>
          ))}
        </div>
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

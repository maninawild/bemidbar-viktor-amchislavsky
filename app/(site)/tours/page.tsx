import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactBlock } from "@/components/contact-block";
import { JsonLd } from "@/components/json-ld";
import { ReviewsSection } from "@/components/reviews-section";
import { routeCategories, site, trustMarker, type ViktorRoute } from "@/lib/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Экскурсии и лекции Виктора Амчиславского | Еврейский Петербург",
  description:
    "Авторские экскурсии и лекции Виктора Амчиславского по еврейскому Петербургу, Большой Хоральной синагоге, русско-еврейской истории, Дому культуры Льва Лурье и культурологии Петербурга.",
  path: "/tours"
});

function contactHref(route: ViktorRoute) {
  return `/contacts?tema=${encodeURIComponent(route.title)}`;
}

function shortSentence(text: string) {
  return text.split(/(?<=[.!?])\s+/)[0] ?? text;
}

function routeChips(route: ViktorRoute) {
  return [
    route.format,
    route.duration,
    route.language,
    route.lurieArchive ? "ДК Льва Лурье" : undefined
  ].filter((chip): chip is string => Boolean(chip));
}

export default function ServicesPage() {
  const routes = routeCategories.flatMap((category) => category.routes as ViktorRoute[]);

  return (
    <div className="tours-page">
      <section className="page-hero">
        <p className="eyebrow">{trustMarker}</p>
        <h1>Маршруты Виктора</h1>
        <p>
          Виктор Амчиславский — историк, краевед, гид и лектор Дома культуры
          Льва Лурье. Его маршруты соединяют архивную точность, городскую память,
          еврейскую историю Петербурга и живой авторский рассказ.
        </p>
      </section>

      <section className="section archive-intro compact-section">
        <div>
          <p className="eyebrow">Авторские маршруты</p>
          <h2>Город как архив, биография и культурная сцена</h2>
        </div>
        <p>
          Это не полный каталог внешней площадки, а кураторская карта тем,
          подтвержденная публичным архивом ДК Льва Лурье и адаптированная для
          персонального сайта Виктора.
        </p>
      </section>

      <section className="section seo-text compact-section">
        <p className="eyebrow">Экскурсии по еврейскому Петербургу</p>
        <h2>Маршруты для частных прогулок, групп и образовательных программ</h2>
        <p>
          Авторские экскурсии Виктора Амчиславского помогают увидеть Петербург
          через историю еврейской общины, синагоги, архивы, биографии, дворы,
          улицы и культурные следы. Маршруты подходят для частных прогулок,
          групп, образовательных программ и лекционных циклов.
        </p>
        <div className="seo-link-row" aria-label="Связанные разделы">
          <Link className="text-link" href="/archive">
            Архив маршрутов и видео
          </Link>
          <Link className="text-link" href="/reviews">
            Отзывы слушателей
          </Link>
          <Link className="text-link" href="/contacts">
            Обсудить экскурсию
          </Link>
        </div>
      </section>

      {routeCategories.map((category) => (
        <section className="section route-category" key={category.title}>
          <div className="section-heading">
            <p className="eyebrow">Категория</p>
            <h2>{category.title}</h2>
          </div>
          <div className="route-grid">
            {(category.routes as ViktorRoute[]).map((route) => (
              <article className="route-card" key={route.title}>
                {route.image && (
                  <div className="route-card-image">
                    <Image
                      src={route.image}
                      alt={`${route.title}: обложка авторского маршрута Виктора Амчиславского`}
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                    />
                  </div>
                )}
                <div className="route-card-top">
                  <span className="route-category-name">{route.category}</span>
                </div>
                <h3>{route.title}</h3>
                <p>{shortSentence(route.description)}</p>
                <div className="route-details">
                  {routeChips(route).map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
                <Link className="route-cta" href={contactHref(route)}>
                  Обсудить маршрут
                </Link>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="section archive-band">
        <div>
          <p className="eyebrow">Публичный архив</p>
          <h2>Архив маршрутов в Доме культуры Льва Лурье</h2>
          <p>
            Часть авторских экскурсий Виктора проходила в программе Дома культуры
            Льва Лурье. Этот архив показывает широту его тем: от Большой
            Хоральной синагоги и еврейского Васильевского острова до Сестрорецка,
            Айн Рэнд, Шагала, Дягилева и истории русско-еврейской культуры.
          </p>
        </div>
        <Link className="button button-primary" href={site.lurieProfile} target="_blank" rel="noreferrer">
          Профиль Виктора в ДК Льва Лурье
        </Link>
      </section>

      <ReviewsSection limit={6} />

      <section className="section split-section">
        <div>
          <p className="eyebrow">Индивидуальный запрос</p>
          <h2>Консультации и авторские темы</h2>
        </div>
        <div>
          <p>
            Если вам нужен маршрут для частной группы, лекция для культурной
            программы или консультация по еврейской истории и Петербургу,
            тему можно обсудить напрямую.
          </p>
          <Link className="text-link" href="/contacts?tema=Индивидуальный маршрут или лекция">
            Связаться по индивидуальному запросу
          </Link>
        </div>
      </section>

      <ContactBlock />
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Главная", path: "/" }, { name: "Экскурсии и лекции", path: "/tours" }]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Авторские маршруты Виктора Амчиславского",
            itemListElement: routes.map((route, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "TouristTrip",
                name: route.title,
                description: route.description,
                touristType: route.format,
                provider: {
                  "@type": "Person",
                  name: "Виктор Амчиславский"
                },
                areaServed: "Санкт-Петербург",
                inLanguage: "ru",
                url: `${site.url}/contacts?tema=${encodeURIComponent(route.title)}`
              }
            }))
          }
        ]}
      />
    </div>
  );
}

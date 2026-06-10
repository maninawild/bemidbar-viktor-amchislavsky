import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ReviewCard } from "@/components/review-card";
import { ContactBlock } from "@/components/contact-block";
import { reviews, site } from "@/lib/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Отзывы о Викторе Амчиславском | Дом культуры Льва Лурье",
  description:
    "Отзывы слушателей Дома культуры Льва Лурье об экскурсиях и лекциях Виктора Амчиславского: еврейский Петербург, городская память, юмор и академическая глубина.",
  path: "/reviews"
});

export default function ReviewsPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">ДК Льва Лурье</p>
        <h1>Отзывы слушателей</h1>
        <p>
          Отзывы опубликованы на странице Дома культуры Льва Лурье и относятся к
          экскурсиям и лекциям Виктора Амчиславского.
        </p>
        <div className="actions">
          <Link className="button button-primary" href={site.lurieReviews} target="_blank" rel="noreferrer">
            Все отзывы на сайте ДК Льва Лурье
          </Link>
        </div>
      </section>

      <section className="section reviews-page-section">
        <div className="section-heading">
          <p className="eyebrow">Выборка из публичного архива</p>
          <h2>Живой рассказ, глубина и внимательность к слушателю</h2>
        </div>
        <div className="reviews-grid reviews-grid-wide">
          {reviews.map((review) => (
            <ReviewCard key={`${review.date}-${review.reviewerName}-${review.excursionTitle}`} review={review} />
          ))}
        </div>
      </section>

      <ContactBlock />
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Главная", path: "/" }, { name: "Отзывы", path: "/reviews" }])}
      />
    </>
  );
}

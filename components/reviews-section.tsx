import Link from "next/link";
import { ReviewCard } from "@/components/review-card";
import { reviews, site } from "@/lib/site";

type ReviewsSectionProps = {
  limit?: number;
  showAllLink?: boolean;
};

export function ReviewsSection({ limit = reviews.length, showAllLink = true }: ReviewsSectionProps) {
  const visibleReviews = reviews.slice(0, limit);

  return (
    <section className="section reviews-section">
      <div className="reviews-heading">
        <div>
          <p className="eyebrow">ДК Льва Лурье</p>
          <h2>Отзывы слушателей Дома культуры Льва Лурье</h2>
        </div>
        <p>
          Отзывы опубликованы на странице Дома культуры Льва Лурье и относятся к
          экскурсиям и лекциям Виктора Амчиславского.
        </p>
      </div>

      <div className="reviews-grid">
        {visibleReviews.map((review) => (
          <ReviewCard key={`${review.date}-${review.reviewerName}-${review.excursionTitle}`} review={review} />
        ))}
      </div>

      <div className="reviews-actions">
        {showAllLink && (
          <Link className="button button-secondary" href="/reviews">
            Все отзывы
          </Link>
        )}
        <Link className="button button-primary" href={site.lurieReviews} target="_blank" rel="noreferrer">
          Все отзывы на сайте ДК Льва Лурье
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";
import type { Review } from "@/lib/site";
export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="review-card">
      <span className="review-mark" aria-hidden="true">“</span>
      <blockquote>{review.excerpt}</blockquote>
      <div className="review-meta">
        <div>
          <strong>{review.reviewerName}</strong>
          <span>{review.date} · {review.excursionTitle}</span>
        </div>
        <Link className="review-source-link" href={review.sourceUrl} target="_blank" rel="noreferrer">
          Полный отзыв
        </Link>
      </div>
    </article>
  );
}

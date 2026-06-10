import Link from "next/link";
import type { Review } from "@/lib/site";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="review-card">
      <div className="review-card-top">
        <span className="badge">отзыв</span>
        <span>{review.date}</span>
      </div>
      <h3>{review.excursionTitle}</h3>
      <blockquote>{review.excerpt}</blockquote>
      <div className="review-meta">
        <span>{review.reviewerName}</span>
        <Link href={review.sourceUrl} target="_blank" rel="noreferrer">
          {review.source}
        </Link>
      </div>
    </article>
  );
}

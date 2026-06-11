import Link from "next/link";
import { Article } from "@/lib/articles";
import { OrnamentIcon } from "@/components/ornament-icon";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="article-card">
      <OrnamentIcon name="article" />
      <p className="meta">
        {new Intl.DateTimeFormat("ru-RU", {
          day: "numeric",
          month: "long",
          year: "numeric"
        }).format(new Date(article.date))}
      </p>
      <h3>
        <Link href={`/articles/${article.slug}`}>{article.title}</Link>
      </h3>
      <p>{article.excerpt}</p>
      {article.tags.length > 0 && (
        <div className="tags">
          {article.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}
    </article>
  );
}

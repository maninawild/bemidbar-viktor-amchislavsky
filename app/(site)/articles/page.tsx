import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { JsonLd } from "@/components/json-ld";
import { getArticles } from "@/lib/articles";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Статьи Виктора Амчиславского | Русско-еврейская история и Петербург",
  description:
    "Статьи Виктора Амчиславского о русско-еврейской истории, еврейском Петербурге, Большой Хоральной синагоге, культурной памяти и наследии Санкт-Петербурга.",
  path: "/articles"
});

export default function ArticlesPage() {
  const articles = getArticles();

  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Статьи</p>
        <h1>Тексты о городе, памяти и русско-еврейском наследии</h1>
        <p>
          Раздел подготовлен как редактируемая библиотека: новые материалы можно
          добавлять через админ-панель и хранить в Markdown.
        </p>
      </section>
      <section className="section">
        <div className="article-grid">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
      <JsonLd data={breadcrumbJsonLd([{ name: "Главная", path: "/" }, { name: "Статьи", path: "/articles" }])} />
    </>
  );
}

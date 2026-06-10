import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { getArticleBySlug, getArticles, markdownToHtml } from "@/lib/articles";
import { site } from "@/lib/site";
import { breadcrumbJsonLd, ogImage, seoKeywords } from "@/lib/seo";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug);

  if (!article || !article.published) {
    return {};
  }

  return {
    title: {
      absolute: `${article.title} | Виктор Амчиславский`
    },
    description: article.excerpt,
    keywords: [...seoKeywords, ...article.tags],
    alternates: {
      canonical: `/articles/${article.slug}`
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${site.url}/articles/${article.slug}`,
      type: "article",
      publishedTime: article.date,
      authors: ["Виктор Амчиславский"],
      images: article.coverImage
        ? [
            {
              url: article.coverImage,
              width: 1800,
              height: 1200,
              alt: article.title
            }
          ]
        : [ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.coverImage ?? ogImage.url]
    }
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);

  if (!article || !article.published) {
    notFound();
  }

  const content = await markdownToHtml(article.body);

  return (
    <article className="article-page">
      <p className="eyebrow">Статья</p>
      <h1>{article.title}</h1>
      <p className="article-date">
        {new Intl.DateTimeFormat("ru-RU", {
          day: "numeric",
          month: "long",
          year: "numeric"
        }).format(new Date(article.date))}
      </p>
      <p className="article-excerpt">{article.excerpt}</p>
      <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Главная", path: "/" },
            { name: "Статьи", path: "/articles" },
            { name: article.title, path: `/articles/${article.slug}` }
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            datePublished: article.date,
            dateModified: article.date,
            inLanguage: "ru",
            url: `${site.url}/articles/${article.slug}`,
            image: article.coverImage ? `${site.url}${article.coverImage}` : `${site.url}${ogImage.url}`,
            author: {
              "@type": "Person",
              name: "Виктор Амчиславский",
              url: site.url
            },
            publisher: {
              "@type": "Organization",
              name: "Бемидбар",
              url: site.url
            },
            keywords: article.tags.join(", ")
          }
        ]}
      />
    </article>
  );
}

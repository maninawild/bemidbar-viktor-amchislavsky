import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export type Article = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  tags: string[];
  published: boolean;
  body: string;
};

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export function getArticles(includeDrafts = false): Article[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(articlesDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        title: data.title,
        slug: data.slug ?? fileName.replace(/\.md$/, ""),
        date: data.date,
        excerpt: data.excerpt,
        coverImage: data.coverImage,
        tags: data.tags ?? [],
        published: data.published ?? false,
        body: content
      } satisfies Article;
    })
    .filter((article) => includeDrafts || article.published)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export function getArticleBySlug(slug: string) {
  return getArticles(true).find((article) => article.slug === slug);
}

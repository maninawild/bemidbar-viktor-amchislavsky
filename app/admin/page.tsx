import fs from "fs";
import path from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Админ — Бемидбар",
  robots: {
    index: false,
    follow: false
  }
};

function getMarkdownFiles() {
  const contentPath = path.join(process.cwd(), "content");

  if (!fs.existsSync(contentPath)) {
    return [];
  }

  return fs
    .readdirSync(contentPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

export default function AdminPage() {
  const files = getMarkdownFiles();

  return (
    <main className="admin-page">
      <section className="admin-shell">
        <div className="admin-intro">
          <p className="eyebrow">Админ-панель</p>
          <h1>Редактирование материалов</h1>
          <p>
            Временная рабочая страница для публикации материалов. Статьи,
            маршруты, архивные элементы, видео и галереи хранятся в Markdown,
            а структура уже подготовлена для
            последующего подключения Git-based CMS.
          </p>
          <div className="admin-files" aria-label="Разделы контента">
            {files.map((file) => (
              <span key={file}>{file}</span>
            ))}
          </div>
        </div>
        <div className="admin-workflow">
          <h2>Как добавить или изменить материал</h2>
          <ol>
            <li>Откройте нужный файл в папках content/articles, content/routes или content/archive.</li>
            <li>Измените заголовок, дату, описание, ссылки, теги и основной текст.</li>
            <li>Для нового материала создайте отдельный Markdown-файл с уникальным slug.</li>
            <li>После подключения Git-based CMS эти поля будут доступны в визуальной админке.</li>
          </ol>
          <p>
            Для обложек используйте изображения из public/images или добавьте новый
            файл в эту папку и укажите путь в поле cover.
          </p>
        </div>
      </section>
    </main>
  );
}

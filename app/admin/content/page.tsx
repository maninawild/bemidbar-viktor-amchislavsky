export default function AdminContentPage() {
  return (
    <main className="admin-page">
      <section className="admin-shell">
        <div className="admin-intro">
          <p className="eyebrow">Контент</p>
          <h1>Статьи, архив и галерея</h1>
          <p>Единый вход для редакторских материалов: статьи, архивные элементы, изображения и описания маршрутов.</p>
        </div>
        <div className="admin-workflow">
          <h2>Роли</h2>
          <p>guide/editor может работать с материалами и заявками. owner/admin дополнительно управляет платежами, комиссией и выплатами.</p>
        </div>
      </section>
    </main>
  );
}

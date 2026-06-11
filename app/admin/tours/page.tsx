export default function AdminToursPage() {
  return (
    <main className="admin-page">
      <section className="admin-shell">
        <div className="admin-intro">
          <p className="eyebrow">Маршруты</p>
          <h1>Каталог экскурсий</h1>
          <p>Редактирование описаний, длительности, языка, категории, изображения и публичного статуса маршрута.</p>
        </div>
        <div className="admin-workflow">
          <h2>Доступ</h2>
          <p>owner/admin управляет всем каталогом. guide/editor может редактировать контент маршрутов и доступность без доступа к платежным ключам.</p>
        </div>
      </section>
    </main>
  );
}

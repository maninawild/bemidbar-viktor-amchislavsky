export default function AdminPaymentsPage() {
  return (
    <main className="admin-page">
      <section className="admin-shell">
        <div className="admin-intro">
          <p className="eyebrow">Платежи</p>
          <h1>YooKassa операции</h1>
          <p>Список платежных ссылок, статусов YooKassa, сумм, валюты, вебхуков и возвратов.</p>
        </div>
        <div className="admin-workflow">
          <h2>Безопасность</h2>
          <p>Ключи YooKassa хранятся только в серверных переменных окружения и не выводятся в интерфейс.</p>
        </div>
      </section>
    </main>
  );
}

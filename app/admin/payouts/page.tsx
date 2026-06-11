export default function AdminPayoutsPage() {
  return (
    <main className="admin-page">
      <section className="admin-shell">
        <div className="admin-intro">
          <p className="eyebrow">Выплаты</p>
          <h1>Отчет по распределению</h1>
          <p>После оплаты система рассчитывает комиссию сайта и выплату гиду по серверной настройке SITE_COMMISSION_PERCENT.</p>
        </div>
        <div className="admin-workflow">
          <h2>Формула</h2>
          <p>По умолчанию: комиссия сайта 20%, выплата гиду 80%. Значение должно храниться в env/config, а не только в интерфейсе.</p>
        </div>
      </section>
    </main>
  );
}

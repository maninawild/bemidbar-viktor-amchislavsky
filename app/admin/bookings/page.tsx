export default function AdminBookingsPage() {
  return (
    <main className="admin-page">
      <section className="admin-shell">
        <div className="admin-intro">
          <p className="eyebrow">Бронирования</p>
          <h1>Заявки и подтверждение</h1>
          <p>Здесь будет очередь заявок: новые, подтвержденные к оплате, оплаченные, завершенные и отмененные.</p>
        </div>
        <div className="admin-workflow">
          <h2>Рабочий процесс</h2>
          <ol>
            <li>Проверить заявку и согласовать дату вручную.</li>
            <li>Перевести статус в confirmed_waiting_payment.</li>
            <li>Создать ссылку на оплату через YooKassa.</li>
            <li>После вебхука YooKassa статус станет paid.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}

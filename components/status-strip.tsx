import { statusItems } from "@/lib/site";

export function StatusStrip() {
  return (
    <section className="status-strip" aria-label="Профессиональный статус">
      <div className="status-strip-title">
        <p className="eyebrow">Статус</p>
        <h2>Виктор Амчиславский</h2>
      </div>
      <div className="status-strip-items">
        {statusItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

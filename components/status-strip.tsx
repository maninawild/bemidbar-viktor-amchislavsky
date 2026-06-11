import { statusItems } from "@/lib/site";

export function StatusStrip() {
  return (
    <section className="status-strip trust-block" aria-label="Профессиональный статус">
      <div className="status-strip-items">
        {statusItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

import { statusItems } from "@/lib/site";
import { OrnamentIcon } from "@/components/ornament-icon";

const icons = ["lurie", "synagogue", "heritage", "pearls"] as const;

export function StatusStrip() {
  return (
    <section className="status-strip trust-block" aria-label="Профессиональный статус">
      <div className="status-strip-items">
        {statusItems.map((item, index) => (
          <span key={item}>
            <OrnamentIcon name={icons[index] ?? "heritage"} />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

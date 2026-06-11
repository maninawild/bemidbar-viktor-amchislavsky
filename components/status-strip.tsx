import { statusItems } from "@/lib/site";
import { BemidbarTrustIcon, type BemidbarTrustIconName } from "@/components/icons/bemidbar-icons";

const icons: BemidbarTrustIconName[] = ["lurie", "synagogue", "heritage", "pearls"];

export function StatusStrip() {
  return (
    <section className="status-strip trust-block" aria-label="Профессиональный статус">
      <div className="status-strip-items">
        {statusItems.map((item, index) => (
          <span key={item}>
            <BemidbarTrustIcon name={icons[index] ?? "heritage"} />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

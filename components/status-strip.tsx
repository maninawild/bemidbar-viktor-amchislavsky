import { BemidbarTrustIcon, type BemidbarTrustIconName } from "@/components/icons/bemidbar-icons";

const statusItems: Array<{ icon: BemidbarTrustIconName; text: string }> = [
  {
    icon: "lurie",
    text: "Автор экскурсий Дома культуры Льва Лурье"
  },
  {
    icon: "synagogue",
    text: "Куратор библиотеки Большой Хоральной синагоги"
  },
  {
    icon: "heritage",
    text: "Исследователь русско-еврейского наследия Петербурга"
  },
  {
    icon: "pearls",
    text: "Создатель проекта Jewish Pearls"
  }
];

export function StatusStrip() {
  return (
    <section className="status-strip trust-block" aria-label="Профессиональный статус">
      <div className="status-strip-items">
        {statusItems.map((item) => (
          <div className="status-strip-item" key={item.text}>
            <BemidbarTrustIcon name={item.icon} />
            <p className="status-strip-copy">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

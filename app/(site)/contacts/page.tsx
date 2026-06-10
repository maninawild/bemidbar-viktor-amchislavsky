import type { Metadata } from "next";
import { ContactBlock } from "@/components/contact-block";
import { ObfuscatedEmailText, ProtectedEmail } from "@/components/protected-email";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Связаться с Виктором Амчиславским | Экскурсии и лекции",
  description:
    "Связаться с Виктором Амчиславским: запросить экскурсию по еврейскому Петербургу, лекцию по еврейской истории или консультацию по русско-еврейскому наследию.",
  path: "/contacts"
});

export default function ContactsPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Контакты</p>
        <h1>Связаться с Виктором</h1>
        <p>
          Для запроса экскурсии, лекции, консультации или культурного проекта
          напишите через форму или используйте защищённую почту: <ObfuscatedEmailText />.
        </p>
        <div className="actions">
          <ProtectedEmail className="button button-primary" />
        </div>
      </section>
      <ContactBlock />
      <JsonLd data={breadcrumbJsonLd([{ name: "Главная", path: "/" }, { name: "Контакты", path: "/contacts" }])} />
    </>
  );
}

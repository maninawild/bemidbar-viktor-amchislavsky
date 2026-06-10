import { ContactForm } from "@/components/contact-form";
import { ObfuscatedEmailText, ProtectedEmail } from "@/components/protected-email";
import { SocialLinks } from "@/components/social-links";

export function ContactBlock() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-heading">
        <p className="eyebrow">Контакты</p>
        <h2>Обсудить экскурсию, лекцию или исследовательский запрос</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-panel">
          <p>
            Напишите Виктору, если хотите выбрать маршрут, пригласить на лекцию,
            уточнить тему консультации или предложить культурный проект.
          </p>
          <div className="contact-links">
            <ProtectedEmail className="email-action" />
            <p className="email-obfuscated">
              Для ручного письма: <ObfuscatedEmailText />
            </p>
            <SocialLinks />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

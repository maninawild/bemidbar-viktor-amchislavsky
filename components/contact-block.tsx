import { ContactForm } from "@/components/contact-form";
import { OrnamentIcon } from "@/components/ornament-icon";
import { SocialLinks } from "@/components/social-links";

export function ContactBlock() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-heading">
        <p className="eyebrow">Контакты</p>
        <h2>Оставить заявку на экскурсию, лекцию или исследовательский запрос</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-panel">
          <OrnamentIcon name="contact" />
          <p>
            Напишите Виктору, если хотите выбрать маршрут, пригласить на лекцию,
            уточнить тему консультации или предложить культурный проект.
          </p>
          <div className="contact-links">
            <SocialLinks />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

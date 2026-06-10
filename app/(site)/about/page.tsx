import type { Metadata } from "next";
import Image from "next/image";
import { ContactBlock } from "@/components/contact-block";
import { JsonLd } from "@/components/json-ld";
import { StatusStrip } from "@/components/status-strip";
import { bio, site, statusPhrase, trustMarker } from "@/lib/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "О Викторе Амчиславском | Историк, гид, лектор",
  description:
    "О Викторе Амчиславском: историк, гид по еврейскому Петербургу, лектор Дома культуры Льва Лурье, куратор библиотеки Большой Хоральной синагоги и создатель Jewish Pearls.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div>
          <p className="eyebrow">О Викторе</p>
          <h1>Виктор Амчиславский</h1>
          <p className="hero-status">{statusPhrase}</p>
          <p>{bio}</p>
        </div>
        <figure className="portrait">
          <Image
            src="/images/viktor/viktor-amchislavsky-hero.webp"
            alt="Портрет Виктора Амчиславского, историка, гида и лектора"
            fill
            sizes="(max-width: 900px) 100vw, 360px"
          />
        </figure>
      </section>

      <StatusStrip />

      <section className="section split-section">
        <div>
          <p className="eyebrow">Метод</p>
          <h2>История без экскурсионного шума</h2>
        </div>
        <p>
          В центре работы Виктора — Петербург как многослойный культурный текст.
          Его экскурсии и лекции соединяют архивную точность, городскую
          внимательность и уважение к традиции. Это разговор не о «достопримечательностях»,
          а о людях, адресах, документах, языках и памяти.
        </p>
      </section>

      <section className="section split-section lurie-about">
        <div>
          <p className="eyebrow">ДК Льва Лурье</p>
          <h2>{trustMarker}</h2>
        </div>
        <div>
          <p>
            Виктор — один из авторов и ведущих экскурсий Дома культуры Льва Лурье.
            В его маршрутах Петербург раскрывается через архивы, городские
            легенды, биографии, синагоги, дворы, дачные районы и культурные следы
            русско-еврейской истории.
          </p>
          <a className="text-link" href={site.lurieProfile} target="_blank" rel="noreferrer">
            Профиль Виктора в ДК Льва Лурье
          </a>
        </div>
      </section>

      <section className="section">
        <div className="quote-band">
          <p>
            «Бемидбар» означает пространство пути и разговора. Этот портал
            собирает тексты, маршруты и темы, в которых Петербург открывается как
            место еврейской, русской и европейской культурной встречи.
          </p>
        </div>
      </section>

      <ContactBlock />
      <JsonLd data={breadcrumbJsonLd([{ name: "Главная", path: "/" }, { name: "О Викторе", path: "/about" }])} />
    </>
  );
}

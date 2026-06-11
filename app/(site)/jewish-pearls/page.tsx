import type { Metadata } from "next";
import Link from "next/link";
import { BemidbarTrustIcon } from "@/components/icons/bemidbar-icons";
import { JsonLd } from "@/components/json-ld";
import { jewishPearls } from "@/lib/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Jewish Pearls | Бемидбар",
  description:
    "Jewish Pearls — отдельный проект Виктора Амчиславского о людях, местах и сюжетах еврейской памяти Петербурга. Раздел находится в разработке.",
  path: "/jewish-pearls"
});

export default function JewishPearlsPage() {
  return (
    <>
      <section className="page-hero jewish-pearls-hero">
        <p className="eyebrow">{jewishPearls.status}</p>
        <h1>{jewishPearls.title}</h1>
        <p>{jewishPearls.description}</p>
      </section>

      <section className="section jewish-pearls-page-section light-section">
        <div className="jewish-pearls-card">
          <BemidbarTrustIcon name="pearls" />
          <div>
            <p className="eyebrow">Поддержать проект</p>
            <h2>Люди, места и сюжеты памяти</h2>
            <p>
              Если вы хотите предложить материал, уточнить сюжет, поддержать
              исследовательскую работу или обсудить партнёрство, оставьте
              короткую заявку.
            </p>
          </div>
          <Link className="button button-primary" href="/contacts?tema=Jewish%20Pearls">
            Связаться
          </Link>
        </div>
      </section>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Главная", path: "/" },
          { name: "Jewish Pearls", path: "/jewish-pearls" }
        ])}
      />
    </>
  );
}

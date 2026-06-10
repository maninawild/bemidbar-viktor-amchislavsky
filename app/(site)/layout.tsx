import { Footer } from "@/components/footer";
import { FloatingCta } from "@/components/floating-cta";
import { Header } from "@/components/header";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Перейти к содержанию
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <FloatingCta />
      <Footer />
    </>
  );
}

import Link from "next/link";

export function FloatingCta() {
  return (
    <Link className="floating-cta" href="/contacts?tema=Экскурсия">
      <span aria-hidden="true">□</span>
      Обсудить экскурсию
    </Link>
  );
}

import { identity } from "../data/site";
import { useLocale } from "../hooks/useLocale";
import { SectionLinks } from "./SectionLinks";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer id="rodape" className="border-t border-navy/10 py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-8 px-5 md:px-6">
        <div>
          <p className="type-title">{identity.name}</p>
          <p className="type-meta mt-3">{t.hero.eyebrow}</p>
        </div>
        <nav aria-label={t.a11y.footerSections}>
          <SectionLinks
            className="flex flex-wrap gap-x-5 gap-y-2"
            linkClassName="inline-flex min-h-11 items-center text-[0.95rem] font-medium"
          />
        </nav>
      </div>
    </footer>
  );
}

import type { Ref } from "react";
import { sectionIds } from "../data/site";
import { useLocale } from "../hooks/useLocale";
import { sectionHref } from "../i18n/locale";

type SectionLinksProps = {
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
  firstLinkRef?: Ref<HTMLAnchorElement>;
};

export function SectionLinks({ className, linkClassName, onNavigate, firstLinkRef }: SectionLinksProps) {
  const { locale, t } = useLocale();

  return (
    <ul className={className}>
      {sectionIds.map((id, index) => (
        <li key={id}>
          <a
            ref={index === 0 ? firstLinkRef : undefined}
            href={sectionHref(locale, id)}
            className={linkClassName}
            onClick={onNavigate}
          >
            {t.nav[id]}
          </a>
        </li>
      ))}
    </ul>
  );
}

import { Link, useLocation } from "react-router-dom";
import { useLocale } from "../hooks/useLocale";
import { localeSwitchHref, projectPath, projectSlugFromPath } from "../i18n/locale";
import { locales } from "../i18n/types";

export function LanguageControl() {
  const { locale, t } = useLocale();
  const { pathname, hash } = useLocation();
  const studySlug = projectSlugFromPath(pathname);

  return (
    <nav aria-label={t.a11y.language}>
      <ul className="flex items-center gap-1">
        {locales.map((item) => {
          const current = item === locale;
          return (
            <li key={item}>
              <Link
                to={studySlug ? projectPath(item, studySlug) : localeSwitchHref(item, hash)}
                hrefLang={item}
                lang={item}
                aria-current={current ? "true" : undefined}
                className={`inline-flex min-h-11 items-center rounded-full px-2.5 text-[0.8125rem] font-semibold tracking-[0.04em] text-navy ${
                  current ? "bg-white" : ""
                }`}
              >
                <span aria-hidden="true">{t.languageShort[item]}</span>
                <span className="sr-only">{t.languageNames[item]}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

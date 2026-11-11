import { useLocation } from "react-router-dom";
import { SiteFrame } from "../components/SiteFrame";
import { useLocale } from "../hooks/useLocale";
import { LocaleProvider } from "../i18n/LocaleProvider";
import { localeFromUnknownPath } from "../i18n/locale";

export function NotFoundPage() {
  const { pathname } = useLocation();
  const locale = localeFromUnknownPath(pathname);

  return (
    <LocaleProvider locale={locale}>
      <NotFoundView />
    </LocaleProvider>
  );
}

function NotFoundView() {
  const { t } = useLocale();

  return (
    <SiteFrame>
      <section className="px-5 py-24 md:px-6" aria-labelledby="missing-title">
        <div className="mx-auto max-w-[1120px]">
          <h1 id="missing-title" className="max-w-3xl text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-[-0.03em]">
            {t.notFound.title}
          </h1>
          <p className="mt-6 max-w-xl">{t.notFound.body}</p>
        </div>
      </section>
    </SiteFrame>
  );
}

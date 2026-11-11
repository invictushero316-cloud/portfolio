import { useEffect, useRef, useState } from "react";
import { identity } from "../data/site";
import { useLocale } from "../hooks/useLocale";
import { sectionHref } from "../i18n/locale";
import { LanguageControl } from "./LanguageControl";
import { SectionLinks } from "./SectionLinks";

export function Header() {
  const { locale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-navy/10 bg-ice">
      <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between gap-3 px-5 md:px-6">
        <a
          href={sectionHref(locale, "inicio")}
          className="min-w-0 truncate font-display text-lg tracking-[-0.03em]"
        >
          {identity.name}
        </a>
        <nav aria-label={t.a11y.sections} className="hidden min-w-0 lg:block">
          <SectionLinks
            className="flex items-center gap-x-4"
            linkClassName="inline-flex min-h-11 items-center text-[0.92rem] font-medium whitespace-nowrap"
          />
        </nav>
        <div className="flex shrink-0 items-center gap-1">
          <LanguageControl />
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="section-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? t.a11y.closeMenu : t.a11y.openMenu}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5">
              {open ? (
                <path d="M6 6L18 18M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="1.5" />
              ) : (
                <path d="M4 7H20M4 12H20M4 17H14" fill="none" stroke="currentColor" strokeWidth="1.5" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav
        id="section-menu"
        aria-label={t.a11y.sections}
        hidden={!open}
        className="border-t border-navy/10 px-5 py-3 lg:hidden"
      >
        <SectionLinks
          className="flex flex-col"
          linkClassName="inline-flex min-h-12 items-center text-[1.0625rem] font-medium"
          onNavigate={() => setOpen(false)}
          firstLinkRef={firstLinkRef}
        />
      </nav>
    </header>
  );
}

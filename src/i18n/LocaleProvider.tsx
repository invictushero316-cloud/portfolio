import { useEffect, useMemo, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { applyDocumentMeta } from "./applyDocumentMeta";
import { dictionaries } from "./dictionaries";
import { LocaleContext } from "./locale-context";
import type { Locale } from "./types";

type LocaleProviderProps = {
  locale: Locale;
  children: ReactNode;
};

export function LocaleProvider({ locale, children }: LocaleProviderProps) {
  const { pathname } = useLocation();
  const value = useMemo(() => ({ locale, t: dictionaries[locale] }), [locale]);

  useEffect(() => {
    applyDocumentMeta(locale, pathname, value.t);
  }, [locale, pathname, value.t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

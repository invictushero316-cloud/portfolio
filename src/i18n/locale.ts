import type { Locale } from "./types";

export const localeHomes: Record<Locale, string> = {
  "pt-BR": "/",
  en: "/en",
  es: "/es",
};

export function sectionHref(locale: Locale, id: string): string {
  return `${localeHomes[locale]}#${id}`;
}

const projectBases: Record<Locale, string> = {
  "pt-BR": "/projetos",
  en: "/en/projects",
  es: "/es/proyectos",
};

export function projectPath(locale: Locale, slug: string): string {
  return `${projectBases[locale]}/${slug}`;
}

export function projectSlugFromPath(pathname: string): string | null {
  const match = pathname.match(/^(?:\/projetos|\/en\/projects|\/es\/proyectos)\/([^/]+)\/?$/);
  if (!match) return null;
  try {
    return decodeURIComponent(match[1]);
  } catch {
    return null;
  }
}

export function isApprovedProjectReference(url: string): boolean {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:") return false;
    const host = parsed.hostname.toLowerCase();
    if (host === "wa.me" || host.endsWith(".wa.me") || host === "api.whatsapp.com") return false;
    return true;
  } catch {
    return false;
  }
}

export function localeSwitchHref(locale: Locale, hash: string): string {
  return `${localeHomes[locale]}${hash}`;
}

export function localeFromUnknownPath(pathname: string): Locale {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/es" || pathname.startsWith("/es/")) return "es";
  return "pt-BR";
}

export function isLocaleHome(pathname: string, locale: Locale): boolean {
  const home = localeHomes[locale];
  if (pathname === home) return true;
  if (home === "/") return false;
  return pathname === `${home}/`;
}

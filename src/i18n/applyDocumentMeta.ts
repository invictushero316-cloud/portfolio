import { identity } from "../data/site";
import { projects } from "../data/projects";
import { isLocaleHome, localeHomes, projectPath, projectSlugFromPath } from "./locale";
import type { Dictionary, Locale } from "./types";

const ogLocale: Record<Locale, string> = {
  "pt-BR": "pt_BR",
  en: "en_US",
  es: "es_ES",
};

const ogImage: Record<Locale, string> = {
  "pt-BR": "/assets/brand/og-pt-BR.svg",
  en: "/assets/brand/og-en.svg",
  es: "/assets/brand/og-es.svg",
};

function absolute(origin: string, path: string) {
  return `${origin}${path}`;
}

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`;
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(attribute, key);
    document.head.appendChild(node);
  }
  node.setAttribute("content", content);
}

function replaceManaged(kind: string, create: () => Node[]) {
  document.head.querySelectorAll(`[data-site-meta="${kind}"]`).forEach((node) => node.remove());
  create().forEach((node) => document.head.appendChild(node));
}

export function applyDocumentMeta(locale: Locale, pathname: string, t: Dictionary) {
  const origin = window.location.origin;
  const slug = projectSlugFromPath(pathname);
  const study = slug ? projects.find((item) => item.slug === slug && item.publishPermission) : undefined;
  const home = isLocaleHome(pathname, locale);
  const title = study ? `${study.title} — ${t.meta.title}` : home ? t.meta.title : t.notFound.title;
  const description = study ? t.projects.items[study.slug].description : home ? t.meta.description : t.notFound.body;
  const canonicalPath = study ? projectPath(locale, study.slug) : home ? localeHomes[locale] : null;
  const alternates = study
    ? [
        ["pt-BR", projectPath("pt-BR", study.slug)],
        ["en", projectPath("en", study.slug)],
        ["es", projectPath("es", study.slug)],
        ["x-default", "/"],
      ]
    : [
        ["pt-BR", "/"],
        ["en", "/en"],
        ["es", "/es"],
        ["x-default", "/"],
      ];

  document.head
    .querySelectorAll(
      'link[rel="canonical"], link[rel="alternate"], meta[property="og:locale:alternate"], script[type="application/ld+json"]',
    )
    .forEach((node) => node.remove());

  document.documentElement.lang = locale;
  document.title = title;
  upsertMeta("name", "description", description);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:type", "website");
  upsertMeta("property", "og:locale", ogLocale[locale]);
  upsertMeta("property", "og:image", absolute(origin, ogImage[locale]));
  upsertMeta("property", "og:image:alt", t.meta.imageAlt);
  upsertMeta("property", "og:image:width", "1200");
  upsertMeta("property", "og:image:height", "630");

  if (canonicalPath) {
    upsertMeta("property", "og:url", absolute(origin, canonicalPath));
  } else {
    document.head.querySelector('meta[property="og:url"]')?.remove();
  }

  replaceManaged("canonical", () => {
    if (!canonicalPath) return [];
    const link = document.createElement("link");
    link.rel = "canonical";
    link.href = absolute(origin, canonicalPath);
    link.dataset.siteMeta = "canonical";
    return [link];
  });

  replaceManaged("alternate", () =>
    alternates.map(([hreflang, path]) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = hreflang;
      link.href = absolute(origin, path);
      link.dataset.siteMeta = "alternate";
      return link;
    }),
  );

  replaceManaged("og-locale-alternate", () =>
    (Object.keys(ogLocale) as Locale[])
      .filter((item) => item !== locale)
      .map((item) => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:locale:alternate");
        meta.content = ogLocale[item];
        meta.dataset.siteMeta = "og-locale-alternate";
        return meta;
      }),
  );

  replaceManaged("ld", () => {
    if (!home && !study) return [];
    const data = study
      ? {
          "@context": "https://schema.org",
          "@type": "WebPage",
          inLanguage: locale,
          name: study.title,
          description,
        }
      : {
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          inLanguage: locale,
          name: title,
          description,
          mainEntity: {
            "@type": "Person",
            name: identity.name,
            jobTitle: t.hero.eyebrow,
            description: t.meta.description,
            knowsLanguage: t.meta.knowsLanguage,
            knowsAbout: t.meta.knowsAbout,
          },
        };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.siteMeta = "ld";
    script.textContent = JSON.stringify(data);
    return [script];
  });
}

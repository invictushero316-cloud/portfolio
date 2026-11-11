import type { ExperienceId } from "../data/experience";
import type { CapsuleId, RangeId, ServiceId } from "../data/skills";
import type { ContributionStatus, ProjectCategory, ProjectSlug } from "../data/projects";
import type { SectionId } from "../data/site";

export const locales = ["pt-BR", "en", "es"] as const;
export type Locale = (typeof locales)[number];

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    imageAlt: string;
    knowsLanguage: [string, string, string];
    knowsAbout: [string, string, string, string, string];
  };
  a11y: {
    skip: string;
    openMenu: string;
    closeMenu: string;
    language: string;
    sections: string;
    footerSections: string;
  };
  languageNames: Record<Locale, string>;
  languageShort: Record<Locale, string>;
  nav: Record<SectionId, string>;
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    lead: string;
    viewProjects: string;
    viewExperience: string;
    platePlace: string;
    plateDiscipline: string;
    capsules: Record<CapsuleId, string>;
  };
  about: {
    index: string;
    title: string;
    paragraphs: [string, string];
    countryLabel: string;
    country: string;
    languagesLabel: string;
    languages: string;
    rangesLabel: string;
    rangesHint: string;
  };
  ranges: Record<RangeId, { label: string; value: string }>;
  experience: {
    index: string;
    title: string;
    intro: string;
    roles: Record<ExperienceId, { role: string; summary: string }>;
  };
  skills: {
    index: string;
    title: string;
    intro: string;
    rangesTitle: string;
    rangeCaption: string;
    apiTitle: string;
    apiNote: string;
    servicesTitle: string;
    services: Record<ServiceId, { title: string; body: string }>;
  };
  projects: {
    index: string;
    title: string;
    intro: string;
    filtersLabel: string;
    filterAll: string;
    emptyFilter: string;
    viewStudy: string;
    backToProjects: string;
    nextProject: string;
    studyNav: string;
    draftLabel: string;
    overviewLabel: string;
    productSite: string;
    productSiteNote: string;
    traceCaption: string;
    roleLabel: string;
    deliverablesLabel: string;
    technologiesLabel: string;
    metricsLabel: string;
    status: Record<ContributionStatus, string>;
    categories: Record<ProjectCategory, string>;
    items: Record<ProjectSlug, { summary: string; description: string }>;
  };
  lab: {
    index: string;
    title: string;
    intro: string;
    conceptLabel: string;
    standIn: string;
    tunnelTitle: string;
    tunnelBody: string;
    noFootage: string;
    studiesTitle: string;
    studiesNote: string;
    pedroEyebrow: string;
    pedroTitle: string;
    pedroBody: string;
    pedroContribution: string;
  };
  certifications: {
    index: string;
    title: string;
    intro: string;
  };
  notFound: {
    title: string;
    body: string;
  };
};

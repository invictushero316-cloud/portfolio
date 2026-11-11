import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { useLocale } from "../hooks/useLocale";
import { isApprovedProjectReference, projectPath, sectionHref } from "../i18n/locale";
import { SiteFrame } from "../components/SiteFrame";
import { TraceFrame } from "../components/TraceFrame";

export function ProjectPage() {
  const { slug = "" } = useParams();
  const { locale, t } = useLocale();
  const published = projects.filter((project) => project.publishPermission);
  const index = published.findIndex((project) => project.slug === slug);
  const project = index >= 0 ? published[index] : undefined;
  const next = project ? published[index + 1] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <SiteFrame>
        <section className="px-5 py-24 md:px-6" aria-labelledby="missing-title">
          <div className="mx-auto max-w-[1120px]">
            <h1 id="missing-title" className="type-section max-w-3xl">
              {t.notFound.title}
            </h1>
            <p className="mt-6 max-w-xl">{t.notFound.body}</p>
            <p className="mt-8">
              <Link className="inline-flex min-h-12 items-center font-semibold" to={sectionHref(locale, "projetos")}>
                {t.projects.backToProjects}
              </Link>
            </p>
          </div>
        </section>
      </SiteFrame>
    );
  }

  const summary = t.projects.items[project.slug].summary;
  const productUrl =
    project.showProductLink && project.publicProductURL && isApprovedProjectReference(project.publicProductURL)
      ? project.publicProductURL
      : null;
  const showMedia = project.screenshotsApproved && project.screenshots.length > 0;

  return (
    <SiteFrame>
      <article className="mx-auto w-full max-w-[1120px] px-5 py-12 md:px-6 md:py-16">
        <p>
          <Link className="inline-flex min-h-12 items-center font-semibold" to={sectionHref(locale, "projetos")}>
            {t.projects.backToProjects}
          </Link>
        </p>
        <p className="type-meta mt-10">{t.projects.categories[project.category]}</p>
        <p className="mt-3 font-medium">
          {project.contributionStatus === "owner-described" ? t.projects.draftLabel : t.projects.overviewLabel}
        </p>
        <h1 className="type-section mt-4 max-w-4xl">{project.title}</h1>
        <p className="mt-6 max-w-2xl text-[1.125rem] leading-relaxed">{summary}</p>
        <p className="mt-4 max-w-2xl">{t.projects.status[project.contributionStatus]}</p>

        {showMedia ? (
          <ul className="mt-10 grid gap-6">
            {project.screenshots.map((shot) => (
              <li key={shot.src} className="overflow-hidden rounded-[20px]">
                <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" className="h-auto w-full" />
              </li>
            ))}
          </ul>
        ) : (
          <figure className="panel mt-10 overflow-hidden">
            <TraceFrame seed={index + 1} />
            <figcaption className="type-meta px-6 py-4">{t.projects.traceCaption}</figcaption>
          </figure>
        )}

        {project.ownerRole ? (
          <section className="mt-12 max-w-2xl" aria-labelledby="study-role">
            <h2 id="study-role" className="type-title">
              {t.projects.roleLabel}
            </h2>
            <p className="mt-4">{project.ownerRole}</p>
          </section>
        ) : null}

        {project.verifiedDeliverables.length > 0 ? (
          <section className="mt-12 max-w-2xl" aria-labelledby="study-deliverables">
            <h2 id="study-deliverables" className="type-title">
              {t.projects.deliverablesLabel}
            </h2>
            <ul className="mt-4 grid gap-2">
              {project.verifiedDeliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {project.technologiesVerified.length > 0 ? (
          <section className="mt-12 max-w-2xl" aria-labelledby="study-tech">
            <h2 id="study-tech" className="type-title">
              {t.projects.technologiesLabel}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologiesVerified.map((item) => (
                <li key={item} className="rounded-full border border-navy/15 bg-white px-3 py-1.5 text-[0.92rem]">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {project.metricsVerified.length > 0 ? (
          <section className="mt-12 max-w-2xl" aria-labelledby="study-metrics">
            <h2 id="study-metrics" className="type-title">
              {t.projects.metricsLabel}
            </h2>
            <ul className="mt-4 grid gap-2">
              {project.metricsVerified.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {productUrl ? (
          <p className="mt-12 max-w-2xl">
            <a
              className="font-semibold underline decoration-navy/30 underline-offset-4"
              href={productUrl}
              rel="noreferrer"
            >
              {t.projects.productSite}
            </a>
            <span className="mt-2 block text-[0.95rem]">{t.projects.productSiteNote}</span>
          </p>
        ) : null}

        <nav aria-label={t.projects.studyNav} className="mt-16 flex flex-col gap-2 border-t border-navy/10 pt-8">
          <Link className="inline-flex min-h-12 items-center font-semibold" to={sectionHref(locale, "projetos")}>
            {t.projects.backToProjects}
          </Link>
          {next ? (
            <Link className="inline-flex min-h-12 items-center font-semibold" to={projectPath(locale, next.slug)}>
              {t.projects.nextProject}: {next.title}
            </Link>
          ) : null}
        </nav>
      </article>
    </SiteFrame>
  );
}

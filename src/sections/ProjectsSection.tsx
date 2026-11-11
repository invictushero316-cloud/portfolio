import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { useLocale } from "../hooks/useLocale";
import { projectPath } from "../i18n/locale";
import { SectionShell } from "../components/SectionShell";
import { TraceFrame } from "../components/TraceFrame";

const filterIds = ["all", "ai", "automation", "saas-crm", "commerce", "analytics", "creative"] as const;
type FilterId = (typeof filterIds)[number];

export function ProjectsSection() {
  const { locale, t } = useLocale();
  const [filter, setFilter] = useState<FilterId>("all");
  const visible = useMemo(
    () => projects.filter((project) => project.publishPermission),
    [],
  );
  const shown =
    filter === "all" ? visible : visible.filter((project) => project.category === filter);

  return (
    <SectionShell id="projetos" index={t.projects.index} title={t.projects.title} intro={t.projects.intro}>
      <div role="group" aria-label={t.projects.filtersLabel} className="flex flex-wrap gap-2">
        {filterIds.map((id) => {
          const selected = filter === id;
          const label = id === "all" ? t.projects.filterAll : t.projects.categories[id];
          return (
            <button
              key={id}
              type="button"
              aria-pressed={selected}
              aria-controls="project-results"
              onClick={() => setFilter(id)}
              className={`inline-flex min-h-11 items-center rounded-full border px-4 text-[0.92rem] font-semibold transition-[border-color,background-color,color] duration-200 ${
                selected
                  ? "border-navy bg-navy text-white underline decoration-2 underline-offset-4"
                  : "border-navy/15 bg-white text-navy no-underline hover:border-navy/40"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
      {shown.length === 0 ? (
        <p id="project-results" role="status" className="mt-10 max-w-xl text-[1.05rem]">
          {t.projects.emptyFilter}
        </p>
      ) : (
        <ul id="project-results" className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-12 lg:gap-8">
          {shown.map((project) => {
            const seed = visible.findIndex((item) => item.slug === project.slug) + 1;
            return (
              <li data-project-card="" key={project.slug}>
                <article className="panel relative flex h-full flex-col overflow-hidden transition-[border-color,box-shadow] duration-200 hover:border-navy/30">
                  <TraceFrame seed={seed} />
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <p className="type-meta">{t.projects.categories[project.category]}</p>
                    <h3 className="type-title mt-3">
                      <Link
                        to={projectPath(locale, project.slug)}
                        className="after:absolute after:inset-0"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="mt-3">{t.projects.items[project.slug].summary}</p>
                    <p className="mt-4 font-medium">
                      {project.contributionStatus === "owner-described"
                        ? t.projects.draftLabel
                        : t.projects.overviewLabel}
                    </p>
                    <p className="mt-2 text-[0.95rem] leading-relaxed">
                      {t.projects.status[project.contributionStatus]}
                    </p>
                    <p className="type-meta mt-6">{t.projects.traceCaption}</p>
                    <p className="mt-auto pt-6 font-semibold">{t.projects.viewStudy}</p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      )}
    </SectionShell>
  );
}

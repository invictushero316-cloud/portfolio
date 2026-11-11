import { experience } from "../data/experience";
import { useLocale } from "../hooks/useLocale";
import { formatDateRange } from "../lib/formatDateRange";
import { SectionShell } from "../components/SectionShell";

const timeline = [...experience].sort((a, b) => a.start.localeCompare(b.start));

export function ExperienceSection() {
  const { locale, t } = useLocale();

  return (
    <SectionShell id="experiencia" index={t.experience.index} title={t.experience.title} intro={t.experience.intro}>
      <div className="relative max-w-4xl">
        <span
          data-experience-rail=""
          aria-hidden="true"
          className="pointer-events-none absolute top-3 bottom-3 left-[0.7rem] w-px origin-top bg-navy/20 md:left-[12.7rem]"
        />
        <ol className="grid gap-12 md:gap-16">
          {timeline.map((item) => {
            const copy = t.experience.roles[item.id];
            return (
              <li
                data-experience-item=""
                key={item.id}
                className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-4 md:grid-cols-[10.5rem_1.5rem_minmax(0,1fr)] md:gap-x-6"
              >
                <p className="type-meta col-start-2 row-start-1 md:col-start-1 md:pt-1 md:text-right">
                  {formatDateRange(locale, item.start, item.end)}
                </p>
                <span
                  aria-hidden="true"
                  className="col-start-1 row-start-1 mt-1 size-2.5 justify-self-center rounded-full bg-blue ring-4 ring-ice md:col-start-2"
                />
                <div className="col-start-2 row-start-2 mt-3 md:col-start-3 md:row-start-1 md:mt-0">
                  <h3 className="type-title">{item.company}</h3>
                  <p className="mt-2 font-medium">{copy.role}</p>
                  <p className="mt-3 max-w-xl">{copy.summary}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </SectionShell>
  );
}

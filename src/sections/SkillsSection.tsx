import { rangeBands, rangeIds, rangeScaleMax, serviceIds } from "../data/skills";
import { useLocale } from "../hooks/useLocale";
import { SectionShell } from "../components/SectionShell";

export function SkillsSection() {
  const { t } = useLocale();

  return (
    <SectionShell id="habilidades" index={t.skills.index} title={t.skills.title} intro={t.skills.intro}>
      <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h3 className="type-title">{t.skills.rangesTitle}</h3>
          <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed">{t.skills.rangeCaption}</p>
          <ul className="mt-8 grid gap-7">
            {rangeIds.map((id) => {
              const band = rangeBands[id];
              const left = (band.start / rangeScaleMax) * 100;
              const width = ((band.end - band.start) / rangeScaleMax) * 100;
              return (
                <li key={id}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-medium">{t.ranges[id].label}</span>
                    <span className="type-meta shrink-0">{t.ranges[id].value}</span>
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-navy/10" aria-hidden="true">
                    <div
                      className="h-full rounded-full bg-blue"
                      style={{ marginLeft: `${left}%`, width: `${width}%` }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-8 border-t border-navy/10 pt-6">
            <h4 className="font-sans text-[1.0625rem] font-semibold">{t.skills.apiTitle}</h4>
            <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed">{t.skills.apiNote}</p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <h3 className="type-title">{t.skills.servicesTitle}</h3>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {serviceIds.map((id) => (
              <li data-service-card="" key={id} className="panel p-5 md:p-6">
                <h4 className="font-sans text-[1.0625rem] font-semibold">{t.skills.services[id].title}</h4>
                <p className="mt-3 text-[0.95rem] leading-relaxed">{t.skills.services[id].body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}

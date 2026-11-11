import { rangeIds } from "../data/skills";
import { useLocale } from "../hooks/useLocale";
import { SectionShell } from "../components/SectionShell";

export function AboutSection() {
  const { t } = useLocale();
  const [lead, support] = t.about.paragraphs;

  return (
    <SectionShell id="sobre" index={t.about.index} title={t.about.title}>
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p data-about-fact="" className="max-w-2xl text-[1.2rem] leading-relaxed lg:text-[1.35rem]">
            {lead}
          </p>
          <p data-about-fact="" className="mt-6 max-w-xl">
            {support}
          </p>
        </div>
        <dl className="panel grid gap-0 lg:col-span-5">
          <div data-about-fact="" className="border-b border-navy/10 px-6 py-5 md:px-8">
            <dt className="type-meta">{t.about.countryLabel}</dt>
            <dd className="mt-2 text-[1.35rem] leading-none font-medium tracking-[-0.03em]">{t.about.country}</dd>
          </div>
          <div data-about-fact="" className="border-b border-navy/10 px-6 py-5 md:px-8">
            <dt className="type-meta">{t.about.languagesLabel}</dt>
            <dd className="mt-2 max-w-sm">{t.about.languages}</dd>
          </div>
          <div data-about-fact="" className="px-6 py-5 md:px-8">
            <dt className="type-meta">{t.about.rangesLabel}</dt>
            <dd className="mt-4">
              <p className="text-[0.95rem] leading-relaxed">{t.about.rangesHint}</p>
              <ul className="mt-4 grid gap-3">
                {rangeIds.map((id) => (
                  <li key={id} className="flex items-baseline justify-between gap-4 border-b border-navy/10 pb-3 last:border-b-0 last:pb-0">
                    <span>{t.ranges[id].label}</span>
                    <span className="type-meta shrink-0">{t.ranges[id].value}</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </SectionShell>
  );
}

import { certifications } from "../data/certifications";
import { useLocale } from "../hooks/useLocale";
import { SectionShell } from "../components/SectionShell";

export function CertificationsSection() {
  const { t } = useLocale();

  return (
    <SectionShell
      id="certificacoes"
      index={t.certifications.index}
      title={t.certifications.title}
      intro={t.certifications.intro}
    >
      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
        {certifications.map((item) => (
          <li
            data-cert-card=""
            key={item.id}
            className="panel flex min-h-36 flex-col justify-between px-4 py-5 md:px-6 md:py-7"
          >
            <p className="type-meta">{item.label}</p>
            <p className="type-title mt-6 tabular-nums">
              {item.score}
              <span className="text-[0.55em]">%</span>
            </p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

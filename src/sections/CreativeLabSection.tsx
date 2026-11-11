import { Link } from "react-router-dom";
import { conceptStudies } from "../data/conceptStudies";
import { useLocale } from "../hooks/useLocale";
import { projectPath } from "../i18n/locale";
import { LabPlate } from "../components/LabPlate";
import { SectionShell } from "../components/SectionShell";

export function CreativeLabSection() {
  const { locale, t } = useLocale();

  return (
    <SectionShell id="laboratorio" index={t.lab.index} title={t.lab.title} intro={t.lab.intro}>
      <figure data-concept-frame="" className="grid items-center gap-8 lg:grid-cols-12">
        <div className="overflow-hidden rounded-[20px] shadow-plate lg:col-span-7">
          <LabPlate tunnel />
        </div>
        <figcaption className="lg:col-span-5">
          <p className="type-meta">{t.lab.conceptLabel}</p>
          <h3 className="type-title mt-3">{t.lab.tunnelTitle}</h3>
          <p className="mt-4">{t.lab.tunnelBody}</p>
          <p className="mt-4">{t.lab.standIn}</p>
          <p className="type-meta mt-3">{t.lab.noFootage}</p>
        </figcaption>
      </figure>

      <div className="mt-14 lg:mt-20">
        <h3 className="type-title">{t.lab.studiesTitle}</h3>
        <p className="mt-4 max-w-2xl">{t.lab.studiesNote}</p>
        <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8">
          {conceptStudies.map((study, index) => (
            <li data-concept-frame="" key={study.id}>
              <figure className="panel flex h-full flex-col overflow-hidden transition-[border-color] duration-200 hover:border-navy/30 motion-reduce:transition-none">
                <LabPlate seed={index + 1} />
                <figcaption className="flex flex-1 flex-col p-6 md:p-8">
                  <p className="type-meta">{String(index + 1).padStart(2, "0")}</p>
                  <h4 className="type-title mt-3">{study.title}</h4>
                  <p className="type-meta mt-4">{t.lab.conceptLabel}</p>
                  <p className="mt-3">{t.lab.standIn}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      <article
        data-concept-frame=""
        className="panel mt-14 grid items-center gap-8 p-6 transition-[border-color] duration-200 hover:border-navy/30 motion-reduce:transition-none md:p-8 lg:mt-20 lg:grid-cols-12"
      >
        <div className="lg:col-span-6">
          <p className="type-meta">{t.lab.pedroEyebrow}</p>
          <h3 className="type-title mt-3">{t.lab.pedroTitle}</h3>
          <p className="mt-4">{t.lab.pedroBody}</p>
          <p className="mt-4">{t.lab.pedroContribution}</p>
          <p className="mt-6">
            <Link
              className="inline-flex min-h-12 items-center font-semibold"
              to={projectPath(locale, "pedro-cores-film")}
            >
              {t.projects.viewStudy}
            </Link>
          </p>
        </div>
        <div className="overflow-hidden rounded-[20px] lg:col-span-6">
          <LabPlate seed={4} />
          <p className="type-meta px-1 py-4">{t.lab.standIn}</p>
        </div>
      </article>
    </SectionShell>
  );
}

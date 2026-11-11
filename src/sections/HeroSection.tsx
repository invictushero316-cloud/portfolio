import { capsuleIds } from "../data/skills";
import { identity } from "../data/site";
import { useLocale } from "../hooks/useLocale";
import { SignalAtlas } from "../components/SignalAtlas";

const primaryAction =
  "inline-flex min-h-12 w-full items-center justify-center rounded-full bg-navy px-6 text-[0.95rem] font-semibold text-white transition-colors hover:bg-[#16386c] sm:w-auto";
const secondaryAction =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 px-1 text-[0.95rem] font-semibold text-navy sm:w-auto sm:justify-start";

export function HeroSection() {
  const { t } = useLocale();

  return (
    <section id="inicio" aria-labelledby="inicio-title" className="relative scroll-mt-24 overflow-x-clip">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-8 px-5 pt-8 pb-14 md:px-8 md:pt-12 lg:grid-cols-12 lg:gap-x-10 lg:pt-16 lg:pb-20">
        <div className="min-w-0 lg:col-span-6">
          <p data-hero-eyebrow="" className="type-meta flex items-center gap-3">
            <span aria-hidden="true" className="inline-block h-px w-8 bg-navy/40" />
            {t.hero.eyebrow}
          </p>
          <h1 id="inicio-title" className="type-hero mt-4 max-w-[11em]">
            <span className="block overflow-hidden">
              <span data-hero-line="" className="block py-[0.06em]">
                {t.hero.line1}
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero-line="" className="block py-[0.06em]">
                {t.hero.line2}
              </span>
            </span>
          </h1>
          <p data-hero-lead="" className="mt-6 max-w-[34rem] text-[1.125rem] leading-[1.55] lg:text-[1.25rem]">
            {t.hero.lead}
          </p>
          <div className="mt-7 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-5">
            <a data-hero-action="" className={primaryAction} href="#projetos">
              {t.hero.viewProjects}
            </a>
            <a data-hero-action="" className={secondaryAction} href="#experiencia">
              {t.hero.viewExperience}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <figure data-hero-parallax="" className="relative min-w-0 lg:col-span-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-8 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 50% 48%, rgb(112 183 255 / 0.62) 0%, rgb(233 244 255 / 0) 70%)",
            }}
          />
          <div
            data-hero-plate=""
            className="relative mx-auto w-full max-w-[600px] shadow-[0_28px_60px_rgb(12_45_89/0.12)] lg:mr-0 lg:ml-auto"
          >
            <SignalAtlas labels={t.hero.capsules} />
            <figcaption
              data-hero-caption=""
              className="pointer-events-none absolute top-[5%] right-[6%] left-[12%] flex items-center justify-between gap-2"
            >
              <span className="font-display text-[clamp(1rem,1.4vw,1.3rem)] leading-none font-medium tracking-[-0.03em] text-navy">
                {identity.name}
              </span>
              <span className="text-right text-[0.7rem] leading-tight font-medium text-navy/75">
                <span className="block">{t.hero.platePlace}</span>
                <span className="block">{t.hero.plateDiscipline}</span>
              </span>
            </figcaption>
            <ul className="sr-only">
              {capsuleIds.map((id) => (
                <li key={id}>{t.hero.capsules[id]}</li>
              ))}
            </ul>
          </div>
        </figure>
      </div>
    </section>
  );
}

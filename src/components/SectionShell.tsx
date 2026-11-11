import type { ReactNode } from "react";
import { Frame } from "./Frame";

type SectionShellProps = {
  id: string;
  index: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function SectionShell({ id, index, title, intro, children }: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="section-space scroll-mt-24 border-t border-navy/10"
    >
      <Frame>
        <div data-section-heading="">
          <p className="type-meta">{index}</p>
          <h2 id={`${id}-title`} className="type-section mt-3 max-w-3xl">
            {title}
          </h2>
          {intro ? <p className="mt-6 max-w-2xl">{intro}</p> : null}
        </div>
        <div className="mt-12 lg:mt-16">{children}</div>
      </Frame>
    </section>
  );
}

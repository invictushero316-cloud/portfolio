import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { gsap, useGSAP } from "../lib/gsap";
import { mountSiteMotion } from "../motion/siteMotion";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SkipLink } from "./SkipLink";

type SiteFrameProps = {
  children: ReactNode;
};

export function SiteFrame({ children }: SiteFrameProps) {
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.dataset.motion = reduced ? "reduced" : "full";
  }, [reduced]);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;
      const motion = gsap.matchMedia();
      motion.add("(prefers-reduced-motion: no-preference) and (min-width: 768px)", () => mountSiteMotion(root, false));
      motion.add("(prefers-reduced-motion: no-preference) and (max-width: 767px)", () => mountSiteMotion(root, true));
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef}>
      <SkipLink />
      <Header />
      <main id="conteudo" className="scroll-mt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}

import { gsap, ScrollTrigger } from "../lib/gsap";

function collect(root: ParentNode, selector: string) {
  return gsap.utils.toArray<Element>(selector, root);
}

function revealEach(nodes: Element[], start: string, duration: number, stagger: number, y = 20) {
  if (!nodes.length) return;
  gsap.from(nodes, {
    y,
    opacity: 0,
    duration,
    stagger,
    ease: "power2.out",
    scrollTrigger: {
      trigger: nodes[0],
      start,
      once: true,
    },
  });
}

function revealGroups(root: ParentNode, selector: string, start: string, duration: number, stagger: number) {
  const groups = new Map<Element, Element[]>();
  collect(root, selector).forEach((node) => {
    const parent = node.parentElement;
    if (!parent) return;
    const list = groups.get(parent) ?? [];
    list.push(node);
    groups.set(parent, list);
  });
  groups.forEach((nodes) => revealEach(nodes, start, duration, stagger));
}

function mountScroll(root: ParentNode) {
  collect(root, "[data-section-heading]").forEach((heading) => {
    gsap.from(heading, {
      y: 24,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: heading,
        start: "top 85%",
        once: true,
      },
    });
  });

  revealEach(collect(root, "[data-about-fact]"), "top 80%", 0.45, 0.06, 16);

  const roles = collect(root, "[data-experience-item]");
  const rail = collect(root, "[data-experience-rail]")[0];
  if (roles.length) {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: roles[0],
        start: "top 80%",
        once: true,
      },
    });
    if (rail) {
      timeline.from(rail, { scaleY: 0, transformOrigin: "top center", duration: 0.55, ease: "power2.out" }, 0);
    }
    timeline.from(roles, { y: 16, opacity: 0, duration: 0.55, stagger: 0.08, ease: "power2.out" }, 0);
  }

  revealGroups(root, "[data-service-card]", "top 88%", 0.5, 0.05);
  revealGroups(root, "[data-project-card]", "top 88%", 0.5, 0.05);
  revealGroups(root, "[data-concept-frame]", "top 88%", 0.5, 0.06);
  revealGroups(root, "[data-cert-card]", "top 88%", 0.5, 0.05);
}

export function mountSiteMotion(root: HTMLElement, mobile: boolean) {
  const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });
  const header = collect(root, "header");
  const lines = collect(root, "[data-hero-line]");
  const actions = collect(root, "[data-hero-action]");
  const capsules = collect(root, "[data-atlas-capsule]");
  const circuits = collect(root, "[data-circuit]");
  const plate = collect(root, "[data-hero-plate]");
  const hero = root.querySelector("#inicio");
  const plateDuration = mobile ? 0.45 : 0.9;
  let alive = true;

  if (header.length) timeline.from(header, { y: 8, opacity: 0, duration: 0.4 }, 0);
  if (collect(root, "[data-hero-eyebrow]").length) {
    timeline.from(collect(root, "[data-hero-eyebrow]"), { opacity: 0, duration: 0.35 }, 0.12);
  }
  if (lines.length) {
    timeline.from(lines, { yPercent: 100, duration: 0.7, stagger: 0.08, ease: "power3.out" }, 0.22);
  }
  if (collect(root, "[data-hero-lead]").length) {
    timeline.from(collect(root, "[data-hero-lead]"), { opacity: 0, y: 8, duration: 0.45 }, 0.55);
  }
  if (actions.length) {
    timeline.from(actions, { opacity: 0, y: 12, duration: 0.4, stagger: 0.06 }, 0.7);
  }
  if (collect(root, "[data-atlas-back]").length) {
    timeline.from(collect(root, "[data-atlas-back]"), { opacity: 0, y: 10, duration: plateDuration * 0.75 }, 0.35);
  }
  if (collect(root, "[data-atlas-face], [data-hero-caption]").length) {
    timeline.from(
      collect(root, "[data-atlas-face], [data-hero-caption]"),
      { opacity: 0, duration: plateDuration * 0.8 },
      0.42,
    );
  }
  if (collect(root, "[data-atlas-draw]").length) {
    timeline.from(collect(root, "[data-atlas-draw]"), { opacity: 0, duration: plateDuration * 0.7 }, 0.5);
  }
  if (plate.length) {
    timeline.from(plate, { scale: 0.98, duration: plateDuration, transformOrigin: "50% 50%" }, 0.35);
  }
  if (capsules.length) {
    timeline.from(
      capsules,
      {
        opacity: 0,
        y: 10,
        duration: 0.45,
        stagger: mobile ? 0 : 0.07,
        ease: "back.out(1.2)",
      },
      0.85,
    );
  }

  let circuitReady = false;
  let circuit: gsap.core.Tween | null = null;
  if (circuits.length) {
    gsap.set(circuits, { strokeDasharray: "0.86 0.14" });
    circuit = gsap.to(circuits, {
      strokeDashoffset: -1,
      duration: 8,
      ease: "none",
      repeat: -1,
      paused: true,
    });
    timeline.call(
      () => {
        circuitReady = true;
        if (!document.hidden && hero && ScrollTrigger.isInViewport(hero)) circuit?.play();
      },
      [],
      1.2,
    );
  }

  let float: gsap.core.Tween | null = null;
  if (!mobile && plate.length) {
    timeline.eventCallback("onComplete", () => {
      if (!alive || float) return;
      float = gsap.to(plate, {
        y: -6,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        paused: true,
      });
      if (!document.hidden && hero && ScrollTrigger.isInViewport(hero)) float.play();
    });
  }

  const syncLoops = (active: boolean) => {
    const run = active && !document.hidden;
    if (run && circuitReady) circuit?.play();
    else circuit?.pause();
    if (run && timeline.progress() === 1) float?.play();
    else float?.pause();
  };

  if (hero && (circuit || float)) {
    ScrollTrigger.create({
      trigger: hero,
      start: "top bottom",
      end: "bottom top",
      onToggle: (self) => syncLoops(self.isActive),
    });
  }

  const onVisibility = () => {
    syncLoops(hero ? ScrollTrigger.isInViewport(hero) : false);
  };
  document.addEventListener("visibilitychange", onVisibility);

  if (!mobile && hero) {
    const parallax = collect(root, "[data-hero-parallax]");
    if (parallax.length) {
      gsap.to(parallax, {
        y: -24,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }
  }

  mountScroll(root);

  const refresh = () => {
    if (alive) ScrollTrigger.refresh();
  };
  void document.fonts?.ready.then(refresh);
  window.addEventListener("load", refresh);

  return () => {
    alive = false;
    float?.kill();
    document.removeEventListener("visibilitychange", onVisibility);
    window.removeEventListener("load", refresh);
  };
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SiteFrame } from "../components/SiteFrame";
import { AboutSection } from "../sections/AboutSection";
import { CertificationsSection } from "../sections/CertificationsSection";
import { CreativeLabSection } from "../sections/CreativeLabSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { HeroSection } from "../sections/HeroSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { SkillsSection } from "../sections/SkillsSection";

export function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash || hash.length < 2) return;
    let id = hash.slice(1);
    try {
      id = decodeURIComponent(id);
    } catch {
      return;
    }
    document.getElementById(id)?.scrollIntoView();
  }, [hash]);

  return (
    <SiteFrame>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CreativeLabSection />
      <CertificationsSection />
    </SiteFrame>
  );
}

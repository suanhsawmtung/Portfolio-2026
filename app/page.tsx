import Footer from "@/components/footer";
import Header from "@/components/header";
import AboutSection from "@/components/sections/about-section";
import AcademicSection from "@/components/sections/academic-section";
import ContactSection from "@/components/sections/contact-section";
import CtaSection from "@/components/sections/cta-section";
import ExperienceSection from "@/components/sections/experience-section";
import GoalSection from "@/components/sections/goal-section";
import HeroSection from "@/components/sections/hero-section";
import InterestSection from "@/components/sections/interest-section";
import ProjectSection from "@/components/sections/project-section";
import SkillSection from "@/components/sections/skill-section";

export default function Page() {
  return (
    <main>
      <Header />

      <div id="top" />
      <HeroSection />

      <AboutSection />

      <ProjectSection />

      <ExperienceSection />

      <AcademicSection />

      <SkillSection />

      <InterestSection />

      <GoalSection />

      <CtaSection />

      <ContactSection />

      <Footer />
    </main>
  );
}

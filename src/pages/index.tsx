import Sidebar from "@/components/Sidebar";
import HomeHero from "@/components/HomeHero";
import AboutMe from "@/sections/aboutme";
import TechStackSection from "@/components/TechStackSection";
import FeaturedProjects from "@/components/Projects/Projects";
import ExperienceSection from "@/components/Experience /ExperienceSection";
import CertificationSection from "@/components/Certif/CertificationSection";
import EducationSection from "@/components/Education/EducationSection";
import TryHackMeSection from "@/components/tryhackme/TryHackMeSection";
import SkillsSection from "@/components/skills/SkillsSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import GamifiedContactForm from "@/components/GamifiedContactForm";
import TerminalPortfolio from "@/components/TerminalPortfolio";
import TinyCTFSection from "@/components/TinyCTFSection";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Sidebar />
      <HomeHero />
      <AboutMe/>
      <TechStackSection />
      <FeaturedProjects/>
      <ExperienceSection/>
      <CertificationSection/>
      <EducationSection/>
      <TryHackMeSection/>
      <SkillsSection/>
      <GetInTouchSection/>
      <GamifiedContactForm/>
      <TerminalPortfolio/>
      <TinyCTFSection/>
    </main>
  );
}

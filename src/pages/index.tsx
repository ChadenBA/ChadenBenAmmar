import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import HomeHero from "@/components/HomeHero";
import AboutMe from "@/components/aboutme";
import TechStackSection from "@/components/TechStackSection";
import FeaturedProjects from "@/components/Projects/Projects";
import ExperienceSection from "@/components/Experience /ExperienceSection";
import CertificationSection from "@/components/Certif/CertificationSection";
import EducationSection from "@/components/Education/EducationSection";
import TryHackMeSection from "@/components/tryhackme/TryHackMeSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ContactSection from "@/components/GetInTouchSection";
import TerminalPortfolio from "@/components/TerminalPortfolio";
import TinyCTFSection from "@/components/TinyCTFSection";
import Assistant from "@/components/AI_assitant";
import HobbiesSection from "@/components/HobbiesSection";
import { useTheme } from "@/theme/ThemeContext";
import FloatingBar from "@/components/FloatingBar";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme(); 
  const [showTerminal, setShowTerminal] = useState(false);
  const [showAssistant, setShowAssistant] = useState(false);
  const [showCtf, setShowCtf] = useState(false);

  return (
    <main
      className={`${
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen transition-colors duration-500 pl-20 relative w-full overflow-x-hidden px-4 sm:px-6 md:px-12 lg:px-20`}
    >
      <Sidebar />
      <FloatingBar
        onToggleDarkMode={toggleDarkMode}
        onOpenTerminal={() => setShowTerminal(true)}
        onOpenAssistant={() => setShowAssistant(true)}
        onOpenCtf={() => setShowCtf(true)}
      />

      <section id="home"><HomeHero /></section>
      <section id="about"><AboutMe /></section>
      <section id="skills"><TechStackSection /></section>
      <section id="projects"><FeaturedProjects /></section>
      <section id="skills-section"><SkillsSection /></section>
      <section id="experience"><ExperienceSection /></section>
      <section id="certifications"><CertificationSection /></section>
      <section id="education"><EducationSection /></section>
      <section id="tryhackme"><TryHackMeSection /></section>
      <section id="hobbies"><HobbiesSection /></section>

      <section id="contact"><ContactSection /></section>

      {showTerminal && (
        <div className="fixed top-20 right-20 w-96 h-96 bg-gray-800 text-white p-4 rounded-lg shadow-lg z-50 flex flex-col">
          <button
            className="self-end text-red-400 font-bold mb-2"
            onClick={() => setShowTerminal(false)}
          >
            X
          </button>
          <TerminalPortfolio />
        </div>
      )}
{showAssistant && (
  <div className="fixed bottom-4 right-4 w-110 max-h-146 bg-purple-700 text-white p-4 rounded-lg shadow-lg z-50 flex flex-col">
      <button
        className="text-red-400 font-bold"
        onClick={() => setShowAssistant(false)}
      >
        ✕
      </button>
    

    <div className="flex-1 overflow-y-auto">
      <Assistant />
    </div>
  </div>
)}


{showCtf && (
  <>
    <div
      className="fixed inset-0 bg-grey bg-opacity-60 backdrop-blur-sm z-40"
      onClick={() => setShowCtf(false)} 
    />

    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="w-305 h-196  text-white p-4 rounded-lg shadow-lg flex flex-col relative">
        <button
          className="absolute top-2 right-2 text-red-200 font-bold"
          onClick={() => setShowCtf(false)}
        >
          ✕
        </button>

        <TinyCTFSection />
      </div>
    </div>
  </>
)}
 <Footer/>
    </main>
  );
};

export default Home;
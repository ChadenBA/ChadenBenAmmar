import Sidebar from "@/components/Sidebar";
import HomeHero from "@/components/HomeHero";
import AboutMe from "@/sections/aboutme";
import TechStackSection from "@/components/TechStackSection";
import FeaturedProjects from "@/components/Projects/Projects";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Sidebar />
      {/* Page content goes here */}
      <div className="ml-20 p-10">Your page content</div>
      <HomeHero />


      <AboutMe/>
      <TechStackSection />
      <FeaturedProjects/>

    </main>
  );
}

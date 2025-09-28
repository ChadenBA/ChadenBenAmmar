import { useState, useEffect } from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  Building,
  BadgeCheck,
  Trophy,
  Heart,
  Mail
} from "lucide-react";
import { useTheme } from "@mui/material";

const menuItems = [
  { icon: <Home size={20} />, label: "Home", id: "home" },
  { icon: <User size={20} />, label: "About", id: "about" },
  { icon: <Briefcase size={20} />, label: "Projects", id: "projects" },
  { icon: <Building size={20} />, label: "Experience", id: "experience" },
  { icon: <Code size={20} />, label: "skills-section", id: "skills-section" },
  { icon: <BadgeCheck size={20} />, label: "Certifications", id: "certifications" },
  { icon: <Trophy size={20} />, label: "tryhackme", id: "tryhackme" },
  { icon: <Heart size={20} />, label: "hobbies", id: "hobbies" },
  { icon: <Mail size={20} />, label: "Contact", id: "contact" }
];

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      menuItems.forEach((item, index) => {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveIndex(index);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed top-1/2 -translate-y-1/2 left-2 z-65 h-[-65vh] w-13 rounded-3xl flex flex-col items-center justify-between py-4 px-1 shadow-xl transition-colors duration-300
        ${isDark ? "bg-gray-800" : "bg-gray-100"}`}
    >
      <div className="flex flex-col gap-3">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item.id)}
            className={`relative group p-2 rounded-lg transition-colors duration-300 
              ${activeIndex === index
                ? "bg-blue-600 text-white"
                : isDark
                  ? "text-gray-400 hover:text-white hover:bg-gray-700"
                  : "text-gray-600 hover:text-black hover:bg-gray-300"
              }`}
          >
            {item.icon}
            {activeIndex === index && (
              <span className="absolute -right-2 top-1/2 -translate-y-1/2 h-6 w-1 rounded bg-blue-400"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

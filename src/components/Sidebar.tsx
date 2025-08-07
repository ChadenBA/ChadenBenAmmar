
import { useState } from "react";
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

const menuItems = [
  { icon: <Home size={20} />, label: "Home" },
  { icon: <User size={20} />, label: "About" },
  { icon: <Code size={20} />, label: "Skills" },
  { icon: <Briefcase size={20} />, label: "Projects" },
  { icon: <Building size={20} />, label: "Experience" },
  { icon: <BadgeCheck size={20} />, label: "Certifications" },
  { icon: <Trophy size={20} />, label: "Achievements" },
  { icon: <Heart size={20} />, label: "Interests" },
  { icon: <Mail size={20} />, label: "Contact" }
];

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-4 z-50 h-[90vh] w-16 rounded-3xl bg-[#1E293B] flex flex-col items-center justify-between py-4 shadow-xl">
      <div className="flex flex-col gap-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative group p-2 rounded-xl transition-colors duration-300 
              ${activeIndex === index ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white hover:bg-gray-700"}`}
          >
            {item.icon}
            {activeIndex === index && (
              <span className="absolute -right-2 top-1/2 -translate-y-1/2 h-8 w-1 rounded bg-blue-400"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

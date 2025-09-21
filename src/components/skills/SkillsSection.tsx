import React, { useState } from "react";
import SkillCard from "./SkillCard";
import { skillsByDomain } from "@/data/skillsData";
import { useTheme } from "@mui/material";

const domains = Object.keys(skillsByDomain);

const SkillsSection: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState("Security");
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <section
      className={`py-12 px-6 ${
        isDark ? "bg-[#0c1123]" : "bg-white"
      }`}
    >
      <h2
        className={`text-3xl font-bold text-center mb-6 ${
          isDark ? "text-[#8b5cf6]" : "text-blue-600"
        }`}
      >
        Skills & Expertise
      </h2>
      <p
        className={`text-center mb-10 ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        A comprehensive overview of my technical skills across different domains
      </p>

      {/* Top Bar Tabs */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap">
        {domains.map((domain) => (
          <button
            key={domain}
            className={`px-4 py-2 rounded-xl transition-colors ${
              activeDomain === domain
                ? isDark
                  ? "bg-[#8b5cf6] text-white"
                  : "bg-blue-600 text-white"
                : isDark
                ? "bg-[#1e293b] text-gray-300 hover:bg-[#374151]"
                : "bg-slate-200 text-gray-700 hover:bg-slate-300"
            }`}
            onClick={() => setActiveDomain(domain)}
          >
            {domain}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {skillsByDomain[activeDomain].map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

import React, { useState } from "react";
import SkillCard from "./SkillCard";
import { skillsByDomain } from "@/data/skillsData";
import { useTheme, Button, Box } from "@mui/material";

const domains = Object.keys(skillsByDomain);

const SkillsSection: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState("Security");
  const [showAll, setShowAll] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const skills = skillsByDomain[activeDomain];
  const displayedSkills = showAll ? skills : skills.slice(0, 6);

  return (
    <section className={`py-12 px-4 sm:px-6 lg:px-12 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-6 ${isDark ? "text-[#8b5cf6]" : "text-[#8b5cf6]"}`}>
        Skills & Expertise
      </h2>
      <p className={`text-center mb-10 text-sm sm:text-base ${isDark ? "text-gray-300" : "text-gray-600"}`}>
        A comprehensive overview of my technical skills across different domains
      </p>

      {/* Domain buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {domains.map((domain) => (
          <button
            key={domain}
            className={`px-4 py-2 rounded-xl transition-colors text-sm sm:text-base ${
              activeDomain === domain
                ? isDark
                  ? "bg-[#8b5cf6] text-white"
                  : "bg-[#8b5cf6] text-gray-800"
                : isDark
                ? "bg-[#1e293b] text-gray-300 hover:bg-[#374151]"
                : "bg-slate-200 text-gray-800 hover:bg-[#d1d5db]"
            }`}
            onClick={() => {
              setActiveDomain(domain);
              setShowAll(false); // reset to 6 cards when changing domain
            }}
          >
            {domain}
          </button>
        ))}
      </div>

      {/* Skill cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {displayedSkills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>

      {/* Show More button */}
      {skills.length > 6 && !showAll && (
        <Box className="flex justify-center mt-8">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowAll(true)}
            size="small"
          >
            Show More Skills
          </Button>
        </Box>
      )}
    </section>
  );
};

export default SkillsSection;

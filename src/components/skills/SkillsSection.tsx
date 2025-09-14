// src/components/SkillsSection.tsx
import React, { useState } from "react";
import SkillCard from "./SkillCard";
import { skillsByDomain } from "@/data/skillsData";

const domains = Object.keys(skillsByDomain);

const SkillsSection: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState("Security");

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
        Skills & Expertise
      </h2>
      <p className="text-center text-gray-400 mb-10">
        A comprehensive overview of my technical skills across different domains
      </p>

      {/* Top Bar Tabs */}
      <div className="flex justify-center gap-6 mb-10">
        {domains.map((domain) => (
          <button
            key={domain}
            className={`px-4 py-2 rounded-xl ${
              activeDomain === domain
                ? "bg-blue-600 text-white"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
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

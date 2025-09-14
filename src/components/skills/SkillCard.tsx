// src/components/SkillCard.tsx
import React from "react";
import { Skill } from "@/data/skillsData";
import CircleProgress from "./CircleProgress";

type SkillCardProps = {
  skill: Skill;
};

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="p-4 bg-slate-800 rounded-2xl shadow-md text-white flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{skill.name}</h3>
        <span className="text-xs bg-green-700 px-2 py-1 rounded-lg">
          {skill.category}
        </span>
      </div>

      <p className="text-sm text-gray-300">{skill.description}</p>

      <div className="flex justify-between items-center">
        <span className="text-xs">{skill.level}</span>
        <CircleProgress value={skill.percentage} />
      </div>
    </div>
  );
};

export default SkillCard;

import React from "react";
import { Skill } from "@/data/skillsData";
import CircleProgress from "./CircleProgress";
import { useTheme } from "@mui/material";

type SkillCardProps = {
  skill: Skill;
};

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <div
      className={`p-4 rounded-2xl shadow-md flex flex-col gap-3 ${
        isDark ? "bg-[#1e293b] text-white" : "bg-[#e5e7eb] text-black"
        
      }`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{skill.name}</h3>
        <span
          className={`text-xs px-2 py-1 rounded-lg ${
            isDark ? "bg-[#8b5cf6] text-white" : "bg-[#8b5cf6] text-black"
          }`}
        >
          {skill.category}
        </span>
      </div>

      <p className={isDark ? "text-gray-300" : "text-gray-700"}>
        {skill.description}
      </p>

      <div className="flex justify-between items-center">
        <span className="text-xs">{skill.level}</span>
        <CircleProgress value={skill.percentage} />
      </div>
    </div>
  );
};

export default SkillCard;

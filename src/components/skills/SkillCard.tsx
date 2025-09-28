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
      className={`p-4 sm:p-5 rounded-2xl shadow-md flex flex-col gap-3 ${
        isDark ? "bg-[#1e293b] text-white" : "bg-[#e5e7eb] text-black"
      }`}
    >
      {/* Title + Category */}
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h3 className="text-base sm:text-lg font-semibold">{skill.name}</h3>
        <span
          className={`text-xs sm:text-sm px-2 py-1 rounded-lg ${
            isDark ? "bg-[#8b5cf6] text-white" : "bg-[#8b5cf6] text-black"
          }`}
        >
          {skill.category}
        </span>
      </div>

      {/* Description */}
      <p
        className={`text-sm sm:text-base ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {skill.description}
      </p>

      {/* Level + Progress */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <span className="text-xs sm:text-sm">{skill.level}</span>
        <div className="w-16 h-16 sm:w-20 sm:h-20">
          <CircleProgress value={skill.percentage} />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

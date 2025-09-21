import React from "react";
import { useTheme } from "@mui/material";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <div className={`p-6 rounded-xl shadow-md w-full sm:w-[250px] text-center transition-all duration-300 ${isDark ? "bg-[#1E293B] text-white" : "bg-gray-100 text-black"}`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default SkillCard;

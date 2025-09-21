import React from "react";
import { useTheme } from "@mui/material";

interface TechIconCardProps {
  name: string;
  icon: string;
}

const TechIconCard: React.FC<TechIconCardProps> = ({ name, icon }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <div className="group relative flex flex-col items-center flex-shrink-0 mb-2">
      <div
        className={`w-16 h-16 rounded-xl backdrop-blur-sm border flex items-center justify-center hover:scale-110 transition-all duration-300 ${
          isDark
            ? "bg-gray-800/50 border-gray-700/30 hover:bg-gray-700/50"
            : "bg-white/10 border-gray-300 hover:bg-gray-200"
        }`}
      >
        <img
          src={icon}
          alt={name}
          className="w-10 h-10 object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300 pointer-events-none"
        />
      </div>
      <p className={`${isDark ? "text-white" : "text-black"} text-sm text-center mt-2`}>{name}</p>
    </div>
  );
};

export default TechIconCard;

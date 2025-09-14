import React from "react";

interface TechIconCardProps {
  name: string;
  icon: string;
}

const TechIconCard: React.FC<TechIconCardProps> = ({ name, icon }) => {
  return (
    <div className="group relative flex flex-col items-center flex-shrink-0 mb-2">
      <div className="w-16 h-16 rounded-xl bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-white/20 dark:hover:bg-gray-700/50">
        <img
          src={icon}
          alt={name}
          className="w-10 h-10 object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300 pointer-events-none"
        />
      </div>
      <p className="text-sm text-white text-center mt-2">{name}</p>
    </div>
  );
};

export default TechIconCard;

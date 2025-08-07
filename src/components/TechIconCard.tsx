import React from "react";

interface TechIconCardProps {
  name: string;
  icon: string;
}

const TechIconCard: React.FC<TechIconCardProps> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center bg-[#1E293B] p-4 rounded-lg shadow-md min-w-[80px] mx-2">
      <img src={icon} alt={name} className="w-10 h-10 mb-2" />
      <p className="text-sm text-white">{name}</p>
    </div>
  );
};

export default TechIconCard;

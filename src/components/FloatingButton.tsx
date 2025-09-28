import React from "react";

interface FloatingButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  bgColor: string;
  hoverColor: string;
  title?: string;
  size?: "sm" | "md" | "xs"; 
}

const sizeMap = {
  xs: "w-4 h-4 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-12 h-12 text-base",
};

const FloatingButton: React.FC<FloatingButtonProps> = ({
  onClick,
  icon,
  bgColor,
  hoverColor,
  title,
  size = "sm",
}) => (
  <button
    onClick={onClick}
    title={title}
    className={`flex items-center justify-center rounded-full shadow-lg transition-all duration-300 ${bgColor} ${hoverColor} ${sizeMap[size]} md:${sizeMap[size]}`}
  >
    {icon}
  </button>
);

export default FloatingButton;

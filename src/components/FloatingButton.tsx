import React from "react";

interface FloatingButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  bgColor: string;
  hoverColor: string;
  title?: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  onClick,
  icon,
  bgColor,
  hoverColor,
  title,
}) => (
  <button
    onClick={onClick}
    title={title}
    className={`w-12 h-12 flex items-center justify-center rounded-full shadow-lg mb-3 transition-all duration-300 ${bgColor} ${hoverColor}`}
  >
    {icon}
  </button>
);

export default FloatingButton;

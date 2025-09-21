import React from "react";
import { FaTerminal, FaRobot, FaMoon, FaKey } from "react-icons/fa";
import { useTheme } from "../theme/ThemeContext";
import FloatingButton from "./FloatingButton";

interface FloatingBarProps {
  onToggleDarkMode: () => void;
  onOpenTerminal: () => void;
  onOpenAssistant: () => void;
  onOpenCtf: () => void;
}

const FloatingBar: React.FC<FloatingBarProps> = ({
  onToggleDarkMode,
  onOpenTerminal,
  onOpenAssistant,
  onOpenCtf,
}) => {
  const { darkMode } = useTheme();

  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 flex flex-col">
      <FloatingButton
        onClick={onToggleDarkMode}
        icon={<FaMoon className={`text-white ${darkMode ? "rotate-180" : ""}`} />}
        bgColor="bg-gray-400"
        hoverColor="hover:bg-gray-500"
        title="Toggle Dark Mode"
      />
      <FloatingButton
        onClick={onOpenTerminal}
        icon={<FaTerminal className="text-black" />}
        bgColor="bg-green-300"
        hoverColor="hover:bg-green-400"
        title="Open Terminal"
      />
      <FloatingButton
        onClick={onOpenAssistant}
        icon={<FaRobot className="text-white" />}
        bgColor="bg-purple-500"
        hoverColor="hover:bg-purple-600"
        title="Open AI Assistant"
      />
      <FloatingButton
        onClick={onOpenCtf}
        icon={<FaKey className="text-white" />}
        bgColor="bg-red-500"
        hoverColor="hover:bg-red-600"
        title="Open CTF"
      />
    </div>
  );
};

export default FloatingBar;

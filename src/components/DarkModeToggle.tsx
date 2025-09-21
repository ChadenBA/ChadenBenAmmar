import React from "react";
import { useTheme } from "../theme/ThemeContext";

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 z-50 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow-lg transition-all"
    >
      {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default DarkModeToggle;

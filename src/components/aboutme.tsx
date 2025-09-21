import React from "react";
import { useTheme } from "@mui/material";

const AboutMe: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <section
      className={`py-12 px-6 transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          About Me
        </h2>
        <p
          className={`text-lg transition-colors duration-300 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Hi! 👋 I'm a passionate developer who loves building modern web apps
          using technologies like React, TypeScript, and Tailwind CSS.
        </p>
        <p
          className={`mt-4 text-lg transition-colors duration-300 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          I enjoy solving problems, learning new things, and turning ideas into
          interactive, accessible user experiences.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

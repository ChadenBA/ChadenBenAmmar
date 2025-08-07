// src/components/AboutMe.tsx

import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
          About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Hi! 👋 I'm a passionate developer who loves building modern web apps
          using technologies like React, TypeScript, and Tailwind CSS.
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          I enjoy solving problems, learning new things, and turning ideas into
          interactive, accessible user experiences.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

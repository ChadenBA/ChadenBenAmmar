import { useTheme } from "@mui/material";
import React from "react";

const hobbies = [
  { name: "Cooking", emoji: "👩‍🍳" },
  { name: "Baking", emoji: "🧁" },
  { name: "Reading", emoji: "📚" },
  { name: "DIY Projects", emoji: "🛠️" },
];

const values = ["Curiosity", "Respect", "Sharing"];

const HobbiesSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <section
      className={`py-12 px-6 transition-colors duration-500 ${
        isDark ? "bg-gray-900  text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-3xl font-bold mb-6 ${
            isDark ? "text-[#8b5cf6]" : "text-purple-600"
          }`}
        >
          Hobbies & Values
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {hobbies.map((hobby) => (
            <div
              key={hobby.name}
              className={`flex flex-col items-center p-4 rounded-xl shadow-md w-36 transition-all duration-300 hover:scale-105 ${
                isDark ? "bg-[#1e293b] text-white" : "bg-slate-200 text-black"
              }`}
            >
              <span className="text-3xl mb-2">{hobby.emoji}</span>
              <p className="font-semibold">{hobby.name}</p>
            </div>
          ))}
        </div>

        <div>
          <h3
            className={`text-xl font-semibold mb-4 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            My Core Values
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value) => (
              <span
                key={value}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 hover:brightness-110 ${
                  isDark
                    ? "bg-[#8b5cf6] text-white"
                    : "bg-purple-500 text-white"
                }`}
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;

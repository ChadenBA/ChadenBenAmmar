import React from "react";
import { useTheme } from "@mui/material";
import { motion } from "framer-motion";

const AboutMe: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <section
      className={`py-12 px-6 transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "white"
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

        <motion.p
          className="text-lg leading-relaxed max-w-2xl mx-auto  "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          <span className="font-semibold">I am a Third-year Engineering Student in Teleinformatics</span> at{" "}
          <span className="font-semibold">Higher Institute of Computer Science and Communication Technologies of Sousse</span>.<br /><br />

          I am deeply passionate about <span className="font-semibold">Software Engineering</span>,{" "}
          <span className="font-semibold">DevOps</span>, <span className="font-semibold">DevSecOps</span>, 
          and <span className="font-semibold">Cybersecurity</span>, 
          with a particular focus on building secure, resilient software systems.<br /><br />

          My expertise spans modern development practices such as{" "}
          <span className="font-semibold">
            CI/CD automation, cloud platforms, containerization, and infrastructure as code
          </span>, enabling me to design and deliver scalable, secure, and efficient solutions.<br /><br />

          Beyond academics, I actively explore the intersection of{" "}
          <span className="font-semibold">security and software engineering</span>, 
          blending theory with real-world applications through projects and hands-on challenges.<br /><br />

          My goal is to leverage <span className="font-semibold">cutting-edge technologies</span> 
          to build reliable and secure digital systems while staying at the forefront of innovation in{" "}
          <span className="font-semibold">DevSecOps and cybersecurity</span>.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutMe;

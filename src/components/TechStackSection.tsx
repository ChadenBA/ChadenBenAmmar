import React from "react";
import TechIconCard from "./TechIconCard";
import SkillCard from "./SkillCard";
import { FaShieldAlt, FaCloud, FaCode } from "react-icons/fa";
import { useTheme } from "@mui/material";

const techIcons = [
  { name: "Ansible", icon: "/icons/Ansible.png" },
  { name: "Docker", icon: "/icons/docker.png" },
  { name: "Kubernetes", icon: "/icons/Kubernetes.png" },
  { name: "Python", icon: "/icons/python.png" },
  { name: "MongoDB", icon: "/icons/mongoDB.png" },
  { name: "Firebase", icon: "/icons/firebase.png" },
  { name: "AWS", icon: "/icons/aws.png" },
  { name: "Git", icon: "/icons/git.png" },
  { name: "Jenkins", icon: "/icons/Jenkins.png" },
  { name: "GitHub Actions", icon: "/icons/githubaction.png" },
  { name: "Grafana", icon: "/icons/Grafana.png" },
  { name: "Prometheus", icon: "/icons/Prometheus.png" },
  { name: "Fortinet", icon: "/icons/Fortinet.png" },
  { name: "Synk", icon: "/icons/snyk.png" },
  { name: "Zap", icon: "/icons/zap.png" },
  { name: "Trivy", icon: "/icons/Trivy.png" },
  { name: "SonarQube", icon: "/icons/DV-SonarQube.png" },
  { name: "Azure", icon: "/icons/azure.png" },
  { name: "Jest", icon: "/icons/jest.png" },
  { name: "Postman", icon: "/icons/postman-icon.svg" },
  { name: "JUnit5", icon: "/icons/JUnit5.png" },
  { name: "NodeJs", icon: "/icons/NodeJs.png" },
  { name: "React", icon: "/icons/React.png" },
  { name: "Express", icon: "/icons/express.png" },
  { name: "Bootstrap", icon: "/icons/Bootstrap.png" },
];

const TechStackSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <section className={`${isDark ? "bg-gray-900" : "bg-gray-100"} py-12 transition-colors duration-300`}>
      {/* Scrolling tech icons */}
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            width: "max-content",
            animation: "scroll 20s linear infinite",
          }}
        >
          {[...techIcons, ...techIcons].map((tech, index) => (
            <TechIconCard key={index} name={tech.name} icon={tech.icon} />
          ))}
        </div>
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
      </div>

      {/* Skill Cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-12">
        <SkillCard
          icon={<FaShieldAlt />}
          title="Cybersecurity"
          description="Certified in multiple security frameworks and penetration testing"
        />
        <SkillCard
          icon={<FaCloud />}
          title="DevSecOps"
          description="Implementing security in CI/CD pipelines and cloud infrastructure"
        />
        <SkillCard
          icon={<FaCode />}
          title="Full Stack"
          description="Proficient in multiple programming languages and frameworks"
        />
      </div>
    </section>
  );
};

export default TechStackSection;

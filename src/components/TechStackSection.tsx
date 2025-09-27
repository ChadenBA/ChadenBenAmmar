import React from "react";
import TechIconCard from "./TechIconCard";
import SkillCard from "./SkillCard";
import { FaShieldAlt, FaCloud, FaCode } from "react-icons/fa";
import { useTheme } from "@mui/material";

const techIcons = [
  { name: "Ansible", icon: "/icons/Ansible.png" },
  { name: "Docker", icon: "/icons/docker.png" },
  { name: "Kubernetes", icon: "/icons/Kubernetes.png" },
  { name: "Python", icon: "/icons/Python-logo-notext.svg.png" },
  { name: "MongoDB", icon: "/icons/mongodb-icon-1-1.svg" },
  { name: "Firebase", icon: "/icons/firebase_icon-logo_brandlogos.net_tcvck-512x646.png" },
  { name: "AWS", icon: "/icons/AWS.png" },
  { name: "Git", icon: "/icons/Git_icon.svg.png" },
  { name: "Jenkins", icon: "/icons/Jenkins.png" },
  { name: "GitHub Actions", icon: "/icons/githubaction.png" },
  { name: "Grafana", icon: "/icons/Grafana.png" },
  { name: "Prometheus", icon: "/icons/Prometheus.png" },
  { name: "Fortinet", icon: "/icons/Fortinet.png" },
  { name: "Elasticsearch", icon: "/icons/elasticsearch-logo.svg" },
  { name: "Logstash", icon: "/icons/elastic-logstash.svg" },
  { name: "kibana", icon: "/icons/free-kibana-logo-icon-svg-download-png-2945035.webp" },
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
  { name: "Nmap", icon: "/icons/nmap-logo-256x256.png" },
  { name: "Wireshark", icon: "/icons/Bokehlicia-Captiva-Wireshark.ico" },


];

const TechStackSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <section className={`${isDark ? "bg-gray-900" : "white"} py-12 transition-colors duration-300`}>
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
<div className="flex flex-wrap justify-center gap-8 mt-12">
<SkillCard
    icon={<FaCode className="text-4xl mb-4 mx-auto text-green-500" />}
    title="Full Stack"
    description="Building web applications using modern programming languages and frameworks"
  />
   <SkillCard
    icon={<FaCloud className="text-4xl mb-4 mx-auto text-purple-500" />}
    title="DevSecOps"
    description="Integrating security in CI/CD pipelines and cloud infrastructure"
  />
  <SkillCard
    icon={<FaShieldAlt className="text-4xl mb-4 mx-auto text-blue-500" />}
    title="Cybersecurity"
    description="Working with security frameworks and penetration testing"
  />
 
  
</div>

    </section>
  );
};

export default TechStackSection;

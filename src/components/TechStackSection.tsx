// components/TechStackSection.tsx
import React from "react";
import TechIconCard from "./TechIconCard";
import SkillCard from "./SkillCard";
import { FaShieldAlt, FaCloud, FaCode } from "react-icons/fa";

// Sample icons: replace with your own image URLs
const techIcons = [
  { name: "nsible", icon: "/icons/Ansible.png" },
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
  { name: "AWS", icon: "/icons/AWS.png" },
  { name: "Jest", icon: "/icons/jest.png" },
  { name: "Postman", icon: "/icons/postman-icon.svg" },
  { name: "JUnit5", icon: "/icons/JUnit5.png" },
  { name: "NodeJs", icon: "/icons/NodeJs.png" },
  { name: "React", icon: "/icons/React.png" },
  { name: "Express", icon: "/icons/express.png" },
  { name: "Bootstrap", icon: "/icons/Bootstrap.png" },
  { name: "AWS", icon: "/icons/AWS.png" },


];

const TechStackSection: React.FC = () => {
  return (
    <section className="bg-[#0F172A] py-16 px-6">
      {/* Tech Icons */}
      <div className="w-full overflow-hidden py-6 bg-[#0F172A]">
      <div className="flex animate-scroll gap-4 w-max">
        {[...techIcons, ...techIcons].map((tech, index) => (
          <TechIconCard key={index} name={tech.name} icon={tech.icon} />
        ))}
      </div>
    </div>


      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-6">
       
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

export type Skill = {
    name: string;
    category: string;
    description: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    percentage: number;
  };
  
  export const skillsByDomain: Record<string, Skill[]> = {
    Security: [
      {
        name: "Burp Suite",
        category: "Web Security",
        description: "Web application security testing",
        level: "Advanced",
        percentage: 85,
      },
      {
        name: "Metasploit",
        category: "Penetration Testing",
        description: "Penetration testing framework",
        level: "Advanced",
        percentage: 80,
      },
      {
        name: "Wireshark",
        category: "Network Analysis",
        description: "Network protocol analyzer",
        level: "Advanced",
        percentage: 75,
      },
      {
        name: "OWASP ZAP",
        category: "Security Scanner",
        description: "Web application security scanner",
        level: "Intermediate",
        percentage: 70,
      },
      {
        name: "Nmap",
        category: "Network Scanner",
        description: "Network discovery and security auditing",
        level: "Advanced",
        percentage: 85,
      },
      {
        name: "Snyk",
        category: "Vulnerability Mgmt",
        description: "Developer security platform",
        level: "Intermediate",
        percentage: 65,
      },
    ],
    Programming: [
      {
        name: "TypeScript",
        category: "Frontend",
        description: "Strongly typed superset of JavaScript",
        level: "Advanced",
        percentage: 90,
      },
    ],
    Databases: [
      {
        name: "PostgreSQL",
        category: "SQL",
        description: "Relational database management system",
        level: "Intermediate",
        percentage: 75,
      },
    ],
    Cloud: [],
    Development: [],
  };
  
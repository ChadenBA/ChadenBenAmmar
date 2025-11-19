import { Project } from '@/types/project';

export const projects: Project[] = [
  {
  title: 'Secure File Transfer System with Threat Detection',
  date: 'Personal Project: 2025',
  tags: [
    'Cybersecurity',
    'DevOps',
    'File Transfer',
    'ClamAV',
    'YARA',
    'Falco',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'Grafana',
    'Monitoring'
  ],
  purpose:
    'To design a secure platform for file uploads/downloads that integrates runtime threat detection and full DevSecOps automation.',
  description:
    'A full-stack secure file transfer application allowing users to upload and download files with integrity verification and metadata management. The system integrates threat detection mechanisms using cryptographic hash checks, ClamAV and YARA placeholders, and runtime monitoring with Falco. Alerts and audit logs are visualized in Grafana dashboards. The deployment is fully automated using Docker Compose, Ansible, Kubernetes, and ArgoCD, while CI/CD pipelines enforce code quality and security through GitHub Actions, SonarCloud, Snyk, and Trivy.',
  features: [
    'Secure upload/download system with metadata tracking',
    'Threat detection via hash verification and ClamAV/YARA scanning',
    'Runtime intrusion detection using Falco + Grafana',
    'Infrastructure automation using Docker Compose, Ansible, K8s, ArgoCD',
    'CI/CD with GitHub Actions, code quality & security scans (SonarCloud, Snyk, Trivy)',
    'Centralized logging and monitoring for security events'
  ],
  github: 'https://github.com/ChadenBA/SecureFileTransfer',
  demo: ''
},
  {
  title: 'DevSecOps Pipeline for Secure Web Biometric Authentication with Anti-Spoofing',
  date: 'Research & Engineering Project: 2025',
  tags: [
    'DevSecOps',
    'Biometric Authentication',
    'Anti-Spoofing',
    'CI/CD',
    'AES-256',
    'JWT',
    'Facial Recognition',
    'Cybersecurity',
    'Emotion Detection'
  ],
  purpose:
    'To design a secure web authentication system based on facial biometrics, enhanced with anti-spoofing, encryption, and automated DevSecOps pipelines.',
  description:
    'This project focuses on developing a full biometric authentication system for the web, integrating advanced facial recognition with anti-spoofing mechanisms (photo/video attack detection). User biometric templates are encrypted using AES-256, and session management is secured via JWT and HTTPS communication. The system also integrates emotion-state detection from facial expressions. A complete DevSecOps pipeline ensures code quality, automated testing, vulnerability scans, secure deployments, and continuous monitoring.',
  features: [
    'Secure web authentication using facial biometrics',
    'Anti-spoofing (photo/video attack detection)',
    'User emotion-state detection via facial analysis',
    'AES-256 encryption for biometric data',
    'Secure session management with JWT + HTTPS',
    'Full CI/CD DevSecOps pipeline with automated tests & security scans',
    'Monitoring and logging for system health and security events'
  ],
  github: 'https://github.com/ChadenBA/facekey',
  demo: ''
}
,
  {
  title: 'Advanced Facial Recognition System (InsightFace & Fine-Tuning)',
  date: 'Personal Project: November 2025',
  tags: [
    'Computer Vision',
    'Deep Learning',
    'InsightFace',
    'ArcFace',
    'FastAPI',
    'Cosine Similarity',
    'Machine Learning',
    'Face Recognition'
  ],
  purpose:
    'To build a robust and production-ready facial recognition system capable of handling real-world variations using fine-tuning and modern inference pipelines.',
  description:
    'This project implements a full facial recognition system based on InsightFace (ArcFace). It includes a fine-tuning module to improve robustness against lighting, pose, and occlusion variations. The backend is implemented with FastAPI to manage embeddings and inference, while a modern frontend handles user interactions. The recognition pipeline includes detection, alignment, embedding extraction, and similarity scoring. The final output returns “match”, “no match”, or “null” when no valid face is detected.',
  features: [
    'Facial detection, alignment, embedding, and recognition pipeline',
    'Fine-tuning module improving model robustness to real-world conditions',
    'FastAPI backend exposing inference APIs',
    'Frontend interface for real-time recognition',
    'Cosine similarity scoring for match vs no-match decision',
    'Support for multiple faces and embedding storage'
  ],
  github: 'https://github.com/ChadenBA/Reconnaissance-Faciale ',
  demo: ''
}
,
  {
    title: "Social Engineering Game",
    date: "Personal Project: August 2025",
    tags: [
      "Cybersecurity",
      "Gamification",
      "Phishing",
      "Awareness",
      "Web App",
      "Open Source"
    ],
    purpose: "To raise awareness about social engineering attacks by providing an interactive and engaging way for users to learn how to identify phishing emails, fake links, and manipulation tactics.",
    description: "The Social Engineering Game is a gamified web application designed to simulate real-world phishing and social engineering scenarios. Instead of passively reading about cyber threats, users actively experience them in an interactive environment, learning to recognize and respond to red flags in real time. The project emphasizes that while firewalls and security systems are strong, human awareness is often the weakest link, making education the first line of defense.",
    features: [
      "Interactive phishing and social engineering scenarios",
      "Gamified approach to cybersecurity learning",
      "Real-time feedback on identifying red flags",
      "Open-source code for community collaboration",
      "Deployed with modern development and security tools"
    ],
    github: "https://github.com/ChadenBA/social-engineering-game",
    demo: "https://social-engineering-game.onrender.com/"
  },
  {

        title: 'Inventory Management App',
        date: 'GitHub Repo: April 2025',
        tags: [
          'Java', 'JavaFX', 'Maven', 'Jenkins', 'Docker', 'Kubernetes', 'Nexus'
        ],
        purpose:
          'To create a robust inventory management system supporting real-time updates, role-based access, and automated CI/CD workflows.',
        description:
          'This project involved building a full-stack inventory management app using a diverse tech stack. Real-time inventory tracking was achieved with TypeScript and Python on the backend, using MySQL and MongoDB as databases, and Elasticsearch for search optimization. The system supports user roles and real-time updates. The DevOps pipeline includes automated testing, builds, and deployments with Jenkins, Docker, and Kubernetes. Security checks were enforced using Trivy and SonarQube for vulnerability detection and static analysis.',
        features: [
          'Real-time inventory updates with database sync (MySQL, MongoDB)',
          'CI/CD pipeline with Jenkins, Maven, Docker, and Kubernetes',
          'Static code analysis via SonarQube and vulnerability scanning using Trivy',
          'Advanced search powered by Elasticsearch',
          'Role-based user access and session management',
        ],
        github: 'https://github.com/ChadenBA/InventoryApp',
        demo: 'https://github.com/ChadenBA/InventoryApp' 
      }
      ,
      {
        title: 'Recipe Management App with Grafana Visualization',
        date: 'GitHub Repo: April 2025',
        tags: [
          'Java', 'Docker', 'GitHub Actions', 'Trivy', 'Nexus', 'Grafana', 'Prometheus', 'Kubernetes'
        ],
        purpose:
          'To build a scalable and observable recipe management app with advanced monitoring and automated CI/CD workflows.',
        description:
          'This project focuses on recipe management with advanced search and performance visibility. Built with Java and containerized using Docker, it integrates Prometheus and Grafana for monitoring system metrics. GitHub Actions was used for CI/CD, including automated testing, building, security scanning (via Trivy), and deployment. Kubernetes handled orchestration, and Nexus was used for artifact storage.',
        features: [
          'Advanced search features for recipe management',
          'CI/CD pipeline with GitHub Actions, Trivy security scans, and artifact handling via Nexus',
          'Live monitoring and visualization with Prometheus and Grafana',
          'Scalable, containerized deployment using Docker and Kubernetes',
        ],
        github: 'https://github.com/ChadenBA/Recipeapp',
        demo: 'https://github.com/ChadenBA/Recipeapp'
      },
      {
        title: 'Stress and Mental Health Prediction App',
        date: 'GitHub Repo: April 2025',
        tags: [
          'ReactTS', 'Node.js', 'MongoDB', 'Jest', 'SuperTest', 'GitHub Actions', 'Machine Learning'
        ],
        purpose:
          'To provide mental health insights through predictive analysis using real user input and machine learning models.',
        description:
          'This application allows users to assess potential stress and mental health conditions. Built using React TypeScript for the frontend and Node.js for the backend, the app employs Decision Trees and Linear Regression to predict mental health conditions. MongoDB stores user responses securely. The system is backed by a robust testing suite with Jest and SuperTest, and CI/CD automation is handled via GitHub Actions.',
        features: [
          'Machine learning prediction using Decision Trees and Linear Regression',
          'Secure data handling with MongoDB',
          'End-to-end testing with Jest and SuperTest',
          'CI/CD with GitHub Actions',
          'Modern UI built with React and TypeScript',
        ],
        github: 'https://github.com/ChadenBA/SoulSpringFront',
        demo: 'https://github.com/ChadenBA/SoulSpringFront'
      },
      {
        title: 'Simulating Security Attacks on a Web App with GitHub CI/CD',
        date: 'GitHub Repo: April 2025',
        tags: ['Cybersecurity', 'GitHub Actions', 'CI/CD', 'Web Security', 'Wireshark', 'DevSecOps'],
        purpose:
          'To build a realistic lab environment that simulates and mitigates common web application security attacks directly within the CI/CD pipeline.',
        description:
          'This hands-on cybersecurity project titled “Simulating Security Attacks on a Web App with GitHub CI/CD – A Practical Tutorial & Prevention Guide” demonstrates how developers can implement security best practices early in the development lifecycle. The lab simulates OWASP Top 10 vulnerabilities, scans for threats during automated pipelines, and uses traffic inspection tools like Wireshark for packet-level analysis.',
        features: [
          'Simulated OWASP Top 10 attacks on a live testing app',
          'Integrated security scanning into GitHub CI/CD workflows',
          'Wireshark used to analyze and detect real attack traffic',
          'Secure coding practices and prevention strategies applied',
          'Automated security checks integrated in development lifecycle (DevSecOps)',
        ],
        github: 'https://github.com/ChadenBA/Security-attack-simulator', 
        demo: 'https://github.com/ChadenBA/Security-attack-simulator' 
      },
      {
        title: 'Jenkins Phone Book App CI/CD Pipeline (REPtel)',
        date: 'GitHub Repo: April 2025',
        tags: [
          'JavaFX', 'MySQL', 'Jenkins', 'CI/CD', 'Docker', 'SonarQube',
          'OWASP Dependency Check', 'JDK 17', 'Pipeline Automation'
        ],
        purpose:
          'To implement a full CI/CD pipeline for a JavaFX desktop application (REPtel) using Jenkins, Docker, and security tools.',
        description:
          'This project showcases the implementation of a comprehensive CI/CD pipeline using Jenkins for a JavaFX-based Phone Book application. The pipeline includes source code compilation, static code analysis with SonarQube, security scanning via OWASP Dependency-Check, Docker image building, and deployment orchestration. The pipeline is defined in a Jenkinsfile and automates each step from code checkout to production deployment, ensuring quality and security at every stage.',
        features: [
          'Jenkins CI/CD pipeline including Git checkout, build, test, and deploy stages',
          'Static code analysis integrated with SonarQube',
          'Security vulnerability scanning with OWASP Dependency-Check',
          'Automated Docker image building and Docker Hub push',
          'Triggering of downstream CD pipelines after successful CI',
        ],
        github: 'https://github.com/ChadenBA/Phone_Book_App_CICD', 
        demo: 'https://github.com/ChadenBA/Phone_Book_App_CICD'
      }, 
      {
        title: 'SQL Parser and Compiler with GUI',
        date: 'University Project: March 2025',
        tags: ['Compilers', 'SQL', 'Parser', 'Syntax Analyzer', 'GUI', 'Lexical Analysis'],
        purpose:
          'To develop a compiler for a subset of SQL that parses, validates, and interprets SQL instructions, complete with an interactive graphical interface.',
        description:
          'This compiler project focuses on translating SQL-like commands into executable actions. The tool parses and validates commonly used SQL statements (SELECT, INSERT, UPDATE, DELETE, CREATE, DROP), detects syntax errors, and returns contextual error messages. It includes a graphical interface for users to directly enter SQL queries or load a file for batch parsing. This project demonstrates core compiler construction concepts such as lexical analysis, syntax parsing, and error handling.',
        features: [
          'Lexical and syntax analysis for SQL query parsing',
          'Detection and reporting of syntax errors with contextual messages',
          'Support for major SQL commands: SELECT, INSERT, UPDATE, DELETE, CREATE, DROP',
          'GUI interface for manual query input or file-based query loading',
          'Immediate feedback on query validity and error locations',
        ],
        github: 'https://github.com/ChadenBA/SQLPARSER', 
        demo: 'https://github.com/ChadenBA/SQLPARSER'
      },
     
      
      
      
      
      
      
];

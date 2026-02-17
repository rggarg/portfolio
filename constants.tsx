
import { SkillGroup, Project, Experience } from './types';

export const RESUME_LINK = "https://drive.google.com/file/d/1Pk_Lj1WYrM8FdgudXnVgTGIXI99AL3x8/view?usp=sharing";

export const SKILLS: SkillGroup[] = [
  {
    category: "Programming & Backend",
    items: ["JavaScript", "Python", "Node.js", "Express.js", "Redis", "REST APIs"]
  },
  {
    category: "Frontend",
    items: ["React.js", "Redux", "Next.js", "Tailwind CSS", "Responsive UI"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "Firebase"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2, S3, IAM, Amplify)", "CI/CD Pipelines", "Nginx", "Linux Administration"]
  },
  {
    category: "Architecture & Engineering",
    items: ["System Design", "Scalable SaaS Architecture", "Performance Optimization", "Full Feature Lifecycle"]
  },
  {
    category: "Tools & Integrations",
    items: ["Git", "GitHub", "Bitbucket", "JIRA", "Postman", "Salesforce (SFDC)", "Dropbox", "Microsoft 365"]
  }
];

export const EXPERIENCE: Experience = {
  role: "Lead Product Engineer",
  company: "Legitt AI",
  type: "AI-driven CLM & CRM Platform",
  period: "Feb 2022 – Present",
  highlights: [
    "Led architecture and development of an AI-driven CLM and CRM platform serving enterprise clients.",
    "Owned end-to-end product modules including CRM workflows, contract lifecycle management, and eSignature systems.",
    "Designed and built scalable backend services and REST APIs using Node.js and AWS infrastructure.",
    "Improved API performance by 50% through database optimization and caching strategies.",
    "Enhanced system reliability by implementing monitoring, logging, and alerting mechanisms.",
    "Built and optimized dynamic, responsive UI components using React.js for improved user experience.",
    "Led full feature lifecycle from requirement analysis and system design to deployment and production rollout.",
    "Collaborated with cross-functional teams (product, sales, operations) to deliver high-impact features."
  ]
};

export const PROJECTS: Project[] = [
  {
    title: "AI-driven CLM & CRM",
    tech: "Node.js, Express.js, AWS, React",
    icon: "cpu",
    link: "https://legittai.com",
    description: [
      "Enterprise-grade contract lifecycle management",
      "AI-powered clause extraction and analysis",
      "Scalable backend architecture for global clients",
      "Automated renewal tracking and risk detection"
    ]
  },
  {
    title: "eSignature Engine",
    tech: "MERN Stack, Redis, AWS S3",
    icon: "signature",
    link: "https://legittai.com/electronic-signature",
    description: [
      "Multi-signer workflow with audit trails",
      "High-compliance IP and timestamp tracking",
      "Secure document generation and storage",
      "Signature certificate validation"
    ]
  },
  {
    title: "SaaS Workflow Automation",
    tech: "Node.js, Python, Salesforce API",
    icon: "users",
    link: "https://legittai.com/legitt-ai-crm",
    description: [
      "Lead and opportunity pipeline management",
      "Salesforce (SFDC) and third-party integrations",
      "Performance-optimized API layer (50% faster)",
      "Role-based access control (RBAC)"
    ]
  }
];

export const HIGHLIGHTS = [
  "Improved API performance by 50% through optimization.",
  "Led architecture of enterprise AI-driven SaaS.",
  "Fluent in English, Hindi, Punjabi, and Haryanvi.",
  "Expert in high-compliance eSignature systems."
];

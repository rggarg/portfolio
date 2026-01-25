
import React from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Cloud, 
  Cpu, 
  PenTool, 
  Users, 
  Zap,
  Layout,
  Briefcase
} from 'lucide-react';
import { SkillGroup, Project, Experience } from './types';

export const SKILLS: SkillGroup[] = [
  {
    category: "Core Engineering",
    items: ["JavaScript (ES6+)", "Data Structures", "System Design", "REST APIs", "SaaS Architecture"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "SQL", "Redis", "Webhooks", "Background Jobs", "Auth"]
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "ShadCN UI", "Responsive Design"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2, S3, SES)", "Nginx", "PM2", "Linux Setup", "Domain & SSL"]
  },
  {
    category: "AI & Automation",
    items: ["AI Workflow Integration", "Document Intelligence", "Automation Rules", "Prompt Engineering"]
  }
];

export const EXPERIENCE: Experience = {
  role: "Lead Product Engineer",
  company: "Legitt AI",
  type: "Product-Based SaaS Company",
  period: "2022 - Present",
  highlights: [
    "Own end-to-end development of CRM and eSignature modules.",
    "Designed scalable backend architecture for document workflows and automation systems.",
    "Implemented multi-signer eSignature flow with audit trails, IP tracking, and timestamps.",
    "Built CRM features including deal pipelines, automation rules, and lifecycle management.",
    "Integrated AI-powered features to improve contract analysis and workflow automation.",
    "Collaborate directly with leadership for feature planning and execution.",
    "Mentor junior engineers and review code for quality and performance."
  ]
};

export const PROJECTS: Project[] = [
  {
    title: "eSignature Platform",
    tech: "Node.js, MongoDB, React, AWS",
    icon: "signature",
    link: "https://legittai.com/electronic-signature",
    description: [
      "Multi-signer document workflow",
      "Audit trail with IP, timestamp, and activity logs",
      "Signature certificate generation",
      "Enterprise-grade security and compliance"
    ]
  },
  {
    title: "CRM System",
    tech: "MERN Stack, AWS",
    icon: "users",
    link: "https://legittai.com/legitt-ai-crm",
    description: [
      "Lead and opportunity management",
      "Deal pipeline visualization",
      "Hot / Warm / Cold deal prediction logic",
      "Automation rules for follow-ups"
    ]
  },
  {
    title: "AI-Powered CLM",
    tech: "Node.js, AI APIs, MongoDB",
    icon: "cpu",
    link: "https://legittai.com",
    description: [
      "Contract generation using AI",
      "Clause extraction and classification",
      "Renewal tracking and alerts",
      "Risk detection and insights"
    ]
  }
];

export const HIGHLIGHTS = [
  "Speaker for internal engineering sessions on coding and migration best practices.",
  "Owner of high-revenue product modules.",
  "Experience working on AI-based enterprise SaaS.",
  "Strong understanding of business workflows."
];

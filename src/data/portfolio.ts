import themeConfig from '../../tailwind.config.js';

const colors = themeConfig.theme.extend.colors as any;
export const personalInfo = {
 name: "Rohit Garg",
 title: "Lead Product Engineer",
 tagline: "Building scalable, AI-driven enterprise systems",
 email: "rohitgarg892000@gmail.com",
 location: "India",
 available: true,
 github: "https://github.com/rggarg",
 linkedin: "https://linkedin.com/in/rggarg",
 twitter: "https://x.com/Rohit18843213",
 resume: "https://drive.google.com/file/d/1Pk_Lj1WYrM8FdgudXnVgTGIXI99AL3x8/view",
 bio: "Lead Product Engineer at Legitt AI, with 3+ years building enterprise-grade, AI-powered platforms from the ground up. I own products end-to-end — from system architecture and API design through multi-region deployment and team leadership.",
 shortBio: "3+ years shipping production-grade AI platforms at Legitt AI. Full ownership: system design → deployment → team leadership.",
};

export const stats = [
 { value: "3+", label: "Years Experience", suffix: "" },
 { value: "4", label: "Products Shipped", suffix: "" },
 { value: "1K+", label: "Contracts / Day", suffix: "" },
 { value: "4", label: "Global Regions", suffix: "" },
];

export const skills = [
 {
 category: "Backend Engineering",
 icon: "⚙️",
 color: colors.accent,
 description: "Expert in Node.js and Express.js for scalable, high-throughput APIs. Deep focus on performance optimization, caching strategies, and efficient data handling.",
 tags: ["Node.js", "Express.js", "REST APIs", "Microservices"],
 },
 {
 category: "Frontend Development",
 icon: "🖥️",
 color: colors['accent-dim'],
 description: "Proficient in React.js for dynamic, responsive UIs. Strong grasp of state management, component-driven architecture, and meaningful UX improvements.",
 tags: ["React.js", "Redux", "Context API", "Responsive Design", "Component Design"],
 },
 {
 category: "Database & Data",
 icon: "🗄️",
 color: colors.amber,
 description: "Experienced with MongoDB and SQL databases. Skilled in schema design, indexing, query optimization, and maintaining consistency at enterprise scale.",
 tags: ["MongoDB", "SQL", "Indexing", "Schema Design", "Query Optimization"],
 },
 {
 category: "Cloud & DevOps",
 icon: "☁️",
 color: "#60a5fa" /* no matching tailwind theme color */,
 description: "Hands-on with AWS services. CI/CD pipelines, deployment automation, and system monitoring for maximum reliability and uptime.",
 tags: ["AWS EC2", "S3", "CI/CD", "Monitoring"],
 },
 {
 category: "System Design",
 icon: "🏗️",
 color: "#a78bfa",
 description: "Designing scalable, maintainable architectures for enterprise systems. Expert in microservices patterns and high-load performance optimization.",
 tags: ["Architecture", "Scalability", "Microservices", "High-Load", "Design Patterns"],
 },
 {
 category: "AI & Automation",
 icon: "🤖",
 color: "#f472b6",
 description: "Building AI-driven products and intelligent automation workflows. Exploring AI agents, document analysis, and intelligent integrations that reduce manual effort.",
 tags: ["AI Integration", "Automation", "Document Analysis", "AI Agents", "Workflows"],
 },
];

export const techStack = [
 { name: "Node.js", level: 95 },
 { name: "React.js", level: 90 },
 { name: "MongoDB", level: 85 },
 { name: "AWS", level: 80 },
 { name: "Express.js", level: 95 },
 { name: "SQL", level: 90 },
 { name: "System Design", level: 85 },
 { name: "CI/CD", level: 80 },
];

export const techLogos = [
 "Node.js", "React.js", "MongoDB", "AWS", "Express.js",
 "JavaScript", "TypeScript", "Docker", "Git", "REST APIs",
 "Microservices", "SQL", "Redis", "Salesforce", "CI/CD",
];

export const experience = [
 {
 role: "Lead Product Engineer",
 company: "Legitt AI",
 period: "Feb 2025 – Present",
 type: "Full-time",
 current: true,
 description: "Leading architecture and development of the complete Legitt AI platform — including the CLM, collaborative editor, e-signature flows, and enterprise integrations. Owning long-term technical strategy and all major engineering decisions.",
 achievements: [
 { text: "Architected and shipped the entire CLM platform from scratch — 1K+ contracts/day, deployed across 4 global regions (USA, UAE, Europe, India)", highlight: "1K+ Contracts/Day" },
 { text: "Built custom TipTap collaborative editor with redlining, real-time collaboration, and DOCX ↔ PDF format conversion", highlight: "Custom Editor" },
 { text: "Delivered SOC2 Type II, GDPR, and HIPAA compliance — all implemented and certified during tenure", highlight: "SOC2 · GDPR · HIPAA" },
 { text: "Integrated Salesforce (bidirectional sync), MS Word Online (Office.js), and Okta SSO/SAML for enterprise clients", highlight: "Enterprise Integrations" },
 { text: "Led and mentored a team of 10–12 engineers across platform features, code reviews, and architecture decisions", highlight: "Team of 10–12" },
 ],
 stack: ["React.js", "TipTap", "Node.js", "MySQL", "MongoDB", "Redis", "AWS", "Salesforce", "Okta", "OpenAI", "Gemini"],
 },
 {
 role: "Product Engineer",
 company: "Legitt AI",
 period: "2022 – Feb 2025",
 type: "Full-time",
 current: false,
 description: "Built foundational platform modules and core infrastructure for the Legitt AI contract management system. Progressed from backend engineering to owning full product features end-to-end.",
 achievements: [
 { text: "Built the invoicing and financial workflow engine with dynamic tax calculation, Excel generation, and multi-currency support", highlight: "Invoicing Engine" },
 { text: "Developed the multi-party e-signature orchestration system — sequential/parallel signing with SMS, email, and WhatsApp delivery", highlight: "E-Signature Platform" },
 { text: "Implemented the sales contract workflow integrating Salesforce Opportunities through AI review and signature collection", highlight: "Sales Flow" },
 { text: "Established the dual-database architecture (MySQL + MongoDB) and Redis caching strategy still used at scale today", highlight: "Core Architecture" },
 ],
 stack: ["Node.js", "React.js", "MongoDB", "MySQL", "Redis", "AWS", "Express.js", "Socket.io"],
 },
];

export const projects = [
 {
 id: "clm",
 num: "01",
 featured: true,
 title: "Legitt AI - AI-Powered Contract Lifecycle Management Platform",
 subtitle: "Enterprise AI Platform",
 link: "/legitt-ai-clm",
 description: "End-to-end enterprise CLM platform built from scratch - featuring a custom TipTap collaborative editor with redlining, AI-powered contract generation, multi-party e-signatures, bidirectional Salesforce integration, and deployment across 4 global regions with SOC2, GDPR & HIPAA compliance.",
 longDescription: "Led a team of 10–12 engineers to design and implement every major platform module including the collaborative editor, approval workflow engine (state machine + MongoDB hierarchies), MS Word Online integration via Office.js, dual-database architecture, and enterprise integrations with Salesforce and Okta SSO.",
 contributions: [
 "Architected & built TipTap collaborative editor with custom redlining + signature extensions",
 "Designed approval workflow engine with conditional routing through MongoDB dept hierarchies",
 "Built bidirectional Salesforce integration (webhook + polling hybrid)",
 "Embedded MS Word Online editing via Office.js APIs",
 "Implemented multi-region deployment (USA, UAE, Europe, India) with data residency controls",
 "Achieved SOC2 Type II, GDPR, and HIPAA compliance",
 ],
 impact: [
 "1K+ contracts processed daily across 4 global regions",
 "Reduced contract cycle from weeks to hours for enterprise clients",
 "4.8★ G2 rating - trusted by Fortune 500 clients",
 ],
 stack: ["React.js", "TipTap", "Node.js", "MySQL", "MongoDB", "Redis", "AWS", "Salesforce", "Okta", "OpenAI", "Gemini"],
 color: colors.accent,
 },
 {
 id: "esign",
 num: "02",
 featured: false,
 title: "Legitt AI E-Signature Platform",
 subtitle: "E-sign Case Study",
 link: "/esign-platform",
 description: "Intelligent document analysis, AI-driven workflow automation, and multi-channel signature delivery - reimagining contract execution at scale.",
 contributions: [
 "Led engineering team and core architecture for 2+ years",
 "Architected Python AI microservices and robust Node.js APIs",
 "Built complex multi-channel signature delivery systems",
 "Implemented dynamic SQL queries and WebSockets for real-time tracking"
 ],
 impact: [
 "Drove API cost reduction by 70% via strategic caching layers",
 "Boosted signature completion rate by 40% with optimized workflows"
 ],
 stack: ["React.js", "Node.js", "SQL", "Python", "OpenAI GPT"],
 color: colors['brand-light-blue'],
 },
 {
 id: "sales-contract-workflow",
 num: "03",
 featured: false,
 title: "Sales Contract Workflow Automation",
 subtitle: "Enterprise Case Study",
 link: "/sales-contract-workflow",
 description: "An integrated workflow automating the entire contract lifecycle - from Opportunity initiation in Salesforce to finalized AI-analyzed agreements via Legitt e-Sign.",
 contributions: [
 "Bidirectional sync between Salesforce and Legitt",
 "AI-powered pricing and legal clause review",
 "Live document negotiation via MS Graph (Word Online)",
 "Legitt e-Sign integration for multi-party execution",
 ],
 impact: [
 "Reduced contract processing time from weeks to 1–2 days",
 "Replaced disjointed tools with one seamless workflow",
 ],
 stack: ["Salesforce REST API", "MS Graph API", "React", "Node.js", "Legitt e-Sign"],
 color: colors.amber,
 },
 {
 id: "collaborative-editor",
 num: "04",
 featured: false,
 title: "Real-Time Collaborative Contract Editor with Redlining",
 subtitle: "Editor Case Study",
 link: "/collaborative-editor",
 description: "Production-grade TipTap-powered contract editor with track changes (redlining), in-document signature fields, real-time collaboration, and seamless DOCX ↔ Tiptap ↔ PDF format conversion.",
 contributions: [
 "Built custom Redlining extension with accept/reject at individual and bulk granularity",
 "Designed single-editor collaboration model with Socket.io permission handoff",
 "Implemented DOCX → LibreOffice → HTML → TipTap import pipeline",
 "Built PDF export via Puppeteer with 98%+ format fidelity",
 ],
 impact: [
 "Editor loads 50-page contracts in <2s with <200ms real-time sync",
 "Zero merge conflicts via single-editor model with full audit trail",
 ],
 stack: ["TipTap", "ProseMirror", "Socket.io", "Redis", "LibreOffice", "Puppeteer", "MySQL", "MongoDB"],
 color: "#00ccaa",
 },
];

export const achievements = [
 {
 icon: "🚀",
 title: "AI Enterprise Products Shipped",
 description: "Successfully led and delivered multiple production-grade AI-driven systems used by real enterprise clients with high availability and reliability requirements.",
 metric: "4+",
 metricLabel: "Products",
 },
 {
 icon: "🏗️",
 title: "End-to-End Technical Leadership",
 description: "Drove architectural decisions and technical strategy from system design through production deployment - across complex multi-team projects.",
 metric: "∞",
 metricLabel: "Ownership",
 },
 {
 icon: "👥",
 title: "Team Mentorship & Growth",
 description: "Mentored junior engineers, established code review processes, and improved team velocity through structured guidance and architectural documentation.",
 metric: "3x",
 metricLabel: "Velocity",
 },
];

export const differentiators = [
 {
 num: "01",
 title: "Full Product Ownership",
 description: "End-to-end thinking - I bridge business requirements with technical execution, never losing sight of user impact.",
 },
 {
 num: "02",
 title: "Scalability by Default",
 description: "Every system I build is designed for growth - clean architecture, thoughtful abstractions, no shortcuts that haunt you later.",
 },
 {
 num: "03",
 title: "Enterprise-Ready Execution",
 description: "Real experience shipping into production enterprise environments with strict reliability, security, and integration requirements.",
 },
 {
 num: "04",
 title: "AI-Forward Mindset",
 description: "Embedding AI meaningfully into products - not as a buzzword, but as a genuine efficiency and intelligence multiplier.",
 },
];

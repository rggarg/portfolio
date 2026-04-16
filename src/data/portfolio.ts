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
 bio: "Lead Product Engineer with deep expertise in the MERN stack and cloud-native AWS architectures. I specialize in building scalable, high-performance enterprise web applications and AI-driven products — from architecture through deployment.",
 shortBio: "3+ years shipping production-grade, AI-powered enterprise platforms. I own problems end-to-end: system design, API performance, team leadership.",
};

export const stats = [
 { value: "3+", label: "Years Experience", suffix: "" },
//  { value: "50", label: "API Speed Boost", suffix: "%" },
 { value: "4+", label: "Enterprise Products", suffix: "" },
 { value: "100", label: "Team Productivity", suffix: "%" },
];

export const skills = [
 {
 category: "Backend Engineering",
 icon: "⚙️",
 color: colors.accent,
 description: "Expert in Node.js and Express.js for scalable, high-throughput APIs. Deep focus on performance optimization, caching strategies, and efficient data handling.",
 tags: ["Node.js", "Express.js", "REST APIs", "Microservices", "GraphQL"],
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
 tags: ["AWS EC2", "S3", "Lambda", "SSM", "CI/CD", "Monitoring"],
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
 { name: "MongoDB", level: 88 },
 { name: "AWS", level: 82 },
 { name: "Express.js", level: 95 },
 { name: "SQL", level: 80 },
 { name: "System Design", level: 85 },
 { name: "CI/CD", level: 78 },
];

export const techLogos = [
 "Node.js", "React.js", "MongoDB", "AWS", "Express.js",
 "JavaScript", "TypeScript", "Docker", "Git", "REST APIs",
 "Microservices", "SQL", "Redis", "Salesforce", "CI/CD",
];

export const experience = [
 {
 role: "Lead Product Engineer",
 company: "Enterprise Tech",
 period: "Feb 2025 – Present",
 type: "Full-time",
 current: true,
 description: "Leading architecture and development of an AI-driven enterprise CLM platform. Defining long-term technical strategy and driving key engineering decisions across the stack.",
 achievements: [
//  { text: "Reduced API response time by 50% through targeted profiling, caching, and query optimization", highlight: "50% faster APIs" },
 { text: "Led architecture of AI-powered Contract Lifecycle Management platform used by enterprise clients", highlight: "AI Enterprise Platform" },
 { text: "Implemented monitoring, logging, and alerting infrastructure ensuring system reliability at scale", highlight: "99.9% Uptime" },
 { text: "Mentored junior developers through structured code reviews, improving team velocity significantly", highlight: "Team Leadership" },
 { text: "Collaborated with cross-functional teams to deliver complex features end-to-end", highlight: "Cross-functional" },
 ],
 stack: ["Node.js", "React.js", "MongoDB", "AWS", "Express.js", "AI/ML"],
 },
];

export const projects = [
 {
 id: "clm",
 num: "01",
 featured: true,
 title: "AI-Based Contract Lifecycle Management Platform",
 subtitle: "Enterprise AI Platform",
 description: "Enterprise-grade AI-powered platform managing the complete lifecycle of contracts — from creation and intelligent templating through multi-stage approval workflows, invoice generation, and Salesforce integration.",
 longDescription: "Designed and built the core backend architecture from scratch. Implemented AI-driven document analysis that automates data extraction and contract population, reducing contract creation time by ~70% for enterprise clients.",
 contributions: [
 "Designed scalable backend architecture using Node.js and microservices",
 "Built intelligent multi-stage approval workflows and document management",
 "Integrated AI for document analysis, extraction, and automation",
 "Developed dynamic templates for auto-populating contract data",
 "Implemented invoice generation, tax calculation, and reporting engine",
 "Integrated with Salesforce (SFDC) for enterprise CRM connectivity",
 ],
 impact: [
 "Improved contract processing efficiency by ~70% for enterprise clients",
 "Eliminated manual data entry through AI-powered automation",
 "Delivered reliable, scalable system handling real enterprise workloads",
 ],
 stack: ["Node.js", "React.js", "MongoDB", "AWS", "Salesforce", "Express.js", "AI/ML", "REST APIs"],
 color: colors.accent,
 },
 {
 id: "esign",
 num: "02",
 featured: false,
 title: "Legitt AI E-Signature Platform",
 subtitle: "E-sign Case Study",
 link: "/esign-platform",
 description: "Intelligent document analysis, AI-driven workflow automation, and multi-channel signature delivery — reimagining contract execution at scale.",
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
 description: "An integrated workflow automating the entire contract lifecycle — from Opportunity initiation in Salesforce to finalized AI-analyzed agreements via Legitt e-Sign.",
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
 id: "invoicing",
 num: "04",
 featured: false,
 title: "Invoicing & Financial Workflow System",
 subtitle: "Enterprise Finance Module",
 description: "Complete invoicing module integrated into enterprise workflows — handling multi-jurisdiction tax calculation, approval chains, compliance reporting, and email notifications.",
 contributions: [
 "Designed invoice approval flow and automation engine",
 "Implemented geo/entity-based tax calculation logic",
 "Built reporting dashboard and email notification system",
 "Ensured compliance with financial regulations",
 ],
 impact: [
 "Improved financial tracking and regulatory compliance",
 "Reduced manual invoicing errors significantly",
 ],
 stack: ["Node.js", "MongoDB", "Express.js", "Email APIs", "Tax APIs"],
 color: "#a78bfa",
 },
];

export const achievements = [
 {
 icon: "⚡",
 title: "50% API Performance Improvement",
 description: "Reduced API response time through targeted profiling, query optimization, caching layers, and connection pooling — delivering measurably faster user experiences at scale.",
 metric: "50%",
 metricLabel: "Faster",
 },
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
 description: "Drove architectural decisions and technical strategy from system design through production deployment — across complex multi-team projects.",
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
 description: "End-to-end thinking — I bridge business requirements with technical execution, never losing sight of user impact.",
 },
 {
 num: "02",
 title: "Scalability by Default",
 description: "Every system I build is designed for growth — clean architecture, thoughtful abstractions, no shortcuts that haunt you later.",
 },
 {
 num: "03",
 title: "Enterprise-Ready Execution",
 description: "Real experience shipping into production enterprise environments with strict reliability, security, and integration requirements.",
 },
 {
 num: "04",
 title: "AI-Forward Mindset",
 description: "Embedding AI meaningfully into products — not as a buzzword, but as a genuine efficiency and intelligence multiplier.",
 },
];

import {
  Clock,
  FileText,
  TrendingUp,
  Users,
  Zap,
  Brain,
  GitBranch,
  MessageSquare,
  PackageCheck,
  Layers,
  Shield,
  Globe,
  Bot,
  Database,
  RefreshCw,
  ServerCrash,
  Cpu,
  Code2,
  Workflow,
} from 'lucide-react';

/* ─── Hero Stats ──────────────────────────────────────────────────────────── */
export const heroStats = [
  { label: 'Years in Development', value: '2+' },
  { label: 'Team Size', value: '2–4' },
  { label: 'AI Approach', value: 'Hybrid' },
  { label: 'Architecture', value: 'MERN + Python' },
];

/* ─── Metrics ─────────────────────────────────────────────────────────────── */
export const metrics = [
  {
    icon: Clock,
    value: '60%',
    label: 'Faster Legal Review',
    sub: 'AI clause analysis vs manual review',
    color: 'text-accent',
  },
  {
    icon: TrendingUp,
    value: '80%',
    label: 'Workflow Setup Time Saved',
    sub: 'Intelligent auto-routing replaces config',
    color: 'text-brand-purple',
  },
  {
    icon: FileText,
    value: '5 min',
    label: 'Bulk Operations',
    sub: '2-hour manual process → automated',
    color: 'text-brand-pink',
  },
  {
    icon: Users,
    value: '10x',
    label: 'HR Onboarding Scale',
    sub: 'Same team, 10x more employees',
    color: 'text-amber',
  },
];

/* ─── Problems ────────────────────────────────────────────────────────────── */
export const problems = [
  'Documents treated as black boxes — hidden obligations, missing clauses, unfavorable financial terms go unnoticed until it\'s too late.',
  'Email-only signature requests exclude users in SMS-first markets and mobile-heavy workflows.',
  'HR and procurement teams manually duplicate documents for each recipient — no bulk operations or automation.',
  'Rigid, linear approval processes require custom development with no intelligent routing based on document content or risk.',
  'No cross-team visibility into where a document is stuck in the approval or signing pipeline.',
];

export const solutions = [
  'AI-powered document review engine instantly surfaces clauses, obligations, financial terms, and compliance risks upon upload.',
  'Multi-channel delivery (Email + SMS) reaches signatories in any market — first in class for SMS-first regions.',
  'Bulk signing engine — upload Excel with 100+ signatory records, auto-generate personalized documents, single-click distribution.',
  'AI-driven workflow engine routes approvals based on financial thresholds, clause changes, and document risk level.',
  'Envelope grouping bundles multiple documents into a single signing session, improving completion rates by ~40%.',
];

/* ─── Flow Steps (Document Lifecycle) ────────────────────────────────────── */
export interface ESignFlowStep {
  id: number;
  phase: string;
  phaseColor: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
}

export const flowSteps: ESignFlowStep[] = [
  {
    id: 1,
    phase: 'Upload & Analysis',
    phaseColor: '#00ff88',
    icon: FileText,
    title: 'Document Upload',
    desc: 'User uploads any contract, agreement, or legal document. The system accepts .docx, .pdf, and templated documents with merge fields for bulk operations.',
  },
  {
    id: 2,
    phase: 'Upload & Analysis',
    phaseColor: '#00ff88',
    icon: Brain,
    title: 'AI Analysis Engine',
    desc: 'Hybrid AI layer (OpenAI GPT + custom-trained models) processes the document — extracting clauses, obligations, financial terms, and compliance risks asynchronously via Python microservices.',
  },
  {
    id: 3,
    phase: 'Upload & Analysis',
    phaseColor: '#00ff88',
    icon: Bot,
    title: 'Clause Extraction & Risk Scoring',
    desc: 'Outputs a structured report: identified clauses, missing critical clauses with recommendations, extracted obligations with deadlines, financial summary, and compliance alerts.',
  },
  {
    id: 4,
    phase: 'Workflow Configuration',
    phaseColor: '#a78bfa',
    icon: GitBranch,
    title: 'Workflow Engine — Routing Decision',
    desc: 'The AI-driven workflow engine determines the approval chain based on document type, risk score, financial thresholds, and clause modifications. Supports parallel (Legal + Finance simultaneously) and sequential (Manager → Director → VP) chains.',
  },
  {
    id: 5,
    phase: 'Workflow Configuration',
    phaseColor: '#a78bfa',
    icon: Workflow,
    title: 'Approval Chain Execution',
    desc: 'Approvers are notified via Email and SMS. Real-time WebSocket connections push live status updates. Each approver acts within the workflow without any out-of-band communication.',
  },
  {
    id: 6,
    phase: 'Signature Collection',
    phaseColor: '#f472b6',
    icon: MessageSquare,
    title: 'Multi-Channel Signature Dispatch',
    desc: 'Signature requests dispatched via Email or SMS. SMS delivery reaches field workers, international markets, and mobile-first users — a market-first capability versus DocuSign and Adobe Sign.',
  },
  {
    id: 7,
    phase: 'Signature Collection',
    phaseColor: '#f472b6',
    icon: PackageCheck,
    title: 'Envelope-Based Signing Session',
    desc: 'For multi-document transactions (e.g., employee onboarding), all documents are bundled into a single envelope. Signatories complete one unified session instead of multiple fragmented requests.',
  },
  {
    id: 8,
    phase: 'Audit & Storage',
    phaseColor: '#fb923c',
    icon: Shield,
    title: 'Audit Trail & Tamper-Proof Sealing',
    desc: 'Every signing event is captured with timestamp, IP address, and geolocation. Event-sourced architecture maintains a complete, immutable audit trail. Document sealed and stored post-execution.',
  },
  {
    id: 9,
    phase: 'Audit & Storage',
    phaseColor: '#fb923c',
    icon: Database,
    title: 'Document Storage & Webhook Dispatch',
    desc: 'Executed documents are stored in SQL with metadata. External systems are notified via the comprehensive webhook system for downstream integrations (HR, ERP, CRM).',
  },
];

/* ─── Flow Phases ─────────────────────────────────────────────────────────── */
export const flowPhases = [
  { name: 'Upload & Analysis', color: '#00ff88' },
  { name: 'Workflow Configuration', color: '#a78bfa' },
  { name: 'Signature Collection', color: '#f472b6' },
  { name: 'Audit & Storage', color: '#fb923c' },
];

/* ─── Key Features ───────────────────────────────────────────────────────── */
export const features = [
  {
    number: '01',
    title: 'AI Document Analysis',
    tagline: 'Turn passive signing into proactive contract intelligence',
    color: '#00ff88',
    bullets: [
      'Automated clause detection and extraction across all document types',
      'Missing clause recommendations based on document classification',
      'Financial terms extraction — payment amounts, penalties, milestones',
      'Compliance alerts for regulatory requirements and standard violations',
      'Obligation identification with deadline extraction',
    ],
    impact: 'Reduces legal review time by 60%; catches 95%+ of critical obligations',
  },
  {
    number: '02',
    title: 'Smart Workflow Builder',
    tagline: 'Eliminate 80% of workflow configuration time',
    color: '#a78bfa',
    bullets: [
      'Drag-and-drop visual workflow designer for non-technical users',
      'Parallel approvals — Legal + Finance sign off simultaneously',
      'Sequential chains — Manager → Director → VP approval hierarchy',
      'AI auto-routing: if financial terms exceed threshold, CFO approver added automatically',
      'State machine design handles 10+ concurrent approval chains per document',
    ],
    impact: 'Adapts to document changes automatically; eliminates manual workflow config',
  },
  {
    number: '03',
    title: 'Bulk Signing Engine',
    tagline: '2-hour manual processes reduced to 5-minute automated workflows',
    color: '#f472b6',
    bullets: [
      'Upload Excel/CSV with 100+ signatory records with custom field mapping',
      'Auto-generate personalized documents from master template with merge fields',
      'Single-click sends all signature requests simultaneously',
      'Progress tracking across the entire batch in real time',
      'Used for HR onboarding packages, vendor agreements, insurance renewals',
    ],
    impact: 'HR teams process 50+ onboarding packets in minutes, not hours',
  },
  {
    number: '04',
    title: 'Envelope Management',
    tagline: 'Bundle related documents into a unified signing session',
    color: '#fb923c',
    bullets: [
      'Group multiple documents — offer letter, NDA, tax forms, benefits enrollment',
      'Signer completes one session instead of multiple fragmented requests',
      'Single-step tracking for all documents in the envelope',
      'Common use case: employee onboarding, multi-document loan closings',
      'Reduces signer abandonment through simplified UX',
    ],
    impact: '~40% improvement in signature completion rates through unified sessions',
  },
  {
    number: '05',
    title: 'Multi-Channel Delivery',
    tagline: 'First-in-market SMS signature delivery for mobile-first populations',
    color: '#34d399',
    bullets: [
      'Email signature links — industry standard with tracking and reminders',
      'SMS delivery — unique capability not available in DocuSign or Adobe Sign',
      'Ideal for field workers, international markets, and urgent signature scenarios',
      'Multi-provider SMS strategy with fallback routing for global reach',
      'Automatic delivery channel selection based on recipient region',
    ],
    impact: 'Expands addressable market by 30%; 50% faster response via SMS',
  },
];

/* ─── Architecture Nodes ─────────────────────────────────────────────────── */
export const archLayers = [
  {
    label: 'Frontend',
    tech: 'React.js',
    color: '#61dafb',
    desc: 'Component-driven UI with real-time WebSocket state',
  },
  {
    label: 'API Layer',
    tech: 'Node.js / Express',
    color: '#00ff88',
    desc: 'RESTful API + Webhook engine + Auth middleware',
  },
  {
    label: 'AI Services',
    tech: 'Python Microservices',
    color: '#a78bfa',
    desc: 'OpenAI GPT + Custom-trained legal clause models',
  },
  {
    label: 'Database',
    tech: 'SQL',
    color: '#47a248',
    desc: 'Document metadata, workflow state, audit trail',
  },
  {
    label: 'Notification',
    tech: 'Email + SMS Gateway',
    color: '#f472b6',
    desc: 'Multi-provider with regional fallback routing',
  },
];

/* ─── Tech Stack ─────────────────────────────────────────────────────────── */
export const techStack = [
  { category: 'Frontend', items: ['React.js', 'JavaScript', 'WebSockets'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'Webhooks'] },
  { category: 'Database', items: ['SQL', 'Event Sourcing', 'Workflow State Machine'] },
  { category: 'AI / ML', items: ['OpenAI GPT Models', 'Custom-Trained Models', 'Python Microservices', 'Async Queue'] },
  { category: 'Delivery', items: ['Email Gateway', 'SMS Gateway (Multi-Provider)', 'Global Fallback Routing'] },
  { category: 'Infrastructure', items: ['Cloud Hosting', 'Message Queue', 'Caching Layer', 'Audit Logging'] },
];

/* ─── Technical Highlights ───────────────────────────────────────────────── */
export const techHighlights = [
  {
    icon: Cpu,
    title: 'Hybrid AI Architecture',
    desc: 'Combined OpenAI\'s general language understanding with custom-trained models for legal domain expertise — general understanding + domain precision for clause analysis at scale.',
  },
  {
    icon: RefreshCw,
    title: 'Intelligent Caching — 70% API Cost Reduction',
    desc: 'Built a clause-pattern caching layer that identifies repeated clause patterns across documents, dramatically reducing OpenAI API calls and processing latency for common contract types.',
  },
  {
    icon: GitBranch,
    title: 'Scalable State Machine Workflow Engine',
    desc: 'Designed a state machine capable of handling 10+ concurrent approval chains per document. Event-sourced architecture ensures complete audit trails and rollback capabilities for every workflow decision.',
  },
  {
    icon: Globe,
    title: 'Real-Time Collaboration via WebSockets',
    desc: 'WebSocket-based live status updates across distributed approval teams. Optimistic UI updates with conflict resolution ensure a seamless experience even during concurrent multi-party actions.',
  },
  {
    icon: ServerCrash,
    title: 'Multi-Provider SMS with Fallback',
    desc: 'International SMS carrier differences required a multi-provider strategy. Built automatic failover and regional routing — ensuring delivery reliability across 50+ countries.',
  },
  {
    icon: Code2,
    title: 'RESTful API + Comprehensive Webhooks',
    desc: 'Designed a developer-first API for third-party integrations and a robust webhook system for external workflow triggers — enabling ERP, CRM, and HRMS integrations without custom development.',
  },
];

/* ─── Learnings ──────────────────────────────────────────────────────────── */
export const learnings = [
  {
    type: 'learned',
    title: 'Workflow Complexity Has a Sweet Spot',
    desc: 'Most users need 3–4 approval steps maximum. Simplified UI to prevent over-engineering while keeping power-user paths available. Complex ≠ better for adoption.',
  },
  {
    type: 'learned',
    title: 'AI Features Need Onboarding Scaffolding',
    desc: 'Initial users found AI analysis intimidating and skipped it. Added guided tutorials, contextual help, and smart defaults to drive adoption — AI value is only realized when users trust it.',
  },
  {
    type: 'learned',
    title: 'SMS Delivery is a Distribution Moat',
    desc: 'SMS outperformed email for response speed in 60%+ of mobile-first markets. This feature became a genuine competitive differentiator that incumbents cannot easily replicate.',
  },
  {
    type: 'would-do',
    title: 'Feature Flags from Day One',
    desc: 'Would implement feature flags earlier for gradual AI model rollouts — allowing A/B testing of different models and safer production deployments of accuracy improvements.',
  },
  {
    type: 'would-do',
    title: 'Start Simpler, Scale with Usage Data',
    desc: 'Would begin with a simpler workflow builder and add advanced features incrementally based on actual usage data rather than anticipated complexity.',
  },
  {
    type: 'would-do',
    title: 'Analytics Dashboard from Day One',
    desc: 'Would build a comprehensive analytics dashboard from the start to measure feature adoption, workflow completion rates, and AI accuracy — enabling data-driven product decisions.',
  },
];

/* ─── Competitor Comparison ──────────────────────────────────────────────── */
export const comparison = {
  features: [
    'Electronic Signatures',
    'AI Clause Analysis',
    'Missing Clause Detection',
    'Financial Terms Extraction',
    'SMS Signature Delivery',
    'Bulk Signing Engine',
    'Envelope Grouping',
    'AI-Driven Approval Routing',
    'Multi-Party Parallel Approvals',
    'Custom Webhook System',
    'Built-in Workflow Builder',
  ],
  competitors: [
    {
      name: 'Legitt AI',
      isUs: true,
      values: [true, true, true, true, true, true, true, true, true, true, true],
    },
    {
      name: 'DocuSign',
      isUs: false,
      values: [true, false, false, false, false, 'partial', true, false, 'partial', 'partial', 'partial'],
    },
    {
      name: 'Adobe Sign',
      isUs: false,
      values: [true, false, false, false, false, false, true, false, false, false, false],
    },
  ],
};

export { Zap, Layers };

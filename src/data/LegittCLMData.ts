import csgLogo from '../assets/images/csg.webp';
import rategainLogo from '../assets/images/rategain-logo.svg';
import stlLogo from '../assets/images/stl.webp';
import ammaLogo from '../assets/images/amma-logo.webp';

export const accent = '#a78bfa'; // brand-purple

export const heroStats = [
  { value: '1K+', label: 'Contracts processed daily', color: '#a78bfa' },
  { value: '200+', label: 'Concurrent users supported', color: '#60a5fa' },
  { value: '4', label: 'Global regions deployed', color: '#00ccaa' },
  { value: '4.8★', label: 'G2 platform rating', color: '#f5a623' },
];

export const heroBadges = [
  'SOC2 Type II', 'GDPR', 'HIPAA', 'Multi-Region', 'Enterprise',
];

export const techTags = [
  'React.js', 'TipTap', 'Node.js', 'Express.js', 'MySQL', 'MongoDB',
  'Redis', 'Socket.io', 'AWS EC2/S3', 'Salesforce REST API',
  'MS Office.js', 'Okta SSO/SAML', 'OpenAI', 'Gemini', 'Puppeteer',
  'LibreOffice', 'AWS CodePipeline', 'Nginx',
];

export const businessChallenges = [
  { icon: '📋', title: 'Fragmented & Manual Workflows', desc: 'Legal teams stitching together Word docs, email chains, DocuSign links, and spreadsheets - with no single source of truth for contract status.' },
  { icon: '⏱️', title: 'Weeks-Long Contract Cycles', desc: 'Enterprise deals blocked for weeks waiting on legal review, approval sign-offs, and signature coordination across multiple parties.' },
  { icon: '⚖️', title: 'Compliance & Audit Risk', desc: 'Inconsistent contract terms, missed obligations, and no audit trail exposing enterprises to legal and regulatory risk.' },
  { icon: '🌍', title: 'Global Enterprise Needs', desc: 'Fortune 500 clients in USA, UAE, Europe, and India requiring jurisdiction-specific templates, data residency, and regional compliance.' },
];

export const technicalChallenges = [
  { num: '01', title: 'Production-Grade Collaborative Editor', desc: 'Building a contract-specific rich text editor from scratch - with redlining, signature placement, real-time collaboration, and DOCX ↔ PDF format conversion - at enterprise document scale.' },
  { num: '02', title: 'Multi-Region Deployment', desc: 'Supporting 4 global regions with data residency requirements, jurisdiction-specific templates, and GDPR/HIPAA/SOC2 compliance in parallel - implemented and maintained personally.' },
  { num: '03', title: 'Complex Integration Surface', desc: 'Bidirectional Salesforce sync (Quote/Opportunity objects), MS Word Online via Office.js, Okta SSO/SAML, real-time WebSocket collaboration, and multi-channel signature delivery.' },
  { num: '04', title: 'High-Volume Contract Processing', desc: 'Handling 1,000+ contracts per day with real-time AI-powered generation, review, and analysis - while maintaining <200ms API response times and 99.9% uptime.' },
];

export const archLayerAnnotations = [
  {
    layer: 'User Layer',
    color: '#60a5fa',
    tech: 'Browser Client • React + Tiptap • WebSocket • MS Word',
    explanation: 'Up to 200+ concurrent users access the platform via browser. The React + TipTap frontend handles collaborative contract editing; WebSocket clients maintain real-time presence; MS Word integration embeds Office.js for Word Online editing within the platform.',
  },
  {
    layer: 'Load Balancer',
    color: '#00ccaa',
    tech: 'Nginx - Request routing + SSL termination',
    explanation: 'Nginx sits in front of all application servers handling SSL termination, request routing, and load distribution. The same Nginx config is replicated across each regional deployment (USA primary + UAE secondary).',
  },
  {
    layer: 'Application Servers',
    color: '#a78bfa',
    tech: 'Node.js + Express REST APIs • Socket.io Server • Redis Cache',
    explanation: 'The core application tier: Node.js/Express handles all REST API traffic; the Socket.io server manages WebSocket connections for real-time collaboration; Redis provides session storage, template caching, and the write buffer between keystrokes and the main database.',
  },
  {
    layer: 'Data Layer',
    color: '#f5a623',
    tech: 'MySQL (metadata) • MongoDB (content & hierarchies) • AWS S3 (files)',
    explanation: 'Dual-database architecture by design. MySQL stores ACID-critical transactional data (document metadata, users, subscriptions, signing status). MongoDB stores flexible JSON blobs (TipTap content, approval workflow hierarchies, AI review outputs). S3 stores raw DOCX/PDF files.',
  },
  {
    layer: 'Background Processing',
    color: '#fb923c',
    tech: 'LibreOffice (DOCX→HTML) • Puppeteer (HTML→PDF) • AWS CodePipeline (CI/CD)',
    explanation: 'Async workers handle format conversion (LibreOffice for DOCX imports, Puppeteer for PDF generation). AWS CodePipeline orchestrates CI/CD - build, test, and deployment automation across all regions.',
  },
  {
    layer: 'External Integrations',
    color: '#f472b6',
    tech: 'Salesforce REST API • Okta SSO/SAML • MS Office.js • Slack Notifications',
    explanation: 'Bidirectional Salesforce sync via REST API with webhook-driven updates. Okta handles enterprise SSO and SAML authentication. Office.js provides MS Word Online editing embedded within Legitt. Slack delivers real-time approval and status notifications.',
  },
];

export const lifecycleStages = [
  { stage: 'Initiation', icon: '🚀', color: '#60a5fa', desc: 'User creates a new contract from template or uploads a DOCX. If uploaded, LibreOffice converts it to HTML, then to TipTap JSON.' },
  { stage: 'Collaborative Editing', icon: '✏️', color: '#a78bfa', desc: 'TipTap editor with real-time collaboration. Single-editor model prevents conflicts. Redlining tracks every change with author attribution. Signature fields placed via drag-and-drop.' },
  { stage: 'Version Control', icon: '📁', color: '#00ccaa', desc: 'Every save creates a versioned entry: metadata in MySQL, full TipTap JSON in MongoDB. Rollback to any prior version. Full audit trail of who changed what and when.' },
  { stage: 'Approval Workflow', icon: '✅', color: '#f5a623', desc: 'Rule-based routing to department approvers based on contract value, type, region, and risk score. Sequential or parallel chains. Auto-escalation on timeout. Rejected → back to editor.' },
  { stage: 'Signature Workflow', icon: '✍️', color: '#fb923c', desc: 'Multi-party signing in configured order. Emails dispatched sequentially. Signature images embedded into TipTap nodes. Status tracked in MySQL. Auto or manual trigger after approval.' },
  { stage: 'PDF Generation', icon: '📄', color: '#f472b6', desc: 'Puppeteer renders the final TipTap JSON as a pixel-perfect A4 PDF - with embedded signatures, watermarks, headers, and footers. 98%+ format fidelity.' },
  { stage: 'Executed', icon: '🏆', color: '#4ade80', desc: 'Document locked. Final signed PDF stored on S3. Immutable audit log written. Status synced back to Salesforce Opportunity. Contract lifecycle complete.' },
];

export const modules = [
  {
    id: 'editor',
    icon: '✏️',
    title: 'Collaborative Contract Editor',
    subtitle: 'Core Platform Module',
    desc: 'TipTap-powered production-grade editor with real-time collaboration, custom redlining extension, drag-and-drop signature fields, and seamless DOCX ↔ PDF format conversion.',
    highlights: ['Custom Redlining Extension (track changes, accept/reject)', 'Single-editor model - zero merge conflicts', 'DOCX → LibreOffice → HTML → TipTap import pipeline', 'PDF export via Puppeteer with 98%+ fidelity'],
    exploreMore: true,
    exploreLink: '/collaborative-editor',
    color: '#a78bfa',
  },
  {
    id: 'approval',
    icon: '🔀',
    title: 'Approval Workflow Engine',
    subtitle: 'State Machine + MongoDB Hierarchies',
    desc: 'Rules-based approval routing engine built on a state machine pattern. Routes contracts through department hierarchies stored in MongoDB. Supports sequential, parallel, and conditional paths.',
    highlights: ['Rule-based routing by value, type, region, risk score', 'Nested department hierarchy in MongoDB', 'Auto-escalation with timeout triggers', 'Slack + email + in-app notifications'],
    exploreMore: false,
    color: '#f5a623',
  },
  {
    id: 'salesforce',
    icon: '🔄',
    title: 'Salesforce Integration',
    subtitle: 'Bidirectional CRM Sync',
    desc: 'Real-time bidirectional sync with Salesforce Quote and Opportunity objects. Webhook-driven architecture with retry logic, idempotency guards, and rate limit management.',
    highlights: ['Webhook + polling hybrid architecture', 'Quote/Opportunity bidirectional sync', 'Exponential backoff + idempotency', 'Custom field mapping configuration'],
    exploreMore: false,
    color: '#60a5fa',
  },
  {
    id: 'msword',
    icon: '📝',
    title: 'MS Word Online Integration',
    subtitle: 'Office.js API Embedding',
    desc: 'Full contract drafting and redlining happens inside MS Word Online - embedded in the platform via Office.js. Once the document is approved, the final DOCX is fetched and loaded into the app in read-only mode for the signature workflow.',
    highlights: ['Office.js embeds Word Online inside the Legitt platform', 'Complete redlining & negotiation stays in Word', 'No TipTap sync - Word is the single editor for this path', 'Approved DOCX loaded in non-edit mode for signature collection'],
    exploreMore: false,
    color: '#00ccaa',
  },
  {
    id: 'esign',
    icon: '✍️',
    title: 'E-Signature Platform',
    subtitle: 'Multi-Party Signing Orchestration',
    desc: 'Multi-party digital signature orchestration with sequential/parallel signing, AI-powered document analysis, and multi-channel delivery - competing directly with DocuSign and Adobe Sign.',
    highlights: ['Multi-party sequential + parallel signing', 'AI-driven document analysis & risk scoring', 'SMS + Email + WhatsApp signature delivery', '40% higher completion rate'],
    exploreMore: true,
    exploreLink: '/esign-platform',
    color: '#00ccaa',
  },
  {
    id: 'versioncontrol',
    icon: '📁',
    title: 'Document Version Control',
    subtitle: 'Immutable Audit & Rollback',
    desc: 'Complete version history for every contract. Every save creates an immutable record. Visual diff between any two versions. One-click rollback. Full audit trail for compliance.',
    highlights: ['Immutable version entries (MySQL metadata + MongoDB content)', 'Visual diff between any two versions', 'One-click rollback to any checkpoint', 'Comprehensive audit log for SOC2 compliance'],
    exploreMore: false,
    color: '#fb923c',
  },
  {
    id: 'salesflow',
    icon: '🏢',
    title: 'Sales Contract Workflow',
    subtitle: 'SFDC → Legitt → Sign',
    desc: 'Automated end-to-end sales contract workflow triggered from Salesforce Opportunities - through AI review, approval routing, and multi-party e-signature - completing the deal cycle.',
    highlights: ['Salesforce Opportunity triggers contract creation', 'AI clause review + pricing validation', 'MS Word Online negotiation loop', 'Auto-execute after final signature'],
    exploreMore: true,
    exploreLink: '/sales-contract-workflow',
    color: '#f472b6',
  },
];

export const approvalStates = [
  { state: 'Draft', color: '#777', next: 'Pending Approval' },
  { state: 'Pending Approval', color: '#f5a623', next: 'Under Review' },
  { state: 'Under Review', color: '#60a5fa', next: 'Approved / Rejected' },
  { state: 'Approved', color: '#4ade80', next: 'Signature Workflow' },
  { state: 'Rejected', color: '#ef4444', next: 'Back to Draft' },
  { state: 'Executed', color: '#a78bfa', next: null },
];

export const approvalRoutingRules = [
  { trigger: 'Contract Value', rule: '> $100K → VP approval required before legal sign-off' },
  { trigger: 'Contract Type', rule: 'NDA → Legal team only | Enterprise SaaS → Sales + Legal + Finance' },
  { trigger: 'Region', rule: 'UAE/EU contracts → Regional compliance officer added to chain' },
  { trigger: 'Risk Score', rule: 'AI risk score > 7/10 → Mandatory senior legal review' },
  { trigger: 'Counterparty', rule: 'Blacklisted counterparties → Automatic block + alert' },
];

export const sfIntegrationSteps = [
  { step: 1, label: 'Trigger', desc: 'Salesforce webhook fires on Opportunity stage change or Quote creation', color: '#60a5fa' },
  { step: 2, label: 'Transform', desc: 'Custom data transformation layer maps SF fields to Legitt contract schema', color: '#a78bfa' },
  { step: 3, label: 'Sync to Legitt', desc: 'Contract created/updated in Legitt with all Opportunity metadata populated', color: '#00ccaa' },
  { step: 4, label: 'Push Back', desc: 'Contract status (approved, signed, executed) pushed back to SF Opportunity', color: '#f5a623' },
  { step: 5, label: 'Reconcile', desc: 'Polling job reconciles any missed webhooks, ensuring eventual consistency', color: '#fb923c' },
];

export const msWordSteps = [
  { icon: '🔗', title: 'Office.js Embedding', desc: 'Office.js API loads MS Word Online in a new window. The user sees a native Word experience.' },
  { icon: '✏️', title: 'Full Drafting & Redlining in Word', desc: 'The entire contract drafting, editing, and redlining (track changes) workflow happens inside MS Word. All collaboration and negotiation occurs in Word. Word is the source of truth for this editing path.' },
  { icon: '✅', title: 'Approval via Legitt Workflow', desc: 'Once the draft is ready, the approver reviews it directly inside the embedded Word view. Approval/rejection actions are triggered via Legitt UI controls available in the Word Addin - the document stays in Word throughout.' },
  { icon: '📥', title: 'Approved DOCX → Read-Only View', desc: 'After final approval, Legitt fetches the approved DOCX from Office.js, converts it for display, and loads it in non-edit mode inside the platform. From here the document enters the signature workflow - no further editing is possible.' },
];

export const versionControlFeatures = [
  { icon: '📸', title: 'Immutable Snapshots', desc: 'Every save (manual or auto) writes an immutable version: MySQL stores metadata, MongoDB stores the full TipTap JSON blob. Nothing is ever overwritten.' },
  { icon: '🔍', title: 'Visual Diff', desc: 'Users can compare any two versions side-by-side. Insertions, deletions, and formatting changes are highlighted - built on TipTap\'s document diffing capabilities.' },
  { icon: '↩️', title: 'One-Click Rollback', desc: 'Restoring to a prior version is a single action. The selected version\'s TipTap JSON becomes the current editor state. A new version entry records the rollback event.' },
  { icon: '📋', title: 'Full Audit Trail', desc: 'Every action - who opened, edited, approved, signed - is logged immutably. Meets SOC2, GDPR, and HIPAA audit requirements. Exportable in CSV/JSON for compliance reporting.' },
];

export const complianceItems = [
  {
    cert: 'SOC 2 Type II',
    color: '#a78bfa',
    icon: '🛡️',
    controls: [
      'Comprehensive audit logging for all user and system events',
      'Encryption at rest (AES-256) and in transit (TLS 1.3)',
      'Role-based access control with principle of least privilege',
      'Automated backup and disaster recovery procedures',
      'Vulnerability scanning and penetration testing',
    ],
  },
  {
    cert: 'GDPR',
    color: '#60a5fa',
    icon: '🇪🇺',
    controls: [
      'Data residency: EU contracts stay within EU region (S3 + DB)',
      'Right to erasure: GDPR deletion workflows implemented',
      'Data portability: Full export of user data on request',
      'Consent tracking embedded in signature workflow',
      'Data Processing Agreements (DPA) for enterprise clients',
    ],
  },
  {
    cert: 'HIPAA',
    color: '#4ade80',
    icon: '🏥',
    controls: [
      'PHI identified and encrypted at field level',
      'Access restricted to authorized personnel only (RBAC)',
      'Audit logs for all PHI access and modifications',
      'BAA (Business Associate Agreement) support for healthcare clients',
      'Automatic session timeout for inactive healthcare users',
    ],
  },
];

export const aiFeatures = [
  {
    icon: '🤖',
    title: 'Contract Generation',
    model: 'OpenAI GPT (fine-tuned)',
    desc: 'AI generates contract first drafts from metadata (party names, values, terms) using fine-tuned OpenAI models trained on legal contract templates.',
    color: '#a78bfa',
  },
  {
    icon: '⚖️',
    title: 'Clause Risk Analysis',
    model: 'Gemini (custom trained)',
    desc: 'Custom-trained Gemini model identifies risky clauses, flags missing mandatory terms, and assigns a risk score (1–10) to each contract section.',
    color: '#60a5fa',
  },
  {
    icon: '📊',
    title: 'Contract Review',
    model: 'Hybrid (OpenAI + Gemini)',
    desc: 'Automated contract review pipeline extracts key metadata (parties, dates, values, obligations), summarizes complex clauses, and flags compliance issues.',
    color: '#00ccaa',
  },
  {
    icon: '💬',
    title: 'AI Chat Agent',
    model: 'OpenAI GPT (fine-tuned)',
    desc: 'Conversational AI agent that can answer questions about any contract, draft specific clauses on request, and suggest alternative wording for flagged terms.',
    color: '#f5a623',
  },
];

export const enterpriseClients = [
  { name: 'Cloud Software Group', logo: csgLogo, type: 'image' },
  { name: 'RateGain', logo: rategainLogo, type: 'svg' },
  { name: 'STL', logo: stlLogo, type: 'image' },
  { name: 'Amma', logo: ammaLogo, type: 'image' },
];

export const keyMetrics = [
  { value: '1K+', label: 'Contracts processed daily', sub: 'across all enterprise clients', color: '#a78bfa' },
  { value: '<60s', label: 'AI contract generation time', sub: 'from metadata to first draft', color: '#60a5fa' },
  { value: '98%+', label: 'Format conversion fidelity', sub: 'DOCX → TipTap → PDF roundtrip', color: '#00ccaa' },
  { value: '99.9%', label: 'Platform uptime', sub: 'multi-region redundancy', color: '#f5a623' },
  { value: '4', label: 'Global regions deployed', sub: 'USA, UAE, Europe, India', color: '#fb923c' },
  { value: '<200ms', label: 'API response time', sub: 'critical-path endpoints', color: '#f472b6' },
];

export const businessImpact = [
  'Reduced contract cycle time from weeks to hours for enterprise clients',
  'Eliminated manual legal data entry through AI-powered auto-population',
  'Enabled Fortune 500 sales teams to generate contracts without legal bottlenecks',
  'Accelerated deal closure - contracting no longer the critical path',
  'Delivered multi-region compliance (SOC2, GDPR, HIPAA) under one platform',
];

export const whatWorked = [
  'TipTap as the editor foundation - saved 4–6 months vs. building from raw ProseMirror',
  'Dual-database strategy - MySQL + MongoDB each operate at peak efficiency for their data type',
  'Redis as the write buffer between keystrokes and the database - eliminated DB overload',
  'Single-editor collaboration model - zero merge conflicts, clear audit trail',
  'Webhook + polling hybrid for Salesforce - caught missed events, ensured eventual consistency',
];

export const whatIdoDifferently = [
  'Start with virtualized rendering for large documents from day 1 - retrofitting is expensive',
  'Invest in comprehensive visual regression tests for format conversion much earlier',
  'Consider CRDT (Yjs) for true simultaneous editing if business requirements allow',
  'Build a more robust dead-letter queue for failed Salesforce webhook events from the start',
  'Establish a formal feature flag system earlier to safely roll out enterprise-specific features',
];

export const futureRoadmap = [
  { title: 'CRDT Multi-Cursor Editing', desc: 'True simultaneous editing via Yjs/Automerge for teams that need real-time co-authoring' },
  { title: 'Advanced AI Agents', desc: 'Autonomous contract negotiation agents that can propose and counter-propose clause changes' },
  { title: '10× Scale Architecture', desc: 'Migrate to Kubernetes for auto-scaling, handle 10K+ contracts per day with horizontal sharding' },
  { title: 'ERP Integration Expansion', desc: 'SAP, Oracle, and NetSuite connectors - beyond Salesforce - for full enterprise ecosystem' },
  { title: 'Proactive Obligation Tracking', desc: 'Post-execution monitoring of contract obligations with automated reminders and breach alerts' },
  { title: 'White-Label Deployments', desc: 'Full white-label support for enterprise clients who want the platform under their own domain' },
];

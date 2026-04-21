import imgInitiate from '../assets/images/initiate-from-salesforce.webp';
import imgPricing from '../assets/images/pricing-engine-for-products.webp';
import imgAI from '../assets/images/ai-analysis-for-approval.webp';
import imgStatus from '../assets/images/agreement-status-tracker.webp';
import imgSigned from '../assets/images/signed-agreement-with-closed-sfdc-opportunity.webp';

import {
  Clock,
  TrendingUp,
  FileText,
  BarChart3,
  Globe,
  Bot,
  PenTool,
  Database,
  Shield,
  Users,
} from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────────────────────── */
export const metrics = [
  {
    icon: Clock,
    value: '1–2 days',
    label: 'Full Document Lifecycle',
    sub: 'Down from weeks or months',
    color: 'text-accent',
  },
  {
    icon: FileText,
    value: '100+',
    label: 'Agreements / Month',
    sub: 'Consistently processed at scale',
    color: 'text-brand-light-blue',
  },
  {
    icon: TrendingUp,
    value: '3K+',
    label: 'Total Agreements Processed',
    sub: 'Since platform went live',
    color: 'text-brand-pink',
  },
  {
    icon: BarChart3,
    value: '6 months',
    label: 'Phase 1 Go-Live',
    sub: 'First enterprise deployment',
    color: 'text-amber',
  },
];

export const techStack = [
  { category: 'Frontend', items: ['React.js', 'JavaScript', 'TailwindCSS'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'MySQL', 'MongoDB'] },
  { category: 'Cloud & Storage', items: ['AWS (EC2, S3)', 'SharePoint', 'Microsoft 365'] },
  { category: 'Integrations', items: ['Salesforce REST API', 'MS Graph API', 'OpenAI GPT'] },
  { category: 'E-Signature', items: ['Legitt e-Sign', 'Signature Blocks Engine'] },
  { category: 'AI Engine', items: ['Fine-Tuned OpenAI Models', 'Clause Analysis', 'Pricing Validation'] },
];

/* ─── Types ─────────────────────────────────────────────────────────────────── */
export type FlowSide = 'sfdc' | 'legitt';
export interface FlowStepData {
  id: number;
  phase: string;
  phaseColor: string;
  side: FlowSide;
  title: string;
  desc: string;
  dataFlow: string;
  sfdc: string[];
}

// 15-step flow: Legitt ↔ SFDC
export const flowSteps: FlowStepData[] = [
  {
    id: 1,
    phase: 'Opportunity & Initiation',
    phaseColor: '#00ff88',
    side: 'sfdc',
    title: 'Opportunity Created in SFDC',
    desc: 'Sales member creates an Opportunity in Salesforce with Account info, Products (from Pricebook), and customer region. This becomes the single source of truth for the deal and triggers the entire downstream flow.',
    dataFlow: 'SFDC → Legitt: Opportunity ID, Account ID, Product list, Region',
    sfdc: ['Opportunity', 'Account', 'Pricebook', 'Product'],
  },
  {
    id: 2,
    phase: 'Opportunity & Initiation',
    phaseColor: '#00ff88',
    side: 'legitt',
    title: 'Legitt Launched - Pricing & Template Selection',
    desc: 'Sales member clicks "Generate Proposal" on SFDC. Legitt opens in-context via OAuth 2.0, fetches deal data from SFDC REST API, and presents the product-specific pricing calculator. Member answers region, modules, seat count, and SLA questions to compute a final price, then selects Proposal and Agreement templates along with additional clauses and marketing collateral.',
    dataFlow: 'SFDC REST API → Legitt: Deal data fetched · Legitt: Price computed + Templates selected',
    sfdc: ['Opportunity', 'Account', 'Contact'],
  },
  {
    id: 3,
    phase: 'Proposal Creation',
    phaseColor: '#a78bfa',
    side: 'legitt',
    title: 'Draft Proposal Generated + SFDC Quote Created',
    desc: 'Legitt auto-populates the selected proposal template with customer info, pricing, and collateral. The draft is stored on the client SharePoint via MS Graph API. Simultaneously, a Quote record is created on SFDC linked to the Opportunity to begin tracking deal progress.',
    dataFlow: 'Legitt → SharePoint: Draft Proposal · Legitt → SFDC: Quote created (linked to Opportunity)',
    sfdc: ['Quote', 'Opportunity'],
  },
  {
    id: 4,
    phase: 'Proposal Creation',
    phaseColor: '#a78bfa',
    side: 'legitt',
    title: 'Proposal Edited in MS Word Online',
    desc: 'Sales member opens the draft in Microsoft Word Online (SharePoint-hosted). MS Graph API integration enables live co-editing. All changes are saved back to SharePoint in real time without leaving the Legitt workflow.',
    dataFlow: 'Legitt → MS Graph API → SharePoint: Real-time document edits synced',
    sfdc: [],
  },
  {
    id: 5,
    phase: 'AI Review - Proposal',
    phaseColor: '#f472b6',
    side: 'legitt',
    title: 'AI Engine Analyzes Proposal + Finance Approval Routing',
    desc: 'When the member initiates sharing, the fine-tuned OpenAI model validates pricing against org financial rules, checks discount thresholds, and reviews commercial terms. If deltas are detected, Finance approvers are auto-assigned and notified. If all clear, the document proceeds without any manual intervention.',
    dataFlow: 'Legitt → OpenAI: Proposal + org rules → Delta report · Legitt: Finance approvers auto-assigned if required',
    sfdc: [],
  },
  {
    id: 6,
    phase: 'AI Review - Proposal',
    phaseColor: '#f472b6',
    side: 'sfdc',
    title: 'Approved Proposal Synced to SFDC',
    desc: 'Once all required Finance approvers sign off, Legitt pushes the finalized pricing details and the approved proposal document to both the SFDC Opportunity and the linked Quote record.',
    dataFlow: 'Legitt → SFDC: Quote (pricing updated), Opportunity (approved proposal attached)',
    sfdc: ['Opportunity', 'Quote'],
  },
  {
    id: 7,
    phase: 'Customer Review - Proposal',
    phaseColor: '#34d399',
    side: 'sfdc',
    title: 'Proposal Sent to Customer → Accepted → Quote Closed',
    desc: 'Sales member sends the approved proposal via Legitt secure customer portal. Once the customer accepts the pricing terms, Legitt uploads the accepted proposal to the SFDC Opportunity and marks the Proposal Quote as Closed/Accepted. The deal then moves to the Agreement phase.',
    dataFlow: 'Legitt → Customer: Secure proposal link · Legitt → SFDC: Accepted proposal uploaded, Quote = Closed',
    sfdc: ['Opportunity', 'Quote'],
  },
  {
    id: 8,
    phase: 'Agreement Creation',
    phaseColor: '#fb923c',
    side: 'sfdc',
    title: 'Draft Agreement Generated + SFDC Quote Created',
    desc: 'Legitt pulls approved proposal pricing and accepted terms, then merges them into the selected Agreement template - auto-populating all commercial clauses, SLAs, pricing schedules, and legal terms. Simultaneously, a separate Quote record is created on SFDC for the Agreement to track its lifecycle independently.',
    dataFlow: 'Legitt: Proposal data → Agreement template → Draft on SharePoint · Legitt → SFDC: Agreement Quote created',
    sfdc: ['Quote', 'Opportunity'],
  },
  {
    id: 9,
    phase: 'Agreement Creation',
    phaseColor: '#fb923c',
    side: 'legitt',
    title: 'Agreement Edited in MS Word Online',
    desc: 'Sales member reviews and edits the agreement draft in Word Online. Legal or commercial changes can be incorporated before sending. All edits sync to SharePoint in real time via MS Graph API.',
    dataFlow: 'Legitt → MS Graph → SharePoint: Agreement edits persisted in real time',
    sfdc: [],
  },
  {
    id: 10,
    phase: 'AI Review - Agreement',
    phaseColor: '#f59e0b',
    side: 'legitt',
    title: 'AI Engine Analyzes Agreement + Multi-Team Approval Routing',
    desc: 'When the member initiates customer send, the fine-tuned AI engine runs a comprehensive analysis - checking pricing against the approved proposal, validating legal clauses against org policies, and flagging implementation terms. Based on detected deltas: Finance approvers added for pricing deviations, Legal approvers for clause violations, and Implementation team for SLA/scope issues. All three tracks run in parallel.',
    dataFlow: 'Legitt → OpenAI: Agreement + rules → Delta report · Legitt: Parallel approval routing (Finance / Legal / Implementation)',
    sfdc: [],
  },
  {
    id: 11,
    phase: 'AI Review - Agreement',
    phaseColor: '#f59e0b',
    side: 'sfdc',
    title: 'Approved Agreement Pushed to SFDC',
    desc: 'Once all teams approve (Finance, Legal, Implementation), Legitt pushes the approved agreement document to the SFDC Opportunity with updated pricing, clause details, and final negotiated terms.',
    dataFlow: 'Legitt → SFDC: Approved agreement file + pricing fields updated on Opportunity',
    sfdc: ['Opportunity', 'Quote'],
  },
  {
    id: 12,
    phase: 'E-Signature Flow',
    phaseColor: '#e879f9',
    side: 'legitt',
    title: 'Signature Blocks Added + Agreement Dispatched to Signatories',
    desc: 'The Legitt e-Sign engine detects placeholder tags and auto-inserts signature blocks at the correct document locations. The agreement is then dispatched sequentially - Customer Signatory first, then Internal Organizational Signatories - each receiving a secure signing link via the Legitt e-Sign platform.',
    dataFlow: 'Legitt Sign Engine: Signature blocks inserted · Legitt Sign → Signatory emails: Secure signing links',
    sfdc: [],
  },
  {
    id: 13,
    phase: 'E-Signature Flow',
    phaseColor: '#e879f9',
    side: 'legitt',
    title: 'All Parties Sign Digitally',
    desc: 'Each signatory reviews and signs electronically via the Legitt e-Sign application. Legitt tracks per-signatory signing status, sends automated reminders, validates each signature in real time, and maintains a tamper-proof audit trail throughout.',
    dataFlow: 'Legitt: Signing events captured → Audit trail logged per signatory in real time',
    sfdc: [],
  },
  {
    id: 14,
    phase: 'Deal Close',
    phaseColor: '#00ff88',
    side: 'sfdc',
    title: 'Signed Agreement Uploaded to SFDC + Post-Close Checks Triggered',
    desc: 'Once all signatures are collected, Legitt uploads the fully executed agreement to the SFDC Opportunity and updates all relevant status fields. SFDC automation then fires internal validation checks - provisioning triggers, billing activation, and revenue recognition flags - based on the signed agreement data pushed by Legitt.',
    dataFlow: 'Legitt → SFDC: Signed agreement attached to Opportunity · SFDC: Internal flows & triggers fire',
    sfdc: ['Opportunity', 'Custom Objects'],
  },
  {
    id: 15,
    phase: 'Deal Close',
    phaseColor: '#00ff88',
    side: 'sfdc',
    title: 'Agreement Quote Closed · Opportunity = Closed Won',
    desc: 'The Agreement Quote is marked as Closed/Completed and the SFDC Opportunity stage is updated to "Closed Won" - completing the full end-to-end contract lifecycle, from Opportunity creation in SFDC to fully executed, signed agreement.',
    dataFlow: 'Legitt → SFDC: Quote status = Closed, Opportunity stage = Closed Won',
    sfdc: ['Opportunity', 'Quote'],
  },
];

export const phases = [
  { name: 'Opportunity & Initiation', color: '#00ff88', steps: [1, 2] },
  { name: 'Proposal Creation', color: '#a78bfa', steps: [3, 4] },
  { name: 'AI Review - Proposal', color: '#f472b6', steps: [5, 6] },
  { name: 'Customer Review - Proposal', color: '#34d399', steps: [7] },
  { name: 'Agreement Creation', color: '#fb923c', steps: [8, 9] },
  { name: 'AI Review - Agreement', color: '#f59e0b', steps: [10, 11] },
  { name: 'E-Signature Flow', color: '#e879f9', steps: [12, 13] },
  { name: 'Deal Close', color: '#00ff88', steps: [14, 15] },
];


export const screenshots = [
  {
    src: imgInitiate,
    title: 'Initiate from Salesforce',
    desc: 'Sales member clicks "Generate Proposal" directly from the SFDC Opportunity. Legitt opens in-context and fetches all deal data via REST API.',
  },
  {
    src: imgPricing,
    title: 'Pricing Engine for Products',
    desc: 'Product-specific calculator with region, clauses, and template selection. Live price gauge updates as sales member fills in deal parameters.',
  },
  {
    src: imgAI,
    title: 'AI Engine Analysis',
    desc: 'Fine-tuned OpenAI model flags pricing deltas and clause violations. Finance and Legal approvers are auto-assigned when deviations are detected.',
  },
  {
    src: imgStatus,
    title: 'Real-Time Status Tracker',
    desc: 'Legitt\'s status tracker sits alongside MS Word Online. Progress syncs between the editor and SFDC in real time - no manual updates needed.',
  },
  {
    src: imgSigned,
    title: 'Closed Won - End State',
    desc: 'Signed agreement pushed back to SFDC. Customer and Internal signatories complete. Opportunity marked Closed Won automatically.',
  },
];

export const challenges = [
  {
    icon: Globe,
    title: 'Bidirectional SFDC Sync',
    desc: 'Designed a robust sync layer using SFDC REST API with OAuth 2.0 Client Credentials. Handled field mapping across Opportunity, Quote, Pricebook, Account, and custom objects without data conflicts.',
  },
  {
    icon: Bot,
    title: 'AI Fine-Tuning for Domain Accuracy',
    desc: 'Fine-tuned OpenAI models on organization-specific contract data to ensure clause analysis was context-aware - not generic. Designed the prompting architecture and training data pipeline.',
  },
  {
    icon: PenTool,
    title: 'Legitt e-Sign Engine',
    desc: 'Built the Legitt e-Sign application from scratch - signature block placement, multi-party sequencing, audit trails, and tamper-proof document sealing without depending on DocuSign or Adobe.',
  },
  {
    icon: Database,
    title: 'MS 365 + SharePoint Integration',
    desc: 'Integrated Microsoft Graph API to create, edit, and version documents on the client\'s SharePoint. Legitt acts as the orchestration layer while Word Online handles rich document editing.',
  },
  {
    icon: Shield,
    title: 'Multi-Team Parallel Approvals',
    desc: 'Designed an approval routing engine that independently manages Finance, Legal, and Implementation review tracks in parallel, with role-based visibility and conflict-free merge of outcomes.',
  },
  {
    icon: Users,
    title: 'Enterprise-Scale Reliability',
    desc: 'Built for a billion-dollar global enterprise with teams across USA, UAE, Europe, and India. Ensured cross-timezone notification delivery, document availability, and audit logging at scale.',
  },
];

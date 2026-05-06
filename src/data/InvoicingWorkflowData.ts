import {
  Clock,
  TrendingUp,
  FileText,
  BarChart3,
  RefreshCw,
  Layers,
  Zap,
  Database,
  Shield,
  Users,
  Settings,
  CheckCircle,
} from 'lucide-react';

/* ─── Metrics ───────────────────────────────────────────────────────────────── */
export const metrics = [
  {
    icon: Clock,
    value: '15 min',
    label: 'Invoice Generation Time',
    sub: 'Down from 1–2 weeks of manual work',
    color: 'text-accent',
  },
  {
    icon: FileText,
    value: '2–3K',
    label: 'Contracts Processed Daily',
    sub: 'Average daily throughput',
    color: 'text-brand-light-blue',
  },
  {
    icon: TrendingUp,
    value: '100%',
    label: 'Process Automation',
    sub: 'Zero manual extraction needed',
    color: 'text-brand-pink',
  },
  {
    icon: BarChart3,
    value: '1 Month',
    label: 'MVP Delivery',
    sub: 'First version shipped solo',
    color: 'text-amber',
  },
];

/* ─── Invoice Types ─────────────────────────────────────────────────────────── */
export interface InvoiceType {
  id: string;
  icon: typeof Zap;
  color: string;
  bgColor: string;
  borderColor: string;
  title: string;
  subtitle: string;
  description: string;
  examples: string[];
  ruleHighlight: string;
}

export const invoiceTypes: InvoiceType[] = [
  {
    id: 'one-time',
    icon: Zap,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    borderColor: 'border-accent/30',
    title: 'One-Time Invoice',
    subtitle: 'Single Charge · Milestone Payment',
    description:
      'Generated once for a specific event - typically project kickoff fees, onboarding charges, or setup costs. The engine identifies these contracts by the billing schedule type and generates the invoice on the contract start date.',
    examples: ['Project Kickoff Fee', 'Setup & Onboarding Fee', 'License Activation Charge'],
    ruleHighlight: 'Rule: Trigger once on contract activation date',
  },
  {
    id: 'recurring',
    icon: RefreshCw,
    color: 'text-brand-light-blue',
    bgColor: 'bg-brand-light-blue/10',
    borderColor: 'border-brand-light-blue/30',
    title: 'Recurring Invoice',
    subtitle: 'Periodic Billing · Subscription',
    description:
      'Auto-generated at regular intervals - monthly, quarterly, half-yearly, or yearly - based on the subscription cycle defined in the Salesforce contract. The engine calculates the correct billing period and amount on each run.',
    examples: ['Monthly SaaS Subscription', 'Quarterly Support Retainer', 'Annual License Renewal'],
    ruleHighlight: 'Rule: Trigger every N days/months based on contract cycle',
  },
  {
    id: 'usage-based',
    icon: Layers,
    color: 'text-amber',
    bgColor: 'bg-amber/10',
    borderColor: 'border-amber/30',
    title: 'Usage-Based Invoice',
    subtitle: 'Consumption Billing · Tiered Pricing',
    description:
      'Calculated from actual consumption data. Supports both fixed per-unit pricing and slab/tier-based pricing where the rate changes at defined usage thresholds. The engine resolves the applicable tier and computes the charge accurately.',
    examples: ['API Calls (per 1K requests)', 'Tier 1: 0–10K units @ ₹5/unit', 'Tier 2: 10K+ units @ ₹3/unit'],
    ruleHighlight: 'Rule: Apply tier logic → resolve unit price → calculate total',
  },
];

/* ─── Workflow Flow Steps ────────────────────────────────────────────────────── */
export interface WorkflowStep {
  id: number;
  phase: string;
  phaseColor: string;
  actor: 'sfdc' | 'system' | 'user';
  title: string;
  desc: string;
  detail: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    phase: 'Data Sync',
    phaseColor: '#00ff88',
    actor: 'sfdc',
    title: 'Daily Salesforce Sync Job Triggers',
    desc: 'Scheduled cron job runs daily and fetches all active contracts from Salesforce via REST API.',
    detail:
      'The sync job authenticates with SFDC using OAuth 2.0 and bulk-fetches Contract and Order objects. It extracts billing schedule, product details, contract amounts, customer info, and invoice-related custom fields - storing everything locally in MongoDB for engine processing.',
  },
  {
    id: 2,
    phase: 'Data Sync',
    phaseColor: '#00ff88',
    actor: 'system',
    title: 'Contract Data Stored & Normalized',
    desc: 'Raw SFDC contract objects are parsed, normalized, and stored in our MongoDB database.',
    detail:
      'The engine maps SFDC field names to our internal schema, resolves linked objects (Accounts, Products, Pricebooks), and flags contracts whose next invoice date falls within the current processing window. Data inconsistencies are logged and skipped safely.',
  },
  {
    id: 3,
    phase: 'Invoice Engine',
    phaseColor: '#a78bfa',
    actor: 'system',
    title: 'Invoice Engine Analyzes Each Contract',
    desc: 'Rule-based engine classifies each contract and runs the appropriate invoice generation logic.',
    detail:
      'The engine reads the billing_type field on each contract and routes it to the correct handler: OneTimeHandler, RecurringHandler, or UsageHandler. Each handler applies its own rule set - date checks, usage data lookups, tier resolution - before generating the invoice payload.',
  },
  {
    id: 4,
    phase: 'Invoice Engine',
    phaseColor: '#a78bfa',
    actor: 'system',
    title: 'Invoice Records Generated',
    desc: 'Invoices are created for all eligible contracts in a single batch - with amounts, line items, and periods.',
    detail:
      'For recurring invoices: billing period start/end dates computed. For usage-based: tier logic applied to consumption data pulled from the usage service. All invoices are created with status "Draft" and linked to their parent SFDC contract ID for bidirectional traceability.',
  },
  {
    id: 5,
    phase: 'Review & Approval',
    phaseColor: '#f472b6',
    actor: 'user',
    title: 'Finance Team Reviews Generated Invoices',
    desc: 'Finance team members log in, view all Draft invoices for the current cycle, and validate them.',
    detail:
      'The dashboard groups invoices by type and customer. Finance members can drill into each invoice, see the breakdown of line items, and compare amounts with the original contract. If everything looks correct, they approve it. If not, they reject it with a note for the preparer to fix.',
  },
  {
    id: 6,
    phase: 'Review & Approval',
    phaseColor: '#f472b6',
    actor: 'user',
    title: 'Manager Approval (If Required)',
    desc: 'Invoices above a threshold or flagged for review are escalated to the manager for sign-off.',
    detail:
      'High-value invoices or those with deviations automatically route to the relevant manager. The manager sees a summary view and either approves or sends back for revision. The preparer is notified and can implement changes and resubmit for review.',
  },
  {
    id: 7,
    phase: 'SFDC Push',
    phaseColor: '#fb923c',
    actor: 'system',
    title: 'Approved Invoices Pushed Back to Salesforce',
    desc: 'Once approved, the system pushes invoice data back to SFDC to create official invoice records.',
    detail:
      'The export job reads all Approved invoices and calls SFDC REST API to create Invoice__c (custom object) records linked to the originating Contract. The push includes all line items, amounts, billing periods, and customer details - making SFDC the source for customer-facing invoice delivery.',
  },
  {
    id: 8,
    phase: 'SFDC Push',
    phaseColor: '#fb923c',
    actor: 'sfdc',
    title: 'Salesforce Sends Invoices to Customers',
    desc: 'SFDC triggers its own automation to generate and dispatch invoices to customers for payment.',
    detail:
      'SFDC automation fires on Invoice__c creation - generating PDFs, sending emails to customer contacts, and activating payment collection workflows. The customer receives the invoice in the same SFDC-native format they expect, while our platform handles all the intelligence behind the scenes.',
  },
  {
    id: 9,
    phase: 'Payment Tracking',
    phaseColor: '#34d399',
    actor: 'sfdc',
    title: 'Payment Received · SFDC Status Updated',
    desc: 'Once the customer pays, SFDC updates the invoice payment status and notifies our system.',
    detail:
      'Payment events in SFDC trigger a webhook or the next scheduled sync picks up the updated status. Our system marks the corresponding invoice record as Paid and updates the parent contract\'s payment state - completing the full lifecycle from contract to cash.',
  },
];

export const phases = [
  { name: 'Data Sync', color: '#00ff88', steps: [1, 2] },
  { name: 'Invoice Engine', color: '#a78bfa', steps: [3, 4] },
  { name: 'Review & Approval', color: '#f472b6', steps: [5, 6] },
  { name: 'SFDC Push', color: '#fb923c', steps: [7, 8] },
  { name: 'Payment Tracking', color: '#34d399', steps: [9] },
];

/* ─── Tech Stack ─────────────────────────────────────────────────────────────── */
export const techStack = [
  { category: 'Frontend', items: ['React.js', 'JavaScript', 'TailwindCSS'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB'] },
  { category: 'Cloud & Infrastructure', items: ['AWS EC2', 'AWS S3', 'AWS CloudWatch'] },
  { category: 'Integration', items: ['Salesforce REST API', 'OAuth 2.0', 'Scheduled Cron Jobs'] },
  { category: 'Invoice Engine', items: ['Rule-Based Engine', 'Tier/Slab Logic', 'Batch Processing'] },
  { category: 'Workflow', items: ['Approval Chains', 'Status Management', 'Notification System'] },
];

/* ─── Key Challenges ─────────────────────────────────────────────────────────── */
export const challenges = [
  {
    icon: Settings,
    title: 'Rule-Based Invoice Engine',
    desc: 'Designed a flexible rule engine from scratch that routes each of the 2–3K daily contracts to the correct handler - one-time, recurring, or usage-based - and applies the right date, tier, and amount logic without overlap or double-billing.',
  },
  {
    icon: Layers,
    title: 'Slab/Tier Pricing Resolution',
    desc: 'Implemented a generalized tier resolver for usage-based invoices that handles any number of pricing slabs, resolves the correct per-unit rate at each threshold, and computes the final amount accurately - even across partial tier boundaries.',
  },
  {
    icon: RefreshCw,
    title: 'Salesforce Bidirectional Sync',
    desc: 'Built a reliable daily sync pipeline that pulls 2–3K contracts from SFDC REST API, normalizes and stores them locally, then pushes approved invoices back - all without data conflicts or duplicate records.',
  },
  {
    icon: Database,
    title: 'Batch Processing at Scale',
    desc: 'Architected the engine to process thousands of contracts in a single daily run using batched queries, avoiding MongoDB timeouts and API rate limits on the SFDC side - keeping total processing time under 15 minutes.',
  },
  {
    icon: Shield,
    title: 'Approval Chain & Revision Loop',
    desc: 'Designed a multi-stage approval workflow where invoices can be rejected and resubmitted without losing state. Each revision cycle is tracked so the finance team always has a clear audit trail of who approved or rejected what.',
  },
  {
    icon: Users,
    title: 'Solo End-to-End Ownership',
    desc: 'Designed, architected, built, and delivered the entire system solo in 1 month - from SFDC sync and invoice engine to approval UI and SFDC push. Took full ownership of every layer of the product.',
  },
];

/* ─── Before / After Comparison ─────────────────────────────────────────────── */
export const beforeAfter = {
  before: [
    'Finance team manually downloaded contract data from Salesforce to Excel',
    'Each team member individually identified which invoices were due that month',
    'Invoice amounts calculated manually - highly error-prone for usage-based billing',
    'Physical / email-based approval chain with no tracking or visibility',
    'Entire cycle took 1–2 weeks per billing run with frequent errors',
    'No audit trail - hard to trace who approved or why amounts changed',
  ],
  after: [
    'Automated daily job fetches all contracts from Salesforce - zero manual exports',
    'Engine auto-classifies and generates all due invoices in minutes',
    'Rule-based tier logic eliminates calculation errors on usage-based invoices',
    'In-app approval workflow with rejection, revision, and audit trail',
    'Full billing cycle completed in 10–15 minutes from data sync to approval',
    'Complete history of every invoice state change - traceable and auditable',
  ],
};

/* ─── SFDC Objects ───────────────────────────────────────────────────────────── */
export const sfdcObjects = [
  { name: 'Contract', desc: 'Billing schedule & terms', fields: 'BillingType, StartDate, Amount' },
  { name: 'Order', desc: 'Ordered products & qty', fields: 'Products, Quantity, Price' },
  { name: 'Account', desc: 'Customer information', fields: 'Name, BillingAddress, Contact' },
  { name: 'Product', desc: 'What is being billed', fields: 'Name, Code, UnitPrice' },
  { name: 'Invoice__c', desc: 'Custom - our invoice record', fields: 'Amount, Period, Status' },
  { name: 'Usage__c', desc: 'Custom - consumption data', fields: 'Units, Period, UsageType' },
];

export { CheckCircle };

import { useEffect, useRef, useState } from 'react';
import { CustomCursor, ScrollProgress } from '../components/Cursor';
import rategainLogo from '../assets/images/rategain-logo.svg';
import legittLogo from '../assets/images/legitt-ai-logo.webp';
import integrationSfdc from '../assets/images/salesforce-integration.webp';
import integrationWord from '../assets/images/microsoft-word.webp';
import integrationOutlook from '../assets/images/outlook.jpg';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Zap,
  Clock,
  ArrowRight,
  ChevronDown,
  Users,
  Database,
  CheckCircle,
} from 'lucide-react';

import {
  metrics,
  techStack,
  flowSteps,
  phases,
  screenshots,
  challenges,
} from '../data/SalesContractWorkflowData';


/* ─── Sub-components ───────────────────────────────────────────────────────── */
function PhaseTag({ name, color }: { name: string; color: string }) {
  return (
    <span
      className="inline-flex items-center text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded"
      style={{ color, background: `${color}18`, border: `1px solid ${color}33` }}
    >
      {name}
    </span>
  );
}

function SideTag({ side }: { side: 'sfdc' | 'legitt' }) {
  return side === 'sfdc' ? (
    <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#009EDB]/10 border border-[#009EDB]/30 text-[#009EDB]">
      SFDC
    </span>
  ) : (
    <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-accent/10 border border-accent/30 text-accent">
      Legitt
    </span>
  );
}

function FlowStep({ step, index }: { step: typeof flowSteps[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div className={`flex items-start gap-6 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Content card */}
      <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'}`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full glass-card rounded-xl p-5 text-left group hover:border-white/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.04)]"
          style={{ textAlign: isLeft ? 'left' : 'right' }}
        >
          <div className={`flex items-center gap-2 mb-2 ${isLeft ? '' : 'justify-end'}`}>
            <SideTag side={step.side} />
            <PhaseTag name={step.phase} color={step.phaseColor} />
          </div>
          <div className={`flex items-start justify-between gap-3 ${isLeft ? '' : 'flex-row-reverse'}`}>
            <div>
              <h3 className="text-subtitle font-bold text-text-main group-hover:text-accent transition-colors">
                {step.title}
              </h3>
            </div>
            <ChevronDown
              size={16}
              className={`text-text-dim mt-1 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            />
          </div>

          {/* Expanded */}
          <div
            className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <p className="text-description text-text-dim leading-relaxed mb-3">{step.desc}</p>
            <div
              className={`flex items-start gap-2 p-3 rounded-lg border border-border bg-surface/50 ${isLeft ? '' : 'flex-row-reverse text-right'}`}
            >
              <ArrowRight size={14} className="text-accent flex-shrink-0 mt-0.5" />
              <span className="text-[12px] text-text-dim font-mono">{step.dataFlow}</span>
            </div>
            {step.sfdc.length > 0 && (
              <div className={`flex gap-1.5 mt-3 flex-wrap ${isLeft ? '' : 'justify-end'}`}>
                {step.sfdc.map((obj) => (
                  <span key={obj} className="text-[10px] px-2 py-0.5 rounded bg-[#009EDB]/10 border border-[#009EDB]/20 text-[#009EDB] font-mono">
                    {obj}
                  </span>
                ))}
              </div>
            )}
          </div>
        </button>
      </div>

      {/* Center spine */}
      <div className="flex flex-col items-center flex-shrink-0 w-12">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300 z-10"
          style={{
            borderColor: step.phaseColor,
            background: `${step.phaseColor}15`,
            color: step.phaseColor,
            boxShadow: `0 0 12px ${step.phaseColor}30`,
          }}
        >
          {step.id}
        </div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function SalesContractWorkflow() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Sales Contract Workflow | Rohit Garg';
  }, []);

  // Reveal animation — uses MutationObserver so dynamically-rendered elements are caught too
  useEffect(() => {
    const observeEl = (el: Element, io: IntersectionObserver) => {
      if (!el.classList.contains('visible')) io.observe(el);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -20px 0px' }
    );

    // Observe existing elements
    document.querySelectorAll('.reveal, .reveal-left').forEach((el) => observeEl(el, io));

    // Watch for new elements added by React renders (.map() calls)
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
          const el = node as Element;
          if (el.matches?.('.reveal, .reveal-left')) observeEl(el, io);
          el.querySelectorAll?.('.reveal, .reveal-left').forEach((child) => observeEl(child, io));
        });
      });
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);


  const filteredSteps =
    activePhase ? flowSteps.filter((s) => s.phase === activePhase) : flowSteps;

  return (
    <div className="relative bg-primary text-text-main min-h-screen">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Scroll progress */}
      <ScrollProgress />

      {/* ── Back nav ── */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 glass-card px-4 py-2.5 rounded-full text-description text-text-dim hover:text-accent border-border/50 transition-all duration-300 hover:border-accent/30 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">Back to Portfolio</span>
        </button>
      </div>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
      >
        {/* Radial glow */}
        <div className="absolute inset-0 mesh-gradient pointer-events-none" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.03] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00ff88, transparent 70%)' }}
        />

        <div className="section-container pt-32 pb-24 text-center relative z-10">
          {/* Label */}
          <div className="animate-fade-in flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-12 bg-accent/40" />
            <span className="text-description tracking-widest uppercase text-accent">Case Study</span>
            <span className="h-px w-12 bg-accent/40" />
          </div>

          {/* Title */}
          <h1 className="animate-fade-up text-[clamp(2rem,6vw,4.5rem)] font-black leading-[1.1] tracking-tight mb-6">
            End-to-End{' '}
            <span className="accent-gradient">Sales Contract</span>
            <br />
            Automation Workflow
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up text-subtitle text-text-dim max-w-3xl mx-auto leading-relaxed mb-10" style={{ animationDelay: '0.1s' }}>
            I designed and led the engineering of a fully automated contract lifecycle platform — integrating{' '}
            <span className="text-text-main font-semibold">Salesforce CRM</span>,{' '}
            <span className="text-text-main font-semibold">Microsoft 365</span>,{' '}
            <span className="text-text-main font-semibold">OpenAI</span>, and the{' '}
            <span className="text-text-main font-semibold">Legitt e-Sign engine</span> — for a Fortune 500 enterprise client with global operations across USA, UAE, Europe, and India.
          </p>

          {/* Tags */}
          <div className="animate-fade-up flex flex-wrap justify-center gap-2 mb-12" style={{ animationDelay: '0.2s' }}>
            {['MERN Stack', 'Salesforce REST API', 'OpenAI', 'Microsoft 365', 'SharePoint', 'Legitt e-Sign', 'MySQL', 'AWS'].map((tag) => (
              <span key={tag} className="text-[12px] font-medium px-3 py-1 rounded-full border border-border text-text-dim hover:border-accent/40 hover:text-accent transition-all duration-200">
                {tag}
              </span>
            ))}
          </div>

          {/* Client badge — Built by Legitt → for RateGain */}
          <div className="animate-fade-up flex flex-wrap items-center justify-center gap-3 mb-10" style={{ animationDelay: '0.25s' }}>

            {/* Legitt (builder) */}
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-[10px] tracking-[0.15em] uppercase text-text-dim font-medium">Built by</span>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/60 bg-white/[0.03] backdrop-blur-sm hover:border-accent/30 transition-all duration-300">
                <img
                  src={legittLogo}
                  alt="Legitt AI"
                  className="h-7 w-auto object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
            </div>

            {/* Arrow connector */}
            <div className="flex items-center gap-1 text-text-muted mt-4">
              <div className="h-px w-6 bg-border" />
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="text-border">
                <path d="M1 4h6M4 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="h-px w-6 bg-border" />
            </div>

            {/* RateGain (client) */}
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-[10px] tracking-[0.15em] uppercase text-text-dim font-medium">Built for</span>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/60 bg-white/[0.03] backdrop-blur-sm hover:border-accent/30 transition-all duration-300">
                <img
                  src={rategainLogo}
                  alt="RateGain"
                  className="h-6 w-auto object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
            </div>

          </div>

          {/* Lead */}
          <div className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4 text-description text-text-dim" style={{ animationDelay: '0.3s' }}>
            <span className="flex items-center gap-2">
              <Zap size={14} className="text-accent" />
              Lead Product Engineer
            </span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="flex items-center gap-2">
              <Users size={14} className="text-accent" />
              Led team of 2 engineers
            </span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-accent" />
              6-month Phase 1 · Ongoing
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted animate-bounce">
          <span className="text-[11px] tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} />
        </div>
      </section>

      {/* ── IMPACT METRICS ── */}
      <section className="py-24 border-t border-border/40">
        <div className="section-container">
          <div className="reveal text-center mb-16">
            <p className="section-label justify-center">Impact</p>
            <h2 className="text-heading font-black text-text-main">Measurable Results</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, i) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className="reveal glass-card rounded-2xl p-7 text-center group hover:border-white/10 transition-all duration-300"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} className={m.color} />
                  </div>
                  <div className={`text-[2rem] font-black mb-1 ${m.color}`}>{m.value}</div>
                  <div className="text-subtitle font-bold text-text-main mb-1.5">{m.label}</div>
                  <div className="text-description text-text-dim">{m.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROBLEM → SOLUTION ── */}
      <section className="py-24 border-t border-border/40">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Problem */}
            <div className="reveal-left">
              <p className="section-label">The Problem</p>
              <h2 className="text-heading font-black text-text-main mb-6">Manual, Opaque, Slow</h2>
              <div className="space-y-4">
                {[
                  'Entire proposal and agreement lifecycle was manual — spreadsheets, email chains, and offline reviews.',
                  'No visibility into deal status. Teams had no idea if a document was stuck at Legal, Finance, or awaiting customer.',
                  'Legal and Finance teams manually reviewed every agreement line-by-line to find pricing or clause changes.',
                  'Admin teams had to individually contact members to track deal progress and performance.',
                  'Deals that should close in days took weeks or months — delaying revenue recognition.',
                ].map((p, i) => (
                  <div key={i} className="flex items-start gap-3 text-text-dim text-description leading-relaxed">
                    <span className="w-5 h-5 rounded-full border border-red-500/40 text-red-400 flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">✕</span>
                    {p}
                  </div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="reveal">
              <p className="section-label" style={{ '--tw-text-opacity': 1 } as React.CSSProperties}>The Solution</p>
              <h2 className="text-heading font-black text-text-main mb-6">Automated, Intelligent, Tracked</h2>
              <div className="space-y-4">
                {[
                  'Built a 24-step automated workflow connecting Salesforce → Legitt → MS Word → Customer → Signatures → back to SFDC.',
                  'Real-time status tracking within Legitt + SFDC bidirectional sync gives every stakeholder live visibility.',
                  'AI engine (fine-tuned OpenAI) auto-flags deltas — only escalates to humans when truly needed.',
                  'Role-based dashboards give admins instant insight into team performance and deal bottlenecks.',
                  'Cycle time reduced from weeks to 1–2 days. Revenue starts faster, with fewer errors.',
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-3 text-text-dim text-description leading-relaxed">
                    <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCREENSHOTS ── */}
      <section className="py-24 border-t border-border/40">
        <div className="section-container">
          <div className="reveal text-center mb-16">
            <p className="section-label justify-center">In Action</p>
            <h2 className="text-heading font-black text-text-main mb-3">Key Platform Screens</h2>
            <p className="text-text-dim text-description max-w-2xl mx-auto">
              Visual walkthrough of the major touchpoints across the Salesforce–Legitt integration.
            </p>
          </div>

          <div className="space-y-16">
            {screenshots.map((sc, i) => (
              <div
                key={sc.title}
                className={`reveal flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}
              >
                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-2xl overflow-hidden border border-border group">
                    <img
                      src={sc.src}
                      alt={sc.title}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 max-w-md">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[12px] font-bold text-accent border border-accent/30 bg-accent/10 px-2.5 py-0.5 rounded-full">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-title font-black text-text-main mb-4">{sc.title}</h3>
                  <p className="text-description text-text-dim leading-relaxed">{sc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLOW DIAGRAM ── */}
      <section id="flow-section" className="py-24 border-t border-border/40">
        <div className="section-container">
          <div className="reveal text-center mb-6">
            <p className="section-label justify-center">Architecture</p>
            <h2 className="text-heading font-black text-text-main mb-3">15-Step Data Flow</h2>
            <p className="text-text-dim text-description max-w-2xl mx-auto">
              Granular flow showing how data moves bidirectionally between{' '}
              <span className="text-[#009EDB] font-semibold">Salesforce</span> and{' '}
              <span className="text-accent font-semibold">Legitt</span> at each stage of the contract lifecycle.
              Click any step to expand details.
            </p>
          </div>

          {/* Legend */}
          <div className="reveal flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-description">
              <span className="w-3 h-3 rounded-full bg-accent inline-block" />
              <span className="text-text-dim">Legitt</span>
            </div>
            <div className="flex items-center gap-2 text-description">
              <span className="w-3 h-3 rounded-full bg-[#009EDB] inline-block" />
              <span className="text-text-dim">Salesforce</span>
            </div>
            <div className="flex items-center gap-2 text-description">
              <ArrowRight size={12} className="text-accent" />
              <span className="text-text-dim font-mono text-[12px]">Data transfer direction</span>
            </div>
          </div>

          {/* Phase filter */}
          <div className="reveal flex flex-wrap justify-center gap-2 mb-14">
            <button
              onClick={() => setActivePhase(null)}
              className={`text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border transition-all duration-200 ${
                activePhase === null ? 'border-accent text-accent bg-accent/10' : 'border-border text-text-dim hover:border-white/20'
              }`}
            >
              All Phases
            </button>
            {phases.map((p) => (
              <button
                key={p.name}
                onClick={() => setActivePhase(activePhase === p.name ? null : p.name)}
                className={`text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border transition-all duration-200`}
                style={
                  activePhase === p.name
                    ? { borderColor: p.color, color: p.color, background: `${p.color}18` }
                    : { borderColor: '#252525', color: '#777' }
                }
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central spine line */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden md:block" />

            <div className="flex flex-col gap-8">
              {filteredSteps.map((step, i) => (
                <FlowStep key={step.id} step={step} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SFDC OBJECTS REFERENCE ── */}
      <section className="py-24 border-t border-border/40">
        <div className="section-container">
          <div className="reveal text-center mb-14">
            <p className="section-label justify-center">Data Model</p>
            <h2 className="text-heading font-black text-text-main mb-3">Salesforce Objects Used</h2>
            <p className="text-text-dim text-description max-w-xl mx-auto">
              Primary SFDC objects involved in the bidirectional data sync between Legitt and Salesforce.
            </p>
          </div>

          <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Opportunity', desc: 'Deal entity — core anchor', fields: 'Stage, Products, Docs' },
              { name: 'Quote', desc: 'Proposal & Agreement tracker', fields: 'Status, Pricing, Type' },
              { name: 'Account', desc: 'Customer info & region', fields: 'Name, Region, Contacts' },
              { name: 'Pricebook', desc: 'Product pricing catalog', fields: 'PricebookEntry, Currency' },
              { name: 'Product', desc: 'What is being sold', fields: 'Name, Code, Family' },
              { name: 'Custom Objects', desc: 'Client-specific tracking', fields: 'Approvals, Milestones' },
            ].map((obj, i) => (
              <div
                key={obj.name}
                className="glass-card rounded-xl p-5 text-center border-border/60 hover:border-[#009EDB]/30 transition-all duration-300 group"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#009EDB]/10 border border-[#009EDB]/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Database size={14} className="text-[#009EDB]" />
                </div>
                <div className="text-description font-bold text-text-main mb-1">{obj.name}</div>
                <div className="text-[11px] text-text-dim leading-snug mb-2">{obj.desc}</div>
                <div className="text-[10px] font-mono text-[#009EDB]/70">{obj.fields}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ── */}
      <section className="py-24 border-t border-border/40">
        <div className="section-container">
          <div className="reveal text-center mb-16">
            <p className="section-label justify-center">Ecosystem</p>
            <h2 className="text-heading font-black text-text-main mb-3">Key Integrations</h2>
            <p className="text-text-dim text-description max-w-2xl mx-auto">
              Connecting best-in-class enterprise platforms to eliminate manual work and centralize the contract lifecycle.
            </p>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                name: 'Salesforce CRM', 
                img: integrationSfdc, 
                role: 'The master source of truth. Legitt operates inside SFDC via custom buttons, fetching Opportunity/Account data and syncing back signed agreements, closed quotes, and deal status in real time.',
                tags: ['REST API', 'OAuth 2.0', 'Custom Objects']
              },
              { 
                name: 'Microsoft Word Online', 
                img: integrationWord, 
                role: 'Used for live drafting and editing of proposals and agreements. Seamlessly integrated via MS Graph API, allowing sales and legal teams to negotiate terms without ever leaving the browser.',
                tags: ['MS Graph API', 'WOPI Protocol', 'SharePoint']
              },
              { 
                name: 'Microsoft Outlook', 
                img: integrationOutlook, 
                role: 'Powers all outbound communication. Legitt sends approval requests, negotiation drafts, and final Legitt e-Sign links to customers directly using the organization\'s official Outlook credentials.',
                tags: ['SMTP', 'MS Graph API', 'Secure Tracking']
              }
            ].map((integration, i) => (
              <div 
                key={integration.name}
                className="glass-card rounded-2xl p-6 flex flex-col h-full hover:border-accent/20 transition-all duration-300 group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`h-16 w-16 rounded-xl bg-white flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:scale-105 transition-transform duration-300 ${integration.name === 'Microsoft Word Online' ? 'p-1.5' : 'p-3'}`}>
                  <img src={integration.img} alt={integration.name} className="max-w-full max-h-full object-contain" />
                </div>
                <h3 className="text-[18px] font-black text-text-main mb-3">{integration.name}</h3>
                <p className="text-[13px] text-text-dim leading-relaxed mb-6 flex-grow">{integration.role}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {integration.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-medium px-2 py-1 rounded bg-surface border border-border text-text-dim">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-24 border-t border-border/40">
        <div className="section-container">
          <div className="reveal text-center mb-14">
            <p className="section-label justify-center">Engineering</p>
            <h2 className="text-heading font-black text-text-main">Technology Stack</h2>
          </div>

          <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {techStack.map((category, i) => (
              <div
                key={category.category}
                className="glass-card rounded-xl p-6 hover:border-white/10 transition-all duration-300"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <h3 className="text-description font-bold text-accent tracking-widest uppercase mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="text-[12px] px-3 py-1 rounded-md bg-surface border border-border text-text-dim font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY CHALLENGES ── */}
      <section className="py-24 border-t border-border/40">
        <div className="section-container">
          <div className="reveal text-center mb-14">
            <p className="section-label justify-center">Engineering Highlights</p>
            <h2 className="text-heading font-black text-text-main mb-3">Key Technical Challenges I Solved</h2>
            <p className="text-text-dim text-description max-w-2xl mx-auto">
              As the lead product engineer, I designed the architecture and solved the hard problems that made this enterprise-scale flow possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="reveal glass-card rounded-2xl p-7 group hover:border-white/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.04)]"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/15 group-hover:scale-110 transition-all duration-300">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <h3 className="text-subtitle font-bold text-text-main mb-3">{c.title}</h3>
                  <p className="text-description text-text-dim leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="py-32 border-t border-border/40">
        <div className="section-container text-center">
          <div className="reveal max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-8">
              <Zap size={28} className="text-accent" />
            </div>
            <h2 className="text-heading font-black text-text-main mb-4">
              First Enterprise Win for Legitt
            </h2>
            <p className="text-description text-text-dim leading-relaxed mb-10">
              This was the first billion-dollar enterprise contract for Legitt. I led the product engineering from architecture to deployment — designing the systems, guiding the team, and solving the hard integration problems that made it possible. The platform continues to scale, processing hundreds of agreements monthly for the client.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="btn-ghost text-description py-3 px-6"
              >
                ← Back to Portfolio
              </button>
              <a
                href="#flow"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('flow-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary text-description py-3 px-6"
              >
                View Full Flow ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 text-center text-description text-text-muted">
        <div className="section-container">
          Rohit Garg · Lead Product Engineer · {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}

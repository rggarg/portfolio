import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, Clock, Users, ChevronDown } from 'lucide-react';

export default function InvoicingHero() {
  const navigate = useNavigate();

  return (
    <>
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
        {/* Radial glow */}
        <div className="absolute inset-0 mesh-gradient pointer-events-none" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-700 h-700 rounded-full opacity-3 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #a78bfa, transparent 70%)' }}
        />

        <div className="section-container pt-32 pb-24 text-center relative z-10">
          {/* Label */}
          <div className="animate-fade-in flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-12 bg-accent/40" />
            <span className="text-description tracking-widest uppercase text-accent">Case Study</span>
            <span className="h-px w-12 bg-accent/40" />
          </div>

          {/* Title */}
          <h1 className="animate-fade-up text-hero font-black leading-tight-1 tracking-tight mb-6">
            Invoicing &{' '}
            <span className="accent-gradient">Financial Workflow</span>
            <br />
            Automation System
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-up text-subtitle text-text-dim max-w-3xl mx-auto leading-relaxed mb-10"
            style={{ animationDelay: '0.1s' }}
          >
            A fully automated invoice generation pipeline — syncing{' '}
            <span className="text-text-main font-semibold">2–3K Salesforce contracts daily</span>,
            running a{' '}
            <span className="text-text-main font-semibold">rule-based invoice engine</span>, and
            managing end-to-end{' '}
            <span className="text-text-main font-semibold">approval workflows</span> — reducing
            invoice generation from weeks to minutes for an enterprise finance team.
          </p>

          {/* Tags */}
          <div
            className="animate-fade-up flex flex-wrap justify-center gap-2 mb-12"
            style={{ animationDelay: '0.2s' }}
          >
            {['MERN Stack', 'Salesforce REST API', 'Rule-Based Engine', 'MongoDB', 'AWS', 'Batch Processing', 'Approval Workflow'].map((tag) => (
              <span
                key={tag}
                className="text-small font-medium px-3 py-1 rounded-full border border-border text-text-dim hover:border-accent/40 hover:text-accent transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Client badge */}
          <div
            className="animate-fade-up flex flex-col items-center gap-3 mb-10"
            style={{ animationDelay: '0.25s' }}
          >
            <span className="text-micro tracking-wide-em uppercase text-text-dim font-medium">
              Built for
            </span>
            <div className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border/60 bg-white/[0.03] backdrop-blur-sm hover:border-accent/30 transition-all duration-300">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-description font-semibold text-text-main">Enterprise Client</span>
              <span className="text-description text-text-dim">· Confidential</span>
            </div>
          </div>

          {/* Lead meta */}
          <div
            className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4 text-description text-text-dim"
            style={{ animationDelay: '0.3s' }}
          >
            <span className="flex items-center gap-2">
              <Zap size={14} className="text-accent" />
              Product Engineer
            </span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="flex items-center gap-2">
              <Users size={14} className="text-accent" />
              Solo Build
            </span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-accent" />
              1-Month MVP · Refined Iteratively
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted animate-bounce">
          <span className="text-mini tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} />
        </div>
      </section>
    </>
  );
}

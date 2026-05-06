import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { lifecycleStages } from '../../data/LegittCLMData';
import { flowSteps, flowPhases } from '../../data/ESignData';
import contractLifecycleSvg from '../../assets/images/contract_lifecycle_flow.svg';

const SIGNING_STAGES = new Set(['Signature Workflow', 'PDF Generation', 'Executed']);

function FlowCard({
  step,
  isLeft,
}: {
  step: (typeof flowSteps)[0];
  isLeft: boolean;
}) {
  const [open, setOpen] = useState(false);
  const Icon = step.icon;

  return (
    <div className={`flex items-start gap-6 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'}`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full glass-card rounded-xl p-5 text-left group hover:border-white/10 transition-all duration-300 hover:shadow-card-glow"
          style={{ textAlign: isLeft ? 'left' : 'right' }}
        >
          <div className={`flex items-center gap-2 mb-2 ${isLeft ? '' : 'justify-end'}`}>
            <span
              className="inline-flex items-center text-mini font-bold tracking-wider uppercase px-2 py-0.5 rounded"
              style={{
                color: step.phaseColor,
                background: `${step.phaseColor}18`,
                border: `1px solid ${step.phaseColor}33`,
              }}
            >
              {step.phase}
            </span>
          </div>

          <div className={`flex items-start justify-between gap-3 ${isLeft ? '' : 'flex-row-reverse'}`}>
            <h3 className="text-subtitle font-bold text-text-main group-hover:text-accent transition-colors">
              {step.title}
            </h3>
            <ChevronDown
              size={16}
              className={`text-text-dim mt-1 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            />
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-48 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <p className="text-description text-text-dim leading-relaxed">{step.desc}</p>
          </div>
        </button>
      </div>

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
          <Icon size={14} />
        </div>
      </div>

      <div className="flex-1 hidden md:block" />
    </div>
  );
}

export default function ESignLifecycle() {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  const filteredSteps = activePhase
    ? flowSteps.filter((s) => s.phase === activePhase)
    : flowSteps;

  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">

        {/* ── Part 1: Lifecycle Overview ── */}
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center">End-to-End Flow</p>
          <h2 className="text-heading font-black text-text-main mb-4">Contract Lifecycle</h2>
          <p className="text-description text-text-dim max-w-2xl mx-auto leading-relaxed">
            From a user uploading a document to a fully executed agreement with an immutable audit trail —
            every stage orchestrated by the platform.
          </p>
        </div>

        <div className="reveal grid lg:grid-cols-2 gap-10 items-start mb-20">
          {/* Left: SVG diagram */}
          <div className="glass-card rounded-2xl overflow-hidden" style={{ borderColor: 'rgba(167,139,250,0.18)' }}>
            <div className="flex items-center gap-2 px-5 py-3 border-b border-border/40" style={{ background: 'rgba(167,139,250,0.04)' }}>
              <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
              <span className="ml-4 text-mini text-text-dim font-mono">Contract Lifecycle Flow</span>
            </div>
            <div className="p-6" style={{ background: '#f5f5f0' }}>
              <img
                src={contractLifecycleSvg}
                alt="Contract Lifecycle Flow Diagram"
                className="w-full h-auto"
                style={{ maxHeight: '520px', objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Right: stage annotations */}
          <div className="flex flex-col gap-3">
            <h3 className="text-title-sm font-black text-text-main mb-2">Stage by Stage</h3>
            {lifecycleStages.map((stage, i) => {
              const isSigning = SIGNING_STAGES.has(stage.stage);
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 glass-card rounded-xl p-4 group hover:scale-101 transition-all duration-300"
                  style={{
                    borderColor: stage.color + (isSigning ? '45' : '20'),
                    boxShadow: isSigning ? `0 0 16px ${stage.color}20` : undefined,
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = stage.color + '65'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = stage.color + (isSigning ? '45' : '20'); }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                    style={{ background: stage.color + '18', border: `1px solid ${stage.color}35` }}
                  >
                    {stage.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-regular font-black text-text-main">{stage.stage}</div>
                      {isSigning && (
                        <span
                          className="text-mini font-bold tracking-wider uppercase px-1.5 py-0.5 rounded"
                          style={{ color: stage.color, background: stage.color + '18', border: `1px solid ${stage.color}35` }}
                        >
                          E-Sign
                        </span>
                      )}
                    </div>
                    <div className="text-small text-text-dim leading-snug">{stage.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="reveal flex items-center gap-4 mb-14">
          <div className="flex-1 h-px bg-border/40" />
          <div
            className="text-mini font-bold tracking-widest uppercase px-4 py-2 rounded-full border"
            style={{ color: '#f472b6', borderColor: '#f472b680', background: '#f472b610' }}
          >
            Signature Phase — Step by Step
          </div>
          <div className="flex-1 h-px bg-border/40" />
        </div>

        {/* ── Part 2: 9-Step Signing Flow ── */}
        <div className="reveal text-center mb-6">
          <h3 className="text-title font-black text-text-main mb-3">9-Step Signature Flow</h3>
          <p className="text-text-dim text-description max-w-2xl mx-auto">
            From document upload to executed agreement with a complete, tamper-proof audit trail.
            Click any step to expand details.
          </p>
        </div>

        {/* Phase filter */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-10 mt-8">
          <button
            onClick={() => setActivePhase(null)}
            className={`text-mini font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border transition-all duration-200 ${
              activePhase === null
                ? 'border-accent text-accent bg-accent/10'
                : 'border-border text-text-dim hover:border-white/20'
            }`}
          >
            All Phases
          </button>
          {flowPhases.map((p) => (
            <button
              key={p.name}
              onClick={() => setActivePhase(activePhase === p.name ? null : p.name)}
              className="text-mini font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border transition-all duration-200"
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

        {/* Legend */}
        <div className="reveal flex flex-wrap justify-center gap-6 mb-10">
          {flowPhases.map((p) => (
            <div key={p.name} className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: p.color }} />
              <span className="text-text-dim text-small">{p.name}</span>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <ArrowRight size={12} className="text-accent" />
            <span className="text-text-dim font-mono text-small">Click to expand</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="reveal relative">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden md:block" />
          <div className="flex flex-col gap-8">
            {filteredSteps.map((step, i) => (
              <FlowCard key={step.id} step={step} isLeft={i % 2 === 0} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

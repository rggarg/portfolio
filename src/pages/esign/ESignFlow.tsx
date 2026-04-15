import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { flowSteps, flowPhases } from '../../data/ESignData';

function FlowCard({
  step,
  index,
  isLeft,
}: {
  step: (typeof flowSteps)[0];
  index: number;
  isLeft: boolean;
}) {
  const [open, setOpen] = useState(false);
  const Icon = step.icon;

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
            <span
              className="inline-flex items-center text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded"
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

          {/* Expanded */}
          <div
            className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-48 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <p className="text-description text-text-dim leading-relaxed">{step.desc}</p>
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
          <Icon size={14} />
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

export default function ESignFlow() {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  const filteredSteps = activePhase
    ? flowSteps.filter((s) => s.phase === activePhase)
    : flowSteps;

  return (
    <section id="flow-section" className="py-24 border-t border-border/40">
      <div className="section-container">
        <div className="reveal text-center mb-6">
          <p className="section-label justify-center">Document Lifecycle</p>
          <h2 className="text-heading font-black text-text-main mb-3">9-Step Signature Flow</h2>
          <p className="text-text-dim text-description max-w-2xl mx-auto">
            From document upload to executed agreement with a complete, tamper-proof audit trail.
            Click any step to expand details.
          </p>
        </div>

        {/* Phase filter */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-14 mt-8">
          <button
            onClick={() => setActivePhase(null)}
            className={`text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border transition-all duration-200 ${
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
              className="text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border transition-all duration-200"
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
            <div key={p.name} className="flex items-center gap-2 text-description">
              <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: p.color }} />
              <span className="text-text-dim text-[12px]">{p.name}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 text-description">
            <ArrowRight size={12} className="text-accent" />
            <span className="text-text-dim font-mono text-[12px]">Click to expand</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central spine line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden md:block" />
          <div className="flex flex-col gap-8">
            {filteredSteps.map((step, i) => (
              <FlowCard key={step.id} step={step} index={i} isLeft={i % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

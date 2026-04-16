import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { workflowSteps, phases } from '../../data/InvoicingWorkflowData';

type Actor = 'sfdc' | 'system' | 'user';

function ActorTag({ actor }: { actor: Actor }) {
  const map: Record<Actor, { label: string; cls: string }> = {
    sfdc: {
      label: 'Salesforce',
      cls: 'bg-brand-blue/10 border-brand-blue/30 text-brand-blue',
    },
    system: {
      label: 'System / Engine',
      cls: 'bg-accent/10 border-accent/30 text-accent',
    },
    user: {
      label: 'Finance Team',
      cls: 'bg-amber/10 border-amber/30 text-amber',
    },
  };
  const { label, cls } = map[actor];
  return (
    <span
      className={`text-micro font-bold tracking-wider uppercase px-2 py-0.5 rounded border ${cls}`}
    >
      {label}
    </span>
  );
}

function PhaseTag({ name, color }: { name: string; color: string }) {
  return (
    <span
      className="inline-flex items-center text-mini font-bold tracking-wider uppercase px-2 py-0.5 rounded"
      style={{ color, background: `${color}18`, border: `1px solid ${color}33` }}
    >
      {name}
    </span>
  );
}

function FlowStep({
  step,
  index,
}: {
  step: (typeof workflowSteps)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div className={`flex items-start gap-6 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Content card */}
      <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'}`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full glass-card rounded-xl p-5 text-left group hover:border-white/10 transition-all duration-300 hover:shadow-card-glow"
          style={{ textAlign: isLeft ? 'left' : 'right' }}
        >
          <div className={`flex items-center gap-2 mb-2 ${isLeft ? '' : 'justify-end'}`}>
            <ActorTag actor={step.actor} />
            <PhaseTag name={step.phase} color={step.phaseColor} />
          </div>
          <div
            className={`flex items-start justify-between gap-3 ${isLeft ? '' : 'flex-row-reverse'}`}
          >
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

          {/* Collapsed summary */}
          {!open && (
            <p className="text-mini text-text-dim mt-2 leading-relaxed line-clamp-2">{step.desc}</p>
          )}

          {/* Expanded */}
          <div
            className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <p className="text-description text-text-dim leading-relaxed mb-3">{step.detail}</p>
            <div
              className={`flex items-start gap-2 p-3 rounded-lg border border-border bg-surface/50 ${isLeft ? '' : 'flex-row-reverse text-right'}`}
            >
              <ArrowRight size={14} className="text-accent flex-shrink-0 mt-0.5" />
              <span className="text-small text-text-dim font-mono">{step.desc}</span>
            </div>
          </div>
        </button>
      </div>

      {/* Center spine node */}
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

      {/* Spacer */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

export default function InvoicingFlow() {
  const [activePhase, setActivePhase] = useState<string | null>(null);
  const filtered = activePhase
    ? workflowSteps.filter((s) => s.phase === activePhase)
    : workflowSteps;

  return (
    <section id="flow-section" className="py-24 border-t border-border/40">
      <div className="section-container">
        <div className="reveal text-center mb-6">
          <p className="section-label justify-center">Architecture</p>
          <h2 className="text-heading font-black text-text-main mb-3">9-Step Invoice Workflow</h2>
          <p className="text-text-dim text-description max-w-2xl mx-auto">
            End-to-end data flow — from the daily{' '}
            <span className="text-brand-blue font-semibold">Salesforce sync</span> through the{' '}
            <span className="text-accent font-semibold">invoice engine</span> and{' '}
            <span className="text-amber font-semibold">finance approval</span> to the final SFDC
            push and payment. Click any step to expand.
          </p>
        </div>

        {/* Legend */}
        <div className="reveal flex flex-wrap justify-center gap-4 mb-10">
          {[
            { label: 'Salesforce', cls: 'bg-brand-blue' },
            { label: 'System / Engine', cls: 'bg-accent' },
            { label: 'Finance Team', cls: 'bg-amber' },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2 text-description">
              <span className={`w-3 h-3 rounded-full ${l.cls} inline-block`} />
              <span className="text-text-dim">{l.label}</span>
            </div>
          ))}
        </div>

        {/* Phase filter */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-14">
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
          {phases.map((p) => (
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

        {/* Timeline */}
        <div className="relative">
          {/* Spine */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden md:block" />

          <div className="flex flex-col gap-8">
            {filtered.map((step, i) => (
              <FlowStep key={step.id} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

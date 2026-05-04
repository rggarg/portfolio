import { lifecycleStages } from '../../data/LegittCLMData';
import contractLifecycleSvg from '../../assets/images/contract_lifecycle_flow.svg';

export default function LegittLifecycle() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center">End-to-End Flow</p>
          <h2 className="text-heading font-black text-text-main mb-4">Contract Lifecycle</h2>
          <p className="text-description text-text-dim max-w-2xl mx-auto leading-relaxed">
            From a user clicking "New Contract" to a fully executed PDF with embedded signatures -
            every stage is orchestrated by Legitt AI.
          </p>
        </div>

        <div className="reveal grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: SVG in light-mode card */}
          <div className="glass-card rounded-2xl overflow-hidden border-border/60" style={{ borderColor: 'rgba(167,139,250,0.18)' }}>
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
            {lifecycleStages.map((stage, i) => (
              <div
                key={i}
                className="flex items-start gap-4 glass-card rounded-xl p-4 border-border/60 group hover:scale-101 transition-all duration-300"
                style={{ borderColor: stage.color + '20' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = stage.color + '50'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = stage.color + '20'; }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                  style={{ background: stage.color + '18', border: `1px solid ${stage.color}35` }}
                >
                  {stage.icon}
                </div>
                <div>
                  <div className="text-regular font-black text-text-main mb-1">{stage.stage}</div>
                  <div className="text-small text-text-dim leading-snug">{stage.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

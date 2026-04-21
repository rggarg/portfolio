import { keyMetrics } from '../../data/TipTapData';

export default function TipTapMetrics() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center">Results</p>
          <h2 className="text-heading font-black text-text-main mb-4">
            Key Achievements
          </h2>
          <p className="text-description text-text-dim max-w-2xl mx-auto">
            Measurable outcomes from 2+ years of building and optimizing the editor in production.
          </p>
        </div>

        <div className="reveal grid grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {keyMetrics.map((m, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-7 text-center border-border/60 hover:scale-101 transition-all duration-300 flex flex-col items-center justify-center"
              style={{ borderColor: m.color + '20', minHeight: '160px' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = m.color + '50';
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${m.color}0d`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = m.color + '20';
                (e.currentTarget as HTMLElement).style.boxShadow = '';
              }}
            >
              <div
                className="font-black leading-none mb-2"
                style={{ color: m.color, fontSize: 'clamp(2rem, 5vw, 3rem)' }}
              >
                {m.value}
              </div>
              <div className="text-subtitle font-bold text-text-main mb-1">{m.label}</div>
              <div className="text-mini text-text-dim">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Integrations banner */}
        <div className="reveal">
          <div
            className="glass-card rounded-2xl p-8 border text-center"
            style={{ borderColor: 'rgba(0,204,170,0.2)', background: 'rgba(0,204,170,0.03)' }}
          >
            <p className="text-mini tracking-widest uppercase font-bold mb-3" style={{ color: '#00ccaa' }}>
              Platform Integration
            </p>
            <h3 className="text-title-sm font-black text-text-main mb-4">
              The Editor is the Heart of the CLM Platform
            </h3>
            <div className="flex flex-wrap justify-center gap-3 text-small">
              {[
                { label: 'Approval Workflow', color: '#00ccaa' },
                { label: '→', color: '#444' },
                { label: 'Signature Service', color: '#60a5fa' },
                { label: '→', color: '#444' },
                { label: 'Version Control', color: '#a78bfa' },
                { label: '→', color: '#444' },
                { label: 'PDF Generation', color: '#fb923c' },
                { label: '→', color: '#444' },
                { label: 'Audit Trail', color: '#f5a623' },
              ].map((item, i) => (
                <span key={i} className="font-bold" style={{ color: item.color }}>{item.label}</span>
              ))}
            </div>
            <p className="text-mini text-text-dim max-w-2xl mx-auto mt-4 leading-relaxed">
              Completing a draft auto-triggers the approval routing engine. Final approval optionally
              auto-dispatches the signature workflow. Once fully signed, the document is locked, a PDF
              is generated, and an immutable audit record is created — all without user intervention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

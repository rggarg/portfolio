import { whatWorked, whatIdoDifferently, futureImprovements, skillsGained } from '../../data/TipTapData';

export default function TipTapLearnings() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center">Retrospective</p>
          <h2 className="text-heading font-black text-text-main mb-4">
            Learnings & What's Next
          </h2>
          <p className="text-description text-text-dim max-w-2xl mx-auto">
            Honest reflections from 2+ years of production use — what held up, what I'd rethink,
            and where the editor goes from here.
          </p>
        </div>

        {/* What worked + What I'd do differently */}
        <div className="reveal grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass-card rounded-xl p-7 border-border/60" style={{ borderColor: 'rgba(0,204,170,0.18)' }}>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(0,204,170,0.15)' }}>
                <span className="text-small">✅</span>
              </div>
              <h3 className="text-title-sm font-black text-text-main">What Worked Well</h3>
            </div>
            <div className="space-y-3">
              {whatWorked.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-description text-text-dim leading-snug">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: '#00ccaa' }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-xl p-7 border-border/60" style={{ borderColor: 'rgba(245,166,35,0.18)' }}>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(245,166,35,0.15)' }}>
                <span className="text-small">🔄</span>
              </div>
              <h3 className="text-title-sm font-black text-text-main">What I'd Do Differently</h3>
            </div>
            <div className="space-y-3">
              {whatIdoDifferently.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-description text-text-dim leading-snug">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: '#f5a623' }}>→</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future improvements */}
        <div className="reveal mb-12">
          <h3 className="text-title-sm font-black text-text-main mb-6">Planned Improvements</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {futureImprovements.map((item, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-5 border-border/60 hover:scale-101 transition-all duration-300"
                style={{ borderColor: 'rgba(0,204,170,0.1)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,204,170,0.3)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,204,170,0.1)'; }}
              >
                <div
                  className="text-mini font-bold tracking-widest uppercase mb-2"
                  style={{ color: '#00ccaa' }}
                >
                  Planned
                </div>
                <div className="text-small font-bold text-text-main mb-1">{item.title}</div>
                <div className="text-mini text-text-dim leading-snug">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills gained */}
        <div className="reveal">
          <div
            className="glass-card rounded-2xl p-7 border"
            style={{ borderColor: 'rgba(0,204,170,0.15)', background: 'rgba(0,204,170,0.02)' }}
          >
            <h3 className="text-title-sm font-black text-text-main mb-5">Skills & Depth Gained</h3>
            <div className="flex flex-wrap gap-3">
              {skillsGained.map((skill, i) => (
                <span
                  key={i}
                  className="text-small px-3 py-1.5 rounded-lg border font-medium text-text-dim"
                  style={{ borderColor: 'rgba(0,204,170,0.2)', background: 'rgba(0,204,170,0.05)' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

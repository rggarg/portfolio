import { businessChallenges, technicalChallenges } from '../../data/LegittCLMData';

export default function LegittChallenge() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center">Context</p>
          <h2 className="text-heading font-black text-text-main mb-4">The Challenge</h2>
          <p className="text-description text-text-dim max-w-2xl mx-auto leading-relaxed">
            Enterprise contract management was broken - fragmented across tools, manual at every step,
            and completely blind to the intelligence locked inside every contract.
          </p>
        </div>

        {/* Business challenges */}
        <div className="reveal mb-16">
          <h3 className="text-title-sm font-black text-text-main mb-6 flex items-center gap-3">
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center text-small flex-shrink-0"
              style={{ background: 'rgba(167,139,250,0.15)', border: '1px solid rgba(167,139,250,0.3)' }}
            >
              🏢
            </span>
            Business Problems
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {businessChallenges.map((c, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-5 border-border/60 hover:scale-101 transition-all duration-300"
                style={{ borderColor: 'rgba(167,139,250,0.12)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.35)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.12)'; }}
              >
                <div className="text-2xl mb-3">{c.icon}</div>
                <div className="text-regular font-black text-text-main mb-2">{c.title}</div>
                <div className="text-small text-text-dim leading-snug">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical challenges */}
        <div className="reveal">
          <h3 className="text-title-sm font-black text-text-main mb-6 flex items-center gap-3">
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center text-small flex-shrink-0"
              style={{ background: 'rgba(167,139,250,0.15)', border: '1px solid rgba(167,139,250,0.3)' }}
            >
              ⚙️
            </span>
            Technical Challenges I Solved
          </h3>
          <div className="space-y-4">
            {technicalChallenges.map((c, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-6 border-border/60 hover:scale-101 transition-all duration-300"
                style={{ borderColor: 'rgba(167,139,250,0.1)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.3)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.1)'; }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="text-display font-black opacity-25 leading-none flex-shrink-0 hidden sm:block"
                    style={{ color: '#a78bfa' }}
                  >
                    {c.num}
                  </div>
                  <div>
                    <h4 className="text-subtitle font-black text-text-main mb-2">{c.title}</h4>
                    <p className="text-description text-text-dim leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core challenge callout */}
        <div className="reveal mt-12">
          <div
            className="rounded-2xl p-8 border text-center"
            style={{ borderColor: 'rgba(167,139,250,0.25)', background: 'rgba(167,139,250,0.04)' }}
          >
            <p className="text-mini tracking-widest uppercase font-bold mb-3" style={{ color: '#a78bfa' }}>Core Engineering Goal</p>
            <p className="text-subtitle text-text-main leading-relaxed font-medium max-w-3xl mx-auto">
              "Build a platform that handles the entire contract lifecycle - from AI-assisted drafting to legally-binding multi-party signatures - while meeting enterprise-grade security, compliance, and performance requirements across 4 global regions."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

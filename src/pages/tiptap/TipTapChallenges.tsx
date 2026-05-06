import { challenges } from '../../data/TipTapData';

export default function TipTapChallenges() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center">Problem Solving</p>
          <h2 className="text-heading font-black text-text-main mb-4">
            Challenges Overcome
          </h2>
          <p className="text-description text-text-dim max-w-2xl mx-auto leading-relaxed">
            Building a production-grade contract editor surfaced problems that don't appear in tutorials.
            Here's how each was solved.
          </p>
        </div>

        <div className="space-y-5">
          {challenges.map((c, i) => (
            <div
              key={i}
              className="reveal glass-card rounded-2xl p-7 border-border/60 group hover:scale-101 transition-all duration-300"
              style={{ borderColor: c.color + '18' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = c.color + '40'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = c.color + '18'; }}
            >
              <div className="grid md:grid-cols-[auto_1fr_1fr_auto] gap-6 items-start">
                {/* Number */}
                <div
                  className="text-display font-black opacity-30 leading-none hidden md:block"
                  style={{ color: c.color }}
                >
                  {c.num}
                </div>

                {/* Problem */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="text-micro font-bold px-2 py-0.5 rounded-full"
                      style={{ color: c.color, background: c.color + '18', border: `1px solid ${c.color}35` }}
                    >
                      {c.badge}
                    </div>
                  </div>
                  <h3 className="text-subtitle font-black text-text-main mb-2">{c.title}</h3>
                  <div>
                    <span className="text-mini font-bold uppercase tracking-wider text-red-400 mr-2">Problem</span>
                    <span className="text-mini text-text-dim leading-relaxed">{c.problem}</span>
                  </div>
                </div>

                {/* Solution */}
                <div>
                  <div className="text-mini font-bold uppercase tracking-wider mb-2" style={{ color: c.color }}>
                    Solution
                  </div>
                  <p className="text-mini text-text-dim leading-relaxed">{c.solution}</p>
                </div>

                {/* Result */}
                <div className="md:w-44 flex-shrink-0">
                  <div className="text-mini font-bold uppercase tracking-wider text-text-muted mb-2">Result</div>
                  <p className="text-mini leading-relaxed font-medium" style={{ color: c.color }}>
                    {c.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

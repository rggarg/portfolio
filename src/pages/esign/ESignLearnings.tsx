import { learnings } from '../../data/ESignData';

export default function ESignLearnings() {
  const learned = learnings.filter((l) => l.type === 'learned');
  const wouldDo = learnings.filter((l) => l.type === 'would-do');

  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        <div className="reveal text-center mb-14">
          <p className="section-label justify-center">Reflection</p>
          <h2 className="text-heading font-black text-text-main mb-3">Learnings & Evolution</h2>
          <p className="text-text-dim text-description max-w-2xl mx-auto">
            Two-plus years of building a production e-signature platform - what I learned the hard way
            and what I'd do differently with hindsight.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Key Takeaways */}
          <div className="reveal-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="text-accent text-regular">💡</span>
              </div>
              <h3 className="text-title font-black text-text-main">Key Takeaways</h3>
            </div>
            <div className="space-y-4">
              {learned.map((l, i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl p-5 border-border/60 hover:border-accent/20 transition-all duration-300 group"
                >
                  <h4 className="text-description font-bold text-text-main mb-2 group-hover:text-accent transition-colors">
                    {l.title}
                  </h4>
                  <p className="text-description text-text-dim leading-relaxed">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* If I Could Do It Again */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center flex-shrink-0">
                <span className="text-brand-purple text-regular">🔁</span>
              </div>
              <h3 className="text-title font-black text-text-main">If I Could Do It Again</h3>
            </div>
            <div className="space-y-4">
              {wouldDo.map((l, i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl p-5 border-border/60 hover:border-brand-purple/30 transition-all duration-300 group"
                >
                  <h4 className="text-description font-bold text-text-main mb-2 group-hover:text-brand-purple transition-colors">
                    {l.title}
                  </h4>
                  <p className="text-description text-text-dim leading-relaxed">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

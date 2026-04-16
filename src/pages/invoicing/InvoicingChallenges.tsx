import { challenges } from '../../data/InvoicingWorkflowData';

export default function InvoicingChallenges() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        <div className="reveal text-center mb-14">
          <p className="section-label justify-center">Engineering Highlights</p>
          <h2 className="text-heading font-black text-text-main mb-3">
            Key Technical Challenges I Solved
          </h2>
          <p className="text-text-dim text-description max-w-2xl mx-auto">
            As the sole engineer, I owned every layer — from data sync to invoice logic to approval
            workflows — and built solutions that scale to thousands of contracts daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="reveal glass-card rounded-2xl p-7 group hover:border-white/10 transition-all duration-300 hover:shadow-card-glow"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/15 group-hover:scale-110 transition-all duration-300">
                  <Icon size={22} className="text-accent" />
                </div>
                <h3 className="text-subtitle font-bold text-text-main mb-3">{c.title}</h3>
                <p className="text-description text-text-dim leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

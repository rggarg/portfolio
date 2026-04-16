import { metrics } from '../../data/InvoicingWorkflowData';

export default function InvoicingMetrics() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center">Impact</p>
          <h2 className="text-heading font-black text-text-main">Measurable Results</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="reveal glass-card rounded-2xl p-7 text-center group hover:border-white/10 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} className={m.color} />
                </div>
                <div className={`text-display font-black mb-1 ${m.color}`}>{m.value}</div>
                <div className="text-subtitle font-bold text-text-main mb-1.5">{m.label}</div>
                <div className="text-description text-text-dim">{m.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { invoiceTypes } from '../../data/InvoicingWorkflowData';

export default function InvoicingTypes() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center">Invoice Engine</p>
          <h2 className="text-heading font-black text-text-main mb-3">3 Invoice Types Handled</h2>
          <p className="text-text-dim text-description max-w-2xl mx-auto">
            The engine classifies every contract at runtime and applies the correct billing
            logic — no manual intervention required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {invoiceTypes.map((type, i) => {
            const Icon = type.icon;
            return (
              <div
                key={type.id}
                className={`reveal glass-card rounded-2xl p-7 flex flex-col group hover:border-white/10 transition-all duration-300 hover:shadow-card-glow border ${type.borderColor}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${type.bgColor} border ${type.borderColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} className={type.color} />
                </div>

                {/* Label */}
                <div className="mb-1">
                  <span
                    className={`text-micro font-bold tracking-widest uppercase px-2 py-0.5 rounded ${type.bgColor} border ${type.borderColor} ${type.color}`}
                  >
                    Type {i + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-title font-black text-text-main mt-3 mb-1">{type.title}</h3>
                <p className={`text-mini font-medium ${type.color} mb-4`}>{type.subtitle}</p>

                {/* Description */}
                <p className="text-description text-text-dim leading-relaxed mb-6 flex-grow">
                  {type.description}
                </p>

                {/* Examples */}
                <div className="space-y-2 mb-5">
                  {type.examples.map((ex) => (
                    <div
                      key={ex}
                      className="flex items-center gap-2 text-small text-text-dim"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${type.color.replace('text-', 'bg-')} flex-shrink-0`} />
                      {ex}
                    </div>
                  ))}
                </div>

                {/* Rule highlight */}
                <div
                  className={`mt-auto p-3 rounded-lg ${type.bgColor} border ${type.borderColor}`}
                >
                  <p className={`text-mini font-mono font-medium ${type.color}`}>
                    {type.ruleHighlight}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

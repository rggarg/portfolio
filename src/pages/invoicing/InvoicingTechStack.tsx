import { techStack } from '../../data/InvoicingWorkflowData';

export default function InvoicingTechStack() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        <div className="reveal text-center mb-14">
          <p className="section-label justify-center">Engineering</p>
          <h2 className="text-heading font-black text-text-main">Technology Stack</h2>
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techStack.map((category, i) => (
            <div
              key={category.category}
              className="glass-card rounded-xl p-6 hover:border-white/10 transition-all duration-300"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <h3 className="text-description font-bold text-accent tracking-widest uppercase mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="text-small px-3 py-1 rounded-md bg-surface border border-border text-text-dim font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

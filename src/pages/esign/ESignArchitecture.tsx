import { archLayers, techStack } from '../../data/ESignData';

export default function ESignArchitecture() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center">Architecture</p>
          <h2 className="text-heading font-black text-text-main mb-3">System Architecture</h2>
          <p className="text-text-dim text-description max-w-2xl mx-auto">
            MERN stack frontend + Python AI microservices — designed for scale, observability, and developer extensibility.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="reveal mb-16">
          <div className="glass-card rounded-2xl p-8 border-border/60">
            {/* Layer stack */}
            <div className="flex flex-col gap-3">
              {archLayers.map((layer, i) => (
                <div
                  key={layer.label}
                  className="flex items-center gap-4 group"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* Layer label */}
                  <div
                    className="w-32 flex-shrink-0 text-mini font-bold tracking-widest uppercase text-right"
                    style={{ color: layer.color }}
                  >
                    {layer.label}
                  </div>

                  {/* Connector */}
                  <div className="w-4 h-px flex-shrink-0" style={{ background: layer.color + '60' }} />

                  {/* Card */}
                  <div
                    className="flex-1 flex items-center justify-between px-5 py-3.5 rounded-xl border transition-all duration-300 group-hover:scale-101"
                    style={{
                      borderColor: layer.color + '30',
                      background: layer.color + '08',
                    }}
                  >
                    <div>
                      <span className="text-subtitle font-bold text-text-main">{layer.tech}</span>
                      <span className="text-small text-text-dim ml-3 hidden sm:inline">{layer.desc}</span>
                    </div>
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse-slow"
                      style={{ background: layer.color }}
                    />
                  </div>

                  {/* Arrow down (not on last) */}
                  {i < archLayers.length - 1 && (
                    <div className="hidden md:block absolute" />
                  )}
                </div>
              ))}
            </div>

            {/* Connector arrows between layers */}
            <div className="flex justify-center mt-4">
              <div className="text-mini text-text-muted tracking-widest uppercase font-mono">
                ↕ bidirectional data flow
              </div>
            </div>
          </div>
        </div>

        {/* Flow summary banner */}
        <div className="reveal mb-16">
          <div className="flex flex-wrap items-center justify-center gap-2 text-small font-mono">
            {[
              { label: 'React.js', color: '#61dafb' },
              { label: '→', color: '#444' },
              { label: 'Node.js API', color: '#00ff88' },
              { label: '→', color: '#444' },
              { label: 'Python AI Workers', color: '#a78bfa' },
              { label: '→', color: '#444' },
              { label: 'SQL', color: '#47a248' },
              { label: '↔', color: '#444' },
              { label: 'Email / SMS', color: '#f472b6' },
            ].map((item, i) => (
              <span key={i} style={{ color: item.color }} className="font-bold">
                {item.label}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="reveal text-center mb-10">
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

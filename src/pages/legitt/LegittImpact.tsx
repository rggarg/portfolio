import { enterpriseClients, keyMetrics, businessImpact } from '../../data/LegittCLMData';

export default function LegittImpact() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">

        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center">Results & Trust</p>
          <h2 className="text-heading font-black text-text-main mb-4">Impact & Enterprise Clients</h2>
          <p className="text-description text-text-dim max-w-2xl mx-auto">
            Measurable outcomes from 2+ years of building and scaling the platform for enterprise clients across 4 global regions.
          </p>
        </div>

        {/* Key metrics */}
        <div className="reveal grid grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {keyMetrics.map((m, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 text-center border-border/60 hover:scale-101 transition-all duration-300"
              style={{ borderColor: m.color + '20', minHeight: '140px' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = m.color + '50';
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 28px ${m.color}0e`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = m.color + '20';
                (e.currentTarget as HTMLElement).style.boxShadow = '';
              }}
            >
              <div
                className="font-black leading-none mb-2"
                style={{ color: m.color, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
              >
                {m.value}
              </div>
              <div className="text-small font-bold text-text-main mb-1">{m.label}</div>
              <div className="text-mini text-text-dim">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Business impact */}
        <div className="reveal mb-16">
          <div
            className="glass-card rounded-2xl p-7 border"
            style={{ borderColor: 'rgba(167,139,250,0.18)', background: 'rgba(167,139,250,0.03)' }}
          >
            <h3 className="text-title-sm font-black text-text-main mb-5">Business Impact</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {businessImpact.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-description text-text-dim leading-snug">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: '#a78bfa' }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enterprise clients */}
        <div className="reveal">
          <h3 className="text-title-sm font-black text-text-main text-center mb-8">
            Trusted by Enterprise Clients
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            {enterpriseClients.map((client) => (
              <div
                key={client.name}
                className="glass-card rounded-xl px-8 py-5 border-border/60 flex items-center justify-center transition-all duration-300 hover:scale-105"
                style={{ borderColor: 'rgba(167,139,250,0.15)', minWidth: '140px', minHeight: '72px' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.4)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.15)'; }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-10 max-w-28 w-auto object-contain"
                  style={{ opacity: 0.85, filter: 'brightness(1.15)' }}
                  title={client.name}
                />
              </div>
            ))}
          </div>

          {/* G2 rating badge */}
          <div className="flex justify-center">
            <div
              className="glass-card rounded-full px-6 py-3 border flex items-center gap-3"
              style={{ borderColor: 'rgba(245,166,35,0.3)', background: 'rgba(245,166,35,0.05)' }}
            >
              <span className="text-subtitle font-black" style={{ color: '#f5a623' }}>4.8★</span>
              <div>
                <div className="text-small font-bold text-text-main">G2 Platform Rating</div>
                <div className="text-mini text-text-dim">Based on verified enterprise reviews</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

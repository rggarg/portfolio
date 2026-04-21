import { archLayerAnnotations } from '../../data/LegittCLMData';
import systemArchSvg from '../../assets/images/system_architecture.svg';

export default function LegittArchitecture() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center">Technical Design</p>
          <h2 className="text-heading font-black text-text-main mb-4">System Architecture</h2>
          <p className="text-description text-text-dim max-w-2xl mx-auto leading-relaxed">
            A 6-layer multi-tier architecture designed for enterprise scale - handling 200+ concurrent users
            across 4 global regions with 99.9% uptime.
          </p>
        </div>

        {/* SVG diagram */}
        <div className="reveal mb-12">
          <div className="glass-card rounded-2xl overflow-hidden border-border/60" style={{ borderColor: 'rgba(167,139,250,0.18)' }}>
            <div className="flex items-center gap-2 px-5 py-3 border-b border-border/40" style={{ background: 'rgba(167,139,250,0.04)' }}>
              <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
              <span className="ml-4 text-mini text-text-dim font-mono">system_architecture.svg</span>
              <span className="ml-auto text-mini text-text-dim">6-layer multi-tier architecture · 4 global regions</span>
            </div>
            <div className="p-6" style={{ background: '#f5f5f0' }}>
              <img
                src={systemArchSvg}
                alt="Legitt AI System Architecture"
                className="w-full h-auto"
                style={{ maxHeight: '500px', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>

        {/* Layer annotations */}
        <div className="reveal">
          <h3 className="text-title-sm font-black text-text-main mb-6">Layer-by-Layer Breakdown</h3>
          <div className="space-y-3">
            {archLayerAnnotations.map((layer, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-5 border-border/60 hover:scale-101 transition-all duration-300"
                style={{ borderColor: layer.color + '18' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = layer.color + '45'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = layer.color + '18'; }}
              >
                <div className="grid md:grid-cols-[180px_1fr] gap-4 items-start">
                  <div>
                    <div
                      className="text-mini font-black tracking-widest uppercase mb-1"
                      style={{ color: layer.color }}
                    >
                      {layer.layer}
                    </div>
                    <div
                      className="text-mini font-mono px-2 py-1 rounded-lg text-text-dim"
                      style={{ background: layer.color + '10', border: `1px solid ${layer.color}25` }}
                    >
                      {layer.tech}
                    </div>
                  </div>
                  <p className="text-mini text-text-dim leading-relaxed">{layer.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-region callout */}
        <div className="reveal mt-10">
          <div
            className="rounded-2xl p-6 border flex flex-col md:flex-row gap-6 items-start"
            style={{ borderColor: 'rgba(167,139,250,0.2)', background: 'rgba(167,139,250,0.03)' }}
          >
            <div className="text-3xl flex-shrink-0">🌍</div>
            <div>
              <h4 className="text-small font-black text-text-main mb-2">Multi-Region Deployment Strategy</h4>
              <p className="text-mini text-text-dim leading-relaxed mb-3">
                Each region (USA, UAE, Europe, India) runs an independent stack: Nginx → Node.js App Servers → Redis.
                The database strategy varies by region: USA is the primary read-write region; UAE/Europe/India use
                client-specific S3 bucket replication for document storage (data residency) while sharing the primary
                MySQL cluster with regional read replicas. This satisfies GDPR data localization without full database
                duplication.
              </p>
              <div className="flex flex-wrap gap-3">
                {['USA (Primary)', 'UAE (Secondary)', 'Europe (GDPR)', 'India (Regional)'].map((r, i) => (
                  <span
                    key={i}
                    className="text-mini font-bold px-3 py-1 rounded-full"
                    style={{ color: '#a78bfa', background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.25)' }}
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

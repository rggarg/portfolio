import { performanceMetrics, autoSaveSteps } from '../../data/TipTapData';

export default function TipTapPerformance() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center">Optimization</p>
          <h2 className="text-heading font-black text-text-main mb-4">
            Performance & Auto-Save
          </h2>
          <p className="text-description text-text-dim max-w-2xl mx-auto leading-relaxed">
            Handling 50–100+ page contracts in the browser requires careful optimization at every layer -
            from ProseMirror transaction batching to Redis-buffered saves.
          </p>
        </div>

        {/* Metrics */}
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {performanceMetrics.map((m) => (
            <div
              key={m.label}
              className="glass-card rounded-xl p-5 text-center border-border/60 hover:scale-101 transition-all duration-300"
              style={{ borderColor: m.color + '20' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = m.color + '50'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = m.color + '20'; }}
            >
              <div className="text-display font-black mb-1" style={{ color: m.color, fontSize: '2rem' }}>{m.value}</div>
              <div className="text-small font-bold text-text-main mb-1">{m.label}</div>
              <div className="text-mini text-text-dim">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Auto-save flow + batching */}
        <div className="reveal grid lg:grid-cols-2 gap-10">
          {/* Auto-save steps */}
          <div>
            <h3 className="text-title-sm font-black text-text-main mb-6">Auto-Save Pipeline</h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-3 top-0 bottom-0 w-px" style={{ background: 'rgba(0,204,170,0.2)' }} />
              <div className="space-y-4 pl-10">
                {autoSaveSteps.map((step, i) => (
                  <div key={i} className="relative">
                    {/* Dot */}
                    <div
                      className="absolute -left-10 top-1 w-6 h-6 rounded-full flex items-center justify-center text-mini font-black"
                      style={{ background: '#00ccaa20', color: '#00ccaa', border: '1.5px solid #00ccaa40' }}
                    >
                      {i + 1}
                    </div>
                    <div className="glass-card rounded-xl p-4 border-border/60" style={{ borderColor: 'rgba(0,204,170,0.12)' }}>
                      <div className="text-small font-bold text-text-main mb-1">{step.title}</div>
                      <div className="text-mini text-text-dim">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Redis + Transaction batching */}
          <div className="space-y-6">
            <div>
              <h3 className="text-title-sm font-black text-text-main mb-5">Why Redis as Write Buffer?</h3>
              <div className="space-y-3">
                {[
                  { emoji: '⚡', title: 'Sub-millisecond writes', desc: 'Every debounced save hits Redis first - instantly acknowledged.' },
                  { emoji: '🛡️', title: 'DB protection', desc: 'MySQL/MongoDB only get flushed every few minutes - not on every keystroke.' },
                  { emoji: '🔄', title: 'TTL + AOF durability', desc: 'Redis AOF persistence means no data loss even if the process crashes.' },
                  { emoji: '📈', title: 'Horizontal scale', desc: 'Redis pub/sub enables multiple Node.js instances to share a broadcast bus.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-subtitle flex-shrink-0">{item.emoji}</span>
                    <div>
                      <div className="text-small font-bold text-text-main">{item.title}</div>
                      <div className="text-mini text-text-dim leading-snug">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transaction batching callout */}
            <div
              className="rounded-xl p-5 border"
              style={{ borderColor: 'rgba(0,204,170,0.2)', background: 'rgba(0,204,170,0.03)' }}
            >
              <h4 className="text-small font-bold tracking-widest uppercase mb-3" style={{ color: '#00ccaa' }}>
                ProseMirror Transaction Batching
              </h4>
              <pre
                className="text-mini font-mono leading-relaxed overflow-x-auto"
                style={{ color: '#a5f3d0' }}
              >{`// ✗ BAD: 3 separate DOM passes
editor.chain().setBold().run();
editor.chain().setItalic().run();
editor.chain().setFontSize(14).run();

// ✓ GOOD: single batched transaction
editor.chain()
  .setBold()
  .setItalic()
  .setFontSize(14)
  .run();`}</pre>
            </div>
          </div>
        </div>

        {/* Crash recovery note */}
        <div className="reveal mt-12">
          <div
            className="glass-card rounded-2xl p-6 border flex flex-col md:flex-row gap-6 items-start"
            style={{ borderColor: 'rgba(0,204,170,0.15)' }}
          >
            <div className="text-3xl flex-shrink-0">🔁</div>
            <div>
              <h4 className="text-small font-bold text-text-main mb-2">Crash Recovery Strategy</h4>
              <p className="text-mini text-text-dim leading-relaxed">
                No client-side storage (LocalStorage / IndexedDB). The server - Redis + Database - is the
                single source of truth. On reconnect, the client fetches the latest version from the server.
                Every save creates a new version entry: metadata in MySQL, content blob in MongoDB. Users can
                roll back to any previous save point.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

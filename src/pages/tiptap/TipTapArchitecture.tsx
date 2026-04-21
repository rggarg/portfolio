import { archLayerAnnotations } from '../../data/TipTapData';
import tiptapArchSvg from '../../assets/images/tiptap_architecture.svg';

export default function TipTapArchitecture() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center">System Design</p>
          <h2 className="text-heading font-black text-text-main mb-4">Architecture Overview</h2>
          <p className="text-description text-text-dim max-w-2xl mx-auto leading-relaxed">
            Six distinct layers — from custom TipTap extensions at the top to dual-database persistence at the
            bottom — each with a deliberate design rationale.
          </p>
        </div>

        <div className="reveal grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: SVG in a light-mode card panel */}
          <div className="glass-card rounded-2xl overflow-hidden border-border/60" style={{ borderColor: 'rgba(0,204,170,0.15)' }}>
            {/* Document-feel header bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-border/40" style={{ background: 'rgba(0,204,170,0.04)' }}>
              <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
              <span className="ml-4 text-mini text-text-dim font-mono">tiptap_architecture.svg</span>
            </div>
            {/* Light-mode card background for the SVG */}
            <div className="p-6" style={{ background: '#f5f5f0', borderRadius: '0 0 12px 12px' }}>
              <img
                src={tiptapArchSvg}
                alt="TipTap Editor Architecture Diagram"
                className="w-full h-auto"
                style={{ maxHeight: '600px', objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Right: layer-by-layer annotations */}
          <div className="flex flex-col gap-4">
            <h3 className="text-title font-black text-text-main mb-2">Layer Breakdown</h3>
            {archLayerAnnotations.map((layer, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-4 border-border/60 group hover:scale-101 transition-all duration-300"
                style={{ borderColor: layer.color + '22' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = layer.color + '50'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = layer.color + '22'; }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: layer.color }} />
                  <span className="text-small font-bold" style={{ color: layer.color }}>
                    {layer.layer}
                  </span>
                </div>
                <p className="text-mini text-text-dim leading-relaxed pl-5">
                  {layer.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Data flow banner */}
        <div className="reveal mt-14">
          <div
            className="rounded-2xl p-6 border text-center"
            style={{
              borderColor: 'rgba(0,204,170,0.2)',
              background: 'rgba(0,204,170,0.03)',
            }}
          >
            <p className="text-mini tracking-widest uppercase font-bold mb-3" style={{ color: '#00ccaa' }}>
              End-to-End Data Flow
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-small font-mono">
              {[
                { label: 'User Types', color: '#00ccaa' },
                { label: '→', color: '#444' },
                { label: 'TipTap onChange', color: '#00ccaa' },
                { label: '→', color: '#444' },
                { label: 'Debounce 3s', color: '#60a5fa' },
                { label: '→', color: '#444' },
                { label: 'Socket.io emit', color: '#60a5fa' },
                { label: '→', color: '#444' },
                { label: 'Redis cache', color: '#f5a623' },
                { label: '→', color: '#444' },
                { label: 'MySQL + MongoDB', color: '#f5a623' },
                { label: '→', color: '#444' },
                { label: 'Broadcast to viewers', color: '#a78bfa' },
              ].map((item, i) => (
                <span key={i} style={{ color: item.color }} className="font-bold">
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

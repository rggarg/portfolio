import { useNavigate } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { modules } from '../../data/LegittCLMData';

export default function LegittModules() {
  const navigate = useNavigate();

  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center">Platform Scope</p>
          <h2 className="text-heading font-black text-text-main mb-4">7 Core Modules</h2>
          <p className="text-description text-text-dim max-w-2xl mx-auto leading-relaxed">
            Every module was personally architected and implemented - from the collaborative editor at the
            core to the enterprise integrations at the edges.
          </p>
        </div>

        <div className="reveal grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className="glass-card rounded-2xl p-6 border-border/60 flex flex-col transition-all duration-300 hover:scale-101 group"
              style={{ borderColor: mod.color + '18' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = mod.color + '45';
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${mod.color}0c`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = mod.color + '18';
                (e.currentTarget as HTMLElement).style.boxShadow = '';
              }}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: mod.color + '16', border: `1px solid ${mod.color}35` }}
                >
                  {mod.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-small font-black text-text-main leading-tight">{mod.title}</div>
                  <div
                    className="text-micro font-bold tracking-widest uppercase mt-0.5"
                    style={{ color: mod.color }}
                  >
                    {mod.subtitle}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-mini text-text-dim leading-relaxed mb-4 flex-1">{mod.desc}</p>

              {/* Highlights */}
              <div className="space-y-1.5 mb-5">
                {mod.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-mini text-text-dim">
                    <span className="flex-shrink-0 mt-0.5" style={{ color: mod.color }}>✓</span>
                    {h}
                  </div>
                ))}
              </div>

              {/* CTA */}
              {mod.exploreMore ? (
                <button
                  onClick={() => navigate(mod.exploreLink!)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-small font-bold transition-all duration-300 hover:gap-3 mt-auto"
                  style={{
                    color: mod.color,
                    background: mod.color + '10',
                    border: `1px solid ${mod.color}30`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = mod.color + '20';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = mod.color + '10';
                  }}
                >
                  Explore Full Case Study
                  <ArrowRight size={13} />
                </button>
              ) : (
                <div
                  className="flex items-center gap-2 text-mini font-medium mt-auto pt-2 border-t"
                  style={{ borderColor: mod.color + '15', color: mod.color }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: mod.color }} />
                  Deep-dive below ↓
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Legend note */}
        <div className="reveal mt-8 flex flex-wrap justify-center gap-6 text-mini text-text-dim">
          <div className="flex items-center gap-2">
            <ArrowRight size={12} className="text-text-muted" />
            <span>Modules with "Explore Full Case Study" have dedicated in-depth case studies</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-text-muted" />
            <span>Other modules are detailed in depth below on this page</span>
          </div>
        </div>
      </div>
    </section>
  );
}

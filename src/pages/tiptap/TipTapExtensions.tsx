import { useState } from 'react';
import { extensions } from '../../data/TipTapData';

export default function TipTapExtensions() {
  const [activeTab, setActiveTab] = useState(0);
  const ext = extensions[activeTab];

  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center">Engineering Deep-Dive</p>
          <h2 className="text-heading font-black text-text-main mb-4">Custom TipTap Extensions</h2>
          <p className="text-description text-text-dim max-w-2xl mx-auto leading-relaxed">
            Three production-built extensions that transform a generic rich-text editor into a
            contract-specific drafting and signature platform.
          </p>
        </div>

        {/* Tab selector */}
        <div className="reveal flex flex-col sm:flex-row gap-3 mb-10">
          {extensions.map((e, i) => (
            <button
              key={e.id}
              onClick={() => setActiveTab(i)}
              className="flex-1 flex items-center gap-3 px-5 py-4 rounded-xl border text-left transition-all duration-300"
              style={{
                borderColor: activeTab === i ? e.color + '60' : 'rgba(255,255,255,0.06)',
                background: activeTab === i ? e.color + '10' : 'transparent',
              }}
            >
              <span className="text-display leading-none">{e.icon}</span>
              <div>
                <div className="text-small font-bold text-text-main">{e.name}</div>
                <div className="text-mini text-text-dim">{e.subtitle}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="reveal glass-card rounded-2xl p-8 border-border/60" style={{ borderColor: ext.color + '20' }}>
          {/* Overview */}
          <p
            className="text-description leading-relaxed mb-8 pb-8 border-b"
            style={{ borderColor: ext.color + '20', color: '#e0e0d8' }}
          >
            {ext.overview}
          </p>

          {/* Redlining-specific content */}
          {ext.id === 'redlining' && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left */}
              <div className="space-y-8">
                {/* Data structure */}
                <div>
                  <h4 className="text-small font-bold tracking-widest uppercase mb-3" style={{ color: ext.color }}>
                    Node Data Structure
                  </h4>
                  <pre
                    className="text-mini font-mono p-4 rounded-xl overflow-x-auto leading-relaxed"
                    style={{ background: 'rgba(0,0,0,0.4)', color: '#a5f3d0', border: `1px solid ${ext.color}20` }}
                  >
                    {ext.dataStructure}
                  </pre>
                </div>
                {/* Granularity */}
                <div>
                  <h4 className="text-small font-bold tracking-widest uppercase mb-3" style={{ color: ext.color }}>
                    Accept / Reject Granularity
                  </h4>
                  <div className="space-y-3">
                    {ext.granularity!.map((g, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: ext.color + '08' }}>
                        <span
                          className="text-micro font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5"
                          style={{ background: ext.color + '20', color: ext.color }}
                        >
                          {i === 0 ? 'Per-item' : 'Bulk'}
                        </span>
                        <div>
                          <div className="text-small font-bold text-text-main mb-0.5">{g.level}</div>
                          <div className="text-mini text-text-dim">{g.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Visual rules */}
                <div>
                  <h4 className="text-small font-bold tracking-widest uppercase mb-3" style={{ color: ext.color }}>
                    Visual Rendering Rules
                  </h4>
                  <div className="space-y-2">
                    {ext.visualRules!.map((rule, i) => (
                      <div key={i} className="flex items-center gap-2 text-mini text-text-dim">
                        <span style={{ color: ext.color }}>→</span>
                        {rule}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="space-y-8">
                {/* Code */}
                <div>
                  <h4 className="text-small font-bold tracking-widest uppercase mb-3" style={{ color: ext.color }}>
                    Accept / Reject Implementation
                  </h4>
                  <pre
                    className="text-mini font-mono p-4 rounded-xl overflow-x-auto leading-relaxed"
                    style={{ background: 'rgba(0,0,0,0.4)', color: '#a5f3d0', border: `1px solid ${ext.color}20` }}
                  >
                    {ext.code}
                  </pre>
                </div>
                {/* Perf */}
                <div>
                  <h4 className="text-small font-bold tracking-widest uppercase mb-3" style={{ color: ext.color }}>
                    Performance Optimizations
                  </h4>
                  <div className="space-y-2">
                    {ext.perf!.map((p, i) => (
                      <div key={i} className="flex items-start gap-2 text-mini text-text-dim">
                        <span style={{ color: ext.color }} className="flex-shrink-0 mt-0.5">✓</span>
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Signature-specific content */}
          {ext.id === 'signature' && (
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div>
                  <h4 className="text-small font-bold tracking-widest uppercase mb-3" style={{ color: ext.color }}>
                    Node Data Structure
                  </h4>
                  <pre
                    className="text-mini font-mono p-4 rounded-xl overflow-x-auto leading-relaxed"
                    style={{ background: 'rgba(0,0,0,0.4)', color: '#c4b5fd', border: `1px solid ${ext.color}20` }}
                  >
                    {ext.dataStructure}
                  </pre>
                </div>
                <div>
                  <h4 className="text-small font-bold tracking-widest uppercase mb-3" style={{ color: ext.color }}>
                    Placement Methods
                  </h4>
                  <div className="space-y-3">
                    {ext.methods!.map((m, i) => (
                      <div key={i} className="p-4 rounded-xl border" style={{ borderColor: ext.color + '25', background: ext.color + '06' }}>
                        <div className="text-small font-bold text-text-main mb-1.5">{m.name}</div>
                        <div className="text-mini text-text-dim leading-snug">{m.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-small font-bold tracking-widest uppercase mb-4" style={{ color: ext.color }}>
                  Signature Workflow Integration
                </h4>
                <div className="space-y-3">
                  {ext.integrationSteps!.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-mini font-black flex-shrink-0"
                        style={{ background: ext.color + '20', color: ext.color }}
                      >
                        {i + 1}
                      </div>
                      <p className="text-mini text-text-dim leading-snug pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Collaboration-specific content */}
          {ext.id === 'collaboration' && (
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                {/* Design decision callout */}
                <div className="p-5 rounded-xl border" style={{ borderColor: ext.color + '30', background: ext.color + '06' }}>
                  <div className="text-mini font-bold tracking-widest uppercase mb-2" style={{ color: ext.color }}>
                    Why Not Simultaneous Editing?
                  </div>
                  <p className="text-mini text-text-dim leading-relaxed">{ext.designDecision}</p>
                </div>
                {/* Data flow */}
                <div>
                  <h4 className="text-small font-bold tracking-widest uppercase mb-3" style={{ color: ext.color }}>
                    Real-Time Data Flow
                  </h4>
                  <div className="flex flex-wrap items-center gap-1 p-4 rounded-xl" style={{ background: 'rgba(0,0,0,0.3)' }}>
                    {ext.dataFlow!.split('→').map((step, i, arr) => (
                      <span key={i} className="flex items-center gap-1">
                        <span className="text-mini font-mono text-text-dim">{step.trim()}</span>
                        {i < arr.length - 1 && <span className="text-mini" style={{ color: ext.color }}>→</span>}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Benefits */}
                <div>
                  <h4 className="text-small font-bold tracking-widest uppercase mb-3" style={{ color: ext.color }}>
                    Benefits of this Model
                  </h4>
                  <div className="space-y-2">
                    {ext.benefits!.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-mini text-text-dim">
                        <span style={{ color: ext.color }} className="flex-shrink-0">✓</span>
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-small font-bold tracking-widest uppercase mb-4" style={{ color: ext.color }}>
                  Permission Handoff Workflow
                </h4>
                <div className="space-y-3">
                  {ext.permissionFlow!.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-mini font-black flex-shrink-0"
                        style={{ background: ext.color + '20', color: ext.color }}
                      >
                        {i + 1}
                      </div>
                      <p className="text-mini text-text-dim leading-snug pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

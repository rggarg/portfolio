import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { features } from '../../data/ESignData';

export default function ESignFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);
  const active = features[activeFeature];

  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center">Platform Capabilities</p>
          <h2 className="text-heading font-black text-text-main mb-3">5 Core Differentiators</h2>
          <p className="text-text-dim text-description max-w-2xl mx-auto">
            Each feature was designed to address a gap in existing e-signature platforms and deliver measurable value to users.
          </p>
        </div>

        <div className="reveal grid md:grid-cols-layout-feat gap-6 items-start">
          {/* Feature selector sidebar */}
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {features.map((f, i) => (
              <button
                key={f.number}
                onClick={() => setActiveFeature(i)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-200 flex-shrink-0 md:flex-shrink md:w-full ${
                  activeFeature === i
                    ? 'border-accent/40 bg-accent/5 text-text-main'
                    : 'border-border text-text-dim hover:border-white/15 hover:text-text-main'
                }`}
              >
                <span
                  className="text-mini font-black tracking-wider flex-shrink-0"
                  style={{ color: activeFeature === i ? f.color : '#555' }}
                >
                  {f.number}
                </span>
                <span className="text-description font-bold truncate">{f.title}</span>
              </button>
            ))}
          </div>

          {/* Feature detail card */}
          <div
            className="glass-card rounded-2xl p-8 border-border/60 transition-all duration-300"
            style={{ borderColor: active.color + '25' }}
          >
            {/* Number + phase color */}
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-mini font-black tracking-widest uppercase px-2.5 py-1 rounded"
                style={{
                  color: active.color,
                  background: active.color + '18',
                  border: `1px solid ${active.color}33`,
                }}
              >
                Feature {active.number}
              </span>
            </div>

            <h3 className="text-title-lg font-black text-text-main mb-2">{active.title}</h3>
            <p className="text-description text-text-dim mb-6 italic">{active.tagline}</p>

            {/* Bullets */}
            <ul className="space-y-3 mb-8">
              {active.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-description text-text-dim leading-relaxed">
                  <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: active.color }} />
                  {b}
                </li>
              ))}
            </ul>

            {/* Impact */}
            <div
              className="flex items-start gap-3 p-4 rounded-xl border"
              style={{
                borderColor: active.color + '30',
                background: active.color + '06',
              }}
            >
              <span
                className="text-micro font-bold tracking-widest uppercase flex-shrink-0 mt-0.5"
                style={{ color: active.color }}
              >
                Impact
              </span>
              <p className="text-description text-text-dim leading-relaxed">{active.impact}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

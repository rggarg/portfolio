import { CheckCircle } from 'lucide-react';
import { problems, solutions } from '../../data/ESignData';

export default function ESignChallenge() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center">The Challenge</p>
          <h2 className="text-heading font-black text-text-main mb-4">
            Beyond Digital Signatures
          </h2>
          <p className="text-description text-text-dim max-w-2xl mx-auto leading-relaxed">
            Existing tools like DocuSign and Adobe Sign solve the basic problem of getting documents signed digitally
            — but they treat documents as black boxes, leaving critical intelligence on the table.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Problem */}
          <div className="reveal-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-red-400 text-[12px] font-bold">✕</span>
              </div>
              <h3 className="text-title font-black text-text-main">The Gaps</h3>
            </div>
            <div className="space-y-4">
              {problems.map((p, i) => (
                <div key={i} className="flex items-start gap-3 text-text-dim text-description leading-relaxed">
                  <span className="w-5 h-5 rounded-full border border-red-500/40 text-red-400 flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                    ✕
                  </span>
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="text-accent text-[12px] font-bold">✓</span>
              </div>
              <h3 className="text-title font-black text-text-main">Our Approach</h3>
            </div>
            <div className="space-y-4">
              {solutions.map((s, i) => (
                <div key={i} className="flex items-start gap-3 text-text-dim text-description leading-relaxed">
                  <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core challenge callout */}
        <div className="reveal mt-16">
          <div className="glass-card rounded-2xl p-8 border-accent/10 bg-accent/[0.02]">
            <p className="text-[11px] tracking-widest uppercase text-accent mb-3 font-bold">The Core Engineering Challenge</p>
            <p className="text-subtitle text-text-main leading-relaxed font-medium">
              "How do you build a workflow orchestration system that handles complex, multi-department approval chains
              — where routing decisions depend on dynamic document analysis — while maintaining performance, reliability,
              and user experience competitive with billion-dollar incumbents?"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

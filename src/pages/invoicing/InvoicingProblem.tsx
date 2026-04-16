import { CheckCircle } from 'lucide-react';
import { beforeAfter } from '../../data/InvoicingWorkflowData';

export default function InvoicingProblem() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Problem */}
          <div className="reveal-left">
            <p className="section-label">The Problem</p>
            <h2 className="text-heading font-black text-text-main mb-6">
              Manual, Error-Prone, Slow
            </h2>
            <div className="space-y-4">
              {beforeAfter.before.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-text-dim text-description leading-relaxed"
                >
                  <span className="w-5 h-5 rounded-full border border-red-500/40 text-red-400 flex items-center justify-center text-micro flex-shrink-0 mt-0.5">
                    ✕
                  </span>
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="reveal">
            <p className="section-label">The Solution</p>
            <h2 className="text-heading font-black text-text-main mb-6">
              Automated, Accurate, Fast
            </h2>
            <div className="space-y-4">
              {beforeAfter.after.map((s, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-text-dim text-description leading-relaxed"
                >
                  <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Time callout banner */}
        <div className="reveal mt-16 glass-card rounded-2xl p-8 text-center border-accent/20">
          <p className="text-text-dim text-description mb-2">Time to complete full billing cycle</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="text-center">
              <div className="text-display font-black text-red-400">1–2 Weeks</div>
              <div className="text-mini text-text-dim uppercase tracking-widest mt-1">Before</div>
            </div>
            <div className="text-3xl text-text-muted">→</div>
            <div className="text-center">
              <div className="text-display font-black text-accent">10–15 Min</div>
              <div className="text-mini text-text-dim uppercase tracking-widest mt-1">After</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

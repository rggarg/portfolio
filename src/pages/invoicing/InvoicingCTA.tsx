import { useNavigate } from 'react-router-dom';
import { Zap } from 'lucide-react';

export default function InvoicingCTA() {
  const navigate = useNavigate();

  return (
    <section className="py-32 border-t border-border/40">
      <div className="section-container text-center">
        <div className="reveal max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-8">
            <Zap size={28} className="text-accent" />
          </div>
          <h2 className="text-heading font-black text-text-main mb-4">
            From Weeks of Work to 15 Minutes
          </h2>
          <p className="text-description text-text-dim leading-relaxed mb-10">
            Built solo in one month, this system processes 2–3K contracts daily, applies
            intelligent billing logic across three invoice types, and routes everything through a
            structured approval chain - giving the finance team confidence and speed they never had
            before. The platform continues to run reliably, handling every billing cycle without
            manual intervention.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="btn-ghost text-description py-3 px-6"
            >
              ← Back to Portfolio
            </button>
            <a
              href="#flow-section"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('flow-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary text-description py-3 px-6"
            >
              View Full Flow ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

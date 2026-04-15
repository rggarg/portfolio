import { ExternalLink, Code2, Layers, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ESignCTA() {
  const navigate = useNavigate();

  const expertise = [
    { icon: Layers, label: 'Full-Stack Development', sub: 'MERN + Python Microservices' },
    { icon: Zap, label: 'Technical Leadership', sub: 'Design → Architecture → Delivery' },
    { icon: Code2, label: 'AI/ML Integration', sub: 'OpenAI + Custom-Trained Models' },
    { icon: ExternalLink, label: 'Product Thinking', sub: 'Competitive differentiation at scale' },
  ];

  return (
    <section className="py-32 border-t border-border/40">
      <div className="section-container text-center">
        <div className="reveal max-w-3xl mx-auto">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-8">
            <Zap size={28} className="text-accent" />
          </div>

          <h2 className="text-heading font-black text-text-main mb-4">
            A Product Built to Win Against Industry Giants
          </h2>
          <p className="text-description text-text-dim leading-relaxed mb-10 max-w-2xl mx-auto">
            I led the complete product engineering of Legitt AI's e-signature platform — from architecture to deployment,
            covering small businesses to enterprise clients globally. The platform competes directly with DocuSign and Adobe Sign
            with features they simply don't offer.
          </p>

          {/* Expertise chips */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {expertise.map((e, i) => {
              const Icon = e.icon;
              return (
                <div
                  key={e.label}
                  className="glass-card rounded-xl p-4 border-border/60 hover:border-accent/20 transition-all duration-300 group"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <Icon size={18} className="text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-[12px] font-bold text-text-main mb-0.5">{e.label}</p>
                  <p className="text-[11px] text-text-dim">{e.sub}</p>
                </div>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://legittai.com/electronic-signature"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-description py-3 px-7 inline-flex items-center gap-2"
            >
              Explore Live Platform
              <ExternalLink size={14} />
            </a>
            <button
              onClick={() => navigate('/')}
              className="btn-ghost text-description py-3 px-6"
            >
              ← Back to Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-24 pt-8 text-center text-description text-text-muted">
        <div className="section-container">
          Rohit Garg · Lead Product Engineer · {new Date().getFullYear()}
        </div>
      </footer>
    </section>
  );
}

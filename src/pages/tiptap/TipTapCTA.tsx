import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TipTapCTA() {
  const navigate = useNavigate();

  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        <div className="reveal text-center">
          <div
            className="glass-card rounded-3xl p-14 border relative overflow-hidden max-w-3xl mx-auto"
            style={{ borderColor: 'rgba(0,204,170,0.2)' }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,204,170,0.07) 0%, transparent 70%)' }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="h-px w-10" style={{ background: 'rgba(0,204,170,0.4)' }} />
                <span className="text-mini tracking-widest uppercase font-bold" style={{ color: '#00ccaa' }}>
                  Live Product
                </span>
                <span className="h-px w-10" style={{ background: 'rgba(0,204,170,0.4)' }} />
              </div>

              <h2 className="text-heading font-black text-text-main mb-4">
                See It in Action
              </h2>
              <p className="text-description text-text-dim max-w-lg mx-auto leading-relaxed mb-10">
                The editor is live on the Legitt AI platform. Open a contract, toggle redlining,
                place a signature field, and experience the format conversion pipeline firsthand.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://app.legittai.com/legitt/text-editor-v2?document_type=contract"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-description text-primary transition-all duration-300"
                  style={{ background: '#00ccaa' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#00b399'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#00ccaa'; }}
                >
                  Open Live Editor
                  <ExternalLink size={14} />
                </a>
                <button
                  onClick={() => navigate('/')}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-description text-text-dim border border-border hover:border-border/80 transition-all duration-300"
                >
                  ← Back to Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

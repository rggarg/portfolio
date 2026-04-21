import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LegittCTA() {
  const navigate = useNavigate();

  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        <div className="reveal text-center">
          <div
            className="glass-card rounded-3xl p-14 border relative overflow-hidden max-w-3xl mx-auto"
            style={{ borderColor: 'rgba(167,139,250,0.22)' }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(167,139,250,0.08) 0%, transparent 70%)' }}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="h-px w-10" style={{ background: 'rgba(167,139,250,0.4)' }} />
                <span className="text-mini tracking-widest uppercase font-bold" style={{ color: '#a78bfa' }}>Live Platform</span>
                <span className="h-px w-10" style={{ background: 'rgba(167,139,250,0.4)' }} />
              </div>

              <h2 className="text-heading font-black text-text-main mb-4">
                Explore Legitt AI
              </h2>
              <p className="text-description text-text-dim max-w-lg mx-auto leading-relaxed mb-10">
                The complete CLM platform is live at{' '}
                <span className="text-text-main font-semibold">legittai.com</span> -
                create a free account to experience the collaborative editor, approval workflows,
                and AI-powered contract review firsthand.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://legittai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-description text-primary transition-all duration-300"
                  style={{ background: '#a78bfa' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#9668f8'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#a78bfa'; }}
                >
                  Visit Legitt AI
                  <ExternalLink size={14} />
                </a>
                <button
                  onClick={() => navigate('/')}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-description text-text-dim border border-border hover:border-border/80 transition-all duration-300"
                >
                  ← Back to Portfolio
                </button>
              </div>

              {/* Sub-case study links */}
              <div className="mt-10 pt-8 border-t border-border/40">
                <p className="text-mini text-text-dim mb-4 tracking-wide">Explore individual module case studies:</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    { label: 'Collaborative Editor', link: '/collaborative-editor', color: '#a78bfa' },
                    { label: 'E-Signature Platform', link: '/esign-platform', color: '#00ccaa' },
                    { label: 'Sales Contract Flow', link: '/sales-contract-workflow', color: '#f472b6' },
                  ].map((item) => (
                    <button
                      key={item.link}
                      onClick={() => navigate(item.link)}
                      className="text-small font-bold px-4 py-2 rounded-full border transition-all duration-300"
                      style={{ color: item.color, borderColor: item.color + '35', background: item.color + '08' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = item.color + '18'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = item.color + '08'; }}
                    >
                      {item.label} →
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

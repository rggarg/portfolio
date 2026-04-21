import { ArrowLeft, ChevronDown, Zap, Clock, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { heroStats, techTags } from '../../data/TipTapData';
import legittLogo from '../../assets/images/legitt-ai-logo.webp';

export default function TipTapHero() {
  const navigate = useNavigate();

  return (
    <>
      {/* ── Back nav ── */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 glass-card px-4 py-2.5 rounded-full text-description text-text-dim hover:text-accent border-border/50 transition-all duration-300 hover:border-accent/30 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">Back to Portfolio</span>
        </button>
      </div>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
        {/* Radial glow - teal */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(0,204,170,0.07) 0%, transparent 70%)'
        }} />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-800 h-800 rounded-full opacity-3 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00ccaa, transparent 70%)' }}
        />

        <div className="section-container pt-32 pb-24 text-center relative z-10">
          {/* Label */}
          <div className="animate-fade-in flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-12" style={{ background: 'rgba(0,204,170,0.4)' }} />
            <span className="text-description tracking-widest uppercase" style={{ color: '#00ccaa' }}>Case Study</span>
            <span className="h-px w-12" style={{ background: 'rgba(0,204,170,0.4)' }} />
          </div>

          {/* Title */}
          <h1 className="animate-fade-up text-hero font-black leading-tight-1 tracking-tight mb-6">
            Real-Time Collaborative{' '}
            <br />
            <span style={{ color: '#00ccaa' }}>Contract Editor</span>
            <br />
            with Redlining
          </h1>

          {/* Tagline */}
          <p
            className="animate-fade-up text-subtitle text-text-dim max-w-3xl mx-auto leading-relaxed mb-10"
            style={{ animationDelay: '0.1s' }}
          >
            A production-grade{' '}
            <span className="text-text-main font-semibold">TipTap-powered editor</span>{' '}
            handling 100+ page contracts with{' '}
            <span className="text-text-main font-semibold">track changes (redlining)</span>,{' '}
            <span className="text-text-main font-semibold">in-document signature fields</span>, and{' '}
            seamless DOCX ↔ Tiptap ↔ PDF format conversion.
          </p>

          {/* Tags */}
          <div
            className="animate-fade-up flex flex-wrap justify-center gap-2 mb-12"
            style={{ animationDelay: '0.15s' }}
          >
            {techTags.map((tag) => (
              <span
                key={tag}
                className="text-small font-medium px-3 py-1 rounded-full border border-border text-text-dim transition-all duration-200"
                style={{ borderColor: 'rgba(0,204,170,0.2)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,204,170,0.5)';
                  (e.currentTarget as HTMLElement).style.color = '#00ccaa';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,204,170,0.2)';
                  (e.currentTarget as HTMLElement).style.color = '';
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Built at badge */}
          <div
            className="animate-fade-up flex items-center justify-center mb-10"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-micro tracking-wide-em uppercase text-text-dim font-medium">Built at</span>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/60 bg-white/[0.03] backdrop-blur-sm transition-all duration-300"
                style={{ borderColor: 'rgba(0,204,170,0.2)' }}
              >
                <img
                  src={legittLogo}
                  alt="Legitt AI"
                  className="h-7 w-auto object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
            </div>
          </div>

          {/* Role strip */}
          <div
            className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4 text-description text-text-dim mb-14"
            style={{ animationDelay: '0.25s' }}
          >
            <span className="flex items-center gap-2">
              <Zap size={14} style={{ color: '#00ccaa' }} />
              Lead Product Engineer
            </span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="flex items-center gap-2">
              <Clock size={14} style={{ color: '#00ccaa' }} />
              2+ years of active development
            </span>
          </div>

          {/* Hero stats grid */}
          <div
            className="animate-fade-up grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12"
            style={{ animationDelay: '0.3s' }}
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl p-4 min-h-24 flex flex-col items-center justify-center text-center border-border/60 transition-all duration-300"
                style={{ borderColor: 'rgba(0,204,170,0.15)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,204,170,0.35)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(0,204,170,0.08)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,204,170,0.15)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '';
                }}
              >
                <div className="text-title-md font-black leading-none mb-1.5 whitespace-nowrap" style={{ color: '#00ccaa' }}>{stat.value}</div>
                <div className="text-mini text-text-dim tracking-wide leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: '0.35s' }}
          >
            <a
              href="https://app.legittai.com/legitt/text-editor-v2?document_type=contract"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-description text-primary transition-all duration-300"
              style={{ background: '#00ccaa' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#00b399'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#00ccaa'; }}
            >
              View Live Editor
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted animate-bounce">
          <span className="text-mini tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} />
        </div>
      </section>
    </>
  );
}

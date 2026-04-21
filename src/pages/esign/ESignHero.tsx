import { ArrowLeft, ChevronDown, Zap, Users, Clock, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { heroStats } from '../../data/ESignData';
import legittLogo from '../../assets/images/legitt-ai-logo.webp';

export default function ESignHero() {
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
        {/* Radial glow */}
        <div className="absolute inset-0 mesh-gradient pointer-events-none" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-800 h-800 rounded-full opacity-4 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00ff88, transparent 70%)' }}
        />

        <div className="section-container pt-32 pb-24 text-center relative z-10">
          {/* Label */}
          <div className="animate-fade-in flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-12 bg-accent/40" />
            <span className="text-description tracking-widest uppercase text-accent">Case Study</span>
            <span className="h-px w-12 bg-accent/40" />
          </div>

          {/* Title */}
          <h1 className="animate-fade-up text-hero font-black leading-tight-1 tracking-tight mb-6">
            Legitt AI{' '}
            <span className="accent-gradient">E-Signature</span>
            <br />
            Platform
          </h1>

          {/* Tagline */}
          <p
            className="animate-fade-up text-subtitle text-text-dim max-w-3xl mx-auto leading-relaxed mb-10"
            style={{ animationDelay: '0.1s' }}
          >
            Reimagining contract execution with{' '}
            <span className="text-text-main font-semibold">intelligent document analysis</span>,{' '}
            <span className="text-text-main font-semibold">AI-driven workflow automation</span>, and{' '}
            <span className="text-text-main font-semibold">multi-channel signature delivery</span> - competing with DocuSign and Adobe Sign.
          </p>

          {/* Tags */}
          <div
            className="animate-fade-up flex flex-wrap justify-center gap-2 mb-12"
            style={{ animationDelay: '0.15s' }}
          >
            {['React.js', 'Node.js', 'SQL', 'Python', 'OpenAI GPT', 'Custom AI Models', 'WebSockets', 'SMS Gateway'].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-small font-medium px-3 py-1 rounded-full border border-border text-text-dim hover:border-accent/40 hover:text-accent transition-all duration-200"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          {/* Built by badge */}
          <div
            className="animate-fade-up flex items-center justify-center mb-10"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-micro tracking-wide-em uppercase text-text-dim font-medium">Built at</span>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/60 bg-white/[0.03] backdrop-blur-sm hover:border-accent/30 transition-all duration-300">
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
              <Zap size={14} className="text-accent" />
              Lead Product Engineer
            </span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="flex items-center gap-2">
              <Users size={14} className="text-accent" />
              Led team of 2–4 engineers
            </span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-accent" />
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
                className="glass-card rounded-xl p-4 min-h-24 flex flex-col items-center justify-center text-center border-border/60 hover:border-accent/30 transition-all duration-300"
              >
                <div className="text-title-md font-black text-accent leading-none mb-1.5 whitespace-nowrap">{stat.value}</div>
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
              href="https://legittai.com/electronic-signature"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-description py-3 px-7 inline-flex items-center gap-2"
            >
              Explore Live Platform
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

import { ArrowLeft, ChevronDown, Zap, Users, Globe, Clock, ExternalLink, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { heroStats, techTags, heroBadges } from '../../data/LegittCLMData';
import legittLogo from '../../assets/images/legitt-ai-logo.webp';

export default function LegittHero() {
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
        {/* Radial glow - purple */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 25%, rgba(167,139,250,0.10) 0%, transparent 70%)',
        }} />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-800 h-800 rounded-full opacity-3 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #a78bfa, transparent 70%)' }}
        />

        <div className="section-container pt-32 pb-24 text-center relative z-10">
          {/* Case study label */}
          <div className="animate-fade-in flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12" style={{ background: 'rgba(167,139,250,0.5)' }} />
            <span className="text-description tracking-widest uppercase font-bold" style={{ color: '#a78bfa' }}>Flagship Case Study · #01</span>
            <span className="h-px w-12" style={{ background: 'rgba(167,139,250,0.5)' }} />
          </div>

          {/* Title */}
          <h1 className="animate-fade-up text-hero font-black leading-tight-1 tracking-tight mb-6">
            Legitt AI -{' '}
            <br />
            <span style={{ color: '#a78bfa' }}>AI-Powered Contract</span>
            <br />
            Lifecycle Management
          </h1>

          {/* Tagline */}
          <p
            className="animate-fade-up text-subtitle text-text-dim max-w-3xl mx-auto leading-relaxed mb-8"
            style={{ animationDelay: '0.1s' }}
          >
            A complete enterprise CLM platform built from scratch - featuring a{' '}
            <span className="text-text-main font-semibold">custom TipTap collaborative editor</span>,{' '}
            <span className="text-text-main font-semibold">AI-powered contract generation & review</span>,{' '}
            bidirectional Salesforce integration, and multi-party signature orchestration - deployed across{' '}
            <span className="text-text-main font-semibold">4 global regions</span>.
          </p>

          {/* Compliance badges */}
          <div
            className="animate-fade-up flex flex-wrap justify-center gap-2 mb-8"
            style={{ animationDelay: '0.12s' }}
          >
            {heroBadges.map((b) => (
              <span
                key={b}
                className="text-mini font-bold px-3 py-1 rounded-full"
                style={{ color: '#a78bfa', background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.3)' }}
              >
                {b}
              </span>
            ))}
          </div>

          {/* Tech tags */}
          <div
            className="animate-fade-up flex flex-wrap justify-center gap-2 mb-10"
            style={{ animationDelay: '0.15s' }}
          >
            {techTags.map((tag) => (
              <span
                key={tag}
                className="text-small font-medium px-3 py-1 rounded-full border border-border text-text-dim transition-all duration-200"
                style={{ borderColor: 'rgba(167,139,250,0.2)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.5)';
                  (e.currentTarget as HTMLElement).style.color = '#a78bfa';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.2)';
                  (e.currentTarget as HTMLElement).style.color = '';
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Built at badge */}
          <div
            className="animate-fade-up flex items-center justify-center mb-8"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-micro tracking-wide-em uppercase text-text-dim font-medium">Built at</span>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/60 bg-white/[0.03] backdrop-blur-sm transition-all duration-300"
                style={{ borderColor: 'rgba(167,139,250,0.25)' }}
              >
                <img src={legittLogo} alt="Legitt AI" className="h-7 w-auto object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
              </div>
            </div>
          </div>

          {/* Role strip */}
          <div
            className="animate-fade-up flex flex-wrap items-center justify-center gap-4 text-description text-text-dim mb-12"
            style={{ animationDelay: '0.22s' }}
          >
            <span className="flex items-center gap-2">
              <Zap size={14} style={{ color: '#a78bfa' }} />
              Lead Product Engineer
            </span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="flex items-center gap-2">
              <Users size={14} style={{ color: '#a78bfa' }} />
              Team of 10–12 engineers
            </span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="flex items-center gap-2">
              <Clock size={14} style={{ color: '#a78bfa' }} />
              2+ years of continuous development
            </span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="flex items-center gap-2">
              <Globe size={14} style={{ color: '#a78bfa' }} />
              USA · UAE · Europe · India
            </span>
          </div>

          {/* Hero stats grid */}
          <div
            className="animate-fade-up grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12"
            style={{ animationDelay: '0.28s' }}
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl p-4 min-h-24 flex flex-col items-center justify-center text-center border-border/60 transition-all duration-300"
                style={{ borderColor: stat.color + '20' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = stat.color + '50';
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 24px ${stat.color}12`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = stat.color + '20';
                  (e.currentTarget as HTMLElement).style.boxShadow = '';
                }}
              >
                <div className="text-title-md font-black leading-none mb-1.5 whitespace-nowrap" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-mini text-text-dim tracking-wide leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: '0.33s' }}
          >
            <a
              href="https://legittai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-description text-primary transition-all duration-300"
              style={{ background: '#a78bfa' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#9668f8'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#a78bfa'; }}
            >
              Visit Platform
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

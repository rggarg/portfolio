import { useState, useEffect } from 'react';
import { personalInfo, stats } from '../../../data/portfolio';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import legittLogo from '../../../assets/images/legitt-ai-logo.webp';

const products: { num: string; title: string; sub: string; color: string; link: string }[] = [
  { num: '01', title: 'CLM Platform', sub: 'AI-powered contract lifecycle', color: '#a78bfa', link: '/legitt-ai-clm' },
  { num: '02', title: 'E-Sign Platform', sub: 'Multi-party signing orchestration', color: '#00ccaa', link: '/esign-platform' },
  { num: '03', title: 'Collaborative Editor', sub: 'TipTap + real-time redlining', color: '#29d0c5', link: '/collaborative-editor' },
  { num: '04', title: 'Sales Contract Flow', sub: 'Salesforce → AI review → Sign', color: '#f5a623', link: '/sales-contract-workflow' },
];

interface StatCardProps {
  value: string | number;
  label: string;
  suffix: string;
  delay: number;
}

function StatCard({ value, label, suffix, delay }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const numValue = parseInt(value as string);
  const isNumeric = !isNaN(numValue) && !String(value).includes('+') && !String(value).includes('K');

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started || !isNumeric) return;
    let start = 0;
    const step = numValue / 40;
    const interval = setInterval(() => {
      start += step;
      if (start >= numValue) { setCount(numValue); clearInterval(interval); }
      else setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(interval);
  }, [started, numValue, isNumeric]);

  return (
    <div className="flex flex-col items-center sm:items-start py-4 sm:px-6 sm:border-l border-border/50 first:border-0 first:pl-0">
      <div className="font-black leading-none tracking-tight mb-1 text-text-main" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
        {isNumeric ? count : value}{suffix}
      </div>
      <div className="text-mini tracking-widest uppercase text-text-muted font-medium">{label}</div>
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      {/* Subtle bg */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,255,255,0.02) 0%, transparent 70%)' }} />

      <div className="section-container w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr_420px] gap-14 xl:gap-20 items-center">

          {/* ── LEFT ── */}
          <div>
            {/* Name */}
            <div className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-mini tracking-widest uppercase text-text-muted mb-3 font-medium">Portfolio</p>
              <h1 className="font-black tracking-tight leading-none text-text-main mb-3" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
                Rohit Garg
              </h1>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-subtitle font-semibold text-text-dim">Lead Product Engineer</span>
                <span className="text-text-muted">·</span>
                <span className="flex items-center gap-1.5">
                  <img
                    src={legittLogo}
                    alt="Legitt AI"
                    className="h-5 w-auto object-contain"
                    style={{ filter: 'brightness(0) invert(0.7)' }}
                  />
                </span>
              </div>
            </div>

            {/* Bio */}
            <p
              className="text-description text-text-dim leading-relaxed max-w-xl mb-8 transition-all duration-700 delay-100"
              style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(12px)' }}
            >
              {personalInfo.bio}
            </p>

            {/* Stats row */}
            <div
              className="flex flex-wrap items-center gap-0 mb-10 transition-all duration-700 delay-200"
              style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(12px)' }}
            >
              {stats.map((s, i) => (
                <StatCard key={s.label} {...s} delay={600 + i * 150} />
              ))}
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 mb-10 transition-all duration-700 delay-300"
              style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(12px)' }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-description text-primary transition-all duration-300 hover:gap-3"
                style={{ background: 'rgba(255,255,255,0.92)', color: '#0a0a0a' }}
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                View My Work
                <ArrowRight size={14} />
              </a>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-description border border-border/60 text-text-dim transition-all duration-300 hover:border-border hover:text-text-main"
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div
              className="flex items-center gap-5 transition-all duration-700 delay-400"
              style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(12px)' }}
            >
              {[
                { href: personalInfo.github, label: 'GitHub', icon: <Github size={16} /> },
                { href: personalInfo.linkedin, label: 'LinkedIn', icon: <Linkedin size={16} /> },
                { href: `mailto:${personalInfo.email}`, label: 'Email', icon: <Mail size={16} /> },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-description text-text-muted hover:text-text-main transition-colors tracking-wide group"
                >
                  {icon}
                  <span className="group-hover:underline underline-offset-2">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Product showcase ── */}
          <div
            className="transition-all duration-700 delay-200"
            style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(16px)' }}
          >
            <div className="glass-card rounded-2xl overflow-hidden border-border/50">
              {/* Card header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
                </div>
                <span className="text-mini text-text-muted font-mono">products_shipped.ts</span>
              </div>

              {/* Product list */}
              <div className="p-2">
                {products.map((p, i) => (
                  <a
                    key={p.num}
                    href={p.link}
                    className="flex items-center gap-4 p-3.5 rounded-xl group transition-all duration-200 hover:bg-white/[0.04]"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-mini font-black flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                      style={{ background: p.color + '18', color: p.color, border: `1px solid ${p.color}30` }}
                    >
                      {p.num}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-small font-bold text-text-main group-hover:text-text-main leading-tight">{p.title}</div>
                      <div className="text-mini text-text-muted leading-snug">{p.sub}</div>
                    </div>
                    <ArrowRight
                      size={14}
                      className="flex-shrink-0 text-text-muted opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5"
                      style={{ color: p.color }}
                    />
                  </a>
                ))}
              </div>

              {/* Footer */}
              <div className="px-5 py-3.5 border-t border-border/40 flex items-center justify-between">
                <span className="text-mini text-text-muted">Built at</span>
                <img
                  src={legittLogo}
                  alt="Legitt AI"
                  className="h-5 w-auto object-contain"
                  style={{ filter: 'brightness(0) invert(0.5)' }}
                />
              </div>
            </div>

            {/* Tech mini-strip */}
            <div className="mt-4 flex flex-wrap gap-1.5 px-1">
              {['Node.js', 'React', 'TipTap', 'AWS', 'MongoDB', 'Redis', 'OpenAI', 'Gemini', 'Okta'].map(t => (
                <span
                  key={t}
                  className="text-micro px-2 py-1 rounded-full border border-border/40 text-text-muted hover:border-border hover:text-text-dim transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-mini tracking-widest uppercase text-text-muted">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-border to-transparent" />
      </div>
    </section>
  );
}

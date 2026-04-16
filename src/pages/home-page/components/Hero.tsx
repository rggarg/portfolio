import { useState, useEffect } from 'react';
import { personalInfo, stats, techLogos } from '../../../data/portfolio';

const roles = [
 'Lead Product Engineer',
 'MERN Stack Architect',
 'AI Systems Builder',
 'Backend Performance Expert',
];

interface TypingTextProps {
  texts: string[];
  speed?: number;
  pause?: number;
}

function TypingText({ texts, speed = 80, pause = 2000 }: TypingTextProps) {
 const [displayed, setDisplayed] = useState('');
 const [textIdx, setTextIdx] = useState(0);
 const [charIdx, setCharIdx] = useState(0);
 const [deleting, setDeleting] = useState(false);

 useEffect(() => {
 const current = texts[textIdx];
 let timeout: NodeJS.Timeout;

 if (!deleting && charIdx < current.length) {
 timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
 } else if (!deleting && charIdx === current.length) {
 timeout = setTimeout(() => setDeleting(true), pause);
 } else if (deleting && charIdx > 0) {
 timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
 } else if (deleting && charIdx === 0) {
 setDeleting(false);
 setTextIdx(i => (i + 1) % texts.length);
 }

 setDisplayed(current.slice(0, charIdx));
 return () => clearTimeout(timeout);
 }, [charIdx, deleting, textIdx, texts, speed, pause]);

 return (
 <span className="text-accent typing-cursor">{displayed}</span>
 );
}

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

 useEffect(() => {
 const timer = setTimeout(() => {
 setStarted(true);
 }, delay);
 return () => clearTimeout(timer);
 }, [delay]);

 useEffect(() => {
 if (!started || isNaN(numValue)) return;
 let start = 0;
 const step = numValue / 40;
 const interval = setInterval(() => {
 start += step;
 if (start >= numValue) { setCount(numValue); clearInterval(interval); }
 else setCount(Math.floor(start));
 }, 30);
 return () => clearInterval(interval);
 }, [started, numValue]);

 return (
 <div className="glass-card rounded-xl p-5 hover:border-accent/20 transition-all duration-300 group">
 <div className=" font-extrabold text-heading text-accent leading-none mb-1">
 {isNaN(numValue) ? value : count}{suffix}
 </div>
 <div className=" text-description tracking-widest uppercase text-text-dim">{label}</div>
 </div>
 );
}

export default function Hero() {
 return (
 <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
 {/* Background layers */}
 <div className="absolute inset-0 grid-bg" />
 <div className="absolute inset-0 mesh-gradient" />

 {/* Glowing orbs */}
 <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl bg-accent/5 animate-pulse-slow pointer-events-none" />
 <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full blur-3xl bg-blue-500/5 animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

 <div className="section-container w-full relative z-10">
 <div className="grid lg:grid-cols-2 gap-16 items-center">
 {/* LEFT */}
 <div>
 {/* Badge */}
 <div className="inline-flex items-center gap-2.5 bg-accent/8 border border-accent/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
 <span className="w-2 h-2 rounded-full bg-accent animate-blink" />
 <span className=" text-description tracking-widest uppercase text-accent">
 {personalInfo.available ? 'Open to Opportunities' : 'Currently Unavailable'}
 </span>
 </div>

 {/* Main heading */}
 <h1 className=" font-extrabold leading-super-tight tracking-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
 <span className="block text-heading text-text-main mb-1">
 I Build
 </span>
 <span className="block text-heading text-text-dim mb-2">
 Systems That
 </span>
 <span className="block text-heading ">
 <TypingText texts={roles} />
 </span>
 </h1>

 {/* Description */}
 <p className="text-text-dim text-heading leading-relaxed max-w-lg mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
 {personalInfo.bio}
 </p>

 {/* CTAs */}
 <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
 <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
 <span>View Projects</span>
 <span>→</span>
 </a>
 <a href="#contact" className="btn-ghost" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
 Let's Talk
 </a>
 </div>

 {/* Social links */}
 <div className="flex items-center gap-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
 <a href={personalInfo.github} target="_blank" rel="noreferrer" className=" text-description text-text-dim hover:text-accent transition-colors tracking-wider uppercase">
 GitHub ↗
 </a>
 <span className="w-px h-4 bg-border" />
 <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className=" text-description text-text-dim hover:text-accent transition-colors tracking-wider uppercase">
 LinkedIn ↗
 </a>
 <span className="w-px h-4 bg-border" />
 <a href={`mailto:${personalInfo.email}`} className=" text-description text-text-dim hover:text-accent transition-colors tracking-wider uppercase">
 Email ↗
 </a>
 </div>
 </div>

 {/* RIGHT - Stats + Card */}
 <div className="flex flex-col gap-4 animate-fade-up" style={{ animationDelay: '0.35s' }}>
 {/* Profile card */}
 <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
 <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/4 via-transparent to-transparent via-60%" />
 <div className="relative">
 <div className="flex items-start justify-between mb-4">
 <div>
 <div className=" font-extrabold text-heading text-text-main">{personalInfo.name}</div>
 <div className=" text-description text-accent tracking-wider mt-1">{personalInfo.title}</div>
 </div>
 <div className="flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-3 py-1.5">
 <span className="w-1.5 h-1.5 rounded-full bg-accent animate-blink" />
 <span className=" text-description text-accent tracking-wider">Available</span>
 </div>
 </div>

 <p className="text-text-dim text-subtitle leading-relaxed mb-5">
 {personalInfo.shortBio}
 </p>

 {/* Stack pills */}
 <div className="flex flex-wrap gap-2">
 {['Node.js', 'React.js', 'AWS', 'MongoDB', 'AI/ML', 'Express.js'].map(t => (
 <span key={t} className=" text-description tracking-wider px-2.5 py-1 rounded bg-surface border border-border text-text-dim">
 {t}
 </span>
 ))}
 </div>
 </div>
 </div>

 {/* Stats grid */}
 <div className="grid grid-cols-2 gap-4">
 {stats.map((s, i) => (
 <StatCard key={s.label} {...s} delay={600 + i * 150} />
 ))}
 </div>
 </div>
 </div>

 {/* Scrolling tech strip */}
 <div className="mt-20 chip-scroll animate-fade-up" style={{ animationDelay: '0.5s' }}>
 <div className="flex items-center gap-px mb-2">
 <span className=" text-description tracking-widest uppercase text-text-muted mr-4 flex-shrink-0">Tech Stack</span>
 <span className="flex-1 h-px bg-border" />
 </div>
 <div className="flex items-center gap-6 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
 {techLogos.map((tech, i) => (
 <span
 key={i}
 className="flex-shrink-0 text-description text-text-dim hover:text-accent transition-colors cursor-default tracking-wide"
 >
 {tech}
 </span>
 ))}
 </div>
 </div>
 </div>

 {/* Scroll indicator */}
 <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
 <span className=" text-description tracking-widest uppercase text-text-muted">Scroll</span>
 <div className="w-px h-10 bg-gradient-to-b from-border to-transparent" />
 </div>
 </section>
 );
}

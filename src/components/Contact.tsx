import { useState } from 'react';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
 const [copied, setCopied] = useState(false);

 const copyEmail = () => {
 navigator.clipboard.writeText(personalInfo.email);
 setCopied(true);
 setTimeout(() => setCopied(false), 2000);
 };

 return (
 <section id="contact" className="py-24 lg:py-32 bg-surface relative overflow-hidden">
 <div className="absolute inset-0 grid-bg opacity-30" />
 <div className="absolute inset-0 mesh-gradient opacity-60" />

 <div className="section-container relative z-10">
 {/* Header */}
 <div className="text-center mb-16">
 <div className="section-label reveal justify-center">Contact</div>
 <h2 className=" font-extrabold text-heading tracking-tight leading-tight mb-6 reveal delay-100">
 Have a project
 <br />
 <span className="accent-gradient">in mind?</span>
 </h2>
 <p className="text-text-dim text-heading max-w-lg mx-auto leading-relaxed reveal delay-200">
 Open to exciting engineering challenges, senior roles, and technical leadership opportunities. Let's build something great together.
 </p>
 </div>

 {/* Main contact card */}
 <div className="max-w-2xl mx-auto">
 <div className="glass-card rounded-2xl p-8 lg:p-10 reveal delay-200 relative overflow-hidden">
 <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

 {/* Email CTA */}
 <div className="text-center mb-8">
 <div className=" text-description tracking-widest uppercase text-text-muted mb-4">Reach me at</div>
 <button
 onClick={copyEmail}
 className="group inline-flex items-center gap-3 text-heading font-extrabold text-accent hover:opacity-80 transition-all duration-200 tracking-tight"
 >
 {personalInfo.email}
 <span className="text-title text-text-dim group-hover:text-accent transition-colors">
 {copied ? '✓' : '⎘'}
 </span>
 </button>
 {copied && (
 <div className="mt-2 text-description text-accent animate-fade-in">Copied to clipboard!</div>
 )}
 </div>

 <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
 <a href={`mailto:${personalInfo.email}`} className="btn-primary w-full sm:w-auto justify-center">
 Send an Email →
 </a>
 <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn-ghost w-full sm:w-auto justify-center">
 Connect on LinkedIn
 </a>
 </div>

 <div className="border-t border-border pt-6 flex flex-wrap items-center justify-center gap-6">
 {[
 { label: 'GitHub', href: personalInfo.github },
 { label: 'LinkedIn', href: personalInfo.linkedin },
 { label: 'Twitter / X', href: personalInfo.twitter },
 { label: 'Resume', href: personalInfo.resume },
 ].map(link => (
 <a
 key={link.label}
 href={link.href}
 target="_blank"
 rel="noreferrer"
 className=" text-description tracking-widest uppercase text-text-dim hover:text-accent transition-colors"
 >
 {link.label} ↗
 </a>
 ))}
 </div>
 </div>

 {/* Location tag */}
 <div className="flex items-center justify-center gap-3 mt-6 reveal delay-300">
 <span className="w-2 h-2 rounded-full bg-accent animate-blink" />
 <span className=" text-description text-text-muted tracking-wider">
 Based in {personalInfo.location} · Available globally for remote roles
 </span>
 </div>
 </div>
 </div>
 </section>
 );
}

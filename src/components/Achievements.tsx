import { achievements, differentiators } from '../data/portfolio';

export default function Achievements() {
 return (
 <section id="achievements" className="py-24 lg:py-32 relative overflow-hidden">
 <div className="absolute inset-0 mesh-gradient opacity-50" />

 <div className="section-container relative z-10">
 <div className="grid lg:grid-cols-2 gap-20 items-start">
 {/* Left - Achievements */}
 <div>
 <div className="section-label reveal">Achievements</div>
 <h2 className=" font-extrabold text-heading tracking-tight leading-tight mb-12 reveal delay-100">
 Results that
 <br />
 <span className="accent-gradient">speak loud</span>
 </h2>

 <div className="space-y-4">
 {achievements.map((ach, i) => (
 <div
 key={ach.title}
 className={`reveal delay-${(i + 2) * 100} glass-card rounded-xl p-5 flex items-start gap-5 group hover:border-accent/20 transition-all duration-300`}
 >
 <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-heading group-hover:border-accent/30 transition-colors">
 {ach.icon}
 </div>
 <div className="flex-1 min-w-0">
 <div className="flex items-start justify-between gap-3 mb-1.5">
 <h3 className=" font-bold text-title text-text-main group-hover:text-accent transition-colors leading-snug">
 {ach.title}
 </h3>
 <div className="flex-shrink-0 text-right">
 <div className=" font-extrabold text-heading text-accent leading-none">{ach.metric}</div>
 <div className=" text-description tracking-widest uppercase text-text-muted">{ach.metricLabel}</div>
 </div>
 </div>
 <p className="text-text-dim text-subtitle leading-relaxed">{ach.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Right - Differentiators */}
 <div>
 <div className="section-label reveal">What Sets Me Apart</div>
 <h2 className=" font-extrabold text-heading tracking-tight leading-tight mb-12 reveal delay-100">
 Why work
 <br />
 <span className="accent-gradient">with me</span>
 </h2>

 <div className="space-y-0 border border-border rounded-2xl overflow-hidden reveal delay-200">
 {differentiators.map((d, i) => (
 <div
 key={d.num}
 className={`p-6 flex items-start gap-5 group hover:bg-accent/5 transition-all duration-300 ${
 i < differentiators.length - 1 ? 'border-b border-border' : ''
 }`}
 >
 <span className=" text-description text-text-muted flex-shrink-0 mt-1 group-hover:text-accent transition-colors">
 {d.num}
 </span>
 <div>
 <h3 className=" font-bold text-title text-text-main mb-1.5 group-hover:text-accent transition-colors">
 {d.title}
 </h3>
 <p className="text-text-dim text-subtitle leading-relaxed">{d.description}</p>
 </div>
 <span className="ml-auto text-text-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 flex-shrink-0">
 →
 </span>
 </div>
 ))}
 </div>

 {/* Bottom CTA card */}
 <div className="mt-6 rounded-2xl p-6 reveal delay-300 bg-gradient-to-br from-accent/8 to-[#00ccaa]/4 border border-accent/20">
 <div className=" font-bold text-heading text-accent mb-2">Ready to build something great?</div>
 <p className="text-text-dim text-subtitle leading-relaxed mb-4">
 I'm open to challenging engineering roles, leadership opportunities, and interesting enterprise products.
 </p>
 <a
 href="#contact"
 className="btn-primary inline-flex text-subtitle py-3"
 onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
 >
 Let's Connect →
 </a>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}

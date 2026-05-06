import { personalInfo } from '../../../data/portfolio';

const values = [
 { icon: '🎯', title: 'Ownership Mindset', desc: 'I take full responsibility - from architecture through deployment and monitoring.' },
 { icon: '⚡', title: 'Performance First', desc: 'Every system I build is optimized for speed, reliability, and scale from day one.' },
 { icon: '🤝', title: 'Bridge Builder', desc: 'I translate business requirements into elegant technical solutions effortlessly.' },
 { icon: '🔬', title: 'Continuous Learner', desc: 'Always exploring AI, system design patterns, and emerging engineering practices.' },
];

export default function About() {
 return (
 <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
 <div className="absolute inset-0 mesh-gradient opacity-50" />

 <div className="section-container relative z-10">
 <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
 {/* Left - Text */}
 <div>
 <div className="section-label reveal">About Me</div>
 <h2 className=" font-extrabold text-heading leading-tight tracking-tight mb-6 reveal delay-100">
 Engineer who
 <br />
 <span className="accent-gradient">thinks in systems</span>
 </h2>

 <div className="space-y-4 text-text-dim leading-relaxed reveal delay-200">
 <p>
 I'm a <span className="text-text-main font-medium">Lead Product Engineer</span> with 3+ years of hands-on experience building enterprise-grade, AI-powered web platforms. My expertise spans the full MERN stack and cloud infrastructure on AWS.
 </p>
 <p>
 Currently, I lead the architecture and development of an <span className="text-accent font-medium">AI-powered Contract Lifecycle Management platform</span> - driving technical decisions, optimizing performance, and ensuring seamless experiences for enterprise clients.
 </p>
 <p>
 I'm passionate about <span className="text-text-main font-medium">leveraging AI to build impactful products</span> and continuously push the boundaries of what's possible through scalable architecture and clean engineering practices.
 </p>
 </div>

 {/* Quick facts */}
 <div className="mt-8 grid grid-cols-2 gap-3 reveal delay-300">
 {[
 ['📍', 'Location', personalInfo.location],
 ['💼', 'Focus', 'Enterprise SaaS'],
 ['🤖', 'Specialty', 'AI-driven Products'],
 ['☁️', 'Cloud', 'AWS Certified Practices'],
 ].map(([icon, label, val]) => (
 <div key={label} className="flex items-start gap-3 p-3 rounded-lg bg-surface border border-border">
 <span className="text-title mt-0.5">{icon}</span>
 <div>
 <div className=" text-description tracking-widest uppercase text-text-muted">{label}</div>
 <div className="text-text-main text-subtitle font-medium mt-0.5">{val}</div>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Right - Values grid */}
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal delay-200">
 {values.map((v, i) => (
 <div
 key={v.title}
 className="glass-card rounded-xl p-5 hover:border-accent/20 transition-all duration-300 group"
 style={{ transitionDelay: `${i * 50}ms` }}
 >
 <div className="text-heading mb-3">{v.icon}</div>
 <div className=" font-bold text-title text-text-main mb-2 group-hover:text-accent transition-colors">
 {v.title}
 </div>
 <p className="text-text-dim text-subtitle leading-relaxed">{v.desc}</p>
 </div>
 ))}

 {/* Code snippet card */}
 <div className="sm:col-span-2 glass-card rounded-xl p-5 text-description overflow-hidden">
 <div className="flex items-center gap-2 mb-4">
 <span className="w-3 h-3 rounded-full bg-red-500/60" />
 <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
 <span className="w-3 h-3 rounded-full bg-green-500/60" />
 <span className="ml-2 text-text-muted text-description tracking-wider">engineer.js</span>
 </div>
 <pre className="text-description leading-relaxed overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
 <code>
 <span className="text-text-muted">{'// My engineering philosophy'}</span>{'\n'}
 <span className="text-blue-400">const</span>{' '}
 <span className="text-accent">engineer</span>{' = {\n'}
 {' '}<span className="text-amber-400">stack</span>{': ['}<span className="text-green-400">'Node'</span>{', '}<span className="text-green-400">'React'</span>{', '}<span className="text-green-400">'AWS'</span>{'],\n'}
 {' '}<span className="text-amber-400">mindset</span>{': '}<span className="text-green-400">'ownership-first'</span>{',\n'}
 {' '}<span className="text-amber-400">focus</span>{': '}<span className="text-green-400">'scalability + AI'</span>{',\n'}
 {' '}<span className="text-amber-400">ships</span>{': '}<span className="text-green-400">'production-grade'</span>{',\n'}
 {'}'}
 </code>
 </pre>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}

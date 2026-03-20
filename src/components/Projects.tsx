import { useState } from 'react';
import { projects } from '../data/portfolio';

interface ProjectCardProps {
  project: {
    id?: string | number;
    num: string;
    color: string;
    subtitle: string;
    title: string;
    description: string;
    longDescription?: string;
    stack: string[];
    contributions: string[];
    impact?: string[];
  };
  featured?: boolean;
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
 const [hovered, setHovered] = useState(false);

 if (featured) {
 return (
 <div
 className="reveal glass-card rounded-2xl p-8 lg:p-10 relative overflow-hidden group transition-all duration-500"
 onMouseEnter={() => setHovered(true)}
 onMouseLeave={() => setHovered(false)}
 >
 {/* Top accent line */}
 <div
 className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-opacity duration-500"
 style={{
 background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
 opacity: hovered ? 1 : 0.4,
 }}
 />

 <div className="grid lg:grid-cols-2 gap-10 items-start">
 {/* Left */}
 <div>
 <div className="flex items-center gap-3 mb-4">
 <span className=" text-description tracking-widest uppercase text-text-muted">
 {project.num} · Featured Project
 </span>
 <span
 className=" text-description tracking-wider px-2.5 py-1 rounded-full border"
 style={{ color: project.color, borderColor: `${project.color}30`, background: `${project.color}08` }}
 >
 {project.subtitle}
 </span>
 </div>

 <h3 className=" font-extrabold text-heading tracking-tight leading-tight mb-4 text-text-main group-hover:text-accent transition-colors duration-300">
 {project.title}
 </h3>

 <p className="text-text-dim leading-relaxed mb-3">{project.description}</p>
 <p className="text-text-dim text-subtitle leading-relaxed mb-6 italic">{project.longDescription}</p>

 {/* Stack */}
 <div className="flex flex-wrap gap-2">
 {project.stack.map(t => (
 <span key={t} className=" text-description tracking-wider px-2.5 py-1 rounded bg-surface border border-border text-text-dim hover:border-accent/30 transition-colors">
 {t}
 </span>
 ))}
 </div>
 </div>

 {/* Right */}
 <div className="space-y-4">
 {/* Key contributions */}
 <div className="rounded-xl border border-border bg-surface/50 p-5">
 <div className=" text-description tracking-widest uppercase mb-3" style={{ color: project.color }}>
 Key Contributions
 </div>
 <ul className="space-y-2">
 {project.contributions.map((c, i) => (
 <li key={i} className="flex items-start gap-2.5 text-subtitle text-text-dim">
 <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.color }} />
 {c}
 </li>
 ))}
 </ul>
 </div>

 {/* Impact */}
 <div
 className="rounded-xl p-5 border"
 style={{ background: `${project.color}06`, borderColor: `${project.color}18` }}
 >
 <div className=" text-description tracking-widest uppercase mb-3" style={{ color: project.color }}>
 Impact
 </div>
 <ul className="space-y-2">
 {project.impact.map((imp, i) => (
 <li key={i} className="flex items-start gap-2.5 text-subtitle text-text-dim">
 <span className="text-description mt-0.5" style={{ color: project.color }}>✦</span>
 {imp}
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 </div>
 );
 }

 return (
 <div
 className="reveal glass-card rounded-2xl p-6 relative overflow-hidden group transition-all duration-300 flex flex-col"
 onMouseEnter={() => setHovered(true)}
 onMouseLeave={() => setHovered(false)}
 >
 <div
 className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-opacity duration-500"
 style={{
 background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
 opacity: hovered ? 1 : 0,
 }}
 />

 <div className="flex items-start justify-between mb-4">
 <span className=" text-description tracking-widest uppercase text-text-muted">{project.num}</span>
 <span
 className=" text-description px-2 py-0.5 rounded border"
 style={{ color: project.color, borderColor: `${project.color}25` }}
 >
 {project.subtitle}
 </span>
 </div>

 <h3 className=" font-bold text-heading tracking-tight leading-snug mb-3 text-text-main group-hover:text-accent transition-colors">
 {project.title}
 </h3>

 <p className="text-text-dim text-subtitle leading-relaxed mb-4 flex-1">{project.description}</p>

 {/* Contributions */}
 <ul className="space-y-1.5 mb-5">
 {project.contributions.slice(0, 3).map((c, i) => (
 <li key={i} className="flex items-start gap-2 text-description text-text-dim">
 <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.color }} />
 {c}
 </li>
 ))}
 </ul>

 {/* Stack */}
 <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
 {project.stack.slice(0, 4).map(t => (
 <span key={t} className=" text-description px-2 py-0.5 rounded bg-surface border border-border text-text-muted">
 {t}
 </span>
 ))}
 {project.stack.length > 4 && (
 <span className=" text-description px-2 py-0.5 text-text-muted">+{project.stack.length - 4}</span>
 )}
 </div>
 </div>
 );
}

export default function Projects() {
 return (
 <section id="projects" className="py-24 lg:py-32 bg-surface relative">
 <div className="absolute inset-0 grid-bg opacity-40" />

 <div className="section-container relative z-10">
 <div className="section-label reveal">Projects</div>
 <h2 className=" font-extrabold text-heading tracking-tight leading-tight mb-4 reveal delay-100">
 What I've built
 <br />
 <span className="accent-gradient">that matters</span>
 </h2>
 <p className="text-text-dim max-w-lg leading-relaxed mb-16 reveal delay-200">
 Enterprise-grade systems delivered end-to-end — from architecture and API design through deployment and monitoring.
 </p>

 {/* Featured project */}
 <div className="mb-6">
 <ProjectCard project={projects[0]} featured />
 </div>

 {/* Other projects */}
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
 {projects.slice(1).map((project, i) => (
 <div key={project.id} className={`delay-${(i + 1) * 100}`}>
 <ProjectCard project={project} />
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}

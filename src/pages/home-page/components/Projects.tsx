import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../../data/portfolio';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id?: string | number;
    num: string;
    color: string;
    subtitle: string;
    title: string;
    description: string;
    longDescription?: string;
    link?: string;
    stack: string[];
    contributions: string[];
    impact?: string[];
  };
  featured?: boolean;
}

function FeaturedProjectCard({ project }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal glass-card rounded-2xl p-8 lg:p-10 relative overflow-hidden group transition-all duration-500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ borderColor: hovered ? project.color + '30' : '' }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
          opacity: hovered ? 1 : 0.5,
        }}
      />
      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 100% 0%, ${project.color}0a 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      <div className="grid lg:grid-cols-2 gap-10 items-start relative z-10">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-mini font-black px-3 py-1 rounded-full tracking-widest uppercase"
              style={{ color: project.color, background: project.color + '12', border: `1px solid ${project.color}30` }}
            >
              {project.num} · Featured
            </span>
            <span
              className="text-mini tracking-wide px-2.5 py-1 rounded border"
              style={{ color: project.color + 'cc', borderColor: `${project.color}20` }}
            >
              {project.subtitle}
            </span>
          </div>

          <h3
            className="font-extrabold text-heading tracking-tight leading-tight mb-4 text-text-main transition-colors duration-300"
            style={{ color: hovered ? 'var(--text-main)' : 'var(--text-main)' }}
          >
            {project.title}
          </h3>

          <p className="text-text-dim leading-relaxed mb-3 text-description">{project.description}</p>
          <p className="text-text-dim text-subtitle leading-relaxed mb-6 italic">{project.longDescription}</p>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map(t => (
              <span
                key={t}
                className="text-mini px-2.5 py-1 rounded bg-surface border border-border text-text-dim hover:text-text-main transition-colors"
                style={{ borderColor: hovered ? project.color + '20' : '' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="space-y-4">
          {/* Key contributions */}
          <div className="rounded-xl border border-border bg-surface/50 p-5">
            <div className="text-mini tracking-widest uppercase mb-3 font-bold" style={{ color: project.color }}>
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
          {project.impact && (
            <div
              className="rounded-xl p-5 border"
              style={{ background: `${project.color}05`, borderColor: `${project.color}18` }}
            >
              <div className="text-mini tracking-widest uppercase mb-3 font-bold" style={{ color: project.color }}>Impact</div>
              <ul className="space-y-2">
                {project.impact.map((imp, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-subtitle text-text-dim">
                    <span className="text-description mt-0.5" style={{ color: project.color }}>✦</span>
                    {imp}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.link && (
            <div className="mt-6 pt-5 border-t border-border">
              <Link
                to={project.link}
                className="inline-flex items-center gap-2.5 font-bold text-description transition-colors group/link"
                style={{ color: project.color }}
              >
                View Full Case Study
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal glass-card rounded-2xl p-6 relative overflow-hidden group transition-all duration-300 flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ borderColor: hovered ? project.color + '35' : '' }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />
      {/* Corner glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-400"
        style={{
          background: `radial-gradient(circle at 80% 20%, ${project.color}07 0%, transparent 60%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <span
            className="text-mini font-black px-2.5 py-1 rounded-full tracking-widest uppercase"
            style={{ color: project.color, background: project.color + '12', border: `1px solid ${project.color}25` }}
          >
            {project.num}
          </span>
          <span
            className="text-mini text-text-muted border border-border/60 px-2 py-0.5 rounded"
          >
            {project.subtitle}
          </span>
        </div>

        <h3 className="font-bold text-heading tracking-tight leading-snug mb-3 text-text-main transition-colors group-hover:text-text-main">
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
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/60 mb-4">
          {project.stack.slice(0, 4).map(t => (
            <span key={t} className="text-mini px-2 py-0.5 rounded bg-surface border border-border text-text-muted">
              {t}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="text-mini px-2 py-0.5 text-text-muted">+{project.stack.length - 4}</span>
          )}
        </div>

        {project.link && (
          <Link
            to={project.link}
            className="inline-flex items-center gap-2 text-small font-bold transition-all duration-200 hover:gap-3 mt-auto"
            style={{ color: project.color }}
          >
            View Case Study
            <ArrowRight size={13} />
          </Link>
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
        <h2 className="font-extrabold text-heading tracking-tight leading-tight mb-4 reveal delay-100">
          What I've built
          <br />
          <span className="accent-gradient">that matters</span>
        </h2>
        <p className="text-text-dim max-w-lg leading-relaxed mb-16 reveal delay-200">
          Enterprise-grade products delivered end-to-end — from architecture and API design through multi-region deployment. Every product below is live in production.
        </p>

        {/* Featured project */}
        <div className="mb-6">
          <FeaturedProjectCard project={projects[0]} featured />
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

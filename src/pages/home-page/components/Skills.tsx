import React, { useEffect, useRef, useState } from 'react';
import { skills, techStack } from '../../../data/portfolio';

interface SkillBarProps {
  name: string;
  level: number;
  delay: number;
}

function SkillBar({ name, level, delay }: SkillBarProps) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className=" text-description text-text-dim group-hover:text-text-main transition-colors">{name}</span>
        <span className=" text-description text-accent">{level}%</span>
      </div>
      <div className="h-1 bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent-dim rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animated ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
            boxShadow: '0 0 8px rgba(0,255,136,0.4)',
          }}
        />
      </div>
    </div>
  );
}

interface ExpertiseCardProps {
  skill: {
    color: string;
    icon: string | React.ReactNode;
    category: string;
    description: string;
    tags: string[];
  };
  index: number;
}

function ExpertiseCard({ skill, index }: ExpertiseCardProps) {
 return (
 <div
 className="reveal glass-card rounded-2xl p-6 hover:border-accent/20 group transition-all duration-300 relative overflow-hidden"
 style={{ transitionDelay: `${index * 80}ms` }}
 >
 {/* Hover glow */}
 <div
 className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
 style={{ background: `radial-gradient(circle at 30% 30%, ${skill.color}08 0%, transparent 70%)` }}
 />

 {/* Top bar */}
 <div
 className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
 style={{ background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)` }}
 />

 <div className="relative">
 <div className="flex items-center gap-3 mb-4">
 <span className="text-heading">{skill.icon}</span>
 <h3 className=" font-bold text-title text-text-main group-hover:text-accent transition-colors">
 {skill.category}
 </h3>
 </div>

 <p className="text-text-dim text-subtitle leading-relaxed mb-4">{skill.description}</p>

 <div className="flex flex-wrap gap-1.5">
 {skill.tags.map(tag => (
 <span
 key={tag}
 className=" text-description tracking-wider px-2 py-1 rounded border text-text-muted transition-colors group-hover:border-accent/20 group-hover:text-text-dim"
 style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
 >
 {tag}
 </span>
 ))}
 </div>
 </div>
 </div>
 );
}

export default function Skills() {
 return (
 <section id="skills" className="py-24 lg:py-32 bg-surface relative">
 <div className="absolute inset-0 grid-bg opacity-50" />

 <div className="section-container relative z-10">
 {/* Header */}
 <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
 <div>
 <div className="section-label reveal">Core Expertise</div>
 <h2 className=" font-extrabold text-heading tracking-tight leading-tight reveal delay-100">
 Built for scale,
 <br />
 <span className="accent-gradient">designed to last</span>
 </h2>
 </div>
 <p className="text-text-dim max-w-sm leading-relaxed reveal delay-200 lg:text-right">
 A balanced combination of technical depth, architectural thinking, and product mindset - built over 3+ years of real enterprise delivery.
 </p>
 </div>

 {/* Skills grid */}
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
 {skills.map((skill, i) => (
 <ExpertiseCard key={skill.category} skill={skill} index={i} />
 ))}
 </div>

 {/* Proficiency bars */}
 <div className="glass-card rounded-2xl p-8 reveal">
 <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
 <div>
 <div className=" text-description tracking-widest uppercase text-accent mb-6">Proficiency Levels</div>
 <div className="space-y-4">
 {techStack.slice(0, 4).map((s, i) => (
 <SkillBar key={s.name} {...s} delay={i * 100} />
 ))}
 </div>
 </div>
 <div>
 <div className=" text-description tracking-widest uppercase text-accent mb-6 md:opacity-0">.</div>
 <div className="space-y-4">
 {techStack.slice(4).map((s, i) => (
 <SkillBar key={s.name} {...s} delay={(i + 4) * 100} />
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}

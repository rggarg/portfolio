import React, { useEffect, useRef, useCallback } from 'react';
import { skills, techLogos } from '../../../data/portfolio';

/* ── Color map for sphere tags ─────────────────────────────────────────────── */
const TAG_COLORS: Record<string, string> = {
  'Node.js':       '#4ade80',
  'React.js':      '#60a5fa',
  'TypeScript':    '#818cf8',
  'JavaScript':    '#f5a623',
  'MongoDB':       '#4ade80',
  'AWS':           '#f97316',
  'Express.js':    '#00ccaa',
  'SQL':           '#a78bfa',
  'Redis':         '#ef4444',
  'Docker':        '#60a5fa',
  'Git':           '#f97316',
  'REST APIs':     '#00ccaa',
  'Microservices': '#a78bfa',
  'Salesforce':    '#60a5fa',
  'CI/CD':         '#f5a623',
  'Firebase':      '#f5a623',
  'Next.js':       '#e2e8f0',
  'Vite.js':       '#a78bfa',
  'GCP':           '#60a5fa',
  'Redux':         '#a78bfa',
  'Python':        '#f5a623',
};

/* ── 3-D Sphere ─────────────────────────────────────────────────────────────── */
function SkillOrb() {
  const itemRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const rot       = useRef({ x: -15, y: 20 });
  const drag      = useRef({ active: false, startX: 0, startY: 0, baseX: -15, baseY: 20 });
  const autoRot   = useRef(true);
  const rafRef    = useRef<number>();

  const items  = techLogos;
  const count  = items.length;
  const radius = 145;
  const W = 360;
  const H = 360;

  // Pre-compute static sphere positions (golden-angle Fibonacci distribution)
  const basePos = useRef(
    items.map((_, i) => {
      const phi   = Math.acos(1 - 2 * (i + 0.5) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      return {
        wx: radius * Math.sin(phi) * Math.cos(theta),
        wy: radius * Math.cos(phi),
        wz: radius * Math.sin(phi) * Math.sin(theta),
      };
    })
  );

  /* Reproject all items directly to DOM — zero React renders per frame */
  const project = useCallback(() => {
    const ryRad = (rot.current.y * Math.PI) / 180;
    const rxRad = (rot.current.x * Math.PI) / 180;
    const cY = Math.cos(ryRad), sY = Math.sin(ryRad);
    const cX = Math.cos(rxRad), sX = Math.sin(rxRad);

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const { wx, wy, wz } = basePos.current[i];

      // RotateY then RotateX
      const x1 =  wx * cY + wz * sY;
      const y1 =  wy;
      const z1 = -wx * sY + wz * cY;
      const x2 =  x1;
      const y2 =  y1 * cX - z1 * sX;
      const z2 =  y1 * sX + z1 * cX;

      const depth   = z2 / radius;                          // –1 … +1
      const scale   = 0.5 + 0.5 * (depth + 1) / 2;         // 0.5 … 1.0
      const opacity = 0.12 + 0.88 * (depth + 1) / 2;       // 0.12 … 1.0

      el.style.left      = `${W / 2 + x2}px`;
      el.style.top       = `${H / 2 - y2}px`;
      el.style.transform = `translate(-50%,-50%) scale(${scale.toFixed(3)})`;
      el.style.opacity   = opacity.toFixed(3);
      el.style.zIndex    = String(Math.round(z2 + 200));
    });
  }, []);

  /* Animation loop */
  useEffect(() => {
    const tick = () => {
      if (autoRot.current && !drag.current.active) rot.current.y += 0.22;
      project();
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [project]);

  /* Mouse handlers */
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    autoRot.current = false;
    drag.current = { active: true, startX: e.clientX, startY: e.clientY, baseX: rot.current.x, baseY: rot.current.y };
  }, []);
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!drag.current.active) return;
    rot.current.y = drag.current.baseY + (e.clientX - drag.current.startX) * 0.5;
    rot.current.x = drag.current.baseX + (e.clientY - drag.current.startY) * 0.4;
  }, []);
  const onRelease = useCallback(() => {
    drag.current.active = false;
    setTimeout(() => { autoRot.current = true; }, 1800);
  }, []);

  /* Touch handlers */
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0];
    autoRot.current = false;
    drag.current = { active: true, startX: t.clientX, startY: t.clientY, baseX: rot.current.x, baseY: rot.current.y };
  }, []);
  const onTouchMove = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0];
    rot.current.y = drag.current.baseY + (t.clientX - drag.current.startX) * 0.5;
    rot.current.x = drag.current.baseX + (t.clientY - drag.current.startY) * 0.4;
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Sphere container */}
      <div
        className="relative select-none mx-auto"
        style={{ width: W, height: H, cursor: 'grab', maxWidth: '100%' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onRelease}
        onMouseLeave={onRelease}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onRelease}
      >
        {/* Center ambient glow */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 220, height: 220,
            top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            background: 'radial-gradient(circle, rgba(0,255,136,0.07) 0%, rgba(96,165,250,0.04) 40%, transparent 70%)',
          }}
        />
        {/* Faint equator ring */}
        <div
          className="absolute rounded-full pointer-events-none border"
          style={{
            width: radius * 2, height: radius * 2,
            top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            borderColor: 'rgba(255,255,255,0.04)',
          }}
        />

        {/* Tags */}
        {items.map((label, i) => {
          const color = TAG_COLORS[label] ?? '#a78bfa';
          return (
            <div
              key={label}
              ref={el => { itemRefs.current[i] = el; }}
              className="absolute pointer-events-none"
              style={{ left: '50%', top: '50%' }}
            >
              <span
                className="whitespace-nowrap text-mini font-bold tracking-wide px-2.5 py-1 rounded-full"
                style={{
                  color,
                  background: `${color}18`,
                  border: `1px solid ${color}38`,
                  boxShadow: `0 0 8px ${color}18`,
                }}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Hint */}
      <p className="text-mini text-text-muted tracking-widest uppercase flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block" />
        Drag to rotate · {items.length} technologies
      </p>
    </div>
  );
}

/* ── Expertise card (unchanged) ─────────────────────────────────────────────── */
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
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 30% 30%, ${skill.color}08 0%, transparent 70%)` }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)` }}
      />
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-heading">{skill.icon}</span>
          <h3 className="font-bold text-title text-text-main group-hover:text-accent transition-colors">
            {skill.category}
          </h3>
        </div>
        <p className="text-text-dim text-subtitle leading-relaxed mb-4">{skill.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {skill.tags.map(tag => (
            <span
              key={tag}
              className="text-description tracking-wider px-2 py-1 rounded border text-text-muted transition-colors group-hover:border-accent/20 group-hover:text-text-dim"
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

/* ── Section ─────────────────────────────────────────────────────────────────── */
export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-surface relative">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="section-label reveal">Core Expertise</div>
            <h2 className="font-extrabold text-heading tracking-tight leading-tight reveal delay-100">
              Built for scale,
              <br />
              <span className="accent-gradient">designed to last</span>
            </h2>
          </div>
          <p className="text-text-dim max-w-sm leading-relaxed reveal delay-200 lg:text-right">
            A balanced combination of technical depth, architectural thinking, and product mindset — built over 3+ years of real enterprise delivery.
          </p>
        </div>

        {/* Expertise cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {skills.map((skill, i) => (
            <ExpertiseCard key={skill.category} skill={skill} index={i} />
          ))}
        </div>

        {/* Tech stack sphere */}
        <div className="reveal">
          <div className="text-center mb-10">
            <div className="section-label justify-center">Tech Stack</div>
            <h3 className="font-extrabold text-title tracking-tight text-text-main mt-1">
              Technologies I work with
            </h3>
          </div>

          <div
            className="glass-card rounded-2xl p-8 flex flex-col lg:flex-row items-center gap-10"
            style={{ borderColor: 'rgba(0,255,136,0.08)' }}
          >
            {/* Sphere */}
            <div className="flex-shrink-0">
              <SkillOrb />
            </div>

            {/* Side annotations */}
            <div className="flex-1 grid sm:grid-cols-2 gap-4 w-full">
              {[
                { color: '#4ade80', label: 'Backend', tags: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'Microservices'] },
                { color: '#60a5fa', label: 'Frontend', tags: ['React.js', 'Next.js', 'Vite.js', 'Redux', 'TypeScript', 'JavaScript'] },
                { color: '#a78bfa', label: 'Database', tags: ['MongoDB', 'SQL', 'Redis', 'Firebase'] },
                { color: '#f97316', label: 'Cloud & DevOps', tags: ['AWS', 'GCP', 'Docker', 'CI/CD', 'Git'] },
              ].map((group) => (
                <div
                  key={group.label}
                  className="rounded-xl p-4"
                  style={{ background: `${group.color}06`, border: `1px solid ${group.color}18` }}
                >
                  <div className="text-mini font-bold tracking-widest uppercase mb-3" style={{ color: group.color }}>
                    {group.label}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-mini px-2 py-0.5 rounded-full font-medium"
                        style={{ color: group.color, background: `${group.color}12`, border: `1px solid ${group.color}25` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

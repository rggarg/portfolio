import { experience } from '../../../data/portfolio';
import legittLogo from '../../../assets/images/legitt-ai-logo.webp';

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-40" />

      <div className="section-container relative z-10">
        <div className="section-label reveal">Experience</div>
        <h2 className="font-extrabold text-heading tracking-tight leading-tight mb-16 reveal delay-100">
          Where I've
          <br />
          <span className="accent-gradient">made an impact</span>
        </h2>

        {/* Single company callout (all at Legitt AI) */}
        <div className="reveal mb-12">
          <div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-border/60 bg-surface/50 backdrop-blur-sm"
          >
            <img
              src={legittLogo}
              alt="Legitt AI"
              className="h-6 w-auto object-contain"
              style={{ filter: 'brightness(0) invert(0.7)' }}
            />
            <span className="text-description text-text-dim">
              Entire career at <span className="text-text-main font-semibold">Legitt AI</span> · 2022 – Present
            </span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-[180px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />

          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <div key={idx} className="reveal">
                <div className="lg:grid lg:grid-cols-layout-sidebar gap-12">
                  {/* Left - date/meta */}
                  <div className="mb-6 lg:mb-0 lg:pt-1 lg:text-right">
                    <div className="text-mini tracking-widest uppercase text-accent mb-2 font-bold">
                      {exp.period}
                    </div>
                    <div className="text-mini text-text-muted">{exp.company}</div>
                    {exp.current && (
                      <div className="inline-flex items-center gap-1.5 mt-2 bg-accent/10 border border-accent/20 rounded-full px-2.5 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-blink" />
                        <span className="text-mini text-accent tracking-wider">Current</span>
                      </div>
                    )}
                  </div>

                  {/* Right - content */}
                  <div className="lg:pl-12 relative">
                    {/* Timeline dot */}
                    <div className="hidden lg:block absolute -left-[49px] top-1 w-3 h-3 rounded-full border-2 border-accent bg-primary" />

                    <div className="glass-card rounded-2xl p-7">
                      {/* Role */}
                      <h3 className="font-extrabold text-heading tracking-tight leading-tight mb-1">
                        {exp.role}
                      </h3>
                      <div className="text-mini text-accent tracking-wider mb-5 font-bold uppercase">
                        {exp.company} · {exp.type}
                      </div>

                      <p className="text-text-dim leading-relaxed mb-7 text-description">{exp.description}</p>

                      {/* Achievements */}
                      <div className="space-y-4 mb-7">
                        {exp.achievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-4 group">
                            <div className="flex-shrink-0 w-6 h-6 rounded bg-accent/10 border border-accent/20 flex items-center justify-center mt-0.5 group-hover:bg-accent/20 transition-colors">
                              <span className="text-accent text-mini">→</span>
                            </div>
                            <div>
                              <span className="inline-block text-mini tracking-wider uppercase text-accent bg-accent/8 border border-accent/15 rounded px-2 py-0.5 mb-1">
                                {ach.highlight}
                              </span>
                              <p className="text-text-dim text-subtitle leading-relaxed">{ach.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Stack */}
                      <div className="flex flex-wrap gap-2 pt-5 border-t border-border">
                        {exp.stack.map(tech => (
                          <span key={tech} className="text-mini tracking-wider px-2.5 py-1 rounded bg-surface border border-border text-text-dim hover:border-accent/30 hover:text-accent transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

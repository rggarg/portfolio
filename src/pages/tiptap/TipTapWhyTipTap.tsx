import { editorComparison, tiptapWins } from '../../data/TipTapData';

export default function TipTapWhyTipTap() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center">The Selection Process</p>
          <h2 className="text-heading font-black text-text-main mb-4">Why TipTap Won</h2>
          <p className="text-description text-text-dim max-w-2xl mx-auto leading-relaxed">
            Before writing a single line of editor code, we evaluated every major option. Each had
            fundamental limitations that would have crippled an enterprise CLM platform.
          </p>
        </div>

        {/* Evaluated editors grid */}
        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {editorComparison.map((editor) => (
            <div
              key={editor.name}
              className="glass-card rounded-xl p-5 border-border/60 flex flex-col"
              style={{ borderColor: editor.color + '22' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-subtitle font-black text-text-main">{editor.name}</span>
                <span
                  className="text-micro px-2 py-0.5 rounded-full font-semibold"
                  style={{ color: editor.color, background: editor.color + '18', border: `1px solid ${editor.color}40` }}
                >
                  {editor.verdict}
                </span>
              </div>
              {/* Issues */}
              <div className="space-y-2.5 flex-1">
                {editor.issues.map((issue, i) => (
                  <div key={i} className="flex items-start gap-2 text-small text-text-muted leading-snug">
                    <span className="mt-0.5 flex-shrink-0 text-micro" style={{ color: editor.color }}>✕</span>
                    {issue}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* TipTap wins */}
        <div className="reveal text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-16" style={{ background: 'rgba(0,204,170,0.3)' }} />
            <span className="text-description font-bold tracking-widest uppercase" style={{ color: '#00ccaa' }}>
              TipTap — The Winner
            </span>
            <span className="h-px w-16" style={{ background: 'rgba(0,204,170,0.3)' }} />
          </div>
          <p className="text-text-dim text-description max-w-xl mx-auto">
            Built on ProseMirror — the same foundation as Notion and Google Docs — TipTap provided
            the right balance of power, extensibility, and zero licensing cost.
          </p>
        </div>

        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tiptapWins.map((win, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-5 text-center border-border/60 hover:scale-101 transition-all duration-300"
              style={{ borderColor: 'rgba(0,204,170,0.15)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,204,170,0.35)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(0,204,170,0.06)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,204,170,0.15)';
                (e.currentTarget as HTMLElement).style.boxShadow = '';
              }}
            >
              <div className="text-display mb-3">{win.icon}</div>
              <div className="text-small font-bold text-text-main mb-2">{win.title}</div>
              <div className="text-mini text-text-dim leading-snug">{win.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

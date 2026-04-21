import { uploadChallenges } from '../../data/TipTapData';

const uploadSteps = [
  {
    step: 1,
    icon: '📄',
    label: 'DOCX File',
    sublabel: 'User Upload',
    desc: 'Contract document uploaded via browser UI',
    color: '#4ade80',
    bg: 'rgba(74,222,128,0.06)',
    border: 'rgba(74,222,128,0.25)',
  },
  {
    step: 2,
    icon: '⚙️',
    label: 'LibreOffice',
    sublabel: 'Headless Server',
    desc: 'Converts DOCX to clean HTML preserving all formatting',
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.06)',
    border: 'rgba(251,146,60,0.25)',
  },
  {
    step: 3,
    icon: '🔍',
    label: 'HTML Parser',
    sublabel: 'Custom Logic',
    desc: 'Maps HTML nodes to TipTap schema with style preservation',
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.06)',
    border: 'rgba(251,146,60,0.25)',
  },
  {
    step: 4,
    icon: '✏️',
    label: 'TipTap JSON',
    sublabel: 'In Editor',
    desc: 'Fully editable document loaded and ready in the editor',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.06)',
    border: 'rgba(167,139,250,0.25)',
  },
];

const exportSteps = [
  {
    step: 1,
    icon: '✏️',
    label: 'TipTap JSON',
    sublabel: 'From Editor',
    desc: 'Full document state exported from the editor instance',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.06)',
    border: 'rgba(167,139,250,0.25)',
  },
  {
    step: 2,
    icon: '🏗️',
    label: 'Custom HTML',
    sublabel: 'Generated',
    desc: 'HTML built with signatures, redlines & page breaks injected',
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.06)',
    border: 'rgba(251,146,60,0.25)',
  },
  {
    step: 3,
    icon: '🖨️',
    label: 'Puppeteer',
    sublabel: 'Headless Chrome',
    desc: 'Renders the HTML to a pixel-perfect A4 PDF via browser engine',
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.06)',
    border: 'rgba(251,146,60,0.25)',
  },
  {
    step: 4,
    icon: '✅',
    label: 'Final PDF',
    sublabel: 'With Signatures',
    desc: 'Signed, stamped & formatted — ready for distribution',
    color: '#4ade80',
    bg: 'rgba(74,222,128,0.06)',
    border: 'rgba(74,222,128,0.25)',
  },
];

function PipelineFlow({
  steps,
  title,
  badge,
  accentColor,
  badgeBg,
}: {
  steps: typeof uploadSteps;
  title: string;
  badge: string;
  accentColor: string;
  badgeBg: string;
}) {
  return (
    <div
      className="rounded-2xl border p-8"
      style={{
        borderColor: accentColor + '25',
        background: 'rgba(255,255,255,0.015)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <span
          className="text-mini font-bold tracking-widest uppercase px-3 py-1 rounded-full"
          style={{ color: accentColor, background: badgeBg, border: `1px solid ${accentColor}40` }}
        >
          {badge}
        </span>
        <h3 className="text-title-sm font-black text-text-main">{title}</h3>
      </div>

      {/* Steps row */}
      <div className="flex items-start gap-0">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start flex-1 min-w-0">
            {/* Step card */}
            <div className="flex-1 min-w-0 flex flex-col items-center text-center">
              {/* Step number pill */}
              <div
                className="text-micro font-black px-2 py-0.5 rounded-full mb-3 tracking-widest"
                style={{ background: step.color + '18', color: step.color, border: `1px solid ${step.color}35` }}
              >
                STEP {step.step}
              </div>

              {/* Icon bubble */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 hover:scale-110"
                style={{
                  background: step.bg,
                  border: `1.5px solid ${step.border}`,
                  boxShadow: `0 0 20px ${step.color}15`,
                }}
              >
                {step.icon}
              </div>

              {/* Labels */}
              <div className="text-small font-black text-text-main mb-0.5">{step.label}</div>
              <div
                className="text-micro font-bold tracking-wider uppercase mb-2"
                style={{ color: step.color }}
              >
                {step.sublabel}
              </div>
              <div className="text-mini text-text-dim leading-snug px-1">{step.desc}</div>
            </div>

            {/* Horizontal connector — NOT inside step column */}
            {i < steps.length - 1 && (
              <div className="flex flex-col items-center justify-start pt-8 flex-shrink-0 mx-1" style={{ width: '36px' }}>
                {/* Animated dashed line with arrow */}
                <div className="flex items-center gap-0.5 mt-0">
                  <div
                    className="h-px flex-1"
                    style={{
                      width: '10px',
                      background: `linear-gradient(90deg, ${steps[i].color}60, ${steps[i + 1].color}60)`,
                    }}
                  />
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7 L10 7 M7 4 L11 7 L7 10"
                      stroke={steps[i + 1].color}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.7"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TipTapFormatPipeline() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center">Format Conversion</p>
          <h2 className="text-heading font-black text-text-main mb-4">
            The Format Conversion Pipeline
          </h2>
          <p className="text-description text-text-dim max-w-2xl mx-auto leading-relaxed">
            The hardest engineering challenge of the project: losslessly converting between DOCX,
            TipTap JSON, and PDF — preserving tables, fonts, images, and custom numbering with{' '}
            <span className="text-text-main font-semibold">98%+ visual fidelity</span>.
          </p>
        </div>

        {/* Two pipelines */}
        <div className="reveal space-y-6 mb-16">
          <PipelineFlow
            steps={uploadSteps}
            title="DOCX → Editor (Import Flow)"
            badge="↑ Import Pipeline"
            accentColor="#4ade80"
            badgeBg="rgba(74,222,128,0.12)"
          />
          <PipelineFlow
            steps={exportSteps}
            title="Editor → PDF (Export Flow)"
            badge="↓ Export Pipeline"
            accentColor="#fb923c"
            badgeBg="rgba(251,146,60,0.12)"
          />
        </div>

        {/* Tool choice rationale */}
        <div className="reveal grid md:grid-cols-2 gap-6 mb-10">
          {/* LibreOffice */}
          <div
            className="rounded-xl p-6 border"
            style={{ borderColor: 'rgba(74,222,128,0.2)', background: 'rgba(74,222,128,0.03)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-base"
                style={{ background: 'rgba(74,222,128,0.15)', border: '1px solid rgba(74,222,128,0.3)' }}
              >
                ⚙️
              </div>
              <div>
                <div className="text-small font-black text-text-main">LibreOffice</div>
                <div className="text-micro font-bold tracking-widest uppercase" style={{ color: '#4ade80' }}>
                  Why not Mammoth.js?
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {[
                'Handles merged cells and deeply nested table structures',
                'Preserves custom list numbering schemes accurately',
                'Extracts embedded images as usable binary assets',
                'Section breaks and page layout metadata preserved',
                'Free, open-source — runs headless on Node.js server',
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-2 text-mini text-text-dim">
                  <span style={{ color: '#4ade80' }} className="flex-shrink-0 mt-0.5">✓</span>
                  {r}
                </div>
              ))}
            </div>
          </div>

          {/* Puppeteer */}
          <div
            className="rounded-xl p-6 border"
            style={{ borderColor: 'rgba(251,146,60,0.2)', background: 'rgba(251,146,60,0.03)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-base"
                style={{ background: 'rgba(251,146,60,0.15)', border: '1px solid rgba(251,146,60,0.3)' }}
              >
                🖨️
              </div>
              <div>
                <div className="text-small font-black text-text-main">Puppeteer</div>
                <div className="text-micro font-bold tracking-widest uppercase" style={{ color: '#fb923c' }}>
                  Why not wkhtmltopdf?
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {[
                'Full modern CSS — print media queries, flex, grid all supported',
                'Accurate A4 pagination and page break handling',
                'Embeds signed signature images into exact field positions',
                'Applies watermarks, running headers and page footers',
                "Same Chromium engine as the user's browser — true WYSIWYG",
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-2 text-mini text-text-dim">
                  <span style={{ color: '#fb923c' }} className="flex-shrink-0 mt-0.5">✓</span>
                  {r}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fidelity challenges */}
        <div className="reveal">
          <div
            className="rounded-2xl p-7 border"
            style={{ borderColor: 'rgba(245,166,35,0.2)', background: 'rgba(245,166,35,0.02)' }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-lg">⚠️</span>
              <h4 className="text-small font-bold tracking-widest uppercase" style={{ color: '#f5a623' }}>
                Format Fidelity Challenges Overcome
              </h4>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
              {uploadChallenges.map((c, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-lg text-mini text-text-dim"
                  style={{ background: 'rgba(245,166,35,0.05)', border: '1px solid rgba(245,166,35,0.1)' }}
                >
                  <span style={{ color: '#f5a623' }} className="flex-shrink-0 mt-0.5">↳</span>
                  {c}
                </div>
              ))}
            </div>
            <div
              className="flex items-start gap-2 text-mini pt-5 border-t"
              style={{ borderColor: 'rgba(245,166,35,0.15)' }}
            >
              <span className="font-bold flex-shrink-0" style={{ color: '#f5a623' }}>Solution:</span>
              <span className="text-text-dim">
                Custom HTML → TipTap schema mapper with precise node mapping. CSS styles translated to TipTap
                marks. Images extracted and re-hosted on S3. 50+ real contract templates in the visual regression test suite.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

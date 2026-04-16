import { comparison } from '../../data/ESignData';
import { CheckCircle, XCircle, MinusCircle } from 'lucide-react';

function CellIcon({ value }: { value: boolean | string }) {
  if (value === true)
    return <CheckCircle size={17} className="text-accent mx-auto" />;
  if (value === false)
    return <XCircle size={17} className="text-red-400/70 mx-auto" />;
  return <MinusCircle size={17} className="text-amber mx-auto" title="Partial" />;
}

export default function ESignComparison() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        <div className="reveal text-center mb-14">
          <p className="section-label justify-center">Competitive Landscape</p>
          <h2 className="text-heading font-black text-text-main mb-3">
            Legitt AI vs. The Incumbents
          </h2>
          <p className="text-text-dim text-description max-w-2xl mx-auto">
            DocuSign and Adobe Sign dominate the market — but they treat documents as black boxes.
            Legitt AI introduces intelligence, automation, and mobile-first delivery that competitors can't match.
          </p>
        </div>

        <div className="reveal overflow-x-auto">
          <table className="w-full min-w-640 text-left border-collapse">
            <thead>
              <tr>
                <th className="pb-4 pr-4 text-small font-bold tracking-widest uppercase text-text-dim w-2/5">
                  Feature
                </th>
                {comparison.competitors.map((c) => (
                  <th key={c.name} className="pb-4 px-4 text-center">
                    <div
                      className={`inline-flex flex-col items-center gap-1.5 px-4 py-2 rounded-xl ${
                        c.isUs
                          ? 'bg-accent/10 border border-accent/30'
                          : 'bg-surface border border-border/60'
                      }`}
                    >
                      <span
                        className={`text-description font-black ${
                          c.isUs ? 'text-accent' : 'text-text-dim'
                        }`}
                      >
                        {c.name}
                      </span>
                      {c.isUs && (
                        <span className="text-micro tracking-widest text-accent/60 uppercase font-bold">
                          This Product
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.features.map((feature, fi) => (
                <tr
                  key={feature}
                  className={`border-t border-border/40 ${fi % 2 === 0 ? 'bg-white/[0.01]' : ''}`}
                >
                  <td className="py-3.5 pr-4 text-description text-text-dim">{feature}</td>
                  {comparison.competitors.map((c) => (
                    <td
                      key={c.name}
                      className={`py-3.5 px-4 text-center ${
                        c.isUs ? 'bg-accent/[0.03]' : ''
                      }`}
                    >
                      <CellIcon value={c.values[fi]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="reveal mt-6 flex flex-wrap justify-center gap-6 text-small">
          <div className="flex items-center gap-2 text-text-dim">
            <CheckCircle size={14} className="text-accent" /> Supported
          </div>
          <div className="flex items-center gap-2 text-text-dim">
            <XCircle size={14} className="text-red-400/70" /> Not Available
          </div>
          <div className="flex items-center gap-2 text-text-dim">
            <MinusCircle size={14} className="text-amber" /> Partial / Add-on
          </div>
        </div>
      </div>
    </section>
  );
}

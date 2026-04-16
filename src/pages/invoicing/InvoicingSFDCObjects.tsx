import { Database } from 'lucide-react';
import { sfdcObjects } from '../../data/InvoicingWorkflowData';

export default function InvoicingSFDCObjects() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        <div className="reveal text-center mb-14">
          <p className="section-label justify-center">Data Model</p>
          <h2 className="text-heading font-black text-text-main mb-3">Salesforce Objects Used</h2>
          <p className="text-text-dim text-description max-w-xl mx-auto">
            Primary SFDC objects consumed and created during the bidirectional contract↔invoice sync.
          </p>
        </div>

        <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {sfdcObjects.map((obj, i) => (
            <div
              key={obj.name}
              className="glass-card rounded-xl p-5 text-center border-border/60 hover:border-brand-blue/30 transition-all duration-300 group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Database size={14} className="text-brand-blue" />
              </div>
              <div className="text-description font-bold text-text-main mb-1">{obj.name}</div>
              <div className="text-mini text-text-dim leading-snug mb-2">{obj.desc}</div>
              <div className="text-micro font-mono text-brand-blue/70">{obj.fields}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

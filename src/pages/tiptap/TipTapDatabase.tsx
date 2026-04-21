import { dbTables } from '../../data/TipTapData';

export default function TipTapDatabase() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center">Data Architecture</p>
          <h2 className="text-heading font-black text-text-main mb-4">
            Dual-Database Architecture
          </h2>
          <p className="text-description text-text-dim max-w-2xl mx-auto leading-relaxed">
            MySQL and MongoDB aren't interchangeable here — each handles exactly what it's best at.
            The split between transactional metadata and flexible JSON blobs is a deliberate design choice.
          </p>
        </div>

        {/* DB cards */}
        <div className="reveal grid md:grid-cols-2 gap-8 mb-12">
          {dbTables.map((db) => (
            <div
              key={db.db}
              className="glass-card rounded-2xl p-7 border-border/60"
              style={{ borderColor: db.color + '28' }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b" style={{ borderColor: db.color + '20' }}>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-small font-black"
                  style={{ background: db.color + '20', color: db.color }}
                >
                  {db.db === 'MySQL' ? '🗃️' : '🍃'}
                </div>
                <div>
                  <div className="text-title-sm font-black text-text-main">{db.db}</div>
                  <div className="text-mini text-text-dim">{db.role}</div>
                </div>
              </div>

              {/* Tables/Collections */}
              <div className="space-y-2">
                {db.tables.map((t, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg border"
                    style={{ borderColor: db.color + '15', background: db.color + '05' }}
                  >
                    <div className="text-small font-mono font-bold mb-1" style={{ color: db.color }}>
                      {db.db === 'MySQL' ? '📋' : '📄'} {t.name}
                    </div>
                    <div className="text-mini text-text-muted font-mono">{t.cols}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why the split */}
        <div className="reveal">
          <div
            className="glass-card rounded-2xl p-7 border"
            style={{ borderColor: 'rgba(0,204,170,0.15)', background: 'rgba(0,204,170,0.02)' }}
          >
            <h4 className="text-small font-bold tracking-widest uppercase mb-6" style={{ color: '#00ccaa' }}>
              Why This Split?
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-small font-bold text-text-main mb-2">MySQL → ACID Guarantees</div>
                <div className="text-mini text-text-dim leading-relaxed">
                  Critical transactional data (billing, user accounts, signing status, document ownership)
                  needs strict consistency. MySQL's ACID guarantees prevent partial writes and race conditions.
                </div>
              </div>
              <div>
                <div className="text-small font-bold text-text-main mb-2">MongoDB → Flexible Schema</div>
                <div className="text-mini text-text-dim leading-relaxed">
                  TipTap JSON content blobs, AI analysis outputs, and approval workflow rules have
                  deeply nested, evolving structures. MongoDB's document model handles this without schema
                  migrations.
                </div>
              </div>
              <div>
                <div className="text-small font-bold text-text-main mb-2">Trade-off Acknowledged</div>
                <div className="text-mini text-text-dim leading-relaxed">
                  More operational complexity to run two database systems. The benefit: each engine operates
                  at peak efficiency for its data type rather than forcing a one-size-fits-all compromise.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

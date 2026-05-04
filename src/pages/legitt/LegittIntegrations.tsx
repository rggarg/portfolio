import { sfIntegrationSteps, msWordSteps, versionControlFeatures } from '../../data/LegittCLMData';

export default function LegittIntegrations() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container space-y-20">

        {/* ── SALESFORCE INTEGRATION ── */}
        <div>
          <div className="reveal text-center mb-12">
            <p className="section-label justify-center">Module Deep-Dive</p>
            <h2 className="text-heading font-black text-text-main mb-4">Salesforce Integration</h2>
            <p className="text-description text-text-dim max-w-2xl mx-auto leading-relaxed">
              Bidirectional real-time sync with Salesforce Quote and Opportunity objects -
              built with a webhook + polling hybrid that ensures eventual consistency and zero data loss.
            </p>
          </div>

          <div className="reveal grid lg:grid-cols-2 gap-10 items-start">
            {/* Pipeline flow */}
            <div>
              <h3 className="text-title-sm font-black text-text-main mb-5">Sync Pipeline</h3>
              <div className="space-y-3">
                {sfIntegrationSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-mini font-black flex-shrink-0"
                      style={{ background: step.color + '20', color: step.color, border: `1.5px solid ${step.color}40` }}
                    >
                      {step.step}
                    </div>
                    <div
                      className="flex-1 glass-card rounded-xl p-4 border-border/60"
                      style={{ borderColor: step.color + '20' }}
                    >
                      <div className="text-small font-black text-text-main mb-1">{step.label}</div>
                      <div className="text-mini text-text-dim">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical details */}
            <div className="space-y-6">
              <div className="reveal">
                <h3 className="text-title-sm font-black text-text-main mb-4">Engineering Details</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Architecture', detail: 'Webhook-primary, polling-secondary hybrid. Salesforce fires webhooks on field changes; a 5-minute polling job catches any missed events for eventual consistency.' },
                    { label: 'Rate Limiting', detail: 'Salesforce has strict API quotas (daily call limits). Implemented a token-bucket rate limiter with exponential backoff on 429 responses. Bulk operations are batched.' },
                    { label: 'Idempotency', detail: 'Every sync operation carries a unique idempotency key derived from the SF object ID + timestamp. Prevents duplicate contract creation on webhook retry.' },
                    { label: 'Conflict Resolution', detail: 'Salesforce is the source of truth for opportunity data. Legitt is the source of truth for contract status. Each side owns its data domain - no conflicts.' },
                    { label: 'Data Transformation', detail: 'Custom field mapping layer translates SF object fields (Amount, CloseDate, AccountName) to Legitt contract schema. Configurable per enterprise client.' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="glass-card rounded-xl p-4 border-border/60"
                      style={{ borderColor: 'rgba(96,165,250,0.15)' }}
                    >
                      <div className="text-small font-bold mb-1" style={{ color: '#60a5fa' }}>{item.label}</div>
                      <div className="text-mini text-text-dim leading-snug">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MS WORD ONLINE ── */}
        <div className="border-t border-border/40 pt-20">
          <div className="reveal text-center mb-12">
            <p className="section-label justify-center">Module Deep-Dive</p>
            <h2 className="text-heading font-black text-text-main mb-4">MS Word Online Integration</h2>
            <p className="text-description text-text-dim max-w-2xl mx-auto leading-relaxed">
              For enterprise clients who prefer Microsoft Word, the entire drafting and redlining workflow
              stays inside MS Word Online - embedded in the platform via Office.js.
              Only after the document is{' '}
              <span className="text-text-main font-semibold">fully approved</span> does Legitt fetch the
              final DOCX and load it in <span className="text-text-main font-semibold">non-edit (read-only) mode</span>{' '}
              for the multi-party signature workflow.
            </p>
          </div>

          <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {msWordSteps.map((step, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-5 border-border/60 flex flex-col"
                style={{ borderColor: 'rgba(0,204,170,0.15)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{ background: 'rgba(0,204,170,0.1)', border: '1px solid rgba(0,204,170,0.25)' }}
                >
                  {step.icon}
                </div>
                <div className="text-small font-black text-text-main mb-2">{step.title}</div>
                <div className="text-mini text-text-dim leading-snug flex-1">{step.desc}</div>
              </div>
            ))}
          </div>

          <div className="reveal grid md:grid-cols-2 gap-6">
            <div
              className="glass-card rounded-xl p-5 border"
              style={{ borderColor: 'rgba(0,204,170,0.2)', background: 'rgba(0,204,170,0.03)' }}
            >
              <h4 className="text-small font-bold tracking-widest uppercase mb-3" style={{ color: '#00ccaa' }}>
                Why Office.js for this path?
              </h4>
              <div className="space-y-2">
                {[
                  'Enterprise clients already use Word - zero learning curve or change management',
                  'Track changes (redlining) in Word is the industry standard for legal negotiation',
                  'Official Microsoft Office.js API - stable, supported, and sandboxed',
                  'No conflict with TipTap - the two editing paths are completely separate',
                  "Approved DOCX can still feed the platform's signature and audit workflows",
                ].map((r, i) => (
                  <div key={i} className="flex items-start gap-2 text-mini text-text-dim">
                    <span style={{ color: '#00ccaa' }}>✓</span> {r}
                  </div>
                ))}
              </div>
            </div>
            <div
              className="glass-card rounded-xl p-5 border"
              style={{ borderColor: 'rgba(0,204,170,0.2)', background: 'rgba(0,204,170,0.03)' }}
            >
              <h4 className="text-small font-bold tracking-widest uppercase mb-3" style={{ color: '#00ccaa' }}>
                Engineering Challenges Solved
              </h4>
              <div className="space-y-2">
                {[
                  'Surfacing Legitt approval controls (approve/reject buttons) as an overlay on the Word iframe without breaking the Office.js sandbox',
                  'Detecting "document ready for approval" state from within the Office.js context and triggering the Legitt approval API',
                  'Fetching the final approved DOCX from Office.js and converting it to a render-safe format for the signature view',
                  'Ensuring the read-only loaded view visually matches what approvers saw - layout, fonts, tables, and redline marks stripped cleanly',
                ].map((r, i) => (
                  <div key={i} className="flex items-start gap-2 text-mini text-text-dim">
                    <span style={{ color: '#00ccaa' }}>→</span> {r}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── VERSION CONTROL ── */}
        <div className="border-t border-border/40 pt-20">
          <div className="reveal text-center mb-12">
            <p className="section-label justify-center">Module Deep-Dive</p>
            <h2 className="text-heading font-black text-text-main mb-4">Document Version Control</h2>
            <p className="text-description text-text-dim max-w-2xl mx-auto leading-relaxed">
              Complete version history for every contract - immutable checkpoints, visual diffs,
              one-click rollback, and a full compliance-ready audit trail.
            </p>
          </div>

          <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {versionControlFeatures.map((f, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-5 border-border/60"
                style={{ borderColor: 'rgba(251,146,60,0.15)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{ background: 'rgba(251,146,60,0.1)', border: '1px solid rgba(251,146,60,0.25)' }}
                >
                  {f.icon}
                </div>
                <div className="text-small font-black text-text-main mb-2">{f.title}</div>
                <div className="text-mini text-text-dim leading-snug">{f.desc}</div>
              </div>
            ))}
          </div>

          <div className="reveal">
            <h3 className="text-title-sm font-black text-text-main mb-5">Version Storage Schema</h3>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <div className="text-small font-bold mb-2" style={{ color: '#fb923c' }}>MongoDB - Version Metadata</div>
                <pre
                  className="text-mini font-mono p-4 rounded-xl leading-relaxed overflow-x-auto"
                  style={{ background: 'rgba(0,0,0,0.5)', color: '#fed7aa', border: '1px solid rgba(251,146,60,0.2)' }}
                >{`{
  _id: ObjectId("..."),
  doc_id: ObjectId("..."),
  version: 4,               // v1, v2, v3...
  created_by: ObjectId("..."),
  created_at: ISODate("..."),
  event_type: "manual_save", // 'auto_save', 'rollback', 'approval_checkpoint', etc.
  s3_object_key: "docs/v4.json", // → AWS S3 ref
  is_locked: false,         // true after signing
  metadata: {
    word_count: 2841,
    page_estimate: 12,
    has_redlines: true,
    sig_field_count: 3
  }
}`}</pre>
              </div>
              <div>
                <div className="text-small font-bold mb-2" style={{ color: '#fb923c' }}>AWS S3 - Content Blob</div>
                <pre
                  className="text-mini font-mono p-4 rounded-xl leading-relaxed overflow-x-auto"
                  style={{ background: 'rgba(0,0,0,0.5)', color: '#fed7aa', border: '1px solid rgba(251,146,60,0.2)' }}
                >{`// Path: s3://legitt-contracts/docs/v4.json
// Content-Type: application/json

{
  "type": "doc",
  "content": [
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "Full TipTap document JSON..."
        }
      ]
    }
    // ... complete node tree
  ]
}`}</pre>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

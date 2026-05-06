import { complianceItems, aiFeatures } from '../../data/LegittCLMData';

export default function LegittSecurity() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container space-y-20">

        {/* ── COMPLIANCE ── */}
        <div>
          <div className="reveal text-center mb-12">
            <p className="section-label justify-center">Enterprise Trust</p>
            <h2 className="text-heading font-black text-text-main mb-4">Security & Compliance</h2>
            <p className="text-description text-text-dim max-w-2xl mx-auto leading-relaxed">
              SOC2 Type II, GDPR, and HIPAA compliance - all achieved during my tenure and implemented directly.
              Enterprise clients trust Legitt with their most sensitive legal and business data.
            </p>
          </div>

          <div className="reveal grid md:grid-cols-3 gap-6 mb-10">
            {complianceItems.map((cert) => (
              <div
                key={cert.cert}
                className="glass-card rounded-2xl p-6 border-border/60"
                style={{ borderColor: cert.color + '22' }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: cert.color + '18', border: `1px solid ${cert.color}35` }}
                  >
                    {cert.icon}
                  </div>
                  <div
                    className="text-subtitle font-black"
                    style={{ color: cert.color }}
                  >
                    {cert.cert}
                  </div>
                </div>
                <div className="space-y-2">
                  {cert.controls.map((c, i) => (
                    <div key={i} className="flex items-start gap-2 text-mini text-text-dim">
                      <span style={{ color: cert.color }} className="flex-shrink-0 mt-0.5">✓</span>
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Multi-tenant + Okta */}
          <div className="reveal grid md:grid-cols-2 gap-6">
            <div
              className="glass-card rounded-xl p-6 border"
              style={{ borderColor: 'rgba(167,139,250,0.2)', background: 'rgba(167,139,250,0.03)' }}
            >
              <h4 className="text-small font-bold tracking-widest uppercase mb-4" style={{ color: '#a78bfa' }}>
                Multi-Tenant Architecture
              </h4>
              <div className="space-y-3">
                {[
                  { label: 'Isolation', detail: 'Application-level tenant isolation: every query is scoped to orgId. No cross-tenant data access possible at the ORM layer.' },
                  { label: 'Encryption', detail: 'AES-256 at rest. TLS 1.3 in transit. Signature images stored encrypted in S3 with signed URLs.' },
                  { label: 'RBAC', detail: 'Granular role-based permissions: Owner, Admin, Editor, Viewer, Approver, Signatory. Each role has a precise capability matrix enforced server-side.' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-small font-bold text-text-main mb-0.5">{item.label}</div>
                    <div className="text-mini text-text-dim">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="glass-card rounded-xl p-6 border"
              style={{ borderColor: 'rgba(96,165,250,0.2)', background: 'rgba(96,165,250,0.03)' }}
            >
              <h4 className="text-small font-bold tracking-widest uppercase mb-4" style={{ color: '#60a5fa' }}>
                Okta SSO / SAML Integration
              </h4>
              <div className="space-y-3">
                {[
                  { label: 'SAML 2.0 Flow', detail: 'SP-initiated SAML 2.0 flow. Legitt acts as Service Provider; enterprise Okta org as IdP. Assertion mapping configurable per client.' },
                  { label: 'JWT Management', detail: 'SAML assertion validated and exchanged for a short-lived Legitt JWT (15min) + long-lived refresh token (7 days). Session persisted in Redis.' },
                  { label: 'JIT Provisioning', detail: 'Just-in-time user provisioning: first SSO login auto-creates user record from SAML attributes (name, email, role mappings).' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-small font-bold text-text-main mb-0.5">{item.label}</div>
                    <div className="text-mini text-text-dim">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── AI INTEGRATION ── */}
        <div className="border-t border-border/40 pt-20">
          <div className="reveal text-center mb-12">
            <p className="section-label justify-center">Intelligence Layer</p>
            <h2 className="text-heading font-black text-text-main mb-4">AI / ML Integration</h2>
            <p className="text-description text-text-dim max-w-2xl mx-auto leading-relaxed">
              OpenAI and Gemini models - fine-tuned and custom-trained on legal contract data -
              power the intelligence features across the platform: from contract drafting to clause risk analysis.
            </p>
          </div>

          <div className="reveal grid sm:grid-cols-2 gap-5 mb-10">
            {aiFeatures.map((feat) => (
              <div
                key={feat.title}
                className="glass-card rounded-xl p-6 border-border/60 hover:scale-101 transition-all duration-300"
                style={{ borderColor: feat.color + '18' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = feat.color + '40'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = feat.color + '18'; }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: feat.color + '15', border: `1px solid ${feat.color}30` }}
                  >
                    {feat.icon}
                  </div>
                  <div>
                    <div className="text-small font-black text-text-main">{feat.title}</div>
                    <div
                      className="text-micro font-bold tracking-widest uppercase"
                      style={{ color: feat.color }}
                    >
                      {feat.model}
                    </div>
                  </div>
                </div>
                <p className="text-mini text-text-dim leading-snug">{feat.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal">
            <div
              className="rounded-2xl p-7 border"
              style={{ borderColor: 'rgba(167,139,250,0.2)', background: 'rgba(167,139,250,0.03)' }}
            >
              <h4 className="text-small font-bold tracking-widest uppercase mb-5" style={{ color: '#a78bfa' }}>
                AI Architecture - How It's Connected
              </h4>
              <div className="grid md:grid-cols-3 gap-6 text-mini text-text-dim">
                <div>
                  <div className="text-small font-bold text-text-main mb-2">Training Approach</div>
                  <p className="leading-relaxed">
                    Base models (GPT-4, Gemini Pro) fine-tuned on a curated corpus of anonymized enterprise
                    contracts. Training focuses on legal clause identification, risk pattern recognition,
                    and contract-specific language generation.
                  </p>
                </div>
                <div>
                  <div className="text-small font-bold text-text-main mb-2">Inference Pipeline</div>
                  <p className="leading-relaxed">
                    AI tasks run asynchronously via a job queue (not blocking the editor). Results are streamed
                    back via WebSocket. AI review of a 50-page contract completes in &lt;30 seconds.
                  </p>
                </div>
                <div>
                  <div className="text-small font-bold text-text-main mb-2">Privacy Guardrails</div>
                  <p className="leading-relaxed">
                    No contract content is sent to public model endpoints without explicit enterprise consent.
                    Enterprise clients can opt for private model deployments. PII detection strips sensitive
                    fields before any external AI call.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

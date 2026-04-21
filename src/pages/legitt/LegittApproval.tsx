import { approvalRoutingRules } from '../../data/LegittCLMData';
import { ArrowRight } from 'lucide-react';

const states = [
  { label: 'Draft', color: '#777', emoji: '✏️' },
  { label: 'Pending Approval', color: '#f5a623', emoji: '⏳' },
  { label: 'Under Review', color: '#60a5fa', emoji: '👁️' },
  { label: 'Approved', color: '#4ade80', emoji: '✅' },
  { label: 'Rejected', color: '#ef4444', emoji: '❌' },
  { label: 'Executed', color: '#a78bfa', emoji: '🏆' },
];

export default function LegittApproval() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="section-container">
        <div className="reveal text-center mb-16">
          <p className="section-label justify-center">Module Deep-Dive</p>
          <h2 className="text-heading font-black text-text-main mb-4">Approval Workflow Engine</h2>
          <p className="text-description text-text-dim max-w-2xl mx-auto leading-relaxed">
            A rules-based approval routing engine built on a finite state machine - dynamically calculating
            approval paths through nested department hierarchies stored in MongoDB.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: State machine + MongoDB hierarchy */}
          <div className="space-y-8">
            {/* State machine visual */}
            <div className="reveal">
              <h3 className="text-title-sm font-black text-text-main mb-5">Contract State Machine</h3>
              <div className="glass-card rounded-2xl p-6 border-border/60" style={{ borderColor: 'rgba(245,166,35,0.18)' }}>
                <div className="flex flex-col gap-2">
                  {states.map((state, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className="flex items-center gap-2.5 flex-1 p-3 rounded-xl border"
                        style={{ borderColor: state.color + '25', background: state.color + '08' }}
                      >
                        <span className="text-base">{state.emoji}</span>
                        <span className="text-small font-bold" style={{ color: state.color }}>{state.label}</span>
                      </div>
                      {i < states.length - 1 && i !== 3 /* skip after Approved */ && (
                        <ArrowRight size={14} className="text-text-muted flex-shrink-0" />
                      )}
                      {/* Branch arrow after Under Review */}
                      {i === 2 && (
                        <div className="text-mini text-text-dim flex-shrink-0">↕</div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border/40 text-mini text-text-dim">
                  <span style={{ color: '#ef4444' }}>Rejected</span> → returns to Draft state with comments.
                  Escalation timer auto-moves to next approver if deadline exceeded.
                </div>
              </div>
            </div>

            {/* MongoDB dept hierarchy */}
            <div className="reveal">
              <h3 className="text-title-sm font-black text-text-main mb-4">MongoDB Department Hierarchy</h3>
              <pre
                className="text-mini font-mono p-5 rounded-xl leading-relaxed overflow-x-auto"
                style={{ background: 'rgba(0,0,0,0.5)', color: '#c4b5fd', border: '1px solid rgba(167,139,250,0.2)' }}
              >{`// dept_hierarchies collection
{
  orgId: "legitt_client_001",
  departments: [
    {
      id: "legal",
      name: "Legal",
      head: { userId: "u_001", name: "Sarah J." },
      approvalThreshold: 50000,  // contracts under this → skip
      escalationHours: 48,
      subDepts: [
        {
          id: "contracts",
          name: "Contracts Team",
          approvers: ["u_002", "u_003"],
          parallel: false  // sequential within team
        }
      ]
    },
    {
      id: "finance",
      name: "Finance",
      head: { userId: "u_010" },
      approvalThreshold: 100000,
      subDepts: [/* ... */]
    }
  ]
}`}</pre>
            </div>
          </div>

          {/* Right: Routing rules + escalation */}
          <div className="space-y-8">
            <div className="reveal">
              <h3 className="text-title-sm font-black text-text-main mb-5">Conditional Routing Rules</h3>
              <div className="space-y-3">
                {approvalRoutingRules.map((rule, i) => (
                  <div
                    key={i}
                    className="glass-card rounded-xl p-4 border-border/60"
                    style={{ borderColor: 'rgba(245,166,35,0.15)' }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="text-micro font-black px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{ color: '#f5a623', background: 'rgba(245,166,35,0.15)', border: '1px solid rgba(245,166,35,0.3)' }}
                      >
                        IF
                      </div>
                      <div>
                        <div className="text-small font-bold text-text-main mb-0.5">{rule.trigger}</div>
                        <div className="text-mini text-text-dim">{rule.rule}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              <h3 className="text-title-sm font-black text-text-main mb-4">Auto-Escalation System</h3>
              <div
                className="glass-card rounded-xl p-5 border space-y-4"
                style={{ borderColor: 'rgba(245,166,35,0.2)', background: 'rgba(245,166,35,0.03)' }}
              >
                {[
                  { icon: '⏰', title: '48h Deadline', desc: 'Each approver gets a configurable deadline (default 48h). Scheduled jobs check pending approvals every 15 minutes.' },
                  { icon: '📧', title: 'Reminder at 70%', desc: 'At 70% of deadline elapsed, automatic reminder sent via email + Slack + in-app notification.' },
                  { icon: '🔼', title: 'Auto-Escalate at 100%', desc: 'On deadline hit, approval is automatically escalated to the approver\'s manager. Original approver is notified and locked out.' },
                  { icon: '📋', title: 'Delegation Support', desc: 'Approvers can delegate to a proxy before going on leave. Delegation is time-bounded and fully logged in audit trail.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-base flex-shrink-0">{item.icon}</span>
                    <div>
                      <div className="text-small font-bold text-text-main">{item.title}</div>
                      <div className="text-mini text-text-dim leading-snug">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              <div
                className="rounded-xl p-5 border"
                style={{ borderColor: 'rgba(245,166,35,0.2)', background: 'rgba(245,166,35,0.03)' }}
              >
                <div className="text-mini font-bold tracking-widest uppercase mb-3" style={{ color: '#f5a623' }}>
                  Key Engineering Decision
                </div>
                <p className="text-mini text-text-dim leading-relaxed">
                  Department hierarchies are stored in MongoDB (not MySQL) because approval chains have deeply
                  nested, variable-depth structures that change with org restructuring. A relational adjacency
                  list model would require recursive CTEs for every path calculation. MongoDB's document model
                  allows the entire tree to be fetched in one query, with the routing algorithm traversing it
                  in-memory - O(depth) instead of O(depth × queries).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

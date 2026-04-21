import themeConfig from '../../tailwind.config.js';

const colors = themeConfig.theme.extend.colors as any;

export const tiptapAccent = colors['brand-teal']; // #00ccaa

export const heroStats = [
  { value: '<2s', label: 'Load time for 50-page contracts' },
  { value: '<200ms', label: 'Real-time sync latency' },
  { value: '98%+', label: 'Format conversion fidelity' },
  { value: '500+', label: 'Concurrent users supported' },
];

export const techTags = [
  'TipTap',
  'ProseMirror',
  'Socket.io',
  'Redis',
  'LibreOffice',
  'Puppeteer',
  'MySQL',
  'MongoDB',
  'Node.js',
  'React.js',
  'TypeScript',
  'AWS',
];

export const editorComparison = [
  {
    name: 'Quill',
    verdict: 'Rejected',
    issues: [
      'Too basic - limited structural customization',
      'Couldn\'t handle complex contract node structures',
      'No TypeScript support out of the box',
      'Extension ecosystem too narrow for enterprise use',
    ],
    color: '#ef4444',
  },
  {
    name: 'CKEditor',
    verdict: 'Rejected',
    issues: [
      'Per-feature licensing - prohibitively expensive at enterprise scale',
      'Advanced features like collaboration locked behind premium tiers',
      'Heavy bundle size affecting load performance',
      'Vendor lock-in with proprietary plugin system',
    ],
    color: '#f97316',
  },
  {
    name: 'Draft.js',
    verdict: 'Attempted & Abandoned',
    issues: [
      'Attempted implementation but poor UX under load',
      'Performance degraded on documents >20 pages',
      'Limited table support - critical for contracts',
      'Meta deprecated it - community momentum died',
    ],
    color: '#eab308',
  },
  {
    name: 'Custom Build',
    verdict: 'Prototype Only',
    issues: [
      'Undo/redo stack was non-trivial to implement correctly',
      'Pagination and scroll behavior extremely complex',
      'Months of development before reaching feature parity',
      'ProseMirror\'s direct API is too low-level for rapid iteration',
    ],
    color: '#8b5cf6',
  },
];

export const tiptapWins = [
  {
    icon: '🆓',
    title: 'Free & Open Source',
    desc: 'Core version fully functional at zero cost - no per-feature licensing.',
  },
  {
    icon: '🔌',
    title: 'Infinitely Extensible',
    desc: 'Built on ProseMirror - custom nodes, marks, and extensions with full control.',
  },
  {
    icon: '🏭',
    title: 'Production-Ready',
    desc: 'Mature framework with smooth UX, undo/redo, and clipboard handling out of the box.',
  },
  {
    icon: '🔷',
    title: 'TypeScript Native',
    desc: 'Strong typing throughout - essential for a complex enterprise codebase.',
  },
  {
    icon: '📖',
    title: 'Active Community',
    desc: 'Comprehensive docs, active maintainers, and a growing ecosystem of extensions.',
  },
];

export const archLayerAnnotations = [
  {
    layer: 'Custom Extensions',
    color: colors['brand-teal'],
    explanation:
      'Three production-built extensions sit atop TipTap Core: Redlining (track changes with accept/reject), Signature Fields (drag-and-drop signatory blocks), and the Collaboration Extension (single-editor model with permission handoff).',
  },
  {
    layer: 'TipTap Editor Core',
    color: '#a78bfa',
    explanation:
      'ProseMirror foundation with a custom document schema. All content is represented as a typed JSON tree - enabling precise, lossless conversion between formats.',
  },
  {
    layer: 'Real-time Sync',
    color: colors['brand-light-blue'],
    explanation:
      'Socket.io client emits debounced onChange events to the server. The server broadcasts patch updates to all read-only viewers. A single-writer model prevents merge conflicts.',
  },
  {
    layer: 'Data Persistence',
    color: colors.amber,
    explanation:
      'Redis acts as a write buffer - absorbing keystrokes before flushing to the database. MySQL stores document metadata and version refs. MongoDB stores the full TipTap JSON blobs.',
  },
  {
    layer: 'DOCX Upload Pipeline',
    color: '#4ade80',
    explanation:
      'User uploads a DOCX → LibreOffice (headless) converts to HTML → Custom HTML parser maps to TipTap JSON schema → Loaded into editor. Handles tables, images, lists, and custom numbering.',
  },
  {
    layer: 'PDF Export Pipeline',
    color: '#fb923c',
    explanation:
      'TipTap JSON → Custom HTML generation (with signature images, redline styles, page breaks) → Puppeteer headless Chrome renders the PDF with exact A4 formatting, headers, and footers.',
  },
];

export const extensions = [
  {
    id: 'redlining',
    name: 'Redlining Extension',
    subtitle: 'Track Changes',
    color: colors['brand-teal'],
    icon: '📝',
    overview:
      'Contract-grade track changes built as a custom TipTap node. Every insertion, deletion, or modification is wrapped in a typed node carrying full metadata - who, when, and what changed.',
    dataStructure: `{
  type: 'redline',
  attrs: {
    changeType: 'insertion' | 'deletion' | 'modification',
    userId: 'user_123',
    userName: 'John Doe',
    timestamp: '2024-01-15T10:30:00Z',
    originalContent: 'old clause text',
    newContent: 'revised clause text',
    changeId: 'uuid-v4'
  },
  content: [/* ProseMirror nodes */]
}`,
    visualRules: [
      'Insertions → green highlight with underline',
      'Deletions → red strikethrough',
      'Modifications → deletion + insertion side by side',
      'Hover tooltip shows: author, timestamp, action type',
    ],
    granularity: [
      { level: 'Individual Review', desc: 'Navigate change-by-change. Accept or reject each modification in the sidebar.' },
      { level: 'Bulk Operations', desc: '"Accept All" or "Reject All" with a confirmation guard to prevent accidental revert.' },
    ],
    code: `// Accept change - removes redline wrapper, keeps new content
acceptChange(changeId: string) {
  const { tr, doc } = editor.state;
  doc.descendants((node, pos) => {
    if (node.type.name === 'redline' && 
        node.attrs.changeId === changeId) {
      tr.replaceWith(pos, pos + node.nodeSize, 
        node.attrs.changeType === 'deletion' ? [] : node.content);
    }
  });
  editor.view.dispatch(tr);
}

// Reject change - reverts to original content
rejectChange(changeId: string) {
  const { tr, doc } = editor.state;
  doc.descendants((node, pos) => {
    if (node.type.name === 'redline' && 
        node.attrs.changeId === changeId) {
      tr.replaceWith(pos, pos + node.nodeSize, 
        parseHTML(node.attrs.originalContent));
    }
  });
  editor.view.dispatch(tr);
}`,
    perf: [
      'Lazy rendering of highlights on large docs (50–100 pages)',
      'Virtualized redline sidebar - only renders visible items',
      'Debounced redline recalculation on scroll',
      'Batched ProseMirror transactions to minimize re-renders',
    ],
  },
  {
    id: 'signature',
    name: 'Signature Field Extension',
    subtitle: 'In-Document Signing Blocks',
    color: colors['brand-purple'],
    icon: '✍️',
    overview:
      'Signature fields are first-class document nodes - not floating overlays. Each field carries full signer metadata and integrates directly with the downstream signature workflow.',
    dataStructure: `{
  type: 'signatureField',
  attrs: {
    signerId: 'signer_uuid',
    signerEmail: 'john@company.com',
    signerName: 'John Doe',
    signerRole: 'CEO',
    fieldType: 'signature' | 'initial' | 'date',
    required: true,
    position: { x: 100, y: 500 },
    width: 200,
    height: 80,
    signed: false,
    signatureData: null // Base64 image after signing
  }
}`,
    methods: [
      {
        name: 'Drag & Drop from Toolbar',
        desc: 'Drag a signature block icon from the toolbar and drop it anywhere in the document. Adjustable size and position after placement.',
      },
      {
        name: 'Slash ( / ) Command',
        desc: 'Type "/" in the editor to open the block menu. Select "Signature Field" - field inserts at cursor, then reposition via drag.',
      },
    ],
    integrationSteps: [
      'Signature fields extracted from TipTap JSON after drafting',
      'Signer details sent to signature service with signing order',
      'Email notifications dispatched to each signatory',
      'Signature image embedded back into field node on completion',
      'Document locked → status transitions to "Executed"',
    ],
  },
  {
    id: 'collaboration',
    name: 'Collaboration Extension',
    subtitle: 'Controlled Real-Time Editing',
    color: colors['brand-light-blue'],
    icon: '👥',
    overview:
      'Rather than simultaneous editing (which creates legal compliance risks in contracts), the system implements a single-editor model: one writer has write access at any time, all others view changes in real-time.',
    designDecision:
      'Contracts require legal precision - simultaneous multi-cursor editing creates ambiguity about the authoritative version. A single-editor model with real-time broadcast ensures a clear chain of custody.',
    permissionFlow: [
      'User B requests edit access while User A is editing',
      'Request routed to server via Socket.io',
      'User A receives in-app notification (+ email)',
      'User A approves - or system auto-approves after timeout',
      'Write lock transfers to User B',
      'User A\'s view switches to read-only automatically',
      'All changes broadcast in real-time to every connected viewer',
    ],
    benefits: [
      'Zero merge conflicts - guaranteed by design',
      'Clear audit trail: who edited what and when',
      'Legal compliance: single source of truth at every moment',
      'Undo/redo scoped to active editor only - no viewer confusion',
    ],
    dataFlow: 'User Types → TipTap onChange → Debounce (3s) → Socket.io emit → Redis cache → DB flush → Broadcast to viewers',
  },
];

export const formatPipelineUpload = [
  { step: 1, label: 'DOCX Upload', desc: 'User uploads contract file via UI', color: '#4ade80', bg: 'rgba(74,222,128,0.08)' },
  { step: 2, label: 'LibreOffice', desc: 'Headless conversion → HTML', color: '#fb923c', bg: 'rgba(251,146,60,0.08)' },
  { step: 3, label: 'HTML Parser', desc: 'Custom logic maps HTML → TipTap schema', color: '#fb923c', bg: 'rgba(251,146,60,0.08)' },
  { step: 4, label: 'TipTap JSON', desc: 'Loaded into editor, ready to edit', color: '#a78bfa', bg: 'rgba(167,139,250,0.08)' },
];

export const formatPipelineExport = [
  { step: 1, label: 'TipTap JSON', desc: 'Full document state from editor', color: '#a78bfa', bg: 'rgba(167,139,250,0.08)' },
  { step: 2, label: 'Custom HTML', desc: 'Generated with signatures, redlines, page breaks', color: '#fb923c', bg: 'rgba(251,146,60,0.08)' },
  { step: 3, label: 'Puppeteer', desc: 'Headless Chrome renders to A4 PDF', color: '#fb923c', bg: 'rgba(251,146,60,0.08)' },
  { step: 4, label: 'Final PDF', desc: 'Signed, formatted, ready to distribute', color: '#4ade80', bg: 'rgba(74,222,128,0.08)' },
];

export const uploadChallenges = [
  'Complex table structures (merged cells, nested tables)',
  'Preserving fonts, sizes, colors as TipTap marks',
  'Page breaks and section break metadata',
  'Embedded image extraction and S3 re-upload',
  'Custom list numbering schemes',
];

export const performanceMetrics = [
  { label: 'Editor Load Time', value: '<2s', sub: '50-page contract', color: colors['brand-teal'] },
  { label: 'Keystroke Latency', value: '<50ms', sub: 'time to screen render', color: colors['brand-light-blue'] },
  { label: 'Auto-Save Debounce', value: '3s', sub: 'after activity pause', color: colors.amber },
  { label: 'Collaboration Sync', value: '<200ms', sub: 'changes to other screens', color: colors['brand-purple'] },
];

export const autoSaveSteps = [
  { n: '01', title: 'User Types', desc: 'Editor onChange fires after each transaction' },
  { n: '02', title: 'Debounce', desc: '3-second inactivity window - prevents server overload' },
  { n: '03', title: 'Redis Write', desc: 'Content flushed to Redis cache (sub-millisecond)' },
  { n: '04', title: 'DB Flush', desc: 'Redis → MySQL/MongoDB after a few minutes' },
  { n: '05', title: 'Broadcast', desc: 'Live diff sent to all viewers via Socket.io' },
];

export const dbTables = [
  {
    db: 'MySQL',
    color: '#f97316',
    role: 'Transactional metadata, ACID guarantees',
    tables: [
      { name: 'documents', cols: 'id, title, status, current_version_id, created_by' },
      { name: 'versions', cols: 'id, document_id, version_number, content_mongo_id, is_current' },
      { name: 'collaborators', cols: 'id, document_id, user_id, role, permissions' },
      { name: 'signatories', cols: 'id, document_id, user_id, signing_order, status, signed_at' },
      { name: 'signature_process', cols: 'id, document_id, status, auto_send, initiated_at' },
    ],
  },
  {
    db: 'MongoDB',
    color: '#4ade80',
    role: 'Flexible schema for JSON blobs & AI outputs',
    tables: [
      { name: 'document_content', cols: 'version_id, tiptap_json, html_cache, created_at' },
      { name: 'approval_workflows', cols: 'name, rules[], department_hierarchy{}' },
      { name: 'contract_reviews', cols: 'document_id, clauses[], risk_score, compliance_issues' },
      { name: 'chat_agent_history', cols: 'user_id, conversation_id, messages[], generated_docs' },
    ],
  },
];

export const challenges = [
  {
    num: '01',
    title: 'Format Preservation',
    badge: 'Biggest Challenge',
    problem: 'DOCX has rich formatting (merged tables, custom fonts, embedded objects) that browsers cannot natively represent.',
    solution: 'LibreOffice → HTML → Custom HTML parser with precise schema mapping. CSS styles translated to TipTap marks. Images extracted and re-hosted on S3.',
    result: '98%+ visual fidelity across the full DOCX → TipTap → PDF roundtrip.',
    color: colors['brand-teal'],
  },
  {
    num: '02',
    title: 'Redlining on Large Docs',
    badge: 'Performance',
    problem: 'Documents with 500+ tracked changes caused sluggish re-renders and unacceptable typing latency.',
    solution: 'Optimized ProseMirror transactions (batching). Lazy rendering of highlights. Virtualized sidebar - only DOM-mounting visible redline items.',
    result: 'Smooth editing even at 500+ concurrent tracked changes on 100-page docs.',
    color: colors['brand-purple'],
  },
  {
    num: '03',
    title: 'Concurrent Editing Conflicts',
    badge: 'Architecture',
    problem: 'Multiple simultaneous writers created merge conflicts, data loss, and legal ambiguity over document ownership.',
    solution: 'Designed a single-editor model: one write lock at a time. Permission handoff workflow. All others get real-time read-only view.',
    result: 'Zero merge conflicts. Clear audit trail. Full legal compliance around document authorship.',
    color: colors['brand-light-blue'],
  },
  {
    num: '04',
    title: 'Socket.io Horizontal Scale',
    badge: 'Infrastructure',
    problem: 'Thousands of persistent WebSocket connections across hundreds of active documents created server bottlenecks.',
    solution: 'Redis pub/sub as the message bus between Socket.io server instances. Connection pooling. Rooms scoped per document.',
    result: 'Supports hundreds of concurrent active documents with no cross-contamination of broadcasts.',
    color: colors.amber,
  },
  {
    num: '05',
    title: 'Undo/Redo with Live Updates',
    badge: 'Edge Case',
    problem: 'Active editor\'s undo stack conflicted with incoming real-time diffs from the server, causing unpredictable document state.',
    solution: 'Undo/redo entirely disabled for viewers. Active editor\'s undo stack is independent of server-pushed updates.',
    result: 'Consistent, predictable behavior. No user confusion. Clear UX distinction between editor and viewer modes.',
    color: colors['brand-pink'],
  },
];

export const keyMetrics = [
  { value: '<2s', label: 'Contract load time', sub: 'for 50-page documents', color: colors['brand-teal'] },
  { value: '98%+', label: 'Format fidelity', sub: 'DOCX → TipTap → PDF roundtrip', color: colors['brand-light-blue'] },
  { value: '<200ms', label: 'Sync latency', sub: 'real-time collaboration', color: colors['brand-purple'] },
  { value: '0', label: 'Merge conflicts', sub: 'single-editor architecture', color: colors.amber },
  { value: '500+', label: 'Concurrent users', sub: 'across platform simultaneously', color: colors['brand-teal'] },
  { value: '99.9%+', label: 'Uptime', sub: 'Redis prevents data loss on crash', color: colors['brand-light-blue'] },
];

export const whatWorked = [
  'Choosing TipTap saved months vs. building on raw ProseMirror',
  'Single-editor model prevented countless merge-conflict bugs in production',
  'Redis caching strategy gave excellent perf without overloading the DB',
  'LibreOffice was the right DOCX converter - Mammoth.js couldn\'t handle complex tables',
];

export const whatIdoDifferently = [
  'Start with virtualized rendering from day 1 - retrofitting is painful',
  'Consider CRDT (e.g. Yjs) for true simultaneous editing if the business allows it',
  'Build a comprehensive visual regression suite for format conversion much earlier',
  'Invest in Puppeteer PDF test automation sooner - caught subtle issues late',
];

export const futureImprovements = [
  { title: 'Virtualized Rendering', desc: 'Render only visible portions for 200+ page documents' },
  { title: 'Offline Mode', desc: 'Client-side cache with smart conflict resolution on reconnect' },
  { title: 'CRDT Collaboration', desc: 'Multi-cursor simultaneous editing using Yjs / Automerge' },
  { title: 'AI Clause Suggestions', desc: 'Real-time contract clause recommendations inline in the editor' },
  { title: 'Advanced Search', desc: 'Full-text search within the editor across all document versions' },
  { title: 'Mobile Optimization', desc: 'Touch-friendly editing on tablet devices for field signatories' },
];

export const skillsGained = [
  'Deep internals of ProseMirror - transactions, state, schema',
  'Real-time collaboration patterns: WebSocket, Redis pub/sub',
  'Document format conversion: DOCX, HTML, Tiptap JSON, PDF',
  'Performance optimization for large DOM structures',
  'Building extensible plugin/extension architectures',
];

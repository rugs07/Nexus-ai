const STEPS = [
  {
    n: '01',
    title: 'Connect your data',
    desc: 'Hook into any data source — APIs, databases, files, or webhooks. Nexus handles auth, schema detection, and streaming automatically.',
    code: `// Connect in 3 lines
const nexus = new NexusClient({ apiKey })
await nexus.connect('postgres://...')
const data = await nexus.query('users')`,
  },
  {
    n: '02',
    title: 'Define your workflow',
    desc: 'Use our visual builder or code SDK to define multi-step pipelines. Conditional branching, parallel execution, retries — all built-in.',
    code: `const pipeline = nexus.pipeline([
  { model: 'gpt-4o', prompt: classify },
  { route: {
      positive: summarize,
      negative: flag
  }},
  { output: 'webhook' }
])`,
  },
  {
    n: '03',
    title: 'Deploy and monitor',
    desc: 'Deploy globally in one click. Real-time dashboards surface latency, cost, and errors. Set alerts and auto-scale rules from the same UI.',
    code: `await pipeline.deploy({
  regions: ['us-east', 'eu-west', 'ap'],
  scaling: { min: 2, max: 100 },
  alerts: {
    latency: 200,
    error_rate: 0.01
  }
})`,
  },
]

function CodeBlock({ code }: { code: string }) {
  const highlighted = (line: string) =>
    line
      .replace(/\/\/.*/g, '<span class="text-emerald-400/70">$&</span>')
      .replace(/'([^']*)'/g, "<span class=\"text-yellow-400\">'$1'</span>")
      .replace(/\b(const|await|new)\b/g, '<span class="text-violet-400">$1</span>')
      .replace(/\b(nexus|pipeline)\b/g, '<span class="text-cyan-neon">$1</span>')

  return (
    <div className="code-block">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.05] bg-white/[0.02]">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        <span className="text-[11px] text-slate-600 font-mono ml-2">workflow.ts</span>
      </div>
      <div className="p-5 overflow-x-auto">
        <pre className="font-mono text-xs leading-7 text-slate-400">
          {code.split('\n').map((line, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-slate-700 select-none w-4 text-right flex-shrink-0">{i + 1}</span>
              <span dangerouslySetInnerHTML={{ __html: highlighted(line) }} />
            </div>
          ))}
        </pre>
      </div>
    </div>
  )
}

export default function Workflow() {
  return (
    <section id="workflow" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 30% 80%,rgba(124,58,237,0.04) 0%,transparent 70%)' }} />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="section-tag">
          <div className="w-1.5 h-1.5 rounded-full bg-violet-soft animate-pulse" />
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-violet-soft">How it works</span>
        </div>
        <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold text-white leading-tight tracking-tight mb-4 font-sora">
          From idea to production{' '}
          <span className="text-grad-violet font-display italic">in minutes</span>
        </h2>
        <p className="text-lg text-slate-500">Three steps. No DevOps PhD required.</p>
      </div>

      {/* Steps */}
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {STEPS.map((step, i) => (
          <div key={step.n} className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
            <div className="lg:[direction:ltr]">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center font-mono text-sm font-semibold flex-shrink-0">
                  <span className="text-grad-cyan">{step.n}</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-cyan-neon/25 to-transparent" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 font-sora leading-snug">{step.title}</h3>
              <p className="text-base text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
            <div className="lg:[direction:ltr]">
              <CodeBlock code={step.code} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

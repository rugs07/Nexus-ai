const STATS = [
  { value: '2.4B+', label: 'API calls served', sub: 'Last 30 days' },
  { value: '48ms',  label: 'Median latency',   sub: 'Global average' },
  { value: '99.99%',label: 'Uptime SLA',        sub: 'Last 12 months' },
  { value: '4,000+',label: 'Teams worldwide',   sub: 'And growing' },
]

export default function Stats() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto glass rounded-3xl border border-white/[0.05] p-10 sm:p-14 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none rounded-3xl"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%,rgba(0,212,255,0.05) 0%,transparent 70%)' }} />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {STATS.map((s, i) => (
            <div key={s.label} className={`text-center ${i < 3 ? 'lg:border-r lg:border-white/[0.05]' : ''}`}>
              <div className="font-display text-[clamp(32px,4vw,52px)] leading-none mb-2 text-grad-cyan">{s.value}</div>
              <div className="text-sm font-semibold text-slate-300 mb-1">{s.label}</div>
              <div className="text-xs text-slate-600">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

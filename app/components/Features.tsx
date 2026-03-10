const FEATURES = [
  {
    chip: 'Instant Inference',
    title: 'Sub-50ms response time, globally',
    desc: "Our edge-deployed inference layer routes requests to the nearest node, delivering lightning-fast responses regardless of your user's location.",
    iconBg: 'bg-yellow-400/10',
    iconColor: 'text-yellow-400',
    barColor: 'from-yellow-400 to-orange-400',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>,
  },
  {
    chip: 'Smart Orchestration',
    title: 'Chain models like building blocks',
    desc: 'Design multi-step AI pipelines with a visual editor. Route outputs, add conditions, and compose models — no code required.',
    iconBg: 'bg-cyan-neon/10',
    iconColor: 'text-cyan-neon',
    barColor: 'from-cyan-neon to-blue-500',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>,
  },
  {
    chip: 'Deep Analytics',
    title: 'Understand every token spent',
    desc: 'Full observability into cost, latency, and model behavior. Set budgets, trace requests end-to-end, and optimize with real data.',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
    barColor: 'from-violet-400 to-purple-500',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>,
  },
  {
    chip: 'Enterprise Security',
    title: 'SOC 2 Type II. GDPR-ready.',
    desc: "Zero data retention by default. RBAC, SSO, audit logs, and private VPC deployments for teams that can't compromise on compliance.",
    iconBg: 'bg-emerald-400/10',
    iconColor: 'text-emerald-400',
    barColor: 'from-emerald-400 to-teal-400',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>,
  },
  {
    chip: 'Universal API',
    title: 'One API. Every model.',
    desc: 'Access 30+ frontier models via a single, unified API. Switch providers without changing your code — just update a config field.',
    iconBg: 'bg-blue-400/10',
    iconColor: 'text-blue-400',
    barColor: 'from-blue-400 to-indigo-400',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>,
  },
  {
    chip: 'Team Collaboration',
    title: 'Ship together, not in silos',
    desc: "Shared prompt libraries, team dashboards, and role-based access. Every team member has what they need, nothing they don't.",
    iconBg: 'bg-pink-400/10',
    iconColor: 'text-pink-400',
    barColor: 'from-pink-400 to-rose-400',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>,
  },
]

export default function Features() {
  return (
    <section id="product" className="py-28 px-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="section-tag">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-neon animate-pulse" />
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-cyan-neon">Features</span>
        </div>
        <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold text-white leading-tight tracking-tight mb-4 font-sora">
          Everything you need to <span className="text-grad-cyan">move fast</span>
        </h2>
        <p className="text-lg text-slate-500 leading-relaxed">
          From inference to observability — Nexus gives you the primitives to build,
          ship, and scale AI products with confidence.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map(f => (
          <div key={f.chip} className="feature-card group">
            {/* Icon */}
            <div className={`w-11 h-11 rounded-xl ${f.iconBg} flex items-center justify-center mb-5`}>
              <svg className={`w-5 h-5 ${f.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                {f.icon}
              </svg>
            </div>
            <p className="text-[10px] font-bold tracking-[2px] uppercase text-slate-500 mb-2">{f.chip}</p>
            <h3 className="text-lg font-bold text-white mb-3 leading-snug font-sora">{f.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            {/* Bottom accent */}
            <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${f.barColor} opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
          </div>
        ))}
      </div>
    </section>
  )
}

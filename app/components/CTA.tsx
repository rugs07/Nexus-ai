const TRUST = ['Free forever plan', 'No credit card required', 'SOC 2 Type II certified', '99.9% uptime SLA']

export default function CTA() {
  return (
    <section className="py-28 px-6 text-center relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%,rgba(0,212,255,0.06) 0%,transparent 70%)' }} />
      <div className="glow-line absolute top-0 left-1/2 -translate-x-1/2 w-72" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Icon */}
        <div className="relative inline-block mb-10">
          <div className="absolute inset-0 rounded-full bg-cyan-neon/15 blur-3xl scale-[2.5]" />
          <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-cyan-intense"
            style={{ background: 'linear-gradient(135deg,#00d4ff,#00ffc8)' }}>
            <svg className="w-8 h-8 text-void" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
        </div>

        <h2 className="text-[clamp(36px,5vw,64px)] font-extrabold text-white mb-5 font-sora leading-tight">
          Ready to build the <span className="text-grad-cyan">future</span>?
        </h2>
        <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto">
          Join thousands of teams shipping AI-native products on Nexus. Start free. Scale infinitely.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
          <a href="#" className="btn-primary text-base px-10 py-4 rounded-2xl">
            Start building for free
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </a>
          <a href="#" className="btn-outline text-base px-10 py-4 rounded-2xl">Talk to sales</a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {TRUST.map(t => (
            <div key={t} className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-cyan-neon font-bold">✓</span>
              {t}
            </div>
          ))}
        </div>
      </div>

      <div className="glow-line absolute bottom-0 left-1/2 -translate-x-1/2 w-72" />
    </section>
  )
}

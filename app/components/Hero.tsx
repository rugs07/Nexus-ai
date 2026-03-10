'use client'
import { useEffect, useRef } from 'react'

const AVATARS = [
  { initials: 'JK', from: '#00d4ff', to: '#3b82f6' },
  { initials: 'AM', from: '#8b5cf6', to: '#6d28d9' },
  { initials: 'SR', from: '#34d399', to: '#00d4ff' },
  { initials: 'LP', from: '#60a5fa', to: '#6366f1' },
]

export default function Hero() {
  const blobRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)]

  useEffect(() => {
    let alive = true
    import('gsap').then(({ gsap }) => {
      if (!alive) return
      blobRefs.forEach((ref, i) => {
        if (!ref.current) return
        gsap.to(ref.current, { x: 'random(-60,60)', y: 'random(-50,50)', scale: 'random(0.88,1.12)', duration: 9 + i * 2.5, delay: i * 0.8, ease: 'sine.inOut', repeat: -1, yoyo: true })
        gsap.to(ref.current, { opacity: 'random(0.3,0.7)', duration: 6 + i * 1.5, delay: i * 0.4, ease: 'sine.inOut', repeat: -1, yoyo: true })
      })
    })
    return () => { alive = false }
  }, [])

  useEffect(() => {
    document.querySelectorAll('[data-reveal]').forEach((el, i) => {
      const h = el as HTMLElement
      h.style.opacity = '0'
      h.style.transform = 'translateY(24px)'
      h.style.transition = `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`
      setTimeout(() => { h.style.opacity = '1'; h.style.transform = 'translateY(0)' }, 100 + i * 80)
    })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Animated blobs */}
      <div ref={blobRefs[0]} className="absolute top-[8%] left-[18%] w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(0,212,255,0.13) 0%,rgba(0,212,255,0.04) 50%,transparent 70%)', filter: 'blur(40px)' }} />
      <div ref={blobRefs[1]} className="absolute top-[30%] right-[8%] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(124,58,237,0.1) 0%,rgba(124,58,237,0.03) 50%,transparent 70%)', filter: 'blur(50px)' }} />
      <div ref={blobRefs[2]} className="absolute bottom-[20%] left-[38%] w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(0,255,200,0.08) 0%,transparent 70%)', filter: 'blur(35px)' }} />

      {/* Top glow */}
      <div className="absolute inset-x-0 top-0 h-[60vh] pointer-events-none bg-hero-glow" />

      {/* Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0,212,255,0.9)" strokeWidth="0.4"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)"/>
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 text-center">

        {/* Social proof */}
        <div data-reveal className="inline-flex items-center gap-3 glass rounded-full px-4 py-2 mb-9">
          <div className="flex">
            {AVATARS.map((a, i) => (
              <div key={i}
                className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold text-white ring-2 ring-void"
                style={{ background: `linear-gradient(135deg,${a.from},${a.to})`, marginLeft: i === 0 ? 0 : -6 }}
              >{a.initials}</div>
            ))}
          </div>
          <span className="text-yellow-400 text-xs tracking-wide">★★★★★</span>
          <span className="text-xs text-slate-400">Loved by <strong className="text-white">4,000+</strong> teams</span>
        </div>

        {/* Headline */}
        <h1 data-reveal className="text-[clamp(42px,7vw,88px)] font-extrabold text-white leading-[1.04] tracking-[-1.5px] mb-5 font-sora">
          Build faster with<br/>
          <span className="text-grad-violet italic font-display">intelligence</span><br/>
          that{' '}
          <span className="text-grad-violet font-display italic">scales</span>
        </h1>

        {/* Subheading */}
        <p data-reveal className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Nexus AI handles the complexity so you don't have to. Orchestrate workflows,
          extract insights, and ship products — without the infrastructure headache.
        </p>

        {/* CTAs */}
        <div data-reveal className="flex items-center justify-center gap-4 flex-wrap mb-14">
          <a href="#" className="btn-primary text-[15px] px-8 py-3.5 rounded-[14px]">
            Start for free
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </a>
          <a href="#" className="btn-outline text-[15px] px-8 py-3.5 rounded-[14px]">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#00d4ff" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Watch demo
          </a>
        </div>

        {/* Dashboard mockup */}
        <div data-reveal className="relative max-w-4xl mx-auto">
          <div className="dash-border">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05] bg-white/[0.02]">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <div className="flex-1 mx-3 bg-white/[0.05] rounded px-3 py-1 text-center text-[11px] text-slate-600 font-mono">
                app.nexusai.io/dashboard
              </div>
            </div>

            {/* Body */}
            <div className="grid grid-cols-[100px_1fr] gap-4 p-5">
              {/* Sidebar */}
              <div className="flex flex-col gap-1.5">
                {['Overview','Workflows','Analytics','Models','Settings'].map((item, i) => (
                  <div key={item} className={`h-7 rounded-lg text-[10px] flex items-center px-2.5 gap-2 ${i === 0 ? 'bg-cyan-neon/10 text-cyan-neon' : 'text-slate-600'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-cyan-neon' : 'bg-slate-700'}`} />
                    {item}
                  </div>
                ))}
              </div>

              {/* Main area */}
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-3 gap-2.5">
                  {[['API Calls','2.4M','+12%'],['Latency','48ms','-8%'],['Success','99.9%','+0.1%']].map(([l,v,c]) => (
                    <div key={l} className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3">
                      <div className="text-[9px] text-slate-600 mb-1">{l}</div>
                      <div className="text-lg font-bold text-white mb-0.5">{v}</div>
                      <div className="text-[9px] text-emerald-400">{c}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-3.5 h-24">
                  <div className="text-[9px] text-slate-600 mb-2">Request volume — 30d</div>
                  <svg width="100%" height="45" viewBox="0 0 400 40" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(0,212,255,0.3)"/>
                        <stop offset="100%" stopColor="rgba(0,212,255,0)"/>
                      </linearGradient>
                    </defs>
                    <path d="M0,38 C30,36 55,28 80,24 S130,14 160,12 S210,5 240,6 S295,3 320,2 S365,1 400,0 L400,40 L0,40 Z" fill="url(#cg)" opacity="0.7"/>
                    <path d="M0,38 C30,36 55,28 80,24 S130,14 160,12 S210,5 240,6 S295,3 320,2 S365,1 400,0" fill="none" stroke="rgba(0,212,255,0.9)" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -top-4 -right-5 animate-float-badge hidden lg:block">
            <div className="glass-strong border border-emerald-400/25 rounded-xl px-3 py-2 flex items-center gap-2 whitespace-nowrap">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-green" />
              <span className="text-[11px] font-semibold text-emerald-400">All systems operational</span>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-5 animate-float-badge-slow hidden lg:block">
            <div className="glass-strong border border-cyan-neon/20 rounded-xl px-3 py-2 flex items-center gap-2 whitespace-nowrap">
              <span className="text-lg">⚡</span>
              <div>
                <div className="text-xs font-semibold text-white">48ms avg latency</div>
                <div className="text-[9px] text-slate-500">Globally distributed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-void to-transparent pointer-events-none" />
    </section>
  )
}

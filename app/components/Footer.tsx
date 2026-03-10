const LINKS = {
  Product:    ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
  Developers: ['Docs', 'API Reference', 'SDKs', 'Examples', 'Community'],
  Company:    ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Legal:      ['Privacy', 'Terms', 'Security', 'Cookies'],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] pt-16 pb-8 px-6 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 100%,rgba(0,212,255,0.02) 0%,transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14">

          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow-cyan-intense"
                style={{ background: 'linear-gradient(135deg,#00d4ff,#00ffc8)' }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" fill="white" fillOpacity="0.92"/>
                </svg>
              </div>
              <span className="text-lg font-bold text-white font-sora">
                nexus<span className="text-grad-cyan">AI</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-5 max-w-[200px]">
              AI infrastructure for teams who move at the speed of ideas.
            </p>
            <div className="flex gap-2.5">
              {['𝕏', 'in', 'gh'].map(s => (
                <a key={s} href="#"
                  className="w-8 h-8 glass rounded-lg flex items-center justify-center text-xs text-slate-600 hover:text-white transition-colors duration-200"
                >{s}</a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([cat, items]) => (
            <div key={cat}>
              <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-[2px] mb-4">{cat}</h4>
              <ul className="flex flex-col gap-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-600 hover:text-slate-300 transition-colors duration-200 no-underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glow-line mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-700">© {new Date().getFullYear()} Nexus AI, Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-green" />
            <span className="text-xs text-slate-700">All systems normal</span>
          </div>
          <p className="text-xs text-slate-700">Designed with precision. Built for scale.</p>
        </div>
      </div>
    </footer>
  )
}

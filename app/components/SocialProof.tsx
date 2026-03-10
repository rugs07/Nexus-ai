const LOGOS = [
  { name: 'Vercel', symbol: '▲' }, { name: 'Stripe', symbol: 'S/' },
  { name: 'Linear', symbol: 'L/' }, { name: 'Notion', symbol: 'N' },
  { name: 'Figma', symbol: 'F' }, { name: 'Slack', symbol: '#' },
  { name: 'GitHub', symbol: '⌥' }, { name: 'Supabase', symbol: '⚡' },
]

export default function SocialProof() {
  const doubled = [...LOGOS, ...LOGOS]
  return (
    <section className="border-y border-white/[0.04] py-12 overflow-hidden relative">
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none" />

      <p className="text-center text-[11px] font-semibold text-slate-600 uppercase tracking-[3px] mb-6">Trusted by teams at</p>

      <div className="overflow-hidden">
        <div className="flex gap-12 items-center animate-scroll-x">
          {doubled.map((logo, i) => (
            <div key={i} className="flex items-center gap-2.5 flex-shrink-0 opacity-25 hover:opacity-55 transition-opacity duration-300">
              <div className="w-8 h-8 rounded-lg glass flex items-center justify-center text-xs font-bold text-slate-400">
                {logo.symbol}
              </div>
              <span className="text-sm font-semibold text-slate-400 whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

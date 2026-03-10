'use client'
import { useState, useEffect } from 'react'

const NAV_LINKS = ['Product', 'Workflow', 'Pricing', 'Docs']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass-strong border-b border-white/[0.05] py-3' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 no-underline group">
          <div className="relative w-9 h-9 rounded-xl flex items-center justify-center shadow-cyan-intense"
            style={{ background: 'linear-gradient(135deg,#00d4ff,#00ffc8)' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" fill="white" fillOpacity="0.92"/>
            </svg>
          </div>
          <span className="text-lg font-bold text-white font-sora">
            nexus<span className="text-grad-cyan">AI</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">{link}</a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-2">Sign in</a>
          <a href="#" className="btn-primary text-sm px-5 py-2.5">Get early access</a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}/>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-4 border-t border-white/[0.06] flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              className="text-sm text-slate-400 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >{link}</a>
          ))}
          <a href="#" className="btn-primary text-sm px-5 py-3 justify-center">Get early access</a>
        </div>
      </div>
    </nav>
  )
}

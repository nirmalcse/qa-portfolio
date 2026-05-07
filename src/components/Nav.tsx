import { useEffect, useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navCls = useMemo(() => {
    const base =
      'fixed top-3 left-0 right-0 z-50 mx-auto w-[min(1120px,calc(100%-24px))] rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl'
    return scrolled ? `${base} shadow-[0_20px_60px_rgba(0,0,0,0.45)]` : base
  }, [scrolled])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={navCls}>
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
        <a
          href="#top"
          className="group inline-flex items-center gap-2 rounded-xl px-2 py-1"
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-fuchsia-400 to-cyan-300" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">
            Profile
          </span>
        </a>

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href="#contact"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
          >
            Let’s talk
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10 sm:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 px-3 pb-3 pt-2 sm:hidden">
          <nav className="grid gap-1" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-black"
              onClick={() => setOpen(false)}
            >
              Let’s talk
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

import type { ReactNode } from 'react'

export function CTAButton({
  href,
  children,
  variant = 'primary',
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
}) {
  const cls =
    variant === 'primary'
      ? 'rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90'
      : 'rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10'

  return (
    <a href={href} className={`inline-flex items-center justify-center gap-2 ${cls}`}>
      {children}
    </a>
  )
}

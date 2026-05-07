import type { ReactNode } from 'react'

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  children?: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="text-xs font-semibold tracking-[0.2em] text-white/60">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
              {description}
            </p>
          ) : null}
        </div>

        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  )
}

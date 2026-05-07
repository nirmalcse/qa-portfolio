import { ExternalLink } from 'lucide-react'
import { Chip } from './Chip'

export function ProjectCard({
  name,
  description,
  tags,
  links,
}: {
  name: string
  description: string
  tags: string[]
  links: { label: string; href: string }[]
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
      </div>

      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <span className="inline-flex items-center rounded-xl border border-white/10 bg-black/40 px-2 py-1 text-xs font-medium text-white/70">
            Featured
          </span>
        </div>
        <p className="mt-2 text-sm leading-6 text-white/70">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10"
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <ExternalLink className="h-4 w-4" />
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

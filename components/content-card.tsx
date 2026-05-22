import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface ContentCardProps {
  title: string
  description?: string
  children: ReactNode
  variant?: "default" | "surface" | "high" | "red" | "gold" | "wide"
  badge?: string
  number?: string
  className?: string
}

const cardBase =
  "flex flex-col p-8 md:p-10 border border-monument-grey exhibition-card-hover"

const variantStyles = {
  default: `${cardBase} bg-surface-container hover:border-revolutionary-red`,
  surface: `${cardBase} bg-surface-container hover:border-revolutionary-red`,
  high: `${cardBase} bg-surface-container-high`,
  red: `${cardBase} bg-revolutionary-red border-revolutionary-red text-white hover:border-golden-silk`,
  gold: `${cardBase} bg-surface-container-highest hover:border-revolutionary-red`,
  wide:
    "bg-surface-container-high p-8 md:p-10 border border-monument-grey md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-6",
}

export function ContentCard({
  title,
  description,
  children,
  variant = "default",
  badge,
  number,
  className,
}: ContentCardProps) {
  const isRed = variant === "red"

  return (
    <div className={cn(variantStyles[variant], className)}>
      {number && (
        <span
          className={cn(
            "font-label-mono text-2xl mb-4 block",
            isRed ? "text-white/60" : "text-revolutionary-red"
          )}
        >
          {number}
        </span>
      )}
      {badge && !number && (
        <span
          className={cn(
            "font-label-mono text-base uppercase tracking-widest mb-4 block font-semibold",
            isRed ? "text-white/85" : "text-revolutionary-red"
          )}
        >
          {badge}
        </span>
      )}
      <h3
        className={cn(
          "font-display text-2xl md:text-[1.75rem] font-extrabold leading-tight mb-4",
          isRed ? "text-white" : "text-on-surface"
        )}
      >
        {title}
      </h3>
      {description && (
        <p
          className={cn(
            "text-lg md:text-xl mb-4 leading-relaxed",
            isRed ? "text-white/95" : "text-on-surface-variant"
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "flex-1 text-lg md:text-xl leading-relaxed",
          isRed ? "text-white/95" : "text-on-surface-variant"
        )}
      >
        {children}
      </div>
    </div>
  )
}

interface SectionHeaderProps {
  badge: string
  title: ReactNode
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-20 max-w-4xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <span className="font-label-mono text-revolutionary-red uppercase tracking-[0.4em] mb-4 block text-base md:text-lg">
        {badge}
      </span>
      <h2 className="font-display text-4xl md:text-6xl lg:text-[80px] lg:leading-[88px] font-extrabold text-on-surface mb-6 tracking-tight">
        {title}
      </h2>
      {align === "center" && <div className="w-40 h-0.5 bg-golden-silk mx-auto mb-8" />}
      {description && (
        <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-3xl">{description}</p>
      )}
    </div>
  )
}

interface StatCardProps {
  value: string
  label: string
  description?: string
  accent?: "red" | "gold" | "grey"
  className?: string
}

export function StatCard({
  value,
  label,
  description,
  accent = "red",
  className,
}: StatCardProps) {
  const barColor = {
    red: "bg-revolutionary-red",
    gold: "bg-golden-silk",
    grey: "bg-monument-grey",
  }[accent]

  return (
    <div className={cn("space-y-4 group", className)}>
      <div className="flex items-start gap-3">
        <div className={`w-0.5 h-16 stat-bar-grow ${barColor} group-hover:h-20 md:group-hover:h-24`} />
        <div>
          <div className="font-display text-4xl md:text-5xl font-black text-on-surface">{value}</div>
          <div className="font-label-mono text-sm md:text-base uppercase tracking-widest text-on-surface-variant mt-1">
            {label}
          </div>
        </div>
      </div>
      {description && (
        <p className="text-base md:text-lg text-on-surface-variant leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  )
}

interface FeatureItemProps {
  icon?: ReactNode
  title: string
  description: string
}

export function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex gap-4">
      {icon && (
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-golden-silk">
          {icon}
        </div>
      )}
      <div>
        <h4 className="font-semibold text-lg md:text-xl text-on-surface mb-1">{title}</h4>
        <p className="text-base md:text-lg text-on-surface-variant">{description}</p>
      </div>
    </div>
  )
}

interface ListItemProps {
  children: ReactNode
}

export function ListItem({ children }: ListItemProps) {
  return (
    <li className="flex items-start gap-4 mb-3 text-on-surface-variant">
      <span className="flex-shrink-0 w-8 h-0.5 bg-revolutionary-red mt-3" />
      <span className="text-lg md:text-xl text-on-surface">{children}</span>
    </li>
  )
}

interface SourceLinkProps {
  href: string
  children: ReactNode
}

export function SourceLink({ href, children }: SourceLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-label-mono text-sm font-semibold text-golden-silk hover:text-primary transition-all duration-300 uppercase tracking-wider hover:translate-x-0.5"
    >
      {children}
      <span aria-hidden>↗</span>
    </a>
  )
}

/** Lưới thẻ + ảnh: hàng trên cùng chiều cao, hàng ảnh thẳng hàng */
export function SlideCardGrid({
  columns = 3,
  className,
  items,
  mediaFirst = false,
}: {
  columns?: 2 | 3
  className?: string
  items: { card: ReactNode; media?: ReactNode }[]
  mediaFirst?: boolean
}) {
  const colClass = columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
  const hasMedia = items.some((item) => item.media)

  if (!hasMedia) {
    return (
      <div className={cn("grid gap-4 items-stretch", colClass, className)}>
        {items.map((item, i) => (
          <div key={i} className="h-full [&>*]:h-full">
            {item.card}
          </div>
        ))}
      </div>
    )
  }

  const cards = items.map((item, i) => (
    <div key={`card-${i}`} className="flex min-h-[200px] [&>*]:h-full [&>*]:w-full">
      {item.card}
    </div>
  ))
  const medias = items.map((item, i) => (
    <div key={`media-${i}`} className="flex flex-col">
      {item.media ?? <div className="aspect-video" />}
    </div>
  ))

  return (
    <div
      className={cn(
        "grid gap-4 items-stretch",
        colClass,
        mediaFirst ? "md:grid-rows-[auto_1fr]" : "md:grid-rows-[1fr_auto]",
        className
      )}
    >
      {mediaFirst ? (
        <>
          {medias}
          {cards}
        </>
      ) : (
        <>
          {cards}
          {medias}
        </>
      )}
    </div>
  )
}

export function SectionWrap({
  id,
  children,
  className,
  variant = "default",
}: {
  id?: string
  children: ReactNode
  className?: string
  variant?: "default" | "low" | "high"
}) {
  const bg = {
    default: "bg-background",
    low: "bg-surface-container-low",
    high: "bg-surface-container-low border-t-8 border-monument-grey",
  }[variant]

  return (
    <section id={id} className={cn("py-16 md:py-section-gap", bg, className)}>
      <div className="exhibition-container">
        <Reveal variant="fade-up" duration={850}>
          {children}
        </Reveal>
      </div>
    </section>
  )
}

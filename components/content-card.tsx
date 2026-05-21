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

const variantStyles = {
  default:
    "bg-surface-container p-8 md:p-10 border border-monument-grey hover:border-revolutionary-red transition-all duration-300",
  surface:
    "bg-surface-container p-8 md:p-10 border border-monument-grey hover:border-revolutionary-red transition-all duration-300",
  high: "bg-surface-container-high p-8 md:p-10 border border-monument-grey",
  red: "bg-revolutionary-red p-8 md:p-10 text-white",
  gold: "bg-surface-container-highest p-8 md:p-10 border border-monument-grey",
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
        <span className="font-label-mono text-revolutionary-red text-sm uppercase tracking-widest mb-4 block">
          {badge}
        </span>
      )}
      <h3
        className={cn(
          "font-display text-xl md:text-2xl font-bold leading-tight mb-4",
          isRed ? "text-white" : "text-on-surface"
        )}
      >
        {title}
      </h3>
      {description && (
        <p
          className={cn(
            "text-base mb-4 leading-relaxed",
            isRed ? "text-white/90" : "text-on-surface-variant"
          )}
        >
          {description}
        </p>
      )}
      <div className={cn("text-base leading-relaxed", isRed ? "text-white/90" : "text-on-surface-variant")}>
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
      <span className="font-label-mono text-revolutionary-red uppercase tracking-[0.4em] mb-4 block text-sm">
        {badge}
      </span>
      <h2 className="font-display text-3xl md:text-5xl lg:text-[64px] lg:leading-[72px] font-extrabold text-on-surface mb-6 tracking-tight">
        {title}
      </h2>
      {align === "center" && <div className="w-40 h-0.5 bg-golden-silk mx-auto mb-8" />}
      {description && (
        <p className="text-lg text-on-surface-variant leading-relaxed max-w-3xl">{description}</p>
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
        <div className={`w-0.5 h-16 ${barColor} group-hover:h-20 transition-all duration-300`} />
        <div>
          <div className="font-display text-3xl md:text-4xl font-black text-on-surface">{value}</div>
          <div className="font-label-mono text-xs uppercase tracking-widest text-on-surface-variant mt-1">
            {label}
          </div>
        </div>
      </div>
      {description && (
        <p className="text-sm text-on-surface-variant leading-relaxed">{description}</p>
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
        <h4 className="font-semibold text-on-surface mb-1">{title}</h4>
        <p className="text-sm text-on-surface-variant">{description}</p>
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
      <span className="text-base">{children}</span>
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
      className="inline-flex items-center gap-1 font-label-mono text-xs text-golden-silk hover:text-primary transition-colors uppercase tracking-wider"
    >
      {children}
      <span aria-hidden>↗</span>
    </a>
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
      <div className="exhibition-container">{children}</div>
    </section>
  )
}

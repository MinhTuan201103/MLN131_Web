import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface ContentCardProps {
  title: string
  description?: string
  children: ReactNode
  variant?: "default" | "teal" | "yellow" | "red" | "purple"
  badge?: string
  className?: string
}

const variantStyles = {
  default: "border-border",
  teal: "border-l-4 border-l-primary border-t-0 border-r-0 border-b-0",
  yellow: "border-l-4 border-l-chart-2 border-t-0 border-r-0 border-b-0",
  red: "border-l-4 border-l-destructive border-t-0 border-r-0 border-b-0",
  purple: "border-l-4 border-l-chart-4 border-t-0 border-r-0 border-b-0",
}

const badgeStyles = {
  default: "bg-secondary text-muted-foreground",
  teal: "bg-primary/20 text-primary",
  yellow: "bg-chart-2/20 text-chart-2",
  red: "bg-destructive/20 text-destructive",
  purple: "bg-chart-4/20 text-chart-4",
}

export function ContentCard({
  title,
  description,
  children,
  variant = "default",
  badge,
  className,
}: ContentCardProps) {
  return (
    <div
      className={cn(
        "bg-card rounded-lg border p-6 md:p-8",
        variantStyles[variant],
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "inline-block px-3 py-1 rounded-full text-xs font-medium mb-4",
            badgeStyles[variant]
          )}
        >
          {badge}
        </span>
      )}
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
      )}
      <div className="text-muted-foreground leading-relaxed">{children}</div>
    </div>
  )
}

interface SectionHeaderProps {
  badge: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({
  badge,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <p className="text-xs text-primary uppercase tracking-widest mb-4">
        {badge}
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

interface StatCardProps {
  value: string
  label: string
  description?: string
  className?: string
}

export function StatCard({ value, label, description, className }: StatCardProps) {
  return (
    <div className={cn("text-center p-6 rounded-lg bg-card border border-border", className)}>
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm font-medium text-foreground mb-1">{label}</div>
      {description && (
        <div className="text-xs text-muted-foreground">{description}</div>
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
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
      )}
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

interface ListItemProps {
  children: ReactNode
}

export function ListItem({ children }: ListItemProps) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
      <span>{children}</span>
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
      className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
    >
      {children}
      <svg
        className="w-3 h-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
  )
}

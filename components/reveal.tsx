"use client"

import { cn } from "@/lib/utils"
import { Children, ReactNode, useEffect, useRef, useState } from "react"

export type RevealVariant = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-in"

interface RevealProps {
  children: ReactNode
  className?: string
  variant?: RevealVariant
  /** Trễ trước khi chạy (ms) */
  delay?: number
  duration?: number
  /** Chỉ animate một lần khi vào viewport */
  once?: boolean
}

export function Reveal({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  duration = 750,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  return (
    <div
      ref={ref}
      data-visible={visible ? "true" : "false"}
      className={cn("motion-reveal", `motion-${variant}`, visible && "motion-visible", className)}
      style={
        {
          "--motion-delay": `${delay}ms`,
          "--motion-duration": `${duration}ms`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}

interface RevealStaggerProps {
  children: ReactNode
  className?: string
  staggerMs?: number
  variant?: RevealVariant
}

/** Từng con xuất hiện lần lượt (lưới thẻ, stat…) */
export function RevealStagger({
  children,
  className,
  staggerMs = 120,
  variant = "fade-up",
}: RevealStaggerProps) {
  const items = Children.toArray(children)
  return (
    <div className={className}>
      {items.map((child, index) => (
        <Reveal key={index} delay={index * staggerMs} variant={variant}>
          {child}
        </Reveal>
      ))}
    </div>
  )
}

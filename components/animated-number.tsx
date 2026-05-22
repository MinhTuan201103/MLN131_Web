"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

interface AnimatedNumberProps {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
  className?: string
  compact?: boolean
}

function formatNumber(value: number, decimals: number, compact: boolean) {
  return new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    notation: compact ? "compact" : "standard",
  }).format(value)
}

export function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1200,
  className,
  compact = false,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const frameRef = useRef<number | null>(null)
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(value)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        const startTime = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplayValue(value * eased)

          if (progress < 1) {
            frameRef.current = requestAnimationFrame(tick)
          }
        }

        frameRef.current = requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.35 }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [duration, value])

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {formatNumber(displayValue, decimals, compact)}
      {suffix}
    </span>
  )
}

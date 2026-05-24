'use client'

import { useEffect, useRef, useState } from 'react'

interface NumberCounterProps {
  startValue?: number
  endValue: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
  onComplete?: () => void
}

/**
 * Number counter animation - chạy từ 0 đến số cuối cùng
 * Được trigger khi component vào viewport
 */
export function NumberCounter({
  startValue = 0,
  endValue,
  duration = 1200,
  suffix = '',
  prefix = '',
  className = '',
  onComplete,
}: NumberCounterProps) {
  const [count, setCount] = useState(startValue)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  // Intersection Observer - trigger khi vào viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  // Animation loop
  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    let animationId: number

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function: ease-out-cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3)

      const currentValue = startValue + (endValue - startValue) * easeProgress
      setCount(Math.floor(currentValue * 10) / 10) // 1 decimal

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      } else {
        setCount(endValue)
        onComplete?.()
      }
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isVisible, startValue, endValue, duration, onComplete])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString('vi-VN')}
      {suffix}
    </span>
  )
}

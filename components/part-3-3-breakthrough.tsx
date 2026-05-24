'use client'

import React, { useEffect, useRef, useState } from 'react'
import Chart from 'chart.js/auto'

export function Part33Breakthrough() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const [gdpValue, setGdpValue] = useState(0)
  const [growthValue, setGrowthValue] = useState(0)

  // Number Counter Animation
  useEffect(() => {
    const duration = 1200
    const startTime = Date.now()

    const animateGDP = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      setGdpValue(progress * 6.2)
      if (progress < 1) requestAnimationFrame(animateGDP)
    }

    const animateGrowth = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      setGrowthValue(progress * 8.02)
      if (progress < 1) requestAnimationFrame(animateGrowth)
    }

    animateGDP()
    animateGrowth()
  }, [])

  // Chart.js Setup
  useEffect(() => {
    if (!chartRef.current) return

    const ctx = chartRef.current.getContext('2d')
    if (!ctx) return

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2021', '2022', '2023', '2024', '2025'],
        datasets: [
          {
            label: 'GDP (Tỷ USD)',
            data: [360, 385, 425, 470, 510],
            backgroundColor: '#1E3A8A',
            borderColor: '#1E3A8A',
            borderWidth: 1,
            yAxisID: 'y',
            borderRadius: 8,
            order: 2,
          },
          {
            label: 'Tốc độ tăng trưởng (%)',
            data: [2.58, 7.08, 5.05, 7.08, 8.02],
            backgroundColor: 'transparent',
            borderColor: '#EA580C',
            borderWidth: 3,
            type: 'line' as const,
            yAxisID: 'y1',
            tension: 0.4,
            fill: false,
            pointRadius: 5,
            pointBackgroundColor: '#EA580C',
            pointBorderColor: '#FFF',
            pointBorderWidth: 2,
            order: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        interaction: {
          mode: 'index' as const,
          intersect: false,
        },
        plugins: {
          legend: {
            position: 'bottom' as const,
            labels: {
              font: { size: 12, weight: '600' },
              padding: 16,
              usePointStyle: true,
            },
          },
          tooltip: {
            backgroundColor: 'rgba(0,0,0,0.8)',
            padding: 12,
            titleFont: { size: 13, weight: 'bold' },
            bodyFont: { size: 12 },
          },
        },
        scales: {
          y: {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            title: {
              display: true,
              text: 'GDP (Tỷ USD)',
              font: { size: 12, weight: '600' },
            },
            min: 0,
            max: 550,
          },
          y1: {
            type: 'linear' as const,
            display: true,
            position: 'right' as const,
            title: {
              display: true,
              text: 'Tốc độ tăng trưởng (%)',
              font: { size: 12, weight: '600' },
            },
            grid: {
              drawOnChartArea: false,
            },
            min: 0,
            max: 10,
          },
        },
      },
    })

    return () => chart.destroy()
  }, [])

  return (
    <section className="bg-surface-container-low py-12 md:py-16 px-4">
      <div className="exhibition-container">
        <h2 className="font-label-mono text-center text-golden-silk uppercase tracking-widest mb-2 text-lg md:text-xl font-semibold">
          3.3 · Bứt Phá Quy Mô
        </h2>
        <h3 className="text-center font-display text-3xl md:text-4xl font-black text-on-surface mb-10">
          Tăng Trưởng <span className="text-revolutionary-red">Nhanh & Bền Vững</span>
        </h3>

        <div className="grid md:grid-cols-[2fr_1fr] gap-6 items-stretch">
          {/* Left: Chart */}
          <div className="bg-white rounded-2xl border border-monument-grey p-6 shadow-md">
            <canvas
              ref={chartRef}
              width={400}
              height={300}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

          {/* Right: Info Cards */}
          <div className="flex flex-col gap-4">
            {/* Card 1: CAGR */}
            <div className="rounded-2xl border border-monument-grey bg-gradient-to-br from-orange-50 to-orange-100 p-6 text-center flex flex-col justify-center">
              <p className="text-4xl md:text-5xl font-black text-orange-600 mb-2">
                ~{gdpValue.toFixed(1)}%
              </p>
              <p className="text-xs md:text-sm text-on-surface-variant font-semibold leading-tight">
                Bình quân 2021 - 2025<br />
                <span className="text-orange-600 font-bold">(Riêng 2025: 8,02%)</span>
              </p>
            </div>

            {/* Card 2: GDP Ranking */}
            <div className="rounded-2xl border border-monument-grey bg-gradient-to-br from-blue-50 to-blue-100 p-6 text-center flex flex-col justify-center">
              <p className="text-4xl md:text-5xl font-black text-blue-600 mb-2">510 tỷ USD</p>
              <p className="text-xs md:text-sm text-on-surface-variant font-semibold leading-tight">
                Đứng thứ <span className="text-blue-600 font-bold">32 thế giới</span>, <br />
                thứ <span className="text-blue-600 font-bold">4 ASEAN</span>
              </p>
            </div>

            {/* Card 3: Integration */}
            <div className="rounded-2xl border border-monument-grey bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 text-center flex flex-col justify-center">
              <p className="text-2xl md:text-3xl font-black text-emerald-600 mb-2">
                Hội nhập & FDI
              </p>
              <p className="text-xs md:text-sm text-on-surface-variant font-semibold leading-tight">
                Vượt ngưỡng thu nhập trung bình thấp. Tham gia FTA thế hệ mới<br />
                <span className="text-emerald-600 font-bold">(CPTPP, EVFTA, RCEP...)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Source */}
        <p className="text-center text-xs md:text-sm text-on-surface-variant mt-8 px-4">
          <span className="font-semibold">Nguồn:</span> Báo cáo của Tổng cục Thống kê và Bộ Kế hoạch và Đầu tư.
        </p>
      </div>
    </section>
  )
}

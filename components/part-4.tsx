'use client'

import React from 'react'
import { SectionWrap } from "@/components/content-card"
import { Heart, Shield, TrendingDown, Crown } from 'lucide-react'

export function Part4VanHoaXaHoi() {
  return (
    <SectionWrap id="part-4" className="!bg-white">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="font-label-mono text-golden-silk uppercase tracking-widest text-lg font-bold mb-2">
          Phần 4
        </p>
        <h2 className="font-display text-5xl md:text-6xl font-black text-on-surface mb-3">
          VĂN HÓA — XÃ HỘI
        </h2>
        <p className="font-display text-2xl md:text-3xl text-revolutionary-red font-bold">
          1986 → 2026
        </p>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        
        {/* LEFT: VĂN HÓA */}
        <div>
          <h3 className="font-display text-4xl md:text-5xl font-black text-on-surface mb-8">
            VĂN HÓA
          </h3>
          <p className="font-label-mono text-golden-silk text-xl font-bold mb-8 uppercase">
            Nền tảng tinh thần
          </p>

          {/* 2 Image Grid */}
          <div className="grid grid-cols-1 gap-6">
            {/* Image Box 1 */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 border-2 border-monument-grey aspect-video group">
              <img
                src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=800&q=80"
                alt="Bảo tồn di sản"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <p className="font-display text-3xl font-black text-white">
                  BẢO TỒN DI SẢN
                </p>
              </div>
              <div className="absolute top-4 left-4 right-4 bg-white/90 backdrop-blur p-3 rounded-lg">
                <p className="text-xs font-bold text-monument-grey">1986: Khép kín ➔ 2026: Hội nhập</p>
              </div>
            </div>

            {/* Image Box 2 */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 border-2 border-monument-grey aspect-video group">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Hệ giá trị mới"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <p className="font-display text-3xl font-black text-white">
                  HỆ GIÁ TRỊ MỚI
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: XÃ HỘI */}
        <div>
          <h3 className="font-display text-4xl md:text-5xl font-black text-on-surface mb-8">
            XÃ HỘI
          </h3>
          <p className="font-label-mono text-revolutionary-red text-xl font-bold mb-8 uppercase">
            Con người là trung tâm
          </p>

          {/* 4 Stat Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1: Tuổi thọ */}
            <div className="rounded-2xl border-2 border-monument-grey bg-blue-50 p-5 text-center group hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-3">
                <Heart className="w-8 h-8 text-revolutionary-red" />
              </div>
              <p className="font-display text-4xl md:text-5xl font-black text-on-surface mb-2">
                74.8
              </p>
              <p className="font-display text-sm md:text-base font-bold text-on-surface-variant">
                Tuổi thọ
              </p>
              <p className="text-xs text-monument-grey mt-2">
                từ 65 tuổi (1986)
              </p>
            </div>

            {/* Card 2: Bảo hiểm */}
            <div className="rounded-2xl border-2 border-monument-grey bg-green-50 p-5 text-center group hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-3">
                <Shield className="w-8 h-8 text-revolutionary-red" />
              </div>
              <p className="font-display text-4xl md:text-5xl font-black text-on-surface mb-2">
                95.2%
              </p>
              <p className="font-display text-sm md:text-base font-bold text-on-surface-variant">
                Bảo hiểm Y tế
              </p>
              <p className="text-xs text-monument-grey mt-2">
                toàn dân phủ sóng
              </p>
            </div>

            {/* Card 3: Giảm nghèo */}
            <div className="rounded-2xl border-2 border-monument-grey bg-orange-50 p-5 text-center group hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-3">
                <TrendingDown className="w-8 h-8 text-revolutionary-red" />
              </div>
              <p className="font-display text-4xl md:text-5xl font-black text-on-surface mb-2">
                1.3%
              </p>
              <p className="font-display text-sm md:text-base font-bold text-on-surface-variant">
                Tỷ lệ Nghèo
              </p>
              <p className="text-xs text-monument-grey mt-2">
                từ &gt;60% (1986)
              </p>
            </div>

            {/* Card 4: HDI */}
            <div className="rounded-2xl border-2 border-monument-grey bg-purple-50 p-5 text-center group hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-3">
                <Crown className="w-8 h-8 text-revolutionary-red" />
              </div>
              <p className="font-display text-4xl md:text-5xl font-black text-on-surface mb-2">
                0.766
              </p>
              <p className="font-display text-sm md:text-base font-bold text-on-surface-variant">
                Chỉ số HDI
              </p>
              <p className="text-xs text-revolutionary-red font-bold mt-2">
                Nhóm CAO Toàn cầu
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="rounded-2xl border-3 border-revolutionary-red bg-gradient-to-r from-revolutionary-red to-golden-silk p-8 text-center">
        <p className="font-display text-4xl md:text-5xl font-black text-white">
          PHÁT TRIỂN VÌ HẠNH PHÚC CON NGƯỜI
        </p>
        <p className="text-white/80 text-sm md:text-base mt-3 font-semibold">
          Nguồn: UNDP & Tổng cục Thống kê
        </p>
      </div>
    </SectionWrap>
  )
}

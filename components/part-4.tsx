'use client'

import { SectionWrap } from "@/components/content-card"
import { Heart, Shield, TrendingDown, Crown, BookOpen, Users, BarChart3, Zap } from 'lucide-react'

export function Part4VanHoaXaHoi() {
  const fadeInVariants = "animate-fade-in"

  return (
    <SectionWrap id="part-4" className="!bg-white">
      {/* Header */}
      <div className={`mb-16 text-left px-4 sm:px-8 ${fadeInVariants}`}>
        <p className="font-label-mono text-golden-silk uppercase tracking-widest text-lg font-bold mb-2">
          Phần 4
        </p>
        <h2 className="font-display text-5xl md:text-6xl font-black text-on-surface mb-4">
          VĂN HÓA — XÃ HỘI
        </h2>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <span className="font-display text-2xl md:text-3xl font-bold text-on-surface">1986</span>
          <span className="font-display text-3xl md:text-4xl text-revolutionary-red font-black">→</span>
          <span className="font-display text-2xl md:text-3xl font-bold text-revolutionary-red">2026</span>
        </div>
        <p className="font-label-mono text-monument-grey text-base md:text-lg mt-4 italic">
          "Con người là trung tâm, chủ thể, nguồn lực quan trọng nhất của sự phát triển"
        </p>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 px-4 sm:px-8 lg:px-20">

        {/* LEFT: VĂN HÓA */}
        <div className={`group ${fadeInVariants}`} style={{ animationDelay: '0.1s' }}>
          <div className="mb-8 pb-6 border-b-4 border-golden-silk">
            <h3 className="font-display text-4xl md:text-5xl font-black text-on-surface mb-3">
              VĂN HÓA
            </h3>
            <p className="font-label-mono text-golden-silk text-lg font-bold uppercase">
              Nền tảng tinh thần xã hội
            </p>
          </div>

          {/* Văn Hóa Content */}
          <div className="space-y-5">
            {/* Item 1 */}
            <div className="rounded-xl border-2 border-golden-silk/30 bg-gradient-to-br from-golden-silk/5 to-transparent p-6 transition-all duration-300 hover:border-golden-silk hover:shadow-md hover:translate-y-[-2px]">
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-golden-silk flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-display text-lg font-bold text-on-surface mb-2">
                    Bảo tồn & Phát huy Di sản
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-gray-100 rounded p-2">
                      <p className="font-bold text-monument-grey">1986</p>
                      <p className="text-on-surface text-xs mt-1">Khép kín, bảo vệ tự thân</p>
                    </div>
                    <div className="bg-revolutionary-red/10 rounded p-2">
                      <p className="font-bold text-revolutionary-red">2026</p>
                      <p className="text-on-surface text-xs mt-1">Hội nhập, chia sẻ giá trị</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="rounded-xl border-2 border-golden-silk/30 bg-gradient-to-br from-golden-silk/5 to-transparent p-6 transition-all duration-300 hover:border-golden-silk hover:shadow-md hover:translate-y-[-2px]">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-golden-silk flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-display text-lg font-bold text-on-surface mb-2">
                    Hệ giá trị & Tinh thần
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-gray-100 rounded p-2">
                      <p className="font-bold text-monument-grey">1986</p>
                      <p className="text-on-surface text-xs mt-1">Giải quyết tư tưởng</p>
                    </div>
                    <div className="bg-revolutionary-red/10 rounded p-2">
                      <p className="font-bold text-revolutionary-red">2026</p>
                      <p className="text-on-surface text-xs mt-1">Xây dựng con người toàn diện</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="rounded-xl border-2 border-golden-silk/30 bg-gradient-to-br from-golden-silk/5 to-transparent p-6 transition-all duration-300 hover:border-golden-silk hover:shadow-md hover:translate-y-[-2px]">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-6 h-6 text-golden-silk flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-display text-lg font-bold text-on-surface mb-2">
                    Hoạt động Nghệ thuật
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-gray-100 rounded p-2">
                      <p className="font-bold text-monument-grey">1986</p>
                      <p className="text-on-surface text-xs mt-1">Mục tiêu tuyên truyền</p>
                    </div>
                    <div className="bg-revolutionary-red/10 rounded p-2">
                      <p className="font-bold text-revolutionary-red">2026</p>
                      <p className="text-on-surface text-xs mt-1">Phong phú, đa dạng, sáng tạo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: XÃ HỘI */}
        <div className={`group ${fadeInVariants}`} style={{ animationDelay: '0.2s' }}>
          <div className="mb-8 pb-6 border-b-4 border-revolutionary-red">
            <h3 className="font-display text-4xl md:text-5xl font-black text-on-surface mb-3">
              XÃ HỘI
            </h3>
            <p className="font-label-mono text-revolutionary-red text-lg font-bold uppercase">
              Con người là trung tâm phát triển
            </p>
          </div>

          {/* Xã Hội Stat Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1: Tuổi thọ */}
            <div className="rounded-xl border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-blue-50/50 p-5 text-center transition-all duration-300 hover:shadow-lg hover:border-blue-400 hover:translate-y-[-3px]">
              <div className="flex justify-center mb-3">
                <Heart className="w-7 h-7 text-revolutionary-red animate-pulse" />
              </div>
              <p className="font-display text-3xl md:text-4xl font-black text-on-surface mb-1">
                74.8
              </p>
              <p className="font-label-mono text-xs uppercase font-bold text-on-surface-variant mb-2">
                Tuổi thọ
              </p>
              <div className="text-xs space-y-1 text-monument-grey">
                <div>1986: 65 tuổi</div>
                <div className="text-revolutionary-red font-bold">+9.8 năm</div>
              </div>
            </div>

            {/* Card 2: Bảo hiểm */}
            <div className="rounded-xl border-2 border-green-300 bg-gradient-to-br from-green-50 to-green-50/50 p-5 text-center transition-all duration-300 hover:shadow-lg hover:border-green-400 hover:translate-y-[-3px]">
              <div className="flex justify-center mb-3">
                <Shield className="w-7 h-7 text-revolutionary-red animate-pulse" />
              </div>
              <p className="font-display text-3xl md:text-4xl font-black text-on-surface mb-1">
                95.2%
              </p>
              <p className="font-label-mono text-xs uppercase font-bold text-on-surface-variant mb-2">
                Bảo hiểm Y tế
              </p>
              <div className="text-xs space-y-1 text-monument-grey">
                <div>1986: Chưa có</div>
                <div className="text-revolutionary-red font-bold">Phủ sóng toàn dân</div>
              </div>
            </div>

            {/* Card 3: Giảm nghèo */}
            <div className="rounded-xl border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-orange-50/50 p-5 text-center transition-all duration-300 hover:shadow-lg hover:border-orange-400 hover:translate-y-[-3px]">
              <div className="flex justify-center mb-3">
                <TrendingDown className="w-7 h-7 text-revolutionary-red animate-pulse" />
              </div>
              <p className="font-display text-3xl md:text-4xl font-black text-on-surface mb-1">
                1.3%
              </p>
              <p className="font-label-mono text-xs uppercase font-bold text-on-surface-variant mb-2">
                Tỷ lệ Nghèo
              </p>
              <div className="text-xs space-y-1 text-monument-grey">
                <div>1986: &gt;60%</div>
                <div className="text-revolutionary-red font-bold">Giảm 98.3%</div>
              </div>
            </div>

            {/* Card 4: HDI */}
            <div className="rounded-xl border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-purple-50/50 p-5 text-center transition-all duration-300 hover:shadow-lg hover:border-purple-400 hover:translate-y-[-3px]">
              <div className="flex justify-center mb-3">
                <Crown className="w-7 h-7 text-revolutionary-red animate-pulse" />
              </div>
              <p className="font-display text-3xl md:text-4xl font-black text-on-surface mb-1">
                0.766
              </p>
              <p className="font-label-mono text-xs uppercase font-bold text-on-surface-variant mb-2">
                Chỉ số HDI
              </p>
              <div className="text-xs space-y-1 text-monument-grey">
                <div>1986: Thấp</div>
                <div className="text-revolutionary-red font-bold">Nhóm CAO Toàn cầu</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thành tựu chính */}
      <div className="px-4 sm:px-8 lg:px-20 mb-12">
        <h3 className="font-display text-3xl md:text-4xl font-black text-on-surface mb-8 text-left">
          Thành Tựu Nổi Bật
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: BookOpen, title: "Giáo dục", stat: "Đầu tư không ngừng", desc: "Cơ sở vật chất cải thiện" },
            { icon: Users, title: "An sinh xã hội", stat: "Chính sách toàn diện", desc: "Hỗ trợ người yếu thế" },
            { icon: Zap, title: "Nhân lực", stat: "Phát triển toàn diện", desc: "Đáp ứng hiện đại hóa" }
          ].map((item, i) => (
            <div key={i} className={`rounded-xl border-2 border-monument-grey/30 bg-white p-6 text-center transition-all duration-300 hover:border-revolutionary-red hover:shadow-lg hover:translate-y-[-3px] ${fadeInVariants}`} style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
              <div className="flex justify-center mb-4">
                <item.icon className="w-8 h-8 text-revolutionary-red" />
              </div>
              <h4 className="font-display text-xl font-bold text-on-surface mb-2">{item.title}</h4>
              <p className="text-sm font-semibold text-golden-silk mb-2">{item.stat}</p>
              <p className="text-xs text-monument-grey">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Banner */}
      <div className="rounded-2xl border-3 border-revolutionary-red bg-gradient-to-r from-revolutionary-red to-golden-silk p-8 md:p-12 text-left mx-4 sm:mx-8 lg:mx-20 mb-4">
        <p className="font-display text-3xl md:text-5xl font-black text-white mb-3">
          PHÁT TRIỂN VÌ HẠNH PHÚC CON NGƯỜI
        </p>
        <p className="text-white/90 text-sm md:text-base font-semibold">
          Bản chất nhân văn của chủ nghĩa xã hội Việt Nam
        </p>
        <p className="text-white/80 text-xs md:text-sm mt-4">
          Nguồn: UNDP, Tổng cục Thống kê Việt Nam
        </p>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </SectionWrap>
  )
}

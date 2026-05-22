"use client"

import { Reveal, RevealStagger } from "@/components/reveal"
import { getPresentationImage } from "@/lib/presentation-images"

const heroStats = [
  {
    value: "774.7%",
    label: "Lạm phát đỉnh (1986)",
    accent: "bg-revolutionary-red",
    textAccent: "text-revolutionary-red",
    desc: "Khởi đầu gian khó từ khủng hoảng kinh tế-xã hội, buộc đất nước bước vào kỷ nguyên Đổi mới.",
  },
  {
    value: "$510B",
    label: "GDP hiện nay (ước tính)",
    accent: "bg-golden-silk",
    textAccent: "text-golden-silk",
    desc: "Tăng trưởng đưa Việt Nam vào nhóm nền kinh tế lớn, khẳng định đúng đắn của tiến trình mở cửa.",
  },
  {
    value: "Top 32",
    label: "Quy mô kinh tế thế giới",
    accent: "bg-monument-grey",
    textAccent: "text-on-surface",
    desc: "Phát triển lấy con người làm trung tâm — mọi thành quả thuộc về nhân dân.",
  },
]

export function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0 hero-bg-zoom">
          {getPresentationImage(0) ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt="Quốc hội Việt Nam"
              className="w-full h-full object-cover opacity-70"
              src={getPresentationImage(0)}
            />
          ) : (
            <div className="w-full h-full bg-surface-container-high" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="grain-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 w-full exhibition-container pb-16 md:pb-24 pt-32">
          <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8 hero-animate-in hero-animate-in-delay-1">
            <span className="font-label-mono text-base md:text-lg text-golden-silk uppercase tracking-[0.3em]">
              Triển lãm số: 1986 — 2026
            </span>
            <div className="h-0.5 flex-grow bg-monument-grey max-md:hidden hero-line-grow" />
          </div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[120px] lg:leading-[110px] font-black text-white mb-6 uppercase tracking-tight hero-animate-in hero-animate-in-delay-2">
            Kỷ Nguyên
            <br />
            <span className="text-revolutionary-red">Vươn Mình</span>
          </h1>
          <p className="font-sans text-xl md:text-2xl max-w-2xl text-on-surface-variant leading-relaxed hero-animate-in hero-animate-in-delay-3">
            Thuyết trình: Thành tựu xây dựng chủ nghĩa xã hội sau 40 năm Đổi mới — MLN131
          </p>
        </div>
      </section>

      <section className="py-16 md:py-section-gap exhibition-container">
        <RevealStagger
          staggerMs={140}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="space-y-6 group">
              <div className="flex items-start gap-4">
                <div
                  className={`w-0.5 h-20 md:h-24 stat-bar-grow ${stat.accent} group-hover:h-28 md:group-hover:h-32`}
                />
                <div>
                  <div className="font-display text-5xl md:text-[80px] leading-none font-black text-on-surface">
                    {stat.value}
                  </div>
                  <p
                    className={`font-label-mono text-base md:text-lg ${stat.textAccent} uppercase tracking-widest mt-2`}
                  >
                    {stat.label}
                  </p>
                </div>
              </div>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </RevealStagger>
      </section>
    </>
  )
}

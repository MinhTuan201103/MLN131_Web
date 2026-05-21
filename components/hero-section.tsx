"use client"

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida/ADBb0uh6JTtdOjcRROjBxmI_vRDL9Z0PX0u03XMicZLYlWn2kGGf9kl4TaoExsVv9i17PIpz2deE5fAMLm5QSe2GQCCfnbPXPIYRyp0GZkO0XJmbue0nHAvEr5w341Y2wJN36ARjZQhlaoXEGH0zgk9ne5s2_xUgu3nMjVIP6ylFL27saAkc90egsRA1yehGR0oK0w1IhamAMXtkSPCt1xCXTpSC87AXUH5f5itpXrISzPVnX3CllnxKWcmgQNo6"

const heroStats = [
  {
    value: "774.7%",
    label: "Lạm phát đỉnh (1986)",
    accent: "bg-revolutionary-red",
    textAccent: "text-revolutionary-red",
    desc: "Khởi đầu gian khó từ khủng hoảng kinh tế-xã hội, buộc đất nước bước vào kỷ nguyên Đổi Mới.",
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
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Quốc hội Việt Nam"
            className="w-full h-full object-cover grayscale opacity-60"
            src={HERO_IMAGE}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="grain-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 w-full exhibition-container pb-16 md:pb-24 pt-32">
          <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8">
            <span className="font-label-mono text-sm text-golden-silk uppercase tracking-[0.3em]">
              Triển lãm số: 1986 — 2026
            </span>
            <div className="h-0.5 flex-grow bg-monument-grey max-md:hidden" />
          </div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[120px] lg:leading-[110px] font-black text-white mb-6 uppercase tracking-tight">
            Kỷ Nguyên
            <br />
            <span className="text-revolutionary-red">Vươn Mình</span>
          </h1>
          <p className="font-sans text-lg md:text-xl max-w-2xl text-on-surface-variant leading-relaxed">
            Bốn thập kỷ đổi mới kiến tạo Việt Nam hiện đại, tự chủ và hội nhập. Từ nền kinh tế
            lạc hậu đến vị thế trung tâm sản xuất toàn cầu — dưới góc nhìn xây dựng CNXH khoa học.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-section-gap exhibition-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
          {heroStats.map((stat) => (
            <div key={stat.label} className="space-y-6 group">
              <div className="flex items-start gap-4">
                <div
                  className={`w-0.5 h-20 md:h-24 ${stat.accent} transition-all duration-500 group-hover:h-28 md:group-hover:h-32`}
                />
                <div>
                  <div className="font-display text-5xl md:text-[80px] leading-none font-black text-white">
                    {stat.value}
                  </div>
                  <p
                    className={`font-label-mono text-sm ${stat.textAccent} uppercase tracking-widest mt-2`}
                  >
                    {stat.label}
                  </p>
                </div>
              </div>
              <p className="text-on-surface-variant leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

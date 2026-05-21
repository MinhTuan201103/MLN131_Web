"use client"

import { ArrowDown, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const tableOfContents = [
  { number: "I", title: "Cơ sở lý luận" },
  { number: "II", title: "Bối cảnh & Hạn chế" },
  { number: "III", title: "Thành tựu Kinh tế" },
  { number: "IV", title: "Văn hóa - Xã hội" },
  { number: "V", title: "Quốc phòng - Chính trị" },
]

export function HeroSection() {
  const scrollToContent = () => {
    const element = document.getElementById("part-1")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      {/* Animated gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse" />
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8">
          <Star className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">
            SẢN PHẨM SÁNG TẠO HỌC TẬP · CHỦ NGHĨA XÃ HỘI KHOA HỌC
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          <span className="bg-gradient-to-r from-primary via-primary to-chart-2 bg-clip-text text-transparent">
            Thành Tựu 40 Năm
          </span>
          <br />
          <span className="text-foreground">Đổi Mới</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
          Xây dựng Chủ nghĩa Xã hội tại Việt Nam
        </p>

        {/* Description */}
        <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Từ năm 1986 đến nay, Việt Nam đã chuyển mình từ một trong những nước nghèo nhất thế giới 
          trở thành nền kinh tế đứng thứ 32 toàn cầu. Phân tích thành tựu dưới góc nhìn Chủ nghĩa 
          Xã hội Khoa học về kinh tế, chính trị, văn hóa, xã hội và quốc phòng.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            onClick={scrollToContent}
          >
            Bắt đầu khám phá
          </Button>
        </div>

        {/* Table of Contents */}
        <div className="mb-8">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
            NỘI DUNG CHÍNH
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {tableOfContents.map((item) => (
              <a
                key={item.number}
                href={`#part-${item.number.toLowerCase()}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {item.number}
                </span>
                <span className="text-sm hidden md:inline">{item.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToContent}
          className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
          aria-label="Cuộn xuống"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}

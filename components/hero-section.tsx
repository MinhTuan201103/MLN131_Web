"use client"

import { getPresentationImage } from "@/lib/presentation-images"
import { getPresentationVideo } from "@/lib/presentation-videos"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"

const congressTimeline = [
  {
    year: "1986",
    congress: "Đại hội VI",
    videoSlot: 0,
    imageSlot: 3,
    title: "Khởi xướng Đổi mới",
    summary:
      "Đại hội VI mở ra bước ngoặt lịch sử, chuyển nền kinh tế từ cơ chế bao cấp sang đổi mới toàn diện.",
    highlights: [
      "Xóa bỏ dần cơ chế quản lý tập trung quan liêu bao cấp",
      "Khẳng định yêu cầu đổi mới tư duy và đổi mới kinh tế",
      "Tạo nền tảng cho tiến trình phát triển về sau",
    ],
  },
  {
    year: "1991",
    congress: "Đại hội VII",
    videoSlot: 1,
    imageSlot: 6,
    customImage: "https://file3.qdnd.vn/data/images/0/2025/01/30/upload_2105/1.jpg",
    title: "Định hình đường lối",
    summary:
      "Đại hội VII thông qua Cương lĩnh 1991, xác định rõ hơn mô hình phát triển của Việt Nam.",
    highlights: [
      "Xác lập Cương lĩnh xây dựng đất nước trong thời kỳ quá độ",
      "Củng cố mô hình kinh tế thị trường định hướng XHCN",
      "Giữ ổn định chính trị để phát triển lâu dài",
    ],
  },
  {
    year: "2001",
    congress: "Đại hội IX",
    videoSlot: 2,
    imageSlot: 11,
    customImage: "https://cdn-images.vtv.vn/zoom/640_400/2020/6/6/dh9-1591457893186476988116.jpg",
    title: "Đẩy mạnh công nghiệp hóa",
    summary:
      "Đại hội IX nhấn mạnh công nghiệp hóa, hiện đại hóa và hội nhập để nâng tầm sức mạnh quốc gia.",
    highlights: [
      "Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước",
      "Mở rộng hội nhập kinh tế quốc tế",
      "Tăng cường sức cạnh tranh của nền kinh tế",
    ],
  },
  {
    year: "2011",
    congress: "Đại hội XI",
    videoSlot: 3,
    imageSlot: 18,
    customImage: "https://bcp.cdnchinhphu.vn/Uploaded_VGP/nguyenductuan/20110112/Default%20Doan%20DB.jpg",
    title: "Phát triển bền vững",
    summary:
      "Đại hội XI tập trung đổi mới mô hình tăng trưởng, tái cơ cấu kinh tế và phát triển bền vững.",
    highlights: [
      "Đổi mới mô hình tăng trưởng, nâng cao chất lượng",
      "Gắn phát triển kinh tế với an sinh xã hội",
      "Tạo động lực cho giai đoạn hội nhập sâu rộng",
    ],
  },
  {
    year: "2021",
    congress: "Đại hội XIII",
    videoSlot: 4,
    imageSlot: 24,
    customImage: "https://bcp.cdnchinhphu.vn/Uploaded/nguyenxuanhong/2021_01_26/Khai%20mac2.jpg",
    title: "Kỷ nguyên vươn mình",
    summary:
      "Đại hội XIII đặt mục tiêu đến 2045, đưa Việt Nam trở thành nước phát triển, thu nhập cao.",
    highlights: [
      "Xác lập khát vọng phát triển đến 2030 và 2045",
      "Đẩy mạnh chuyển đổi số, đổi mới sáng tạo",
      "Xây dựng đất nước hùng cường, hiện đại",
    ],
  },
  {
    year: "2026",
    congress: "Đại hội XIV",
    videoSlot: 5,
    imageSlot: 25,
    customImage: "https://bcp.cdnchinhphu.vn/334894974524682240/2026/1/27/ra-mat-17695155355291301888613.jpg",
    title: "Tiếp tục phát triển",
    summary:
      "Đại hội XIV tiếp tục định hướng chiến lược phát triển, tập trung vào thực hiện mục tiêu đến năm 2030 và tầm nhìn 2045.",
    highlights: [
      "Tiếp tục thực hiện mục tiêu nâng cao chất lượng, hiệu quả phát triển",
      "Tạo động lực mới cho phát triển bền vững",
      "Xây dựng nước mạnh, dân giàu, xã hội công bằng, dân chủ, văn minh",
    ],
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
              className="w-full h-full object-cover opacity-85"
              src={getPresentationImage(0)}
            />
          ) : (
            <div className="w-full h-full bg-surface-container-high" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
          <div className="grain-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 w-full exhibition-container pb-16 md:pb-24 pt-32">
          <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8 hero-animate-in hero-animate-in-delay-1">
            <span className="font-label-mono text-base md:text-lg text-revolutionary-red uppercase tracking-[0.3em]">
              MLN131 - Lý luận chính trị 
            </span>
            <div className="h-0.5 flex-grow bg-golden-silk/70 max-md:hidden hero-line-grow" />
          </div>
          <h1 className="font-display font-black text-on-surface mb-6 uppercase tracking-tight hero-animate-in hero-animate-in-delay-2 max-w-6xl leading-[0.92] space-y-4 md:space-y-5">
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[120px] lg:leading-[110px] text-on-surface">
              Thành tựu
            </span>
            <span className="block text-3xl sm:text-5xl md:text-[56px] lg:text-[64px] lg:leading-[1.02] text-revolutionary-red md:whitespace-nowrap">
              xây dựng chủ nghĩa xã hội
            </span>
            <span className="block text-3xl sm:text-5xl md:text-[56px] lg:text-[64px] lg:leading-[1.02] text-revolutionary-red md:whitespace-nowrap">
              sau 40 năm đổi mới và tương lai
            </span>
          </h1>
          <p className="font-sans text-xl md:text-2xl max-w-2xl text-on-surface-variant leading-relaxed hero-animate-in hero-animate-in-delay-3">
            GVHD: Thầy Trần Ngọc Lâm
            <br />
            Thuyết trình bởi nhóm 2
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12 exhibition-container">
        <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-monument-grey bg-surface-container py-5 md:py-6">
          <div className="absolute inset-y-0 left-0 w-20 md:w-28 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-28 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="timeline-wave absolute inset-0 z-[1] pointer-events-none" />
          <div className="timeline-marquee relative z-[2] flex items-stretch gap-6 px-4 md:px-6 py-4">
            {[...congressTimeline, ...congressTimeline].map((item, index) => {
              const imageSrc = item.customImage || getPresentationImage(item.imageSlot)

              return (
                <div
                  key={`${item.year}-${index}`}
                  className="group relative min-w-[240px] w-[min(72vw,320px)] shrink-0 overflow-hidden rounded-[1.5rem] border border-monument-grey bg-white text-left shadow-[0_8px_30px_rgb(0_0_0_/_0.05)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-revolutionary-red/30"
                >
                  <div className="relative aspect-[4/3] bg-surface-container-high">
                    {imageSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={imageSrc}
                        alt={`${item.congress} - ${item.year}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="h-full w-full bg-surface-container-high" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                      <div className="font-label-mono text-xs md:text-sm uppercase tracking-[0.28em] text-golden-silk">
                        {item.congress}
                      </div>
                      <div className="mt-1 font-display text-3xl md:text-4xl font-black leading-none">
                        {item.year}
                      </div>
                      <div className="mt-2 text-sm md:text-base font-semibold leading-snug">
                        {item.title}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

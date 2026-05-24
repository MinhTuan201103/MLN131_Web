import {
  SectionHeader,
  SectionWrap,
} from "@/components/content-card"
import { MediaBlock } from "@/components/media-block"
import { Reveal, RevealStagger } from "@/components/reveal"
import { ArrowRight } from "lucide-react"

const TRAITS_1991 = [
  "Nhân dân lao động làm chủ",
  "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về các tư liệu sản xuất chủ yếu",
  "Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc",
  "Con người được giải phóng khỏi áp bức, bóc lột, bất công; có cuộc sống ấm no, tự do, hạnh phúc, có điều kiện phát triển toàn diện",
  "Các dân tộc trong nước bình đẳng, đoàn kết và giúp đỡ nhau cùng tiến bộ",
  "Có quan hệ hữu nghị và hợp tác với nhân dân tất cả các nước trên thế giới",
]

const TRAITS_2011 = [
  {
    number: "01",
    text: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
    kind: "added",
  },
  {
    number: "02",
    text: "Nhân dân làm chủ",
    kind: "aligned",
  },
  {
    number: "03",
    text: "Kinh tế phát triển cao — lực lượng sản xuất hiện đại",
    kind: "aligned",
  },
  {
    number: "04",
    text: "Văn hóa tiên tiến, đậm đà bản sắc dân tộc",
    kind: "aligned",
  },
  {
    number: "05",
    text: "Con người ấm no, tự do, hạnh phúc",
    kind: "aligned",
  },
  {
    number: "06",
    text: "Dân tộc bình đẳng, đoàn kết",
    kind: "aligned",
  },
  {
    number: "07",
    text: "Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân, do Đảng Cộng sản lãnh đạo",
    kind: "added",
  },
  {
    number: "08",
    text: "Hữu nghị, hợp tác quốc tế",
    kind: "aligned",
  },
]

const SOCIALISM_DEFINITION = (
  <>
    <span className="text-golden-silk font-extrabold">Chủ nghĩa xã hội</span> là giai đoạn đầu của
    hình thái kinh tế - xã hội cộng sản chủ nghĩa; mục tiêu là xây dựng một xã hội do nhân dân làm chủ,
    có nền kinh tế phát triển, văn hóa tiến bộ, con người được giải phóng và phát triển toàn diện.
  </>
)

const DEVELOPMENT_AREAS = [
  {
    label: "Kinh tế",
    imageSlot: 8,
    alt: "Kinh tế Việt Nam",
  },
  {
    label: "Chính trị",
    imageSlot: 18,
    alt: "Chính trị Việt Nam",
  },
  {
    label: "Văn hoá",
    imageSlot: 17,
    alt: "Văn hoá Việt Nam",
  },
  {
    label: "Xã hội",
    imageSlot: 13,
    alt: "Xã hội Việt Nam",
  },
  {
    label: "Con người & Dân tộc",
    imageSlot: 14,
    alt: "Con người và dân tộc Việt Nam",
  },
  {
    label: "Quan hệ trong và ngoài nước",
    imageSlot: 19,
    alt: "Nhà nước và quan hệ quốc tế Việt Nam",
  },
]

const TRANSITION_ELEMENTS = [
  {
    position: "top-left",
    title: "NỀN KINH TẾ LẠC HẬU",
    points: [
      "~80% dân số làm nông nghiệp",
      "Năng suất thấp",
      "Công nghệ lạc hậu",
    ],
    image: "https://vcdn1-vnexpress.vnecdn.net/2016/12/15/10-8005-1481814589.png?w=680&h=0&q=100&dpr=2&fit=crop&s=n2qvupDTGS0ljOqDCf7FkA",
  },
  {
    position: "top-right",
    title: "HẬU QUẢ CHIẾN TRANH",
    points: [
      "Cơ sở hạ tầng tàn phá",
      "Thiếu vốn, thiếu hàng hóa",
      "Cân bằng kinh tế khủng hoảng",
    ],
    image: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/c1cd/live/7e063cc0-339f-11f0-8519-3b5a01ebe413.jpg.webp",
  },
  {
    position: "middle-left",
    title: "ĐỔI MỚI 1986",
    points: [
      "Xóa bỏ các chế độ bao cấp",
      "Kinh tế thị trường định hướng XHCN",
      "Giải phóng lực lượng sản xuất",
    ],
    image: "https://www.kidsup.net/wp-content/uploads/2025/10/viet-nam-nhung-nam-80.jpg",
  },
  {
    position: "middle-right",
    title: "CÔNG NGHIỆP HÓA – HIỆN ĐẠI HÓA",
    points: [
      "Thu hút đầu tư nước ngoài (FDI)",
      "Phát triển công nghệ, dịch vụ",
      "Dỡ bỏ hóa, hạ tầng phát triển",
    ],
    image: "https://sonlongvietnam.com/wp-content/uploads/2025/07/image_92.png",
  },
  {
    position: "bottom-left",
    title: "TĂNG TRƯỞNG ẤN TƯỢNG",
    stats: [
      "GDP: 26,3 tỷ USD (1986) → 476,4 tỷ USD (2024)",
      "GDP/người: 436 USD (1986) → 4.717 USD (2024)",
      "Lạm phát: 774,7% (1986) → ~3-4% (2024)",
      "Tỷ lệ nghèo: ~58% (1993) → <5% (2024)",
    ],
    image: "https://image.infographics.vn/media//730/2021/9/1/capture_2.PNG",
  },
  {
    position: "bottom-right",
    title: "HỘI NHẬP QUỐC TẾ",
    points: [
      "Gia nhập ASEAN (1995)",
      "Gia nhập WTO (2007)",
      "Ký nhiều FTA: CPTPP, EVFTA, RCEP...",
      "Xuất khẩu: >400 tỷ USD (2024)",
    ],
    image: "https://s-aicmscdn.vietnamhoinhap.vn/vnhn-media/25/8/15/gen-h-vnn_689ee9c3a1ed2.jpg",
  },
]

const TRANSITION_TIMELINE = [
  { year: "1986", label: "Đổi Mới", color: "text-revolutionary-red" },
  { year: "1995", label: "Gia nhập ASEAN", color: "text-golden-silk" },
  { year: "2007", label: "Gia nhập WTO", color: "text-golden-silk" },
  { year: "2024", label: "GDP 476,4 tỷ USD", color: "text-on-surface" },
  { year: "2030+", label: "Hướng tới phát triển bền vững, hiện đại, thịnh vượng", color: "text-teal-600" },
]

export function Part1CoSoLyLuan() {
  return (
    <SectionWrap id="part-1">
      <SectionHeader
        badge="Phần 1 · Cơ sở lý luận"
        title={
          <>
            Chúng Ta Đang Xây Dựng <span className="text-revolutionary-red">Cái Gì?</span>
          </>
        }
      />

      <Reveal variant="fade-up" className="mb-12">
        <div className="space-y-6">
          <div className="rounded-lg border border-monument-grey bg-surface-container px-5 py-4 md:px-6 md:py-5">
            <p className="font-label-mono text-sm uppercase tracking-[0.26em] text-revolutionary-red">
              Định nghĩa
            </p>
            <p className="mt-2 text-lg md:text-xl font-semibold leading-snug text-on-surface">
              {SOCIALISM_DEFINITION}
            </p>
          </div>

          <div className="relative w-full px-3 sm:px-4 md:px-6">
            <div className="relative">
              <p className="mx-auto text-center font-label-mono text-golden-silk text-base md:text-lg uppercase tracking-widest font-semibold">
                Ở Việt Nam đang phát triển toàn diện theo
              </p>

              <RevealStagger
                staggerMs={90}
                variant="fade-up"
                className="development-area-strip mt-4 grid gap-3"
              >
                {DEVELOPMENT_AREAS.map((area) => (
                  <MediaBlock
                    key={area.label}
                    imageSlot={area.imageSlot}
                    alt={area.alt}
                    aspect="video"
                    fit="cover"
                    caption={area.label}
                    captionSize="normal"
                    className="development-area-card exhibition-card-hover"
                  />
                ))}
              </RevealStagger>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="comparison-section mb-14">
        <div className="mb-6">
          <span className="font-label-mono text-revolutionary-red uppercase tracking-widest text-sm md:text-base font-semibold">
            2. So sánh Cương lĩnh
          </span>
          <h3 className="font-display text-3xl md:text-4xl text-on-surface mt-2 leading-tight">
            Từ 6 đặc trưng 1991 sang 8 đặc trưng 2011
          </h3>
        </div>

        <div className="comparison-stage">
          <div className="comparison-panels">
            <div className="comparison-side comparison-side-1991 exhibition-card-hover">
              <div className="comparison-side-header">
                <p className="comparison-kicker text-revolutionary-red">Cương lĩnh 1991</p>
                <div className="comparison-count">
                  <span>06</span>
                  <small>đặc trưng</small>
                </div>
              </div>

              <RevealStagger staggerMs={55} className="comparison-side-list">
                {TRAITS_1991.map((trait, index) => (
                  <div className="comparison-item comparison-item-left" key={trait}>
                    <span className="comparison-number text-revolutionary-red">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>{trait}</p>
                  </div>
                ))}
              </RevealStagger>
            </div>

            <div className="comparison-side-arrow" aria-hidden="true">
              <div className="comparison-side-arrow-line" />
              <ArrowRight className="comparison-side-arrow-icon h-9 w-9" />
            </div>

            <div className="comparison-side comparison-side-2011 exhibition-card-hover">
              <div className="comparison-side-header">
                <p className="comparison-kicker text-golden-silk">Cương lĩnh 2011</p>
                <div className="comparison-count">
                  <span>08</span>
                  <small>đặc trưng</small>
                </div>
              </div>

              <RevealStagger staggerMs={55} className="comparison-side-list">
                {TRAITS_2011.map((trait) => {
                  const isAdded = trait.kind === "added"

                  return (
                    <div
                      className={`comparison-item ${isAdded ? "comparison-item-added" : ""}`}
                      key={trait.number}
                    >
                      <span
                        className={`comparison-number ${
                          isAdded ? "text-golden-silk" : "text-revolutionary-red"
                        }`}
                      >
                        {trait.number}
                      </span>
                      <p>{trait.text}</p>
                    </div>
                  )
                })}
              </RevealStagger>
            </div>
          </div>
        </div>
      </div>

      <Reveal variant="fade-up" className="transition-section mb-12">
        <div className="mb-8">
          <span className="font-label-mono text-revolutionary-red uppercase tracking-widest text-sm md:text-base font-semibold">
            3. Thời kỳ quá độ
          </span>
          <h3 className="font-display text-3xl md:text-4xl text-on-surface mt-2 leading-tight mb-6">
            Thời kỳ quá độ trong mô hình Việt Nam
          </h3>
          
          {/* Quote section */}
          <div className="rounded-lg bg-red-50 border-l-4 border-revolutionary-red px-5 py-4 mb-8">
            <div className="flex gap-3">
              <span className="text-4xl text-revolutionary-red leading-none">❝</span>
              <p className="text-base md:text-lg text-on-surface">
                Thời kỳ quá độ là giai đoạn <span className="text-revolutionary-red font-bold">chuyên tiếp</span> để xây dựng nền tảng của chủ nghĩa xã hội.
              </p>
            </div>
          </div>
        </div>

        {/* Full diagram with proper spacing */}
        <div className="relative w-full mb-16 px-4">
          {/* SVG for connecting lines and circles */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: "1100px" }}>
            {/* Connecting lines */}
            <line x1="22%" y1="15%" x2="38%" y2="15%" stroke="#dc2626" strokeWidth="8" opacity="0.8" />
            <line x1="78%" y1="15%" x2="62%" y2="15%" stroke="#dc2626" strokeWidth="8" opacity="0.8" />
            
            <line x1="22%" y1="50%" x2="38%" y2="50%" stroke="#f59e0b" strokeWidth="8" opacity="0.8" />
            <line x1="78%" y1="50%" x2="62%" y2="50%" stroke="#f59e0b" strokeWidth="8" opacity="0.8" />
            
            <line x1="22%" y1="85%" x2="38%" y2="85%" stroke="#1e40af" strokeWidth="8" opacity="0.8" />
            <line x1="78%" y1="85%" x2="62%" y2="85%" stroke="#1e40af" strokeWidth="8" opacity="0.8" />
            
            {/* Vertical line connecting circles */}
            <line x1="50%" y1="15%" x2="50%" y2="85%" stroke="#f59e0b" strokeWidth="10" opacity="0.9" />
            
            {/* Small circles at connection points */}
            <circle cx="22%" cy="15%" r="8" fill="#dc2626" />
            <circle cx="78%" cy="15%" r="8" fill="#dc2626" />
            <circle cx="22%" cy="50%" r="8" fill="#f59e0b" />
            <circle cx="78%" cy="50%" r="8" fill="#f59e0b" />
            <circle cx="22%" cy="85%" r="8" fill="#1e40af" />
            <circle cx="78%" cy="85%" r="8" fill="#1e40af" />
          </svg>

          {/* Main grid layout */}
          <div className="relative grid grid-cols-2 gap-x-6 md:gap-x-[360px] gap-y-12 md:gap-y-20" style={{ minHeight: "1100px" }}>
            {/* Row 1: Top left and right - XUẤT PHÁT THẤP level */}
            <div className="flex items-start justify-end pr-2 md:pr-4">
              <Reveal variant="fade-up" className="w-full max-w-[540px]">
                <div className="rounded-3xl bg-red-50 border-2 border-red-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="h-56 md:h-72 overflow-hidden bg-gray-200">
                    <img 
                      src="https://vcdn1-vnexpress.vnecdn.net/2016/12/15/10-8005-1481814589.png?w=680&h=0&q=100&dpr=2&fit=crop&s=n2qvupDTGS0ljOqDCf7FkA"
                      alt="Nền kinh tế lạc hậu"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm md:text-base text-revolutionary-red mb-2 uppercase">NỀN KINH TẾ LẠC HẬU</h4>
                    <ul className="space-y-1 text-xs md:text-sm text-on-surface">
                      {TRANSITION_ELEMENTS[0].points.map((point, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-revolutionary-red font-bold flex-shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="flex items-start justify-start pl-2 md:pl-4">
              <Reveal variant="fade-up" className="w-full max-w-[540px]">
                <div className="rounded-3xl bg-red-50 border-2 border-red-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="h-56 md:h-72 overflow-hidden bg-gray-200">
                    <img 
                      src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/c1cd/live/7e063cc0-339f-11f0-8519-3b5a01ebe413.jpg.webp"
                      alt="Hậu quả chiến tranh"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm md:text-base text-revolutionary-red mb-2 uppercase">HẬU QUẢ CHIẾN TRANH</h4>
                    <ul className="space-y-1 text-xs md:text-sm text-on-surface">
                      {TRANSITION_ELEMENTS[1].points.map((point, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-revolutionary-red font-bold flex-shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Row 2: Middle left and right - XÂY NỀN TẢNG level */}
            <div className="flex items-center justify-end pr-2 md:pr-4">
              <Reveal variant="fade-up" className="w-full max-w-[540px]">
                <div className="rounded-3xl bg-amber-50 border-2 border-amber-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="h-56 md:h-72 overflow-hidden bg-gray-200">
                    <img 
                      src="https://www.kidsup.net/wp-content/uploads/2025/10/viet-nam-nhung-nam-80.jpg"
                      alt="Đổi mới 1986"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm md:text-base text-golden-silk mb-2 uppercase">ĐỔI MỚI 1986</h4>
                    <ul className="space-y-1 text-xs md:text-sm text-on-surface">
                      {TRANSITION_ELEMENTS[2].points.map((point, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-golden-silk font-bold flex-shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="flex items-center justify-start pl-2 md:pl-4">
              <Reveal variant="fade-up" className="w-full max-w-[540px]">
                <div className="rounded-3xl bg-amber-50 border-2 border-amber-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="h-56 md:h-72 overflow-hidden bg-gray-200">
                    <img 
                      src="https://sonlongvietnam.com/wp-content/uploads/2025/07/image_92.png"
                      alt="Công nghiệp hóa hiện đại hóa"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm md:text-base text-blue-600 mb-2 uppercase">CÔNG NGHIỆP HÓA</h4>
                    <ul className="space-y-1 text-xs md:text-sm text-on-surface">
                      {TRANSITION_ELEMENTS[3].points.map((point, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Row 3: Bottom left and right - MÔ HÌNH VIỆT NAM level */}
            <div className="flex items-end justify-end pr-2 md:pr-4">
              <Reveal variant="fade-up" className="w-full max-w-[540px]">
                <div className="rounded-3xl bg-slate-50 border-2 border-slate-300 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="h-56 md:h-72 overflow-hidden bg-gray-200">
                    <img 
                      src="https://image.infographics.vn/media//730/2021/9/1/capture_2.PNG"
                      alt="Tăng trưởng ấn tượng"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm md:text-base text-slate-700 mb-2 uppercase">TĂNG TRƯỞNG ẤN TƯỢNG</h4>
                    <div className="text-xs text-on-surface space-y-0.5">
                      {TRANSITION_ELEMENTS[4].stats.map((stat, idx) => (
                        <div key={idx} className="flex gap-1">
                          <span className="text-slate-700 font-bold flex-shrink-0">◆</span>
                          <span className="line-clamp-1 leading-tight">{stat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="flex items-end justify-start pl-2 md:pl-4">
              <Reveal variant="fade-up" className="w-full max-w-[540px]">
                <div className="rounded-3xl bg-slate-50 border-2 border-slate-300 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="h-56 md:h-72 overflow-hidden bg-gray-200">
                    <img 
                      src="https://s-aicmscdn.vietnamhoinhap.vn/vnhn-media/25/8/15/gen-h-vnn_689ee9c3a1ed2.jpg"
                      alt="Hội nhập quốc tế"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm md:text-base text-purple-600 mb-2 uppercase">HỘI NHẬP QUỐC TẾ</h4>
                    <ul className="space-y-1 text-xs md:text-sm text-on-surface">
                      {TRANSITION_ELEMENTS[5].points.map((point, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Three main circles - centered */}
            {/* Top circle - XUẤT PHÁT THẤP */}
            <div className="absolute top-[8%] left-1/2 transform -translate-x-1/2 z-10">
              <Reveal variant="scale-in">
                <div className="flex items-center justify-center w-48 h-48 md:w-80 md:h-80 rounded-full bg-gradient-to-b from-red-500 to-red-700 shadow-2xl border-[10px] md:border-[16px] border-white">
                  <div className="text-center">
                    <p className="text-white font-black text-xl md:text-4xl leading-tight">XUẤT PHÁT</p>
                    <p className="text-white font-black text-xl md:text-4xl leading-tight mt-2">THẤP</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Middle circle - XÂY NỀN TẢNG */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <Reveal variant="scale-in" delay={100}>
                <div className="flex items-center justify-center w-48 h-48 md:w-80 md:h-80 rounded-full bg-gradient-to-b from-amber-400 to-amber-600 shadow-2xl border-[10px] md:border-[16px] border-white">
                  <div className="text-center">
                    <p className="text-white font-black text-xl md:text-4xl leading-tight">XÂY NỀN</p>
                    <p className="text-white font-black text-xl md:text-4xl leading-tight mt-2">TẢNG</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Bottom circle - MÔ HÌNH VIỆT NAM */}
            <div className="absolute bottom-[8%] left-1/2 transform -translate-x-1/2 z-10">
              <Reveal variant="scale-in" delay={200}>
                <div className="flex items-center justify-center w-48 h-48 md:w-80 md:h-80 rounded-full bg-gradient-to-b from-slate-700 to-slate-900 shadow-2xl border-[10px] md:border-[16px] border-white">
                  <div className="text-center">
                    <p className="text-white font-black text-xl md:text-4xl leading-tight">MÔ HÌNH</p>
                    <p className="text-white font-black text-xl md:text-4xl leading-tight mt-2">VIỆT NAM</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Timeline - pushed way down */}
        <div className="mt-40 relative z-20 bg-background px-4 md:px-12">
          <div className="absolute top-3.5 left-0 w-full h-[1px] bg-monument-grey" />
          <div className="relative grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6">
            {TRANSITION_TIMELINE.map((item, idx) => (
              <Reveal key={idx} variant="fade-up" delay={idx * 80}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-7 h-7 rounded-full bg-monument-grey flex items-center justify-center mb-3 relative z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-on-surface" />
                  </div>
                  <p className={`font-bold text-base md:text-lg ${item.color}`}>{item.year}</p>
                  <p className="text-xs md:text-sm text-on-surface-variant mt-1">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

    </SectionWrap>
  )
}

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

const TRANSITION_STEPS = [
  {
    number: "01",
    question: "Điểm xuất phát",
    title: "Xuất phát thấp",
    thesis: "Đi lên từ nền tảng còn thấp.",
    points: ["Nông nghiệp lạc hậu.", "Hậu quả chiến tranh nặng."],
    tone: "red",
  },
  {
    number: "02",
    question: "Giai đoạn chuyển tiếp",
    title: "Xây nền tảng",
    thesis: "Đoạn giữa: vừa phát triển, vừa xây.",
    points: ["Phát triển lực lượng sản xuất.", "Xây thể chế xã hội chủ nghĩa."],
    tone: "gold",
  },
  {
    number: "03",
    question: "Mục tiêu",
    title: "Mô hình Việt Nam",
    thesis: "Đích đến là mô hình xã hội chủ nghĩa Việt Nam.",
    points: ["Kinh tế thị trường định hướng XHCN.", "Nhà nước pháp quyền, nhân dân làm chủ."],
    tone: "grey",
  },
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
        <div className="transition-section-head">
          <span className="font-label-mono text-revolutionary-red uppercase tracking-widest text-sm md:text-base font-semibold">
            3. Thời kỳ quá độ
          </span>
          <h3 className="font-display text-3xl md:text-4xl text-on-surface mt-2 leading-tight">
            Thời kỳ quá độ trong mô hình Việt Nam
          </h3>
          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed max-w-4xl">
            Mạch logic: điểm xuất phát, giai đoạn chuyển tiếp, mục tiêu phát triển.
          </p>
        </div>

        <div className="transition-definition">
          <span>Khái niệm ngắn</span>
          <p>
            <strong>Thời kỳ quá độ</strong> là giai đoạn chuyển tiếp để xây dần nền tảng của chủ nghĩa xã hội.
          </p>
        </div>

        <div className="transition-path">
          {TRANSITION_STEPS.flatMap((step, index) => {
            const isMiddle = index === 1

            return [
              <article
                key={`step-${step.number}`}
                className={`transition-step-card transition-step-${step.tone} ${
                  isMiddle ? "transition-step-main" : ""
                } exhibition-card-hover`}
              >
                <div className="transition-step-top">
                  <span className="transition-step-number">{step.number}</span>
                  <p>{step.question}</p>
                </div>

                <h4>{step.title}</h4>
                <p className="transition-step-thesis">{step.thesis}</p>

                <ul className="transition-step-list">
                  {step.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                {isMiddle && (
                  <p className="transition-step-focus">
                    Trọng tâm của thời kỳ quá độ.
                  </p>
                )}
              </article>,
              index < TRANSITION_STEPS.length - 1 ? (
                <div key={`arrow-${step.number}`} className="transition-path-arrow" aria-hidden="true">
                  <div className="transition-path-arrow-line" />
                  <ArrowRight className="transition-path-arrow-icon h-8 w-8 rotate-90 lg:rotate-0" />
                </div>
              ) : null,
            ]
          })}
        </div>

        <div className="transition-answer">
          <span>Kết luận</span>
          <p>
            Việt Nam <strong>quá độ</strong> trong giai đoạn vừa phát triển kinh tế, vừa xây dựng các điều kiện xã hội chủ nghĩa.
          </p>
        </div>
      </Reveal>

    </SectionWrap>
  )
}

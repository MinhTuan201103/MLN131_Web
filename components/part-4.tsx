import {
  SectionHeader,
  SectionWrap,
} from "@/components/content-card"
import { MediaBlock } from "@/components/media-block"
import { Reveal, RevealStagger } from "@/components/reveal"
import { getPresentationImage } from "@/lib/presentation-images"

const HEALTH_IMAGE =
  "https://lh3.googleusercontent.com/aida/ADBb0uhi4qmz1UFgLDCv47ccnnkQ-dDPtkXsoVLBn9W5RCUSoXB5BCbc5R4mldLLmFyURAS2Pjc4nE9rlEYvel8Rh7Gf-z_pZOkS9_6h6wWVAhNbdOL4nBqt_LOqKW8Jl8rXW7R2YZgfLMPU1fE_nZxCCp5HrZUQFVB4o6ZfooWuM7hlXe-scTYjRUO11PMs1B5b7CsCljeQD_tKNegInQbVuB33hv0oK8mWL86_fjxSq39pyxv-xVrsXQ8JuSHO"

const ACHIEVEMENTS = [
  { slot: 12 as const, num: "0,766", label: "Chỉ số phát triển con người (HDI)" },
  { slot: 13 as const, num: "95,2%", label: "Bảo hiểm y tế toàn dân" },
  { slot: 14 as const, num: "74,5+", label: "Tuổi thọ trung bình" },
  { slot: 15 as const, num: "1,3%", label: "Tỷ lệ hộ nghèo" },
  { slot: 16 as const, num: "—", label: "Giáo dục và đào tạo" },
]

export function Part4VanHoaXaHoi() {
  return (
    <section id="part-4" className="bg-surface-container-low">
      <div className="relative py-16 md:py-24 overflow-hidden bg-surface-container-high">
        <Reveal className="exhibition-container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <MediaBlock
              imageSlot={13}
              src={getPresentationImage(13) ?? HEALTH_IMAGE}
              alt="Y tế"
              aspect="hero"
              captionSize="large"
            />
            <div className="mt-4 inline-flex items-center gap-4 bg-revolutionary-red px-6 py-4">
              <span className="font-display text-4xl md:text-5xl font-black text-white">95%</span>
              <p className="font-label-mono text-white/90 text-base md:text-lg uppercase font-semibold">
                Bảo hiểm y tế
              </p>
            </div>
          </div>
          <div>
            <SectionHeader
              badge="Phần 4 · Văn hóa — Xã hội"
              title={
                <>
                  Con Người <span className="text-golden-silk">Là Trung Tâm</span>
                </>
              }
              className="mb-6"
            />
            <blockquote className="text-2xl md:text-3xl italic text-on-surface border-l-4 border-golden-silk pl-6 mb-4">
              &quot;Con người là trung tâm, chủ thể, nguồn lực và mục tiêu phát triển.&quot;
            </blockquote>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
              Văn hóa ngang tầm kinh tế — chính trị · con người phát triển toàn diện · bản sắc dân
              tộc · công bằng xã hội.
            </p>
          </div>
        </Reveal>
      </div>

      <SectionWrap className="!bg-surface-container-low">
        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-center text-revolutionary-red font-extrabold mb-10 md:mb-14 leading-tight">
          Thành tựu sau 40 năm — 5 trụ cột xã hội
        </h3>

        <RevealStagger
          staggerMs={100}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 lg:gap-8 mb-14"
        >
          {ACHIEVEMENTS.map((a) => (
            <div key={a.label} className="flex flex-col gap-4">
              <MediaBlock
                imageSlot={a.slot}
                alt={a.label}
                aspect="pillar"
                fit="cover"
                captionSize="large"
              />
              <div className="text-center p-5 md:p-6 bg-surface-container border border-monument-grey exhibition-card-hover">
                <div className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-black text-revolutionary-red leading-none">
                  {a.num}
                </div>
                <div className="font-label-mono text-base md:text-lg text-on-surface mt-3 font-semibold leading-snug">
                  {a.label}
                </div>
              </div>
            </div>
          ))}
        </RevealStagger>

        <MediaBlock imageSlot={17} className="mb-8" alt="Văn hóa" aspect="wide" captionSize="large" />

        <blockquote className="border-l-4 border-golden-silk pl-6 text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto text-center md:text-left">
          <strong className="text-on-surface">Đánh giá:</strong> Chủ nghĩa xã hội ở Việt Nam là con
          đường phát triển <em>vì con người</em> — không chỉ tăng trưởng kinh tế.
        </blockquote>
      </SectionWrap>
    </section>
  )
}

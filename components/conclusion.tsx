import { SectionHeader, SectionWrap } from "@/components/content-card"
import { MediaBlock } from "@/components/media-block"

export function ConclusionSection() {
  return (
    <SectionWrap id="conclusion">
      <MediaBlock imageSlot={24} className="mb-12" alt="Kết luận" aspect="wide" captionSize="large" />

      <div className="text-center max-w-4xl mx-auto border-b-4 border-revolutionary-red pb-12">
        <SectionHeader
          align="center"
          badge="Kết luận"
          title={
            <>
              40 Năm — <span className="text-revolutionary-red">Chủ Nghĩa Xã Hội Nhân Văn</span>
            </>
          }
        />

        <p className="text-xl md:text-2xl text-on-surface-variant mb-10 leading-relaxed">
          Thành tựu không chỉ kinh tế mà cả văn hóa — xã hội: minh chứng mô hình hướng tới hạnh phúc
          và phát triển toàn diện con người.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { v: "510", u: "tỷ USD", l: "GDP" },
            { v: "Top 32", u: "", l: "Kinh tế" },
            { v: "0,766", u: "", l: "HDI" },
            { v: "40", u: "năm", l: "Đổi mới" },
          ].map((x) => (
            <div key={x.l} className="p-4 bg-surface-container border border-monument-grey">
              <div className="font-display text-3xl md:text-4xl font-black text-on-surface">
                {x.v}
                <span className="text-base font-normal text-on-surface-variant ml-1">{x.u}</span>
              </div>
              <div className="font-label-mono text-sm md:text-base uppercase text-on-surface-variant mt-1">{x.l}</div>
            </div>
          ))}
        </div>

        <blockquote className="italic text-on-surface text-xl md:text-2xl">
          Bản chất nhân văn của chủ nghĩa xã hội ở Việt Nam — vì con người, bởi con người.
        </blockquote>
      </div>
    </SectionWrap>
  )
}

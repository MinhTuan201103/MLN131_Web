import { SectionHeader, SectionWrap } from "@/components/content-card"

export function ConclusionSection() {
  return (
    <SectionWrap id="conclusion" variant="default">
      <div className="text-center border-b-4 border-revolutionary-red pb-16 md:pb-section-gap max-w-4xl mx-auto">
        <SectionHeader
          align="center"
          badge="Kết luận"
          title={
            <>
              40 Năm Đổi Mới — <span className="text-revolutionary-red">Tầm Nhìn 2045</span>
            </>
          }
        />

        <p className="text-lg text-on-surface-variant leading-relaxed mb-12 max-w-3xl mx-auto">
          Sau 40 năm Đổi mới, Việt Nam đạt thành tựu có ý nghĩa lịch sử về kinh tế, văn hóa — xã
          hội, quốc phòng và chính trị — minh chứng bản chất nhân văn của CNXH ở Việt Nam.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left mb-12">
          <div className="border-l-4 border-golden-silk pl-8">
            <span className="font-label-mono text-monument-grey text-lg block mb-3">Giai đoạn 2030</span>
            <p className="text-on-surface-variant">
              Nước đang phát triển, công nghiệp hiện đại, thu nhập trung bình cao — GDP ~900 tỷ USD.
            </p>
          </div>
          <div className="border-l-4 border-revolutionary-red pl-8">
            <span className="font-label-mono text-monument-grey text-lg block mb-3">Giai đoạn 2045</span>
            <p className="text-on-surface-variant">
              Nước phát triển, thu nhập cao, theo định hướng xã hội chủ nghĩa — Kỷ nguyên vươn mình.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { value: "510", unit: "tỷ USD", label: "GDP 2025" },
            { value: "Top 32", unit: "", label: "Thế giới" },
            { value: "0.766", unit: "", label: "Chỉ số HDI" },
            { value: "193", unit: "", label: "Đối tác quốc tế" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-4 bg-surface-container border border-monument-grey text-center"
            >
              <div className="font-display text-2xl md:text-3xl font-black text-on-surface">
                {item.value}
                {item.unit && (
                  <span className="text-sm font-normal text-on-surface-variant ml-1">{item.unit}</span>
                )}
              </div>
              <div className="font-label-mono text-xs text-on-surface-variant mt-1 uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <blockquote className="text-on-surface italic text-lg mb-8">
          &quot;Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày
          nay.&quot;
          <footer className="text-sm text-on-surface-variant mt-2 not-italic">— Đại hội XIII</footer>
        </blockquote>
      </div>
    </SectionWrap>
  )
}

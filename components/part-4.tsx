import {
  ContentCard,
  SectionHeader,
  StatCard,
  ListItem,
  SectionWrap,
} from "@/components/content-card"

const HEALTH_IMAGE =
  "https://lh3.googleusercontent.com/aida/ADBb0uhi4qmz1UFgLDCv47ccnnkQ-dDPtkXsoVLBn9W5RCUSoXB5BCbc5R4mldLLmFyURAS2Pjc4nE9rlEYvel8Rh7Gf-z_pZOkS9_6h6wWVAhNbdOL4nBqt_LOqKW8Jl8rXW7R2YZgfLMPU1fE_nZxCCp5HrZUQFVB4o6ZfooWuM7hlXe-scTYjRUO11PMs1B5b7CsCljeQD_tKNegInQbVuB33hv0oK8mWL86_fjxSq39pyxv-xVrsXQ8JuSHO"

export function Part4VanHoaXaHoi() {
  return (
    <section id="part-4" className="bg-surface-container-low">
      <div className="relative py-16 md:py-section-gap overflow-hidden bg-monument-grey">
        <div className="exhibition-container flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="w-full md:w-1/2 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Y tế hiện đại"
              className="w-full grayscale border-l-8 border-golden-silk shadow-2xl"
              src={HEALTH_IMAGE}
            />
            <div className="absolute -top-6 -right-4 md:-right-10 bg-revolutionary-red p-6 md:p-8 hidden sm:block">
              <span className="font-display text-4xl md:text-[60px] text-white leading-none font-black">
                95%
              </span>
              <p className="font-label-mono text-white/80 uppercase text-xs mt-1">Bao phủ BHYT</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <SectionHeader
              badge="Phần 4 · Xã hội"
              title={
                <>
                  Tiến Bộ <span className="text-golden-silk">Xã Hội</span>
                </>
              }
              description="Phát triển lấy con người làm trung tâm — không để ai bị bỏ lại phía sau."
              className="mb-8"
            />
            <blockquote className="text-lg md:text-xl text-on-surface mb-6 italic border-l-4 border-revolutionary-red pl-6">
              &quot;Con người là trung tâm, chủ thể, nguồn lực quan trọng nhất và mục tiêu của sự
              phát triển.&quot;
            </blockquote>
            <ul>
              <ListItem>Xóa đói giảm nghèo bền vững là ưu tiên hàng đầu</ListItem>
              <ListItem>Giáo dục và Y tế là nền tảng quốc gia</ListItem>
              <ListItem>Công bằng xã hội qua từng chính sách</ListItem>
            </ul>
          </div>
        </div>
      </div>

      <SectionWrap className="!bg-surface-container-low">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <StatCard value="0.766" label="Chỉ số HDI" accent="red" />
          <StatCard value="95.2%" label="Bao phủ BHYT" accent="gold" />
          <StatCard value="74.5+" label="Tuổi thọ TB" accent="gold" />
          <StatCard value="1.3%" label="Hộ nghèo 2025" accent="grey" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 mb-12">
          <ContentCard badge="Thành tựu 1" title="Phát triển con người">
            <p className="text-sm">HDI ~0.766 — nhóm phát triển con người cao (UNDP).</p>
          </ContentCard>
          <ContentCard badge="Thành tựu 2" title="Y tế & Sức khỏe">
            <ul className="text-sm">
              <ListItem>Ghép tạng, vắc-xin tự sản xuất</ListItem>
              <ListItem>Tiêm chủng mở rộng hiệu quả</ListItem>
            </ul>
          </ContentCard>
          <ContentCard badge="Thành tựu 3" title="Giáo dục — Quốc sách hàng đầu">
            <ul className="text-sm">
              <ListItem>Ngân sách giáo dục tăng liên tục</ListItem>
              <ListItem>Nâng cao chất lượng nhân lực</ListItem>
            </ul>
          </ContentCard>
          <ContentCard variant="red" badge="Thành tựu 4" title="Giảm nghèo & An sinh">
            <p className="text-sm">Hộ nghèo giảm từ 4.2% (2022) còn ~1.3% (2025).</p>
          </ContentCard>
        </div>

        <ContentCard badge="Văn hóa" title="Đời sống tinh thần">
          <p className="text-sm mb-4 italic">
            Văn hóa vừa là mục tiêu, vừa là động lực của sự phát triển.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Yêu nước", "Đoàn kết", "Trách nhiệm", "Sáng tạo", "Nghĩa tình"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-surface-container-high font-label-mono text-xs text-golden-silk uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </ContentCard>
      </SectionWrap>
    </section>
  )
}

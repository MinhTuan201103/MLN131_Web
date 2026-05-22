import {
  ContentCard,
  SectionHeader,
  StatCard,
  ListItem,
  SourceLink,
  SectionWrap,
} from "@/components/content-card"
import { MediaBlock } from "@/components/media-block"
import { Reveal, RevealStagger } from "@/components/reveal"

const LIMITATIONS = [
  "Năng suất, cạnh tranh, mô hình tăng trưởng",
  "Thể chế kinh tế thị trường — môi trường đầu tư",
  "Chênh lệch giàu nghèo",
  "Môi trường, biến đổi khí hậu",
  "Cụ thể hóa, thể chế hóa nghị quyết",
]

export function Part2BoiCanh() {
  return (
    <SectionWrap id="part-2" variant="low">
      <SectionHeader
        badge="Phần 2 · Bối cảnh"
        title={
          <>
            Vì Sao Phải <span className="text-revolutionary-red">Đổi Mới?</span>
          </>
        }
      />

      <MediaBlock
        imageSlot={6}
        className="mb-12"
        alt="Timeline đổi mới"
        aspect="wide"
        captionSize="large"
      />

      <RevealStagger staggerMs={100} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <StatCard value="774,7%" label="Lạm phát 1986" accent="red" />
        <StatCard value="< $700" label="GDP/người 1986" accent="gold" />
        <StatCard value="~$4.500" label="GDP/người 2023" accent="gold" />
        <StatCard value="Top 32" label="Thế giới 2025" accent="grey" />
      </RevealStagger>

      <div className="grid md:grid-cols-2 gap-8 mb-12 items-start">
        <MediaBlock imageSlot={7} alt="Khủng hoảng trước 1986" aspect="hero" captionSize="large" />
        <div className="flex flex-col gap-6">
          <ContentCard variant="red" badge="1–2" title="Khủng hoảng & Lạm phát">
            <p>
              Đại hội VI: sản xuất chậm, phân phối rối ren, đời sống khó khăn.
            </p>
            <p className="mt-2 font-semibold text-golden-silk">1986: lạm phát 774,7%</p>
          </ContentCard>
          <ContentCard badge="3–4" title="Bao cấp · Thiếu hàng">
            <ul>
              <ListItem>Xóa bỏ tập trung quan liêu, bao cấp</ListItem>
              <ListItem>3 chương trình: lương thực — tiêu dùng — xuất khẩu</ListItem>
            </ul>
          </ContentCard>
        </div>
      </div>

      <p className="relative z-10 text-center font-display text-2xl md:text-3xl text-on-surface mb-8 max-w-4xl mx-auto font-semibold">
        Đổi mới = giải phóng lực lượng sản xuất khỏi cơ chế cũ · ổn định đời sống · thoát khủng
        hoảng
      </p>

      <h3 className="font-label-mono text-center text-golden-silk uppercase tracking-widest mb-6 text-lg md:text-xl font-semibold">
        Hạn chế hiện nay — Đại hội XIII
      </h3>
      <RevealStagger staggerMs={90} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8 items-stretch">
        {LIMITATIONS.map((item, i) => (
          <div
            key={i}
            className="p-4 bg-surface-container border border-monument-grey text-center h-full min-h-[88px] flex flex-col justify-center exhibition-card-hover"
          >
            <span className="font-label-mono text-revolutionary-red text-lg font-bold">{i + 1}</span>
            <p className="text-base md:text-lg text-on-surface mt-2 leading-snug">{item}</p>
          </div>
        ))}
      </RevealStagger>

      <blockquote className="border-l-4 border-revolutionary-red pl-6 text-lg md:text-xl text-on-surface-variant max-w-4xl">
        <strong className="text-on-surface">Kết phần 2:</strong> Hạn chế không phủ nhận thành tựu
        — quá độ còn dài, cần tiếp tục đổi mới theo định hướng xã hội chủ nghĩa.
      </blockquote>
      <div className="mt-4 flex flex-wrap gap-4">
        <SourceLink href="https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-vi/dai-hoi-dai-bieu-toan-quoc-lan-thu-vi-cua-dang-19">
          Đại hội VI
        </SourceLink>
        <SourceLink href="https://www.worldbank.org/en/country/vietnam/overview.print">
          World Bank
        </SourceLink>
        <SourceLink href="https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-xiii/bao-cao-chinh-tri-cua-ban-chap-hanh-trung-uong-dang-khoa-xii-tai-dai-hoi-dai-bieu-toan-quoc-lan-thu-xiii-cua-3734">
          Báo cáo Đại hội XIII
        </SourceLink>
      </div>
    </SectionWrap>
  )
}

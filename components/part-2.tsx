import {
  SectionHeader,
  SourceLink,
  SectionWrap,
} from "@/components/content-card"
import { EvidenceStatStrip, GdpTimelineChart, ReformFlowDiagram } from "@/components/data-visuals"
import { RevealStagger } from "@/components/reveal"

const LIMITATIONS = [
  "Năng suất và cạnh tranh",
  "Thể chế, môi trường đầu tư",
  "Chênh lệch giàu nghèo",
  "Môi trường, khí hậu",
  "Thực thi chính sách",
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

      <EvidenceStatStrip />
      <GdpTimelineChart />
      <ReformFlowDiagram />

      <p className="relative z-10 text-center font-display text-2xl md:text-3xl text-on-surface mb-10 max-w-4xl mx-auto font-semibold">
        Đổi mới = giải phóng lực lượng sản xuất khỏi cơ chế cũ, ổn định đời sống, rồi tiếp tục hoàn
        thiện mô hình XHCN Việt Nam.
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
        <SourceLink href="https://moit.gov.vn/gioi-thieu/cac-thoi-ky-phat-trien/giai-doan-1975-1985.html">
          Bộ Công Thương
        </SourceLink>
        <SourceLink href="https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=VN">
          World Bank GDP/người
        </SourceLink>
        <SourceLink href="https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=VN">
          World Bank GDP
        </SourceLink>
        <SourceLink href="https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-xiii/bao-cao-chinh-tri-cua-ban-chap-hanh-trung-uong-dang-khoa-xii-tai-dai-hoi-dai-bieu-toan-quoc-lan-thu-xiii-cua-3734">
          Báo cáo Đại hội XIII
        </SourceLink>
      </div>
    </SectionWrap>
  )
}

import {
  ContentCard,
  SectionHeader,
  StatCard,
  ListItem,
  SourceLink,
  SectionWrap,
} from "@/components/content-card"
import { AlertTriangle } from "lucide-react"

export function Part2BoiCanh() {
  return (
    <SectionWrap id="part-2" variant="low">
      <SectionHeader
        badge="Phần 2 · Bối cảnh"
        title={
          <>
            Từ Khủng Hoảng Đến <span className="text-revolutionary-red">Đột Phá</span>
          </>
        }
        description="Trước 1986, Việt Nam đứng trước ngưỡng sụp đổ kinh tế. Đổi mới là mệnh lệnh của lịch sử."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
        <StatCard value="774.7%" label="Lạm phát 1986" accent="red" />
        <StatCard value="< $700" label="GDP/người 1986" accent="gold" />
        <StatCard value="$4,500" label="GDP/người 2023" accent="gold" />
        <StatCard value="Top 32" label="Thế giới 2025" accent="grey" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 mb-12">
        <ContentCard variant="red" badge="Trước 1986" title="Khủng hoảng KT-XH">
          <div className="flex gap-3 mb-4 p-3 bg-black/20">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 text-golden-silk" />
            <p className="text-sm text-white/90">
              Sản xuất chậm, phân phối rối ren, đời sống nhân dân khó khăn — Đại hội VI.
            </p>
          </div>
          <ul className="text-sm">
            <ListItem>Lạm phát 774.7% năm 1986</ListItem>
            <ListItem>Cơ chế bao cấp, khan hiếm hàng hóa</ListItem>
            <ListItem>LLSX bị kìm hãm bởi quản lý tập trung</ListItem>
          </ul>
          <div className="mt-4 pt-4 border-t border-white/20">
            <SourceLink href="https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-vi/dai-hoi-dai-bieu-toan-quoc-lan-thu-vi-cua-dang-19">
              Văn kiện Đại hội VI
            </SourceLink>
          </div>
        </ContentCard>

        <ContentCard badge="Nguyên nhân" title="Tại sao phải đổi mới?">
          <ul className="text-sm">
            <ListItem>LLSX bị kìm hãm — cơ chế cũ không còn phù hợp</ListItem>
            <ListItem>Mâu thuẫn nhu cầu phát triển vs thực trạng bao cấp</ListItem>
            <ListItem>3 chương trình: lương thực, tiêu dùng, xuất khẩu</ListItem>
          </ul>
          <div className="mt-4 pt-4 border-t border-monument-grey">
            <SourceLink href="https://www.worldbank.org/en/country/vietnam/overview.print">
              World Bank Vietnam
            </SourceLink>
          </div>
        </ContentCard>
      </div>

      <h3 className="font-display text-xl md:text-2xl font-bold text-on-surface mb-8 text-center">
        Hạn chế hiện nay <span className="text-golden-silk">(Đại hội XIII)</span>
      </h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {[
          { title: "Năng suất & Cạnh tranh", desc: "Đổi mới mô hình tăng trưởng còn chậm" },
          { title: "Thể chế kinh tế", desc: "Môi trường đầu tư chưa thật thông thoáng" },
          { title: "Bất bình đẳng", desc: "Chênh lệch giàu nghèo cần xử lý hiệu quả hơn" },
          { title: "Môi trường", desc: "Biến đổi khí hậu, tài nguyên còn bất cập" },
          { title: "Tổ chức thực hiện", desc: "Cụ thể hóa, thể chế hóa nghị quyết còn hạn chế" },
        ].map((item) => (
          <div
            key={item.title}
            className="p-6 bg-surface-container border border-monument-grey hover:border-revolutionary-red transition-colors"
          >
            <h4 className="font-display font-bold text-on-surface mb-2">{item.title}</h4>
            <p className="text-sm text-on-surface-variant">{item.desc}</p>
          </div>
        ))}
      </div>

      <p className="text-on-surface-variant border-l-4 border-revolutionary-red pl-6 leading-relaxed max-w-4xl">
        Hạn chế hiện nay <strong className="text-on-surface">không phủ nhận thành tựu đổi mới</strong> —
        thời kỳ quá độ là quá trình lâu dài, phức tạp, đòi hỏi tiếp tục hoàn thiện thể chế theo định
        hướng XHCN.
      </p>
    </SectionWrap>
  )
}

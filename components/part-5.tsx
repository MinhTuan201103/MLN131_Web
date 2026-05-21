import {
  ContentCard,
  SectionHeader,
  StatCard,
  ListItem,
  SourceLink,
  SectionWrap,
} from "@/components/content-card"
import { Flag, Shield, Handshake } from "lucide-react"

export function Part5QuocPhongChinhTri() {
  return (
    <SectionWrap id="part-5">
      <SectionHeader
        badge="Phần 5 · Quốc phòng & Chính trị"
        title={
          <>
            Ổn Định Trong <span className="text-revolutionary-red">Kỷ Nguyên Vươn Mình</span>
          </>
        }
        description="Ổn định chính trị là bệ đỡ an toàn — điều kiện tiên quyết cho CNH-HĐH và thu hút đầu tư."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <StatCard value="193" label="Quốc gia ngoại giao" accent="red" />
        <StatCard value="5/5" label="Đối tác HĐBA TT" accent="gold" />
        <StatCard value="16" label="FTA thế hệ mới" accent="gold" />
        <StatCard value="100%" label="Độc lập chủ quyền" accent="grey" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 mb-12">
        <ContentCard badge="Lý luận" title="KT & Chính trị">
          <p className="text-sm mb-3">
            Cơ sở hạ tầng kinh tế quyết định kiến trúc thượng tầng chính trị — KTTT định hướng XHCN
            cần hệ thống chính trị vững mạnh.
          </p>
          <p className="text-sm text-golden-silk font-semibold">
            Ổn định chính trị = bệ đỡ cho CNH-HĐH.
          </p>
        </ContentCard>
        <ContentCard variant="gold" badge="Dân chủ XHCN" title="Dân biết, dân bàn, dân làm...">
          <p className="text-sm italic mb-3">
            ĐH XIII: &quot;dân giám sát, dân thụ hưởng&quot; — gốc rễ của sự ổn định.
          </p>
        </ContentCard>
      </div>

      <ContentCard
        variant="high"
        badge="Đối ngoại"
        title="Ngoại giao cây tre"
        className="mb-12"
      >
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: Flag, title: "Gốc vững", desc: "Độc lập, tự chủ, lợi ích quốc gia" },
            { icon: Shield, title: "Thân chắc", desc: "Sức mạnh tổng hợp, đại đoàn kết" },
            { icon: Handshake, title: "Cành uyển chuyển", desc: "Sách lược linh hoạt" },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="text-center p-6 bg-surface-container border border-monument-grey"
            >
              <Icon className="w-8 h-8 text-golden-silk mx-auto mb-3" />
              <h4 className="font-display font-bold text-on-surface mb-1">{title}</h4>
              <p className="text-xs text-on-surface-variant">{desc}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="text-sm">
            <ListItem>193 quốc gia quan hệ ngoại giao</ListItem>
            <ListItem>Đối tác Chiến lược Toàn diện 5 Ủy viên TT HĐBA</ListItem>
          </ul>
          <ul className="text-sm">
            <ListItem>16 FTA: CPTPP, EVFTA, RCEP...</ListItem>
            <ListItem>Tâm điểm kết nối dòng vốn FDI toàn cầu</ListItem>
          </ul>
        </div>
      </ContentCard>

      <div className="grid gap-4 md:grid-cols-2 mb-12">
        <ContentCard variant="red" badge="Quốc phòng" title='Bảo vệ "từ sớm, từ xa"'>
          <ul className="text-sm">
            <ListItem>Quân đội, Công an: cách mạng, chính quy, tinh nhuệ, hiện đại</ListItem>
            <ListItem>Giữ vững độc lập, chủ quyền, toàn vẹn lãnh thổ</ListItem>
            <ListItem>Biển Đông: biện pháp hòa bình, luật quốc tế</ListItem>
          </ul>
        </ContentCard>
        <div className="grid gap-4">
          <ContentCard badge="Nhà nước" title="Pháp quyền XHCN">
            <p className="text-sm">Công cụ của nhân dân — kiến tạo pháp lý, an ninh trật tự.</p>
          </ContentCard>
          <ContentCard badge="Lãnh đạo" title="Đảng CSVN">
            <p className="text-sm">Nhân tố quyết định — đường lối chiến lược nhất quán.</p>
          </ContentCard>
        </div>
      </div>

      <p className="text-on-surface-variant border-l-4 border-revolutionary-red pl-6 leading-relaxed max-w-4xl mb-6">
        Ổn định chính trị và quốc phòng là <strong className="text-on-surface">lá chắn an ninh</strong>{" "}
        cho nền kinh tế — ngoại giao cây tre tạo thế ổn định phát triển trong Kỷ nguyên vươn mình.
      </p>
      <SourceLink href="https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-xiii/bao-cao-chinh-tri-cua-ban-chap-hanh-trung-uong-dang-khoa-xii-tai-dai-hoi-dai-bieu-toan-quoc-lan-thu-xiii-cua-3734">
        Báo cáo chính trị Đại hội XIII
      </SourceLink>
    </SectionWrap>
  )
}

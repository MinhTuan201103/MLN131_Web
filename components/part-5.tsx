import {
  ContentCard,
  SectionHeader,
  StatCard,
  ListItem,
  SourceLink,
  SectionWrap,
  SlideCardGrid,
} from "@/components/content-card"
import { MediaBlock } from "@/components/media-block"
import { RevealStagger } from "@/components/reveal"
import { Flag, Shield, Handshake, Scale, Building2 } from "lucide-react"

export function Part5QuocPhongChinhTri() {
  return (
    <SectionWrap id="part-5">
      <SectionHeader
        badge="Phần 5 · Quốc phòng & Chính trị"
        title={
          <>
            Ổn Định Cho <span className="text-revolutionary-red">Kỷ Nguyên Vươn Mình</span>
          </>
        }
      />

      <div className="grid md:grid-cols-2 gap-8 mb-12 items-start">
        <MediaBlock imageSlot={18} alt="Kinh tế và chính trị" aspect="hero" captionSize="large" />
        <div className="flex flex-col gap-4">
          <ContentCard badge="5.1" title="Kinh tế và chính trị">
            <p>
              Kinh tế thị trường định hướng xã hội chủ nghĩa cần hệ thống chính trị vững — ổn
              định = điều kiện đầu tư.
            </p>
          </ContentCard>
          <ContentCard variant="gold" badge="5.1" title="Dân chủ xã hội chủ nghĩa">
            <p className="italic">
              Dân biết · bàn · làm · kiểm tra · giám sát · thụ hưởng
            </p>
          </ContentCard>
        </div>
      </div>

      <RevealStagger staggerMs={100} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <StatCard value="193" label="Quan hệ ngoại giao" accent="red" />
        <StatCard value="16" label="FTA thế hệ mới" accent="gold" />
        <StatCard value="1.000+" label="Lượt gìn giữ hòa bình Liên Hợp Quốc" accent="gold" />
        <StatCard value="83/180" label="CPI 2023 (Transparency International)" accent="grey" />
      </RevealStagger>

      <MediaBlock
        imageSlot={19}
        className="mb-8"
        alt="Bản đồ ngoại giao"
        aspect="wide"
        captionSize="large"
      />

      <RevealStagger staggerMs={120} className="grid md:grid-cols-3 gap-4 mb-12 items-stretch">
        {[
          { icon: Flag, t: "Gốc vững", d: "Độc lập, lợi ích quốc gia" },
          { icon: Shield, t: "Thân chắc", d: "Đại đoàn kết dân tộc" },
          { icon: Handshake, t: "Cành uyển chuyển", d: "Sách lược linh hoạt" },
        ].map(({ icon: Icon, t, d }) => (
          <div
            key={t}
            className="p-6 bg-surface-container border border-monument-grey text-center h-full flex flex-col justify-center exhibition-card-hover"
          >
            <Icon className="w-8 h-8 text-golden-silk mx-auto mb-2" />
            <p className="font-display text-xl md:text-2xl font-extrabold text-on-surface">{t}</p>
            <p className="text-base md:text-lg text-on-surface-variant mt-1">{d}</p>
          </div>
        ))}
      </RevealStagger>

      <div className="grid md:grid-cols-2 gap-8 mb-12 items-start">
        <MediaBlock imageSlot={20} alt="Quốc phòng" aspect="hero" captionSize="large" />
        <ContentCard variant="red" badge="5.3" title='Quốc phòng "từ sớm, từ xa"'>
          <ul>
            <ListItem>
              Quân đội, Công an: chính quy, tinh nhuệ, hiện đại
            </ListItem>
            <ListItem>Biển Đông: hòa bình, Công ước Liên Hợp Quốc về Luật biển 1982</ListItem>
            <ListItem>
              An ninh → Long Thành, đường sắt tốc độ cao
            </ListItem>
          </ul>
        </ContentCard>
      </div>

      <SlideCardGrid
        className="mb-12"
        columns={2}
        items={[
          {
            card: (
              <ContentCard badge="5.4" title="Chống tham nhũng">
                <p>
                  Tham nhũng = &quot;giặc nội xâm&quot; — không vùng cấm, không ngoại lệ.
                </p>
                <p className="mt-2 font-semibold text-golden-silk">
                  CPI: 113 → 83 (2017–2023). Môi trường đầu tư lành mạnh.
                </p>
              </ContentCard>
            ),
            media: <MediaBlock imageSlot={21} alt="Minh bạch" aspect="video" captionSize="large" />,
          },
          {
            card: (
              <ContentCard badge="5.5" title="Tinh gọn bộ máy">
                <p>
                  Nghị quyết 18-NQ/TW: bộ máy tinh gọn, Chính phủ số, cắt thủ tục.
                </p>
                <p className="mt-2">
                  Sáp nhập đơn vị hành chính — tiết kiệm ngân sách cho hạ tầng.
                </p>
              </ContentCard>
            ),
            media: (
              <MediaBlock imageSlot={22} alt="Cải cách hành chính" aspect="video" captionSize="large" />
            ),
          },
        ]}
      />

      <SlideCardGrid
        className="mb-8"
        columns={2}
        items={[
          {
            card: (
              <ContentCard badge="5.1" title="Nhà nước pháp quyền xã hội chủ nghĩa">
                <Scale className="w-8 h-8 text-golden-silk mb-2" />
                <p>Kiến tạo pháp lý · an ninh trật tự.</p>
              </ContentCard>
            ),
          },
          {
            card: (
              <ContentCard badge="5.1" title="Đảng Cộng sản Việt Nam">
                <Building2 className="w-8 h-8 text-golden-silk mb-2" />
                <p>Đường lối nhất quán — ổn định bền vững.</p>
              </ContentCard>
            ),
          },
        ]}
      />

      <MediaBlock
        imageSlot={23}
        className="mb-8"
        alt="2030-2045 chính trị"
        aspect="wide"
        captionSize="large"
      />

      <blockquote className="border-l-4 border-revolutionary-red pl-6 text-xl md:text-2xl text-on-surface-variant">
        Đổi mới kinh tế + đổi mới hệ thống chính trị = sức mạnh tổng hợp bứt phá.
      </blockquote>
      <div className="mt-4">
        <SourceLink href="https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-xiii/bao-cao-chinh-tri-cua-ban-chap-hanh-trung-uong-dang-khoa-xii-tai-dai-hoi-dai-bieu-toan-quoc-lan-thu-xiii-cua-3734">
          Báo cáo Đại hội XIII
        </SourceLink>
      </div>
    </SectionWrap>
  )
}

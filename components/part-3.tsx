import {
  ContentCard,
  SectionHeader,
  StatCard,
  SourceLink,
  SectionWrap,
  SlideCardGrid,
} from "@/components/content-card"
import { MediaBlock } from "@/components/media-block"
import { Reveal, RevealStagger } from "@/components/reveal"
import { TrendingUp } from "lucide-react"

const BREAKTHROUGHS = [
  { slot: 8 as const, title: "Thể chế", line: "Kinh tế thị trường thông thoáng, bình đẳng" },
  { slot: 9 as const, title: "Hạ tầng", line: "Cao tốc · cảng · Long Thành · năng lượng tái tạo" },
  {
    slot: 10 as const,
    title: "Khoa học-công nghệ & số hóa",
    line: "Kinh tế số ~30% GDP 2030",
  },
]

export function Part3KinhTe() {
  return (
    <SectionWrap id="part-3" variant="high">
      <SectionHeader
        badge="Phần 3 · Kinh tế"
        title={
          <>
            Cơ Sở Vật Chất Cho{" "}
            <span className="text-revolutionary-red">Chủ Nghĩa Xã Hội</span>
          </>
        }
      />

      <SlideCardGrid
        className="mb-12"
        items={[
          {
            card: (
              <ContentCard badge="3.1" title="Lý luận">
                <p>
                  Chủ nghĩa xã hội cần lực lượng sản xuất hiện đại → công nghiệp hóa, hiện đại hóa.
                </p>
              </ContentCard>
            ),
          },
          {
            card: (
              <ContentCard badge="3.1" title="Đường lối">
                <p>
                  Kinh tế thị trường định hướng xã hội chủ nghĩa → dân giàu, nước mạnh.
                </p>
              </ContentCard>
            ),
          },
          {
            card: (
              <ContentCard badge="3.1" title="Thành phần kinh tế">
                <p>Nhà nước chủ đạo · Tư nhân động lực · FDI.</p>
              </ContentCard>
            ),
          },
        ]}
      />

      <h3 className="font-label-mono text-golden-silk uppercase tracking-widest mb-6 text-center text-lg md:text-xl font-semibold">
        3.2 · Ba đột phá chiến lược
      </h3>
      <SlideCardGrid
        className="mb-12"
        mediaFirst
        items={BREAKTHROUGHS.map((b, i) => ({
          card: (
            <ContentCard number={`0${i + 1}.`} title={b.title}>
              <p>{b.line}</p>
            </ContentCard>
          ),
          media: <MediaBlock imageSlot={b.slot} alt={b.title} aspect="video" captionSize="large" />,
        }))}
      />

      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8">
        <h3 className="font-display text-3xl md:text-4xl font-bold text-on-surface">
          3.3 · <span className="text-revolutionary-red">Bứt phá</span> quy mô
        </h3>
        <span className="font-label-mono text-monument-grey text-base md:text-lg uppercase font-semibold">
          Bộ sưu tập ảnh kinh tế
        </span>
      </div>

      <Reveal variant="fade-up" className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10 items-stretch">
        <div className="md:col-span-8">
          <MediaBlock
            imageSlot={9}
            alt="Cảng biển"
            aspect="galleryMain"
            captionSize="large"
            overlay={
              <p className="font-display text-2xl md:text-3xl font-bold text-white">
                Hội nhập chuỗi cung ứng toàn cầu
              </p>
            }
          />
        </div>
        <div className="md:col-span-4 flex flex-col gap-4">
          <MediaBlock
            imageSlot={10}
            alt="Công nghệ"
            aspect="gallerySide"
            className="flex-1"
            captionSize="large"
          />
          <div className="bg-revolutionary-red p-6 flex flex-col justify-center shrink-0">
            <TrendingUp className="w-10 h-10 text-white mb-2" />
            <p className="font-display text-xl md:text-2xl font-bold text-white">
              ~6,2%/năm · GDP ~510 tỷ USD
            </p>
            <p className="text-white/90 text-base md:text-lg mt-1">
              Top 32 thế giới · Top 4 ASEAN
            </p>
          </div>
        </div>
      </Reveal>

      <RevealStagger staggerMs={100} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <StatCard value="8,02%" label="GDP 2025 (dự kiến)" accent="red" />
        <StatCard value="510 tỷ" label="USD" accent="gold" />
        <StatCard value="CPTPP" label="EVFTA · RCEP" accent="gold" />
        <StatCard value="FDI" label="Dịch chuyển cơ cấu" accent="grey" />
      </RevealStagger>

      <MediaBlock
        imageSlot={11}
        className="mb-8"
        alt="Tầm nhìn 2030-2045"
        aspect="wide"
        captionSize="large"
      />

      <SlideCardGrid
        items={[
          {
            card: (
              <ContentCard badge="2030" title="100 năm Đảng">
                <p>Đang phát triển · công nghiệp hiện đại · ~8.500 USD/người</p>
              </ContentCard>
            ),
          },
          {
            card: (
              <ContentCard badge="2045" title="100 năm nước">
                <p>
                  Phát triển thu nhập cao · hoàn thiện cơ sở vật chất chủ nghĩa xã hội
                </p>
              </ContentCard>
            ),
          },
          {
            card: (
              <ContentCard variant="gold" badge="Đại hội XIV" title="Kỷ nguyên vươn mình">
                <p>GDP 2026–2030: mục tiêu 2 con số</p>
              </ContentCard>
            ),
          },
        ]}
      />

      <p className="mt-8 text-center text-lg md:text-xl text-on-surface-variant italic max-w-2xl mx-auto">
        &quot;Đất nước chưa bao giờ có cơ đồ, tiềm lực, vị thế như ngày nay.&quot; — Đại hội XIII
      </p>
      <div className="mt-4 text-center">
        <SourceLink href="https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-xiii/chien-luoc-phat-trien-kinh-te-xa-hoi-10-nam-2021-2030-3735">
          Chiến lược 2021–2030
        </SourceLink>
      </div>
    </SectionWrap>
  )
}

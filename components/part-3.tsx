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
import { Part33Breakthrough } from "./part-3-3-breakthrough"

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

      <h3 className="font-label-mono text-golden-silk uppercase tracking-widest mb-6 text-left text-lg md:text-xl font-semibold">
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

      <Part33Breakthrough />

      <SlideCardGrid
        items={[
          {
            card: (
              <ContentCard badge="2030" title="100 năm thành lập Đảng">
                <p>Đang phát triển · công nghiệp hiện đại · ~8.500 USD/người</p>
              </ContentCard>
            ),
          },
          {
            card: (
              <ContentCard badge="2045" title="100 năm thành lập nước">
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

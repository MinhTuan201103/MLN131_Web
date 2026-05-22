import {
  ContentCard,
  SectionHeader,
  ListItem,
  SourceLink,
  SectionWrap,
  SlideCardGrid,
} from "@/components/content-card"
import { MediaBlock } from "@/components/media-block"
import { Reveal, RevealStagger } from "@/components/reveal"

const EIGHT_TRAITS = [
  "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
  "Nhân dân làm chủ",
  "Kinh tế phát triển cao — lực lượng sản xuất hiện đại",
  "Văn hóa tiên tiến, đậm bản sắc dân tộc",
  "Con người ấm no, tự do, hạnh phúc",
  "Dân tộc bình đẳng, đoàn kết",
  "Nhà nước pháp quyền xã hội chủ nghĩa — do Đảng lãnh đạo",
  "Hữu nghị, hợp tác quốc tế",
]

export function Part1CoSoLyLuan() {
  return (
    <SectionWrap id="part-1">
      <SectionHeader
        badge="Phần 1 · Cơ sở lý luận"
        title={
          <>
            Chúng Ta Đang Xây Dựng <span className="text-revolutionary-red">Cái Gì?</span>
          </>
        }
      />

      <Reveal variant="fade-up" className="grid md:grid-cols-2 gap-8 mb-12 items-center">
        <div>
          <span className="font-label-mono text-golden-silk text-base md:text-lg uppercase tracking-widest mb-3 block font-semibold">
            1. Khái niệm chủ nghĩa xã hội
          </span>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-4">
            Chế độ xã hội mới — giai đoạn đầu hình thái kinh tế-xã hội cộng sản: giải phóng con
            người, phát triển lực lượng sản xuất, công bằng, dân chủ.
          </p>
          <p className="text-lg md:text-xl text-on-surface-variant">
            Ở Việt Nam: mô hình <strong className="text-on-surface">tổng hợp</strong> — kinh tế,
            chính trị, văn hóa, xã hội, con người, dân tộc, nhà nước, quan hệ quốc tế.
          </p>
        </div>
        <MediaBlock
          imageSlot={1}
          alt="Đại đoàn kết — cơ sở xây dựng chủ nghĩa xã hội"
          aspect="hero"
          captionSize="large"
        />
      </Reveal>

      <div className="mb-8 text-center">
        <span className="font-label-mono text-revolutionary-red uppercase tracking-[0.4em] text-base md:text-lg block mb-2 font-semibold">
          2. Cương lĩnh 2011
        </span>
        <h3 className="font-display text-3xl md:text-4xl font-extrabold text-on-surface">
          8 đặc trưng xã hội chủ nghĩa
        </h3>
        <div className="w-32 h-0.5 bg-golden-silk mx-auto mt-4" />
      </div>

      <MediaBlock imageSlot={2} className="mb-8" alt="8 đặc trưng" aspect="wide" captionSize="large" />

      <RevealStagger
        staggerMs={80}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12 items-stretch"
      >
        {EIGHT_TRAITS.map((t, i) => (
          <div
            key={i}
            className="p-4 bg-surface-container border border-monument-grey hover:border-revolutionary-red exhibition-card-hover h-full min-h-[88px]"
          >
            <span className="font-label-mono text-revolutionary-red text-lg font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-base md:text-lg text-on-surface mt-2 leading-snug">{t}</p>
          </div>
        ))}
      </RevealStagger>

      <SlideCardGrid
        className="mb-12"
        items={[
          {
            card: (
              <ContentCard badge="3. Quá độ" title="Lâu dài vì xuất phát thấp">
                <p>
                  Nông nghiệp lạc hậu · hậu quả chiến tranh · lực lượng sản xuất thấp · cơ sở vật
                  chất chưa có sẵn.
                </p>
                <p className="mt-2 text-golden-silk font-semibold">
                  Mục tiêu (Đại hội XI): nền tảng kinh tế chủ nghĩa xã hội + kiến trúc chính trị,
                  thể chế, văn hóa phù hợp.
                </p>
              </ContentCard>
            ),
            media: <MediaBlock imageSlot={3} alt="Thời kỳ quá độ" aspect="video" captionSize="large" />,
          },
          {
            card: (
              <ContentCard
                variant="red"
                badge='4. "Bỏ qua" tư bản chủ nghĩa'
                title="Không phủ nhận văn minh nhân loại"
              >
                <ul>
                  <ListItem>Không thống trị quan hệ sản xuất tư bản chủ nghĩa</ListItem>
                  <ListItem>Tiếp thu khoa học-công nghệ, quản lý, kinh tế thị trường</ListItem>
                </ul>
              </ContentCard>
            ),
            media: (
              <MediaBlock imageSlot={4} alt="Bỏ qua tư bản chủ nghĩa" aspect="video" captionSize="large" />
            ),
          },
          {
            card: (
              <ContentCard badge="5. Mô hình Việt Nam" title="Kinh tế thị trường định hướng xã hội chủ nghĩa">
                <ul>
                  <ListItem>Nhà nước pháp quyền xã hội chủ nghĩa · Nhân dân làm chủ</ListItem>
                  <ListItem>Đảng lãnh đạo · Hội nhập, giữ độc lập</ListItem>
                </ul>
                <div className="mt-auto pt-4 border-t border-monument-grey">
                  <SourceLink href="https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/gioi-thieu-van-kien-dang/cac-van-kien-dai-hoi-xiii-cua-dang-da-tiep-thu-co-chon-loc-nhung-gia-tri-chung-cua-nhan-loai-3769">
                    Văn kiện Đại hội XIII
                  </SourceLink>
                </div>
              </ContentCard>
            ),
            media: <MediaBlock imageSlot={5} alt="Mô hình Việt Nam" aspect="video" captionSize="large" />,
          },
        ]}
      />

      <blockquote className="border-l-4 border-golden-silk pl-6 text-xl md:text-2xl text-on-surface max-w-4xl font-semibold">
        <strong>Chốt phần 1:</strong> Thành tựu 40 năm = đánh giá xây dựng{" "}
        <span className="text-revolutionary-red">mô hình chủ nghĩa xã hội Việt Nam</span> — không
        chỉ GDP.
      </blockquote>
      <div className="mt-4">
        <SourceLink href="https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/gioi-thieu-van-kien-dang/ve-cac-dac-trung-cua-chu-nghia-xa-hoi-qua-cuong-linh-1991-va-cuong-linh-2011-cua-dang-cong-san-viet-nam-865">
          8 đặc trưng — Cổng Tư liệu Đảng
        </SourceLink>
      </div>
    </SectionWrap>
  )
}

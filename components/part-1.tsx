import {
  ContentCard,
  SectionHeader,
  ListItem,
  SourceLink,
  SectionWrap,
} from "@/components/content-card"
import { Factory } from "lucide-react"

const traitsRest = [
  { n: "05.", title: "Con người hạnh phúc", desc: "Ấm no, tự do, hạnh phúc." },
  { n: "06.", title: "Đoàn kết dân tộc", desc: "Bình đẳng, tôn trọng lẫn nhau." },
  { n: "07.", title: "Nhà nước pháp quyền XHCN", desc: "Của dân, do dân, vì dân." },
  { n: "08.", title: "Hữu nghị quốc tế", desc: "Hợp tác quốc tế." },
]

export function Part1CoSoLyLuan() {
  return (
    <SectionWrap id="part-1">
      <SectionHeader
        badge="Phần 1 · Cơ sở lý luận"
        title={
          <>
            Nền Tảng <span className="text-revolutionary-red">Lý Luận</span>
          </>
        }
        description="Kiên định CM-Lênin và tư tưởng Hồ Chí Minh — kim chỉ nam cho công cuộc xây dựng CNXH tại Việt Nam."
      />

      <div className="mb-12 md:mb-20 text-center">
        <span className="font-label-mono text-revolutionary-red uppercase tracking-[0.4em] mb-4 block text-sm">
          Cương lĩnh 2011
        </span>
        <h3 className="font-display text-2xl md:text-4xl font-extrabold text-on-surface">
          8 Đặc Trưng của Xã Hội XHCN
        </h3>
        <div className="w-40 h-0.5 bg-golden-silk mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        <ContentCard number="01." title="Dân giàu, nước mạnh" description="Dân chủ, công bằng, văn minh.">
          <p className="text-sm">Mục tiêu tổng quát của xã hội XHCN ở Việt Nam.</p>
        </ContentCard>
        <ContentCard variant="wide" number="02." title="Kinh tế XHCN" className="md:col-span-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
            <p className="text-sm md:max-w-md">
              Phát triển cao, dựa trên lực lượng sản xuất hiện đại và quan hệ sản xuất tiến bộ.
            </p>
            <Factory className="hidden md:block w-20 h-20 text-monument-grey opacity-40 shrink-0" />
          </div>
        </ContentCard>
        <ContentCard number="03." title="Đoàn kết dân tộc" description="Sức mạnh cốt lõi.">
          <p className="text-sm">Các dân tộc bình đẳng, đoàn kết, tôn trọng lẫn nhau.</p>
        </ContentCard>
        <ContentCard variant="red" number="04." title="Lãnh đạo của Đảng" className="md:col-span-2">
          <p className="text-sm">
            Sự lãnh đạo của Đảng CSVN là nhân tố quyết định mọi thắng lợi của công cuộc đổi mới.
          </p>
        </ContentCard>
        <ContentCard variant="gold" number="Vision 2045" title="Nước phát triển, thu nhập cao" className="md:col-span-2">
          <p className="text-sm">Giữa thế kỷ 21 — hoàn thiện CSVC của CNXH.</p>
        </ContentCard>
        {traitsRest.map((t) => (
          <ContentCard key={t.n} number={t.n} title={t.title} description={t.desc} />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-3 mb-12">
        <ContentCard badge="Khái niệm" title="Chủ nghĩa Xã hội">
          <p className="text-sm mb-3">
            Chế độ xã hội mới — giai đoạn đầu của hình thái KT-XH cộng sản chủ nghĩa:
          </p>
          <ul>
            <ListItem>Giải phóng con người</ListItem>
            <ListItem>Phát triển lực lượng sản xuất</ListItem>
            <ListItem>Công bằng, dân chủ, tiến bộ xã hội</ListItem>
          </ul>
        </ContentCard>
        <ContentCard variant="red" badge="Lý luận" title='"Bỏ qua" chế độ TBCN'>
          <ul className="text-sm">
            <ListItem>Không thiết lập thống trị QHSX TBCN</ListItem>
            <ListItem>Tiếp thu thành tựu văn minh nhân loại</ListItem>
            <ListItem>Kinh tế thị trường phát triển LLSX</ListItem>
          </ul>
        </ContentCard>
        <ContentCard badge="Mô hình VN" title="Kinh tế thị trường định hướng XHCN">
          <ul className="text-sm">
            <ListItem>Nhà nước pháp quyền XHCN</ListItem>
            <ListItem>Nhân dân làm chủ</ListItem>
            <ListItem>Hội nhập giữ độc lập, tự chủ</ListItem>
          </ul>
          <div className="mt-4 pt-4 border-t border-monument-grey">
            <SourceLink href="https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/gioi-thieu-van-kien-dang/ve-cac-dac-trung-cua-chu-nghia-xa-hoi-qua-cuong-linh-1991-va-cuong-linh-2011-cua-dang-cong-san-viet-nam-865">
              Cổng Tư liệu — Văn kiện Đảng
            </SourceLink>
          </div>
        </ContentCard>
      </div>

      <p className="text-on-surface-variant border-l-4 border-golden-silk pl-6 text-lg leading-relaxed max-w-4xl">
        Thành tựu sau 40 năm đổi mới là đánh giá quá trình{" "}
        <strong className="text-on-surface">xây dựng mô hình CNXH Việt Nam</strong> — kinh tế đi cùng
        ổn định chính trị, tiến bộ xã hội và hội nhập quốc tế.
      </p>
    </SectionWrap>
  )
}

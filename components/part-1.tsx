import {
  ContentCard,
  SectionHeader,
  ListItem,
  SourceLink,
} from "@/components/content-card"
import { BookOpen, Target, Globe, Lightbulb, CheckCircle2 } from "lucide-react"

export function Part1CoSoLyLuan() {
  return (
    <section id="part-1" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="PHẦN 1 · CƠ SỞ LÝ LUẬN"
          title="Chúng Ta Đang Xây Dựng Cái Gì?"
          description="Theo C.Mác và Cương lĩnh của Đảng, CNXH là giai đoạn đầu của hình thái kinh tế - xã hội cộng sản chủ nghĩa, với mục tiêu giải phóng con người và phát triển toàn diện."
        />

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {/* Khái niệm CNXH */}
          <ContentCard
            variant="teal"
            badge="KHÁI NIỆM"
            title="Chủ Nghĩa Xã Hội"
            description="Định nghĩa từ giáo trình CNXH Khoa học"
          >
            <p className="mb-4">
              Chủ nghĩa xã hội là một <strong>chế độ xã hội mới</strong>, giai đoạn đầu 
              của hình thái kinh tế - xã hội cộng sản chủ nghĩa, với mục tiêu:
            </p>
            <ul className="space-y-2 mb-4">
              <ListItem>Giải phóng con người</ListItem>
              <ListItem>Phát triển lực lượng sản xuất</ListItem>
              <ListItem>Thực hiện công bằng, dân chủ và tiến bộ xã hội</ListItem>
            </ul>
            <p className="text-sm italic text-muted-foreground">
              Với Việt Nam, CNXH không chỉ là mục tiêu kinh tế, mà là mô hình phát triển 
              tổng hợp: kinh tế, chính trị, văn hóa, xã hội, con người, dân tộc, nhà nước 
              và quan hệ quốc tế.
            </p>
          </ContentCard>

          {/* 8 đặc trưng */}
          <ContentCard
            variant="yellow"
            badge="CƯƠNG LĨNH 2011"
            title="8 Đặc Trưng của Xã Hội XHCN"
            description="Theo Cương lĩnh bổ sung, phát triển năm 2011"
          >
            <ol className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-chart-2/20 text-chart-2 flex items-center justify-center text-xs font-bold">1</span>
                <span>Dân giàu, nước mạnh, dân chủ, công bằng, văn minh</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-chart-2/20 text-chart-2 flex items-center justify-center text-xs font-bold">2</span>
                <span>Nhân dân làm chủ</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-chart-2/20 text-chart-2 flex items-center justify-center text-xs font-bold">3</span>
                <span>Kinh tế phát triển cao, dựa trên LLSX hiện đại và QHSX tiến bộ</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-chart-2/20 text-chart-2 flex items-center justify-center text-xs font-bold">4</span>
                <span>Văn hóa tiên tiến, đậm đà bản sắc dân tộc</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-chart-2/20 text-chart-2 flex items-center justify-center text-xs font-bold">5</span>
                <span>Con người có cuộc sống ấm no, tự do, hạnh phúc</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-chart-2/20 text-chart-2 flex items-center justify-center text-xs font-bold">6</span>
                <span>Các dân tộc bình đẳng, đoàn kết, tôn trọng lẫn nhau</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-chart-2/20 text-chart-2 flex items-center justify-center text-xs font-bold">7</span>
                <span>Có Nhà nước pháp quyền XHCN của dân, do dân, vì dân</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-chart-2/20 text-chart-2 flex items-center justify-center text-xs font-bold">8</span>
                <span>Có quan hệ hữu nghị, hợp tác với các nước trên thế giới</span>
              </li>
            </ol>
            <div className="mt-4 pt-4 border-t border-border">
              <SourceLink href="https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/gioi-thieu-van-kien-dang/ve-cac-dac-trung-cua-chu-nghia-xa-hoi-qua-cuong-linh-1991-va-cuong-linh-2011-cua-dang-cong-san-viet-nam-865">
                Nguồn: Cổng Tư liệu - Văn kiện Đảng
              </SourceLink>
            </div>
          </ContentCard>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          {/* Thời kỳ quá độ */}
          <ContentCard
            variant="purple"
            badge="THỜI KỲ QUÁ ĐỘ"
            title="Quá Độ Lên CNXH"
          >
            <p className="text-sm mb-3">
              Thời kỳ quá độ là giai đoạn chuyển biến lâu dài từ xã hội cũ sang xã hội XHCN.
            </p>
            <p className="text-sm mb-3">
              <strong>Vì sao Việt Nam cần quá độ lâu dài?</strong>
            </p>
            <ul className="space-y-1 text-sm">
              <ListItem>Xuất phát điểm thấp: nước nông nghiệp lạc hậu</ListItem>
              <ListItem>Hậu quả chiến tranh nặng nề</ListItem>
              <ListItem>Lực lượng sản xuất thấp</ListItem>
              <ListItem>Cơ sở vật chất - kỹ thuật của CNXH chưa có sẵn</ListItem>
            </ul>
          </ContentCard>

          {/* Bỏ qua TBCN */}
          <ContentCard
            variant="red"
            badge="LÝ LUẬN"
            title={'"Bỏ Qua" Chế Độ TBCN'}
          >
            <p className="text-sm mb-3">
              <strong>Không có nghĩa là</strong> phủ nhận sạch trơn mọi thành tựu của chủ nghĩa tư bản.
            </p>
            <p className="text-sm mb-3">
              <strong>Nội dung đúng:</strong>
            </p>
            <ul className="space-y-1 text-sm">
              <ListItem>Không thiết lập sự thống trị của QHSX TBCN và nhà nước tư sản</ListItem>
              <ListItem>Tiếp thu thành tựu văn minh nhân loại</ListItem>
              <ListItem>Học hỏi KH-CN, kinh nghiệm quản lý</ListItem>
              <ListItem>Vận dụng kinh tế thị trường để phát triển LLSX</ListItem>
            </ul>
          </ContentCard>

          {/* Mô hình Việt Nam */}
          <ContentCard
            variant="teal"
            badge="MÔ HÌNH"
            title="Mô Hình Việt Nam"
          >
            <ul className="space-y-2 text-sm">
              <ListItem>
                <strong>Kinh tế thị trường định hướng XHCN</strong> - Nền kinh tế hiện đại, hội nhập quốc tế
              </ListItem>
              <ListItem>
                <strong>Nhà nước pháp quyền XHCN</strong> - Do Đảng lãnh đạo
              </ListItem>
              <ListItem>
                <strong>Nhân dân làm chủ</strong> - Dân biết, dân bàn, dân làm, dân kiểm tra
              </ListItem>
              <ListItem>
                <strong>Hội nhập quốc tế</strong> - Giữ vững độc lập, tự chủ
              </ListItem>
            </ul>
            <div className="mt-4 pt-4 border-t border-border">
              <SourceLink href="https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/gioi-thieu-van-kien-dang/cac-van-kien-dai-hoi-xiii-cua-dang-da-tiep-thu-co-chon-loc-nhung-gia-tri-chung-cua-nhan-loai-3769">
                Nguồn: Văn kiện Đại hội XIII
              </SourceLink>
            </div>
          </ContentCard>
        </div>

        {/* Kết luận */}
        <div className="bg-gradient-to-r from-primary/10 via-card to-primary/10 rounded-xl p-6 md:p-8 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Chốt Phần 1</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vì vậy, khi nói &quot;thành tựu sau 40 năm đổi mới&quot;, không chỉ là tăng GDP hay xuất khẩu, 
                mà là đánh giá quá trình <strong>xây dựng mô hình CNXH Việt Nam</strong>: phát triển kinh tế 
                đi cùng ổn định chính trị, tiến bộ xã hội, nâng cao đời sống nhân dân, mở rộng dân chủ, 
                bảo vệ môi trường và hội nhập quốc tế.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import {
  ContentCard,
  SectionHeader,
  StatCard,
  ListItem,
  SourceLink,
} from "@/components/content-card"
import { AlertTriangle, TrendingDown, ArrowRight, CheckCircle2 } from "lucide-react"

export function Part2BoiCanh() {
  return (
    <section id="part-ii" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="PHẦN 2 · BỐI CẢNH VÀ HẠN CHẾ"
          title="Vì Sao Phải Đổi Mới?"
          description="Trước Đại hội VI (1986), Việt Nam rơi vào khủng hoảng kinh tế - xã hội nghiêm trọng. Đổi mới là yêu cầu khách quan để giải quyết các mâu thuẫn trong xã hội."
        />

        {/* Số liệu nổi bật */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatCard
            value="774.7%"
            label="Lạm phát năm 1986"
            description="Mức cao kỷ lục"
          />
          <StatCard
            value="< $700"
            label="GDP/người (1986)"
            description="Một trong những nước nghèo nhất"
          />
          <StatCard
            value="$4,500"
            label="GDP/người (2023)"
            description="Tăng hơn 6 lần"
          />
          <StatCard
            value="Top 32"
            label="Thế giới (2025)"
            description="Quy mô GDP"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {/* Bối cảnh trước đổi mới */}
          <ContentCard
            variant="red"
            badge="TRƯỚC 1986"
            title="Khủng Hoảng Kinh Tế - Xã Hội"
            description="Nhận định từ Đại hội VI"
          >
            <div className="flex items-start gap-3 mb-4 p-3 rounded-lg bg-destructive/10">
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-sm">
                Sản xuất tăng chậm, hiệu quả sản xuất và đầu tư thấp, phân phối lưu thông rối ren, 
                mất cân đối lớn trong nền kinh tế, đời sống nhân dân khó khăn.
              </p>
            </div>
            <ul className="space-y-2 text-sm">
              <ListItem>
                <strong>Lạm phát phi mã:</strong> 774.7% năm 1986 - biểu hiện rõ của khủng hoảng 
                phân phối - lưu thông
              </ListItem>
              <ListItem>
                <strong>Cơ chế bao cấp:</strong> Doanh nghiệp lệ thuộc vào chỉ tiêu, vật tư, tài chính 
                từ Nhà nước
              </ListItem>
              <ListItem>
                <strong>Thiếu hàng hóa:</strong> Khan hiếm lương thực, hàng tiêu dùng, hàng xuất khẩu
              </ListItem>
            </ul>
            <div className="mt-4 pt-4 border-t border-border">
              <SourceLink href="https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-vi/dai-hoi-dai-bieu-toan-quoc-lan-thu-vi-cua-dang-19">
                Nguồn: Văn kiện Đại hội VI
              </SourceLink>
            </div>
          </ContentCard>

          {/* Nguyên nhân */}
          <ContentCard
            variant="yellow"
            badge="NGUYÊN NHÂN"
            title="Tại Sao Phải Đổi Mới?"
            description="Mâu thuẫn khách quan trong xã hội"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-chart-2/20 flex items-center justify-center">
                  <TrendingDown className="w-4 h-4 text-chart-2" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">Lực lượng sản xuất bị kìm hãm</h4>
                  <p className="text-xs text-muted-foreground">Cơ chế quản lý cũ không còn phù hợp</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-chart-2/20 flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-chart-2" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">Nhu cầu phát triển vs Thực trạng</h4>
                  <p className="text-xs text-muted-foreground">Bao cấp, khủng hoảng, thiếu hàng hóa</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-chart-2/20 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-chart-2" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">Giải pháp: 3 Chương trình kinh tế</h4>
                  <p className="text-xs text-muted-foreground">Lương thực - Hàng tiêu dùng - Hàng xuất khẩu</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <SourceLink href="https://www.worldbank.org/en/country/vietnam/overview.print">
                Nguồn: World Bank Vietnam Overview
              </SourceLink>
            </div>
          </ContentCard>
        </div>

        {/* Hạn chế hiện nay */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Hạn Chế Hiện Nay Theo Đại Hội XIII
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Năng suất & Cạnh tranh",
                desc: "Năng suất, chất lượng, hiệu quả, sức cạnh tranh chưa cao; đổi mới mô hình tăng trưởng còn chậm",
              },
              {
                title: "Thể chế kinh tế",
                desc: "Thể chế KTTT định hướng XHCN còn vướng mắc, môi trường đầu tư chưa thật thông thoáng, minh bạch",
              },
              {
                title: "Bất bình đẳng",
                desc: "Chênh lệch giàu nghèo và bất bình đẳng thu nhập còn là vấn đề cần xử lý hiệu quả hơn",
              },
              {
                title: "Môi trường",
                desc: "Môi trường, tài nguyên, biến đổi khí hậu còn nhiều bất cập; một số nơi môi trường tiếp tục xuống cấp",
              },
              {
                title: "Tổ chức thực hiện",
                desc: "Năng lực cụ thể hóa, thể chế hóa nghị quyết còn hạn chế",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-card border border-border hover:border-destructive/50 transition-colors"
              >
                <h4 className="font-semibold text-foreground text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <SourceLink href="https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-xiii/bao-cao-chinh-tri-cua-ban-chap-hanh-trung-uong-dang-khoa-xii-tai-dai-hoi-dai-bieu-toan-quoc-lan-thu-xiii-cua-3734">
              Nguồn: Báo cáo chính trị Đại hội XIII
            </SourceLink>
          </div>
        </div>

        {/* Kết luận */}
        <div className="bg-gradient-to-r from-chart-2/10 via-card to-chart-2/10 rounded-xl p-6 md:p-8 border border-chart-2/20">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-chart-2/20 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-chart-2" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Kết Luận Phần 2</h3>
              <p className="text-muted-foreground leading-relaxed">
                Những hạn chế hiện nay <strong>không phủ nhận thành tựu đổi mới</strong>, mà cho thấy 
                thời kỳ quá độ là quá trình lâu dài, phức tạp. Việt Nam vẫn phải tiếp tục đổi mới để 
                phát triển lực lượng sản xuất, hoàn thiện quan hệ sản xuất, nâng cao năng suất, giảm 
                bất bình đẳng, bảo vệ môi trường và hoàn thiện thể chế theo định hướng XHCN.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import {
  ContentCard,
  SectionHeader,
  StatCard,
  ListItem,
  SourceLink,
} from "@/components/content-card"
import { Building2, Zap, GraduationCap, Globe2, TrendingUp, CheckCircle2 } from "lucide-react"

export function Part3KinhTe() {
  return (
    <section id="part-iii" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="PHẦN 3 · THÀNH TỰU KINH TẾ"
          title="Xây Dựng Cơ Sở Vật Chất Cho CNXH"
          description="Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay — Đại hội XIII"
        />

        {/* Số liệu ấn tượng */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatCard
            value="~6.2%"
            label="Tăng trưởng BQ 2021-2025"
            description="GDP tăng trưởng ổn định"
          />
          <StatCard
            value="510 tỷ USD"
            label="GDP năm 2025"
            description="Dự báo"
          />
          <StatCard
            value="Top 32"
            label="Thế giới"
            description="Quy mô GDP"
          />
          <StatCard
            value="Top 4"
            label="ASEAN"
            description="Nền kinh tế lớn"
          />
        </div>

        {/* Cơ sở lý luận */}
        <div className="mb-8">
          <ContentCard
            variant="teal"
            badge="CƠ SỞ LÝ LUẬN"
            title="Đường Lối Phát Triển Kinh Tế"
            className="mb-6"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Lý luận từ Giáo trình</h4>
                  <p className="text-sm text-muted-foreground">
                    Xây dựng CNXH đòi hỏi lực lượng sản xuất hiện đại. Đẩy mạnh công nghiệp hóa, 
                    hiện đại hóa.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Mô hình định hướng</h4>
                  <p className="text-sm text-muted-foreground">
                    Kiên định nền kinh tế thị trường định hướng XHCN. Mục tiêu: Dân giàu, nước mạnh, 
                    dân chủ, công bằng, văn minh.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Globe2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Vai trò các thành phần</h4>
                  <p className="text-sm text-muted-foreground">
                    KT Nhà nước chủ đạo; KT tư nhân là động lực quan trọng; FDI được khuyến khích 
                    phát triển toàn diện.
                  </p>
                </div>
              </div>
            </div>
          </ContentCard>
        </div>

        {/* 3 Đột phá chiến lược */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            3 Đột Phá Chiến Lược (Đại hội XIII)
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <ContentCard
              variant="teal"
              badge="ĐỘT PHÁ 1"
              title="Thể Chế Kinh Tế"
            >
              <p className="text-sm mb-3">
                Hoàn thiện đồng bộ thể chế kinh tế thị trường, tạo môi trường bình đẳng, 
                thông thoáng cho mọi thành phần kinh tế bứt phá.
              </p>
              <ul className="space-y-1 text-xs">
                <ListItem>Môi trường đầu tư cải thiện</ListItem>
                <ListItem>Cải cách thủ tục hành chính</ListItem>
                <ListItem>Luật pháp minh bạch hơn</ListItem>
              </ul>
            </ContentCard>

            <ContentCard
              variant="yellow"
              badge="ĐỘT PHÁ 2"
              title="Hạ Tầng Hiện Đại"
            >
              <p className="text-sm mb-3">
                Hoàn thành hàng nghìn km đường bộ cao tốc; xây dựng các cảng biển quốc tế, 
                sân bay Long Thành (GĐ 1).
              </p>
              <ul className="space-y-1 text-xs">
                <ListItem>Đường bộ cao tốc Bắc - Nam</ListItem>
                <ListItem>Cảng biển quốc tế</ListItem>
                <ListItem>Năng lượng tái tạo & điện hạt nhân</ListItem>
              </ul>
            </ContentCard>

            <ContentCard
              variant="purple"
              badge="ĐỘT PHÁ 3"
              title="Nguồn Nhân Lực & KHCN"
            >
              <p className="text-sm mb-3">
                Lấy chuyển đổi số và kinh tế tri thức làm động lực trung tâm. 
                Kinh tế số đóng góp 30% GDP vào năm 2030.
              </p>
              <ul className="space-y-1 text-xs">
                <ListItem>Trung tâm dữ liệu quốc gia</ListItem>
                <ListItem>Make in Vietnam</ListItem>
                <ListItem>Kinh tế xanh, kinh tế tuần hoàn</ListItem>
              </ul>
            </ContentCard>
          </div>
          <div className="mt-4 text-center">
            <SourceLink href="https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-xiii/chien-luoc-phat-trien-kinh-te-xa-hoi-10-nam-2021-2030-3735">
              Nguồn: Chiến lược phát triển KTXH 10 năm 2021-2030
            </SourceLink>
          </div>
        </div>

        {/* Tầm nhìn */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <ContentCard
            variant="teal"
            badge="MỐC 2030"
            title="100 Năm Thành Lập Đảng"
          >
            <ul className="space-y-2 text-sm">
              <ListItem>Nước đang phát triển, có công nghiệp hiện đại</ListItem>
              <ListItem>Thu nhập trung bình cao</ListItem>
              <ListItem>GDP ~900 tỷ USD</ListItem>
              <ListItem>GDP/người ~8,500 USD</ListItem>
            </ul>
          </ContentCard>

          <ContentCard
            variant="yellow"
            badge="MỐC 2045"
            title="100 Năm Thành Lập Nước"
          >
            <ul className="space-y-2 text-sm">
              <ListItem>Nước phát triển, thu nhập cao</ListItem>
              <ListItem>Hoàn thành xây dựng CSVC của CNXH</ListItem>
              <ListItem>GDP dự kiến ~2,500 tỷ USD</ListItem>
            </ul>
          </ContentCard>

          <ContentCard
            variant="red"
            badge="ĐẠI HỘI XIV"
            title={'"Kỷ Nguyên Vươn Mình"'}
          >
            <ul className="space-y-2 text-sm">
              <ListItem>Đưa dân tộc bước vào kỷ nguyên mới</ListItem>
              <ListItem>Mục tiêu bứt phá tăng trưởng GDP</ListItem>
              <ListItem>Giai đoạn 2026-2030: {">"}10%/năm</ListItem>
            </ul>
          </ContentCard>
        </div>

        {/* Kết luận */}
        <div className="bg-gradient-to-r from-primary/10 via-card to-primary/10 rounded-xl p-6 md:p-8 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Nhận Định Tổng Quát</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sau 40 năm Đổi mới, đất nước đạt được những thành tựu có ý nghĩa lịch sử. 
                Việt Nam vượt qua ngưỡng nước thu nhập trung bình thấp, hội nhập sâu rộng toàn cầu 
                qua các FTA thế hệ mới (CPTPP, EVFTA, RCEP...), thu hút mạnh mẽ dòng vốn FDI 
                phục vụ dịch chuyển cơ cấu kinh tế.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

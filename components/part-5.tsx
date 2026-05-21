import {
  ContentCard,
  SectionHeader,
  StatCard,
  ListItem,
  SourceLink,
} from "@/components/content-card"
import { Shield, Globe, Handshake, Scale, Flag, CheckCircle2 } from "lucide-react"

export function Part5QuocPhongChinhTri() {
  return (
    <section id="part-v" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="PHẦN 5 · QUỐC PHÒNG + CHÍNH TRỊ"
          title='Giữ Vững Ổn Định Để Phát Triển Trong "Kỷ Nguyên Vươn Mình"'
          description="Sự ổn định chính trị là 'bệ đỡ' an toàn và là điều kiện tiên quyết cho mọi hoạt động công nghiệp hóa, hiện đại hóa."
        />

        {/* Số liệu */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatCard
            value="193"
            label="Quốc gia"
            description="Thiết lập quan hệ ngoại giao"
          />
          <StatCard
            value="5/5"
            label="Ủy viên TT HĐBA"
            description="Đối tác Chiến lược Toàn diện"
          />
          <StatCard
            value="16"
            label="FTA Thế hệ mới"
            description="Hiệp định thương mại tự do"
          />
          <StatCard
            value="100%"
            label="Độc lập chủ quyền"
            description="Bảo vệ vững chắc"
          />
        </div>

        {/* Lý luận và Mô hình */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <ContentCard
            variant="teal"
            badge="LÝ LUẬN"
            title="Mối Quan Hệ Biện Chứng"
            description="Kinh tế và Chính trị (CSHT và KTTT)"
          >
            <p className="text-sm mb-4">
              Theo lý luận Mác - Lênin, <strong>cơ sở hạ tầng kinh tế quyết định kiến trúc thượng tầng chính trị</strong>.
            </p>
            <p className="text-sm mb-4">
              Việc kiên định nền kinh tế thị trường định hướng XHCN đòi hỏi phải có một hệ thống 
              chính trị vững mạnh để dẫn dắt, bảo đảm nền kinh tế phát triển đúng quỹ đạo.
            </p>
            <div className="p-3 rounded-lg bg-primary/10 text-sm">
              <strong className="text-primary">Kết luận:</strong> Sự ổn định chính trị chính là &quot;bệ đỡ&quot; 
              an toàn và là điều kiện tiên quyết cho mọi hoạt động CNH-HĐH cũng như thu hút các nguồn lực đầu tư.
            </div>
          </ContentCard>

          <ContentCard
            variant="yellow"
            badge="DÂN CHỦ XHCN"
            title="Dân Biết, Dân Bàn, Dân Làm..."
            description="Bản chất của chế độ"
          >
            <p className="text-sm mb-4">
              Dân chủ XHCN là bản chất của chế độ, vừa là động lực tinh thần vừa là mục tiêu của sự phát triển.
            </p>
            <div className="p-3 rounded-lg bg-chart-2/10 mb-4">
              <p className="text-sm font-medium text-chart-2 mb-2">Văn kiện Đại hội XIII bổ sung:</p>
              <p className="text-sm italic">
                &quot;Dân biết, dân bàn, dân làm, dân kiểm tra, <strong>dân giám sát, dân thụ hưởng</strong>&quot;
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Quyền làm chủ thực chất của nhân dân là gốc rễ của sự ổn định; khi người dân được 
              thụ hưởng trực tiếp từ các thành tựu, lòng tin vào chế độ được củng cố vững chắc.
            </p>
          </ContentCard>
        </div>

        {/* Ngoại giao Cây tre */}
        <div className="mb-8">
          <ContentCard
            variant="purple"
            badge="ĐỐI NGOẠI"
            title='Ngoại Giao Cây Tre - Tạo Thế Ổn Định Toàn Cầu'
            className="mb-6"
          >
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 rounded-lg bg-card border border-border">
                <div className="w-12 h-12 rounded-full bg-chart-4/20 flex items-center justify-center mx-auto mb-3">
                  <Flag className="w-6 h-6 text-chart-4" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Gốc Vững</h4>
                <p className="text-xs text-muted-foreground">
                  Lợi ích quốc gia - dân tộc, độc lập, tự chủ
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border">
                <div className="w-12 h-12 rounded-full bg-chart-4/20 flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-chart-4" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Thân Chắc</h4>
                <p className="text-xs text-muted-foreground">
                  Sức mạnh tổng hợp, đại đoàn kết
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border">
                <div className="w-12 h-12 rounded-full bg-chart-4/20 flex items-center justify-center mx-auto mb-3">
                  <Handshake className="w-6 h-6 text-chart-4" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Cành Uyển Chuyển</h4>
                <p className="text-xs text-muted-foreground">
                  Sách lược linh hoạt, biến đổi theo thời cuộc
                </p>
              </div>
            </div>

            <h4 className="font-semibold text-foreground mb-3">Thực tiễn hội nhập:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm">
                <ListItem>Quan hệ ngoại giao với <strong>193 quốc gia</strong></ListItem>
                <ListItem>
                  Đối tác Chiến lược Toàn diện với <strong>5 nước Ủy viên TT HĐBA</strong> 
                  (Mỹ, Trung Quốc, Nga, Anh, Pháp)
                </ListItem>
              </ul>
              <ul className="space-y-2 text-sm">
                <ListItem>Đối tác với Ấn Độ, Nhật Bản, Úc, Hàn Quốc...</ListItem>
                <ListItem>
                  Ký kết <strong>16 FTA thế hệ mới</strong> (CPTPP, EVFTA, RCEP...)
                </ListItem>
              </ul>
            </div>
          </ContentCard>
        </div>

        {/* Quốc phòng */}
        <ContentCard
          variant="red"
          badge="QUỐC PHÒNG"
          title='Bảo Vệ Tổ Quốc "Từ Sớm, Từ Xa"'
          className="mb-8"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Tư duy chiến lược Đại hội XIII:</h4>
              <ul className="space-y-2 text-sm">
                <ListItem>
                  Xây dựng lực lượng Quân đội nhân dân, Công an nhân dân: 
                  <strong> cách mạng, chính quy, tinh nhuệ, từng bước hiện đại</strong>
                </ListItem>
                <ListItem>
                  Kiên quyết, kiên trì bảo vệ vững chắc <strong>độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ</strong>
                </ListItem>
                <ListItem>
                  Phương châm: <strong>&quot;Giữ nước từ khi nước chưa nguy&quot;</strong>
                </ListItem>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Thực tiễn:</h4>
              <ul className="space-y-2 text-sm">
                <ListItem>Duy trì độc lập, chủ quyền và an ninh tuyệt đối trên các tuyến biên giới</ListItem>
                <ListItem>Kiểm soát, xử lý hiệu quả các tranh chấp trên Biển Đông bằng biện pháp hòa bình</ListItem>
                <ListItem>Phù hợp với luật pháp quốc tế</ListItem>
              </ul>
            </div>
          </div>
        </ContentCard>

        {/* Vai trò của Đảng và Nhà nước */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <ContentCard
            variant="teal"
            badge="VAI TRÒ"
            title="Nhà Nước Pháp Quyền XHCN"
          >
            <p className="text-sm mb-3">
              Là công cụ sắc bén của nhân dân dưới sự lãnh đạo của Đảng để quản lý xã hội bằng pháp luật.
            </p>
            <ul className="space-y-2 text-sm">
              <ListItem>Kiến tạo môi trường pháp lý minh bạch cho các thành phần kinh tế</ListItem>
              <ListItem>Giữ vững an ninh trật tự</ListItem>
              <ListItem>Ngăn chặn các âm mưu phá hoại của các thế lực thù địch</ListItem>
            </ul>
          </ContentCard>

          <ContentCard
            variant="yellow"
            badge="LÃNH ĐẠO"
            title="Đảng Cộng Sản Việt Nam"
          >
            <p className="text-sm mb-3">
              Là nhân tố quyết định mọi thắng lợi của công cuộc xây dựng và bảo vệ Tổ quốc.
            </p>
            <ul className="space-y-2 text-sm">
              <ListItem>Giữ vai trò cầm quyền, đề ra đường lối chiến lược nhất quán</ListItem>
              <ListItem>Giữ cho đất nước không rơi vào vòng xoáy bất ổn</ListItem>
              <ListItem>Bảo đảm sự ổn định bền vững để phát triển toàn diện</ListItem>
            </ul>
          </ContentCard>
        </div>

        {/* Kết luận */}
        <div className="bg-gradient-to-r from-destructive/10 via-card to-destructive/10 rounded-xl p-6 md:p-8 border border-destructive/20">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Kết Luận Phần 5</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sự ổn định chính trị và quốc phòng vững mạnh là <strong>&quot;lá chắn an ninh&quot;</strong> cho nền kinh tế. 
                Đường lối đối ngoại &quot;ngoại giao cây tre&quot; đã giúp Việt Nam trở thành <strong>tâm điểm kết nối 
                các dòng vốn FDI</strong> và tham gia sâu vào chuỗi cung ứng toàn cầu, tạo thế ổn định để 
                phát triển trong &quot;Kỷ nguyên vươn mình&quot;.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

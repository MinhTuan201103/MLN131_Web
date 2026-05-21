import {
  ContentCard,
  SectionHeader,
  StatCard,
  ListItem,
  SourceLink,
} from "@/components/content-card"
import { Heart, GraduationCap, Users, Smile, Palette, CheckCircle2 } from "lucide-react"

export function Part4VanHoaXaHoi() {
  return (
    <section id="part-iv" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="PHẦN 4 · VĂN HÓA XÃ HỘI"
          title="Con Người Là Trung Tâm Của Sự Phát Triển"
          description="Quá trình xây dựng CNXH ở Việt Nam không chỉ hướng đến tăng trưởng kinh tế mà còn chú trọng nâng cao chất lượng cuộc sống của nhân dân."
        />

        {/* Quan điểm của Đảng */}
        <div className="mb-12 p-6 md:p-8 rounded-xl bg-gradient-to-r from-primary/5 via-card to-chart-2/5 border border-primary/20">
          <p className="text-lg md:text-xl text-center text-foreground font-medium italic mb-4">
            &quot;Con người là trung tâm, chủ thể, nguồn lực quan trọng nhất và mục tiêu của sự phát triển.&quot;
          </p>
          <p className="text-sm text-center text-muted-foreground">
            — Văn kiện Đại hội XIII
          </p>
        </div>

        {/* Số liệu nổi bật */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatCard
            value="0.766"
            label="Chỉ số HDI"
            description="Nhóm phát triển con người cao"
          />
          <StatCard
            value="95.2%"
            label="Bao phủ BHYT"
            description="Tỷ lệ dân số"
          />
          <StatCard
            value="74.5+"
            label="Tuổi thọ TB"
            description="Năm"
          />
          <StatCard
            value="1.3%"
            label="Hộ nghèo (2025)"
            description="Giảm từ 4.2% (2022)"
          />
        </div>

        {/* Các thành tựu */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {/* Phát triển con người */}
          <ContentCard
            variant="teal"
            badge="THÀNH TỰU 1"
            title="Phát Triển Con Người"
            description="Chỉ số HDI ngày càng được nâng cao"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm">
                Theo UNDP, chỉ số phát triển con người HDI của Việt Nam đạt khoảng <strong>0.766</strong>, 
                thuộc nhóm các quốc gia có mức phát triển con người cao.
              </p>
            </div>
            <p className="text-sm mb-3">HDI được đánh giá dựa trên:</p>
            <ul className="space-y-1 text-sm">
              <ListItem>Thu nhập</ListItem>
              <ListItem>Giáo dục</ListItem>
              <ListItem>Tuổi thọ</ListItem>
            </ul>
          </ContentCard>

          {/* Y tế */}
          <ContentCard
            variant="red"
            badge="THÀNH TỰU 2"
            title="Y Tế & Chăm Sóc Sức Khỏe"
            description="Hệ thống y tế phát triển mạnh mẽ"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-sm">
                Tỷ lệ bao phủ BHYT đạt <strong>95.2%</strong> dân số. 
                Tuổi thọ trung bình đạt <strong>74.5 - 74.8 tuổi</strong>.
              </p>
            </div>
            <ul className="space-y-1 text-sm">
              <ListItem>Làm chủ nhiều kỹ thuật y học hiện đại như ghép tạng</ListItem>
              <ListItem>Tự sản xuất được nhiều loại vắc-xin</ListItem>
              <ListItem>Chương trình tiêm chủng mở rộng hiệu quả</ListItem>
            </ul>
          </ContentCard>

          {/* Giáo dục */}
          <ContentCard
            variant="yellow"
            badge="THÀNH TỰU 3"
            title="Giáo Dục & Nguồn Nhân Lực"
            description="Giáo dục là quốc sách hàng đầu"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-chart-2/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-chart-2" />
              </div>
              <p className="text-sm">
                Đảng và Nhà nước luôn xác định: <strong>&quot;Giáo dục là quốc sách hàng đầu.&quot;</strong>
              </p>
            </div>
            <ul className="space-y-1 text-sm">
              <ListItem>Ngân sách đầu tư cho giáo dục không ngừng tăng</ListItem>
              <ListItem>Nhiều chính sách hỗ trợ học phí cho học sinh</ListItem>
              <ListItem>Cơ sở vật chất trường học ngày càng cải thiện</ListItem>
              <ListItem>Nâng cao chất lượng nguồn nhân lực cho CNH-HĐH</ListItem>
            </ul>
          </ContentCard>

          {/* Giảm nghèo */}
          <ContentCard
            variant="purple"
            badge="THÀNH TỰU 4"
            title="Giảm Nghèo & An Sinh Xã Hội"
            description="Không để ai bị bỏ lại phía sau"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-chart-4/20 flex items-center justify-center flex-shrink-0">
                <Smile className="w-5 h-5 text-chart-4" />
              </div>
              <p className="text-sm">
                Tỷ lệ hộ nghèo đa chiều giảm mạnh từ <strong>4.2% (2022)</strong> xuống 
                còn <strong>~1.3% (2025)</strong>.
              </p>
            </div>
            <ul className="space-y-1 text-sm">
              <ListItem>Hỗ trợ người yếu thế</ListItem>
              <ListItem>Xây dựng nhà ở xã hội</ListItem>
              <ListItem>Xóa nhà tạm, nhà dột nát</ListItem>
              <ListItem>Chăm lo cho người có công và đồng bào vùng khó khăn</ListItem>
            </ul>
          </ContentCard>
        </div>

        {/* Văn hóa */}
        <ContentCard
          variant="teal"
          badge="THÀNH TỰU 5"
          title="Văn Hóa & Đời Sống Tinh Thần"
          className="mb-8"
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Palette className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm italic mb-2">
                &quot;Văn hóa là nền tảng tinh thần của xã hội, vừa là mục tiêu, vừa là động lực của sự phát triển.&quot;
              </p>
              <p className="text-xs text-muted-foreground">— Đảng ta xác định</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2 text-sm">Thành tựu văn hóa:</h4>
              <ul className="space-y-1 text-sm">
                <ListItem>Nhiều giá trị văn hóa dân tộc được bảo tồn và phát huy</ListItem>
                <ListItem>Các hoạt động văn hóa, nghệ thuật phát triển mạnh</ListItem>
                <ListItem>Đời sống tinh thần của người dân ngày càng phong phú</ListItem>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2 text-sm">Con người Việt Nam thời đại mới:</h4>
              <div className="flex flex-wrap gap-2">
                {["Yêu nước", "Đoàn kết", "Trách nhiệm", "Sáng tạo", "Nghĩa tình"].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ContentCard>

        {/* Kết luận */}
        <div className="bg-gradient-to-r from-chart-4/10 via-card to-chart-4/10 rounded-xl p-6 md:p-8 border border-chart-4/20">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-chart-4/20 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-chart-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Kết Luận Phần 4</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sau gần 40 năm Đổi mới, các thành tựu về y tế, giáo dục, giảm nghèo, phát triển con người, 
                an sinh xã hội và đời sống văn hóa đã góp phần nâng cao chất lượng cuộc sống của nhân dân 
                và khẳng định <strong>bản chất tốt đẹp, nhân văn của chủ nghĩa xã hội ở Việt Nam</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

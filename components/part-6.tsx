'use client'

import { SectionWrap } from "@/components/content-card"
import { Reveal } from "@/components/reveal"
import { Lightbulb, Users, Zap, Cog, Globe, Target, GraduationCap, BookOpen, Flame } from 'lucide-react'

export function Part6KetLuan() {
  return (
    <SectionWrap id="part-6" className="!bg-gradient-to-b from-white to-blue-50">
      {/* HEADER */}
      <Reveal variant="fade-up" duration={800} className="mb-16 text-center px-4 sm:px-8">
        <p className="font-label-mono text-revolutionary-red uppercase tracking-widest text-lg font-bold mb-2">
          Phần 6
        </p>
        <h2 className="font-display text-5xl md:text-6xl font-black text-on-surface mb-4">
          KẾT LUẬN
        </h2>
        <p className="font-display text-2xl md:text-3xl text-golden-silk font-bold">
          40 Năm Đổi Mới — Kỷ Nguyên Vươn Mình
        </p>
      </Reveal>

      {/* SECTION 1: 5 BÀI HỌC */}
      <Reveal variant="fade-up" duration={800} className="mb-20 px-4 sm:px-8 lg:px-20">
        <div className="mb-12">
          <h3 className="font-display text-4xl md:text-5xl font-black text-on-surface mb-2">
            5 Bài Học Kinh Nghiệm
          </h3>
          <p className="font-label-mono text-revolutionary-red text-lg font-bold uppercase">
            Từ Báo cáo chính trị Đại hội XIII
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-golden-silk to-revolutionary-red mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              num: 1,
              title: "Xây Dựng & Chỉnh Đốn Đảng",
              content: "Xây dựng hệ thống chính trị trong sạch, vững mạnh là nhân tố quyết định bảo đảm nền kinh tế thị trường không bị chệch hướng.",
              icon: Cog,
              color: "from-blue-500 to-cyan-500",
              bg: "bg-blue-50"
            },
            {
              num: 2,
              title: "Lấy Dân Làm Gốc",
              content: "Mọi chủ trương, đường lối phải xuất phát từ lợi ích chính đáng của nhân dân. Dân là trung tâm, chủ thể, động lực và mục tiêu.",
              icon: Users,
              color: "from-green-500 to-emerald-500",
              bg: "bg-green-50"
            },
            {
              num: 3,
              title: "Quyết Tâm & Đổi Mới Sáng Tạo",
              content: "Trong lãnh đạo phải có quyết tâm cao, hành động quyết liệt, năng động, sáng tạo; không bảo thủ, trì trệ.",
              icon: Flame,
              color: "from-red-500 to-orange-500",
              bg: "bg-red-50"
            },
            {
              num: 4,
              title: "Xây Dựng Đồng Bộ Thể Chế",
              content: "Tháo gỡ các 'điểm nghẽn', lấy khoa học công nghệ và nhân lực làm đòn bẩy để hoàn thiện quan hệ sản xuất.",
              icon: Zap,
              color: "from-yellow-500 to-amber-500",
              bg: "bg-yellow-50"
            },
            {
              num: 5,
              title: "Hội Nhập Gắn Với Tự Chủ",
              content: "Hội nhập quốc tế toàn diện, kết hợp sức mạnh dân tộc với sức mạnh thời đại, giữ vững độc lập, chủ quyền.",
              icon: Globe,
              color: "from-purple-500 to-pink-500",
              bg: "bg-purple-50"
            },
            {
              num: "✓",
              title: "Kết Quả Sau 40 Năm",
              content: "Từ quốc gia kiệt quệ trở thành nền kinh tế năng động, hội nhập sâu rộng, có uy tín lớn trên trường quốc tế.",
              icon: Target,
              color: "from-golden-silk to-revolutionary-red",
              bg: "bg-gradient-to-br from-golden-silk/10 to-revolutionary-red/10"
            }
          ].map((lesson, idx) => (
            <Reveal key={idx} delay={idx * 80} variant="fade-up">
              <div className={`rounded-2xl border-2 border-monument-grey ${lesson.bg} p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] group`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${lesson.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {typeof lesson.num === 'number' ? (
                      <span className="font-display text-2xl font-black text-white">{lesson.num}</span>
                    ) : (
                      <lesson.icon className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-xl font-bold text-on-surface">{lesson.title}</h4>
                  </div>
                </div>
                <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">{lesson.content}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* SECTION 2: TẦM NHÌN 2030-2045 */}
      <div className="mb-20 px-4 sm:px-8 lg:px-20">
        <Reveal variant="fade-up" duration={800} className="mb-12">
          <h3 className="font-display text-4xl md:text-5xl font-black text-on-surface mb-2 text-center">
            Tầm Nhìn 2030 - 2045
          </h3>
          <p className="font-label-mono text-golden-silk text-lg font-bold uppercase text-center">
            Kỷ Nguyên Vươn Mình
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-golden-silk to-revolutionary-red mx-auto mt-4"></div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 2030 */}
          <Reveal variant="fade-left" duration={900}>
            <div className="rounded-3xl border-3 border-golden-silk bg-gradient-to-br from-amber-50 to-yellow-50 p-8 md:p-10 group hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-500">
              <div className="text-center mb-8">
                <p className="font-label-mono text-golden-silk text-sm font-bold uppercase tracking-widest mb-2">
                  Mục Tiêu 1
                </p>
                <h4 className="font-display text-5xl md:text-6xl font-black text-on-surface mb-3">
                  2030
                </h4>
                <p className="font-display text-lg text-revolutionary-red font-bold">
                  100 Năm Thành Lập Đảng
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-golden-silk flex-shrink-0 mt-1" />
                  <p className="text-on-surface"><span className="font-bold">Nước đang phát triển</span> có nền công nghiệp hiện đại</p>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-golden-silk flex-shrink-0 mt-1" />
                  <p className="text-on-surface"><span className="font-bold">Thu nhập trung bình cao</span> cho toàn xã hội</p>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-golden-silk flex-shrink-0 mt-1" />
                  <p className="text-on-surface"><span className="font-bold">Khoa học - Công nghệ</span>, đổi mới sáng tạo và chuyển đổi số làm động lực</p>
                </div>
              </div>

              <div className="rounded-xl bg-white/60 backdrop-blur border border-golden-silk p-4 text-center">
                <p className="font-display text-2xl font-black text-golden-silk">→ Bước Ngoặt</p>
                <p className="text-sm text-on-surface-variant mt-1">Thoát khỏi "bẫy thu nhập trung bình"</p>
              </div>
            </div>
          </Reveal>

          {/* 2045 */}
          <Reveal variant="fade-right" duration={900}>
            <div className="rounded-3xl border-3 border-revolutionary-red bg-gradient-to-br from-red-50 to-pink-50 p-8 md:p-10 group hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-500">
              <div className="text-center mb-8">
                <p className="font-label-mono text-revolutionary-red text-sm font-bold uppercase tracking-widest mb-2">
                  Mục Tiêu 2
                </p>
                <h4 className="font-display text-5xl md:text-6xl font-black text-on-surface mb-3">
                  2045
                </h4>
                <p className="font-display text-lg text-golden-silk font-bold">
                  100 Năm Thành Lập Nước
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Flame className="w-5 h-5 text-revolutionary-red flex-shrink-0 mt-1" />
                  <p className="text-on-surface"><span className="font-bold">Nước phát triển, thu nhập cao</span> hàng đầu Đông Nam Á</p>
                </div>
                <div className="flex items-start gap-3">
                  <Flame className="w-5 h-5 text-revolutionary-red flex-shrink-0 mt-1" />
                  <p className="text-on-surface"><span className="font-bold">Hoàn thành</span> xây dựng cơ sở vật chất CNXH</p>
                </div>
                <div className="flex items-start gap-3">
                  <Flame className="w-5 h-5 text-revolutionary-red flex-shrink-0 mt-1" />
                  <p className="text-on-surface"><span className="font-bold">Cuộc sống phồn vinh, hạnh phúc</span> cho nhân dân</p>
                </div>
              </div>

              <div className="rounded-xl bg-white/60 backdrop-blur border border-revolutionary-red p-4 text-center">
                <p className="font-display text-2xl font-black text-revolutionary-red">→ Khát Vọng Dân Tộc</p>
                <p className="text-sm text-on-surface-variant mt-1">Một Việt Nam tự hào, mạnh mẽ, hạnh phúc</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* SECTION 3: SINH VIÊN FPT VÀ TỔNG ĐỀ */}
      <div className="mb-20 px-4 sm:px-8 lg:px-20">
        <Reveal variant="fade-up" duration={800} className="mb-12">
          <h3 className="font-display text-4xl md:text-5xl font-black text-on-surface mb-2 text-center">
            Liên Hệ Thực Tiễn
          </h3>
          <p className="font-label-mono text-revolutionary-red text-lg font-bold uppercase text-center">
            Sinh Viên FPT & Tổ Chức Đoàn Phải Làm Gì?
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-golden-silk to-revolutionary-red mx-auto mt-4"></div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            {
              icon: Lightbulb,
              title: "Phát Triển Lực Lượng Sản Xuất Mới",
              desc: "Làm chủ AI, bán dẫn, công nghệ lõi. Thoát khỏi 'bẫy thu nhập trung bình'",
              points: [
                "Học tập công nghệ 4.0",
                "Lãnh đạo trong chuyển đổi số",
                "Đóng góp cho Việt Nam"
              ],
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: Globe,
              title: "Công Dân Toàn Cầu & Bản Sắc Dân Tộc",
              desc: "Hòa nhập nhưng không hòa tan. Giữ vững định hướng chính trị",
              points: [
                "Học tập môi trường quốc tế",
                "Nâng cao cạnh tranh quốc gia",
                "Hiểu biết văn hóa Việt"
              ],
              color: "from-green-500 to-emerald-500"
            },
            {
              icon: GraduationCap,
              title: "Vai Trò Đoàn Viên Thanh Niên",
              desc: "Đi đầu bảo vệ nền tảng tư tưởng, phản bác quan điểm sai trái",
              points: [
                "Lãnh đạo tư tưởng trực tuyến",
                "Xây dựng đạo đức, chuyên môn",
                "Dám nghĩ, dám làm"
              ],
              color: "from-red-500 to-orange-500"
            },
            {
              icon: BookOpen,
              title: "Tinh Thần Tự Học Suốt Đời",
              desc: "Chuyển đổi số không chờ. Biến tri thức thành khởi nghiệp",
              points: [
                "Tự học suốt đời",
                "Khởi nghiệp sáng tạo",
                "Đóng góp cho cộng đồng"
              ],
              color: "from-purple-500 to-pink-500"
            }
          ].map((item, idx) => (
            <Reveal key={idx} delay={idx * 100} variant="fade-up">
              <div className="rounded-2xl border-2 border-monument-grey bg-white p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] group">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-display text-xl font-bold text-on-surface mb-2">{item.title}</h4>
                <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">{item.desc}</p>
                <div className="space-y-2">
                  {item.points.map((point, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-on-surface">
                      <div className="w-2 h-2 rounded-full bg-revolutionary-red"></div>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* KẾT LUẬN CHUNG */}
      <Reveal variant="fade-up" duration={800} className="mb-8 px-4 sm:px-8 lg:px-20">
        <div className="rounded-3xl border-3 border-revolutionary-red bg-gradient-to-br from-red-50 to-pink-50 p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <Flame className="w-8 h-8 text-revolutionary-red flex-shrink-0 mt-1" />
            <h3 className="font-display text-3xl md:text-4xl font-black text-on-surface">
              Kết Luận Chung
            </h3>
          </div>

          <div className="space-y-4 text-on-surface leading-relaxed">
            <p className="text-base md:text-lg">
              Nhìn lại hành trình <span className="font-bold text-revolutionary-red">40 năm Đổi mới (1986 - 2026)</span>, từ một quốc gia kiệt quệ bởi chiến tranh và cấm vận, <span className="font-bold">Việt Nam đã vươn mình</span> trở thành một nền kinh tế năng động, hội nhập sâu rộng và có uy tín lớn trên trường quốc tế.
            </p>

            <p className="text-base md:text-lg">
              Dù chặng đường phía trước còn nhiều <span className="font-bold">"điểm nghẽn" và thách thức</span>, nhưng những thành tựu toàn diện về kinh tế, văn hóa, xã hội và quốc phòng đã chứng minh: <span className="text-golden-silk font-bold">Việc lựa chọn con đường đi lên Chủ nghĩa xã hội của Việt Nam là hoàn toàn đúng đắn</span>.
            </p>

            <p className="text-base md:text-lg">
              Tiến vào <span className="font-bold text-golden-silk">"Kỷ Nguyên Vươn Mình"</span>, với nền tảng tư tưởng vững chắc, sự lãnh đạo sáng suốt của Đảng và sự xung kích của thế hệ trẻ tri thức, <span className="font-bold">Việt Nam hoàn toàn có đủ cơ sở và niềm tin</span> để hiện thực hóa khát vọng dân tộc.
            </p>

            <div className="bg-white/60 backdrop-blur rounded-xl border-2 border-golden-silk p-4 md:p-6 mt-6">
              <p className="font-display text-2xl md:text-3xl font-black text-revolutionary-red text-center">
                Trở Thành Quốc Gia Phát Triển, Thu Nhập Cao
              </p>
              <p className="text-center text-golden-silk font-bold mt-2">
                Mang Lại Cuộc Sống Phồn Vinh, Hạnh Phúc Cho Nhân Dân Vào Năm 2045
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* CLOSING IMAGE */}
      <Reveal variant="fade-up" duration={900} delay={200} className="px-4 sm:px-8 lg:px-20 mb-8">
        <div className="rounded-3xl overflow-hidden border-3 border-monument-grey h-80 md:h-96 group">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
            alt="Kỷ nguyên vươn mình"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
            <p className="font-display text-2xl md:text-3xl font-black text-white text-center w-full">
              Kỷ Nguyên Vươn Mình - Thế Hệ Trẻ Là Lực Lượng Xung Kích
            </p>
          </div>
        </div>
      </Reveal>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </SectionWrap>
  )
}

'use client'

import { SectionWrap } from "@/components/content-card"
import { Reveal, RevealStagger } from "@/components/reveal"
import { NumberCounter } from "@/components/number-counter"
import { Users, Globe, Shield, Zap, Lock } from 'lucide-react'

export function Part5QuocPhongChinhTri() {
  return (
    <SectionWrap id="part-5" className="!bg-white">
      {/* HERO */}
      <Reveal variant="fade-up" duration={800} className="mb-16 text-left">
        <p className="font-label-mono text-golden-silk uppercase tracking-widest text-lg font-bold mb-3">
          Phần 5
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-black text-on-surface mb-4 animate-in fade-in zoom-in duration-700">
          QUỐC PHÒNG & CHÍNH TRỊ
        </h1>
        <p className="font-display text-3xl md:text-4xl text-revolutionary-red font-bold animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Ổn Định Cho Kỷ Nguyên Vươn Mình
        </p>
      </Reveal>

      {/* KHỐI 1: CHÍNH TRỊ - 3 CARDS */}
      <Reveal variant="fade-up" duration={800} className="mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-black text-on-surface mb-2 text-left">
          CHÍNH TRỊ & HỆ THỐNG
        </h2>
        <p className="text-left text-golden-silk font-bold text-lg mb-10 uppercase">
          Nền tảng ổn định
        </p>

        <RevealStagger staggerMs={120} className="grid md:grid-cols-3 gap-6 mb-8 items-stretch" variant="fade-up">
          {/* Card 1 */}
          <div className="h-full flex flex-col rounded-2xl border-2 border-monument-grey bg-blue-50 p-6 hover:shadow-xl hover:translate-y-[-4px] transition-all duration-500 ease-out group">
            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <Users className="w-12 h-12 text-revolutionary-red" />
            </div>
            <p className="font-display text-2xl md:text-3xl font-black text-on-surface mb-4 text-center">
              LÝ LUẬN
            </p>
            <div className="text-center space-y-2 mt-auto">
              <p className="font-semibold text-lg text-on-surface">Kinh tế ↔ Chính trị</p>
              <p className="text-sm text-on-surface-variant">Dân chủ XHCN</p>
              <p className="text-sm text-on-surface-variant">Lãnh đạo duy nhất của Đảng</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="h-full flex flex-col rounded-2xl border-2 border-monument-grey bg-red-50 p-6 hover:shadow-xl hover:translate-y-[-4px] transition-all duration-500 ease-out group">
            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <Lock className="w-12 h-12 text-revolutionary-red" />
            </div>
            <p className="font-display text-2xl md:text-3xl font-black text-on-surface mb-4 text-center">
              CHỐNG THAM NHŨNG
            </p>
            <div className="text-center space-y-3 mt-auto">
              <p className="font-display text-3xl md:text-4xl font-black text-revolutionary-red">
                <NumberCounter endValue={113} suffix=" → 83" duration={1500} />
              </p>
              <p className="text-sm text-on-surface-variant font-bold">
                Không có vùng cấm (2017-2023)
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="h-full flex flex-col rounded-2xl border-2 border-monument-grey bg-green-50 p-6 hover:shadow-xl hover:translate-y-[-4px] transition-all duration-500 ease-out group">
            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <Zap className="w-12 h-12 text-revolutionary-red" />
            </div>
            <p className="font-display text-2xl md:text-3xl font-black text-on-surface mb-4 text-center">
              TINH GỌN
            </p>
            <div className="text-center space-y-3 mt-auto">
              <p className="font-display text-3xl md:text-4xl font-black text-revolutionary-red">
                $<NumberCounter endValue={510} suffix=" Tỷ USD" duration={1500} />
              </p>
              <p className="text-sm text-on-surface-variant font-bold">
                Quản lý 2025 | Chính phủ số
              </p>
            </div>
          </div>
        </RevealStagger>

        {/* Image placeholder */}
        <Reveal variant="fade-up" duration={900} delay={300}>
          <div className="rounded-2xl bg-gray-100 border-2 border-monument-grey h-72 flex items-center justify-center group hover:shadow-lg transition-shadow mb-8 overflow-hidden">
            <img
              src="https://hdll.vn/FileUpload/Images/dieubinh_1.jpg"
              alt="Hệ thống chính trị"
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Reveal>
      </Reveal>

      {/* KHỐI 2: ĐỐI NGOẠI & QUỐC PHÒNG - 2 COLUMNS */}
      <Reveal variant="fade-up" duration={800} className="mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-black text-on-surface mb-2 text-left">
          ĐỐI NGOẠI & QUỐC PHÒNG
        </h2>
        <p className="text-left text-golden-silk font-bold text-lg mb-10 uppercase">
          Bảo vệ từ sớm, từ xa
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT: ĐỐI NGOẠI */}
          <Reveal variant="fade-left" duration={900}>
            <div>
              <div className="rounded-2xl border-2 border-monument-grey bg-teal-50 p-6 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-8 h-8 text-revolutionary-red" />
                  <h3 className="font-display text-3xl md:text-4xl font-black text-on-surface">
                    ĐỐI NGOẠI
                  </h3>
                </div>
                <p className="font-semibold text-lg text-on-surface italic mb-6">
                  "Ngoại giao cây tre"
                </p>
                <RevealStagger staggerMs={100} variant="fade-up">
                  <div className="rounded-lg bg-white p-4 border-l-4 border-teal-500 hover:shadow-md transition-shadow duration-300">
                    <p className="font-display text-2xl font-black text-on-surface">193</p>
                    <p className="text-sm font-bold text-on-surface-variant">Quốc gia quan hệ</p>
                  </div>
                  <div className="rounded-lg bg-white p-4 border-l-4 border-teal-500 hover:shadow-md transition-shadow duration-300">
                    <p className="font-display text-2xl font-black text-on-surface">5</p>
                    <p className="text-sm font-bold text-on-surface-variant">Thường trực HĐBA (Mỹ, Trung, Nga, Anh, Pháp)</p>
                  </div>
                  <div className="rounded-lg bg-white p-4 border-l-4 border-teal-500 hover:shadow-md transition-shadow duration-300">
                    <p className="font-display text-2xl font-black text-on-surface">16</p>
                    <p className="text-sm font-bold text-on-surface-variant">FTA thế hệ mới</p>
                  </div>
                </RevealStagger>
              </div>
              <div className="rounded-2xl bg-gray-100 border-2 border-monument-grey h-80 flex items-center justify-center group hover:shadow-lg transition-shadow overflow-hidden transform hover:scale-[1.02] duration-500">
                <img
                  src="https://cdn-i2.congthuong.vn/stores/news_dataimages/2024/022024/02/15/doi-ngoai20240202153215.jpg?rt=20240202153216"
                  alt="Đối ngoại"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </Reveal>

          {/* RIGHT: QUỐC PHÒNG */}
          <Reveal variant="fade-right" duration={900}>
            <div>
              <div className="rounded-2xl border-2 border-monument-grey bg-purple-50 p-6 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-revolutionary-red" />
                  <h3 className="font-display text-3xl md:text-4xl font-black text-on-surface">
                    QUỐC PHÒNG
                  </h3>
                </div>
                <p className="font-semibold text-lg text-on-surface italic mb-6">
                  "Từ sớm, từ xa"
                </p>
                <RevealStagger staggerMs={100} variant="fade-up">
                  <div className="rounded-lg bg-white p-4 border-l-4 border-purple-500 hover:shadow-md transition-shadow duration-300">
                    <p className="font-display text-2xl font-black text-on-surface">1.000+</p>
                    <p className="text-sm font-bold text-on-surface-variant">Lượt gìn giữ hòa bình LHQ</p>
                  </div>
                  <div className="rounded-lg bg-white p-4 border-l-4 border-purple-500 hover:shadow-md transition-shadow duration-300">
                    <p className="font-display text-2xl font-black text-on-surface">UNCLOS</p>
                    <p className="text-sm font-bold text-on-surface-variant">Biển Đông hòa bình pháp quyền</p>
                  </div>
                  <div className="rounded-lg bg-white p-4 border-l-4 border-purple-500 hover:shadow-md transition-shadow duration-300">
                    <p className="font-semibold text-lg text-on-surface">Siêu Dự Án</p>
                    <p className="text-sm font-bold text-on-surface-variant">Long Thành, Đường sắt tốc độ cao</p>
                  </div>
                </RevealStagger>
              </div>
              <div className="rounded-2xl bg-gray-100 border-2 border-monument-grey h-80 flex items-center justify-center group hover:shadow-lg transition-shadow overflow-hidden transform hover:scale-[1.02] duration-500">
                <img
                  src="https://file3.qdnd.vn/data/images/0/2024/12/11/upload_2134/1%202.jpg?dpi=150&quality=100&w=870"
                  alt="Quốc phòng"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>

      {/* KHỐI 3: BẢNG SO SÁNH */}
      <Reveal variant="fade-up" duration={800} className="mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-black text-on-surface mb-10 text-left">
          TRƯỚC ĐỔI MỚI ↔ KỶ NGUYÊN VƯƠN MÌNH
        </h2>

        <div className="overflow-x-auto rounded-2xl border-2 border-monument-grey shadow-lg">
          <table className="w-full min-w-[760px] table-fixed text-base md:text-lg">
            <colgroup>
              <col className="w-[22%]" />
              <col className="w-[34%]" />
              <col className="w-[44%]" />
            </colgroup>
            <thead>
              <tr className="bg-revolutionary-red text-white">
                <th className="px-4 py-4 text-left font-display font-black">Tiêu Chí</th>
                <th className="px-4 py-4 text-left font-display font-black">Trước 1986</th>
                <th className="px-4 py-4 text-left font-display font-black">2026</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-monument-grey">
              <tr className="bg-white hover:bg-amber-50 transition-colors duration-300">
                  <td className="px-4 py-4 font-bold text-on-surface">Bộ máy</td>
                  <td className="px-4 py-4 text-on-surface-variant opacity-60">Cồng kềnh, bao cấp</td>
                  <td className="px-4 py-4 font-bold text-revolutionary-red">Tinh gọn, Chính phủ số</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-amber-50 transition-colors duration-300">
                  <td className="px-4 py-4 font-bold text-on-surface">Tiêu cực</td>
                  <td className="px-4 py-4 text-on-surface-variant opacity-60">Xử lý nội bộ</td>
                  <td className="px-4 py-4 font-bold text-revolutionary-red">Không vùng cấm (CPI ↑)</td>
              </tr>
              <tr className="bg-white hover:bg-amber-50 transition-colors duration-300">
                  <td className="px-4 py-4 font-bold text-on-surface">Đối ngoại</td>
                  <td className="px-4 py-4 text-on-surface-variant opacity-60">Bao vây, cấm vận</td>
                  <td className="px-4 py-4 font-bold text-revolutionary-red">193 nước, 16 FTA</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-amber-50 transition-colors duration-300">
                  <td className="px-4 py-4 font-bold text-on-surface">Quốc phòng</td>
                  <td className="px-4 py-4 text-on-surface-variant opacity-60">Phòng thủ thụ động</td>
                  <td className="px-4 py-4 font-bold text-revolutionary-red">Chủ động từ sớm, từ xa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Reveal>

    </SectionWrap>
  )
}

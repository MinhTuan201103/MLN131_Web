'use client'

import React from 'react'
import { SectionWrap } from "@/components/content-card"
import { Users, Globe, Shield, Zap, Lock, Award } from 'lucide-react'

export function Part5QuocPhongChinhTri() {
  return (
    <SectionWrap id="part-5" className="!bg-white">
      {/* HERO */}
      <div className="mb-16 text-center">
        <p className="font-label-mono text-golden-silk uppercase tracking-widest text-lg font-bold mb-3">
          Phần 5
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-black text-on-surface mb-4">
          QUỐC PHÒNG & CHÍNH TRỊ
        </h1>
        <p className="font-display text-3xl md:text-4xl text-revolutionary-red font-bold">
          Ổn Định Cho Kỷ Nguyên Vươn Mình
        </p>
      </div>

      {/* KHỐI 1: CHÍNH TRỊ - 3 CARDS */}
      <div className="mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-black text-on-surface mb-2 text-center">
          CHÍNH TRỊ & HỆ THỐNG
        </h2>
        <p className="text-center text-golden-silk font-bold text-lg mb-10 uppercase">
          Nền tảng ổn định
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div className="rounded-2xl border-2 border-monument-grey bg-blue-50 p-6 hover:shadow-xl transition-shadow group">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-revolutionary-red group-hover:scale-110 transition-transform" />
            </div>
            <p className="font-display text-2xl md:text-3xl font-black text-on-surface mb-4 text-center">
              LÝ LUẬN
            </p>
            <div className="text-center space-y-2">
              <p className="font-semibold text-lg text-on-surface">Kinh tế ↔ Chính trị</p>
              <p className="text-sm text-on-surface-variant">Dân chủ XHCN</p>
              <p className="text-sm text-on-surface-variant">Lãnh đạo duy nhất của Đảng</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border-2 border-monument-grey bg-red-50 p-6 hover:shadow-xl transition-shadow group">
            <div className="flex justify-center mb-4">
              <Lock className="w-12 h-12 text-revolutionary-red group-hover:scale-110 transition-transform" />
            </div>
            <p className="font-display text-2xl md:text-3xl font-black text-on-surface mb-4 text-center">
              CHỐNG THAM NHŨNG
            </p>
            <div className="text-center space-y-3">
              <p className="font-semibold text-2xl md:text-3xl text-revolutionary-red">
                CPI: 113 → 83
              </p>
              <p className="text-sm text-on-surface-variant font-bold">
                Không có vùng cấm (2017-2023)
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border-2 border-monument-grey bg-green-50 p-6 hover:shadow-xl transition-shadow group">
            <div className="flex justify-center mb-4">
              <Zap className="w-12 h-12 text-revolutionary-red group-hover:scale-110 transition-transform" />
            </div>
            <p className="font-display text-2xl md:text-3xl font-black text-on-surface mb-4 text-center">
              TINH GỌN
            </p>
            <div className="text-center space-y-3">
              <p className="font-semibold text-2xl md:text-3xl text-revolutionary-red">
                $510 Tỷ USD
              </p>
              <p className="text-sm text-on-surface-variant font-bold">
                Quản lý 2025 | Chính phủ số
              </p>
            </div>
          </div>
        </div>

        {/* Image placeholder */}
        <div className="rounded-2xl bg-gray-100 border-2 border-monument-grey h-64 md:h-80 flex items-center justify-center group hover:shadow-lg transition-shadow mb-8">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=80"
            alt="Hệ thống chính trị"
            className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform"
          />
        </div>
      </div>

      {/* KHỐI 2: ĐỐI NGOẠI & QUỐC PHÒNG - 2 COLUMNS */}
      <div className="mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-black text-on-surface mb-2 text-center">
          ĐỐI NGOẠI & QUỐC PHÒNG
        </h2>
        <p className="text-center text-golden-silk font-bold text-lg mb-10 uppercase">
          Bảo vệ từ sớm, từ xa
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT: ĐỐI NGOẠI */}
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
              <div className="space-y-4">
                <div className="rounded-lg bg-white p-4 border-l-4 border-teal-500">
                  <p className="font-display text-2xl font-black text-on-surface">193</p>
                  <p className="text-sm font-bold text-on-surface-variant">Quốc gia quan hệ</p>
                </div>
                <div className="rounded-lg bg-white p-4 border-l-4 border-teal-500">
                  <p className="font-display text-2xl font-black text-on-surface">5</p>
                  <p className="text-sm font-bold text-on-surface-variant">Thường trực HĐBA (Mỹ, Trung, Nga, Anh, Pháp)</p>
                </div>
                <div className="rounded-lg bg-white p-4 border-l-4 border-teal-500">
                  <p className="font-display text-2xl font-black text-on-surface">16</p>
                  <p className="text-sm font-bold text-on-surface-variant">FTA thế hệ mới</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-gray-100 border-2 border-monument-grey h-80 flex items-center justify-center group hover:shadow-lg transition-shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                alt="Đối ngoại"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
          </div>

          {/* RIGHT: QUỐC PHÒNG */}
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
              <div className="space-y-4">
                <div className="rounded-lg bg-white p-4 border-l-4 border-purple-500">
                  <p className="font-display text-2xl font-black text-on-surface">1.000+</p>
                  <p className="text-sm font-bold text-on-surface-variant">Lượt gìn giữ hòa bình LHQ</p>
                </div>
                <div className="rounded-lg bg-white p-4 border-l-4 border-purple-500">
                  <p className="font-display text-2xl font-black text-on-surface">UNCLOS</p>
                  <p className="text-sm font-bold text-on-surface-variant">Biển Đông hòa bình pháp quyền</p>
                </div>
                <div className="rounded-lg bg-white p-4 border-l-4 border-purple-500">
                  <p className="font-semibold text-lg text-on-surface">Siêu Dự Án</p>
                  <p className="text-sm font-bold text-on-surface-variant">Long Thành, Đường sắt tốc độ cao</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-gray-100 border-2 border-monument-grey h-80 flex items-center justify-center group hover:shadow-lg transition-shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                alt="Quốc phòng"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>

      {/* KHỐI 3: BẢNG SO SÁNH */}
      <div className="mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-black text-on-surface mb-10 text-center">
          TRƯỚC ĐỔI MỚI ↔ KỶ NGUYÊN VƯƠN MÌNH
        </h2>

        <div className="overflow-x-auto rounded-2xl border-2 border-monument-grey shadow-lg">
          <table className="w-full text-base md:text-lg">
            <thead>
              <tr className="bg-revolutionary-red text-white">
                <th className="px-4 py-4 text-left font-display font-black">Tiêu Chí</th>
                <th className="px-4 py-4 text-left font-display font-black">Trước 1986</th>
                <th className="px-4 py-4 text-left font-display font-black">2026</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-monument-grey">
              <tr className="bg-white hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 font-bold text-on-surface">Bộ máy</td>
                <td className="px-4 py-4 text-on-surface-variant">Cồng kềnh, bao cấp</td>
                <td className="px-4 py-4 font-bold text-revolutionary-red">Tinh gọn, Chính phủ số</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-white transition-colors">
                <td className="px-4 py-4 font-bold text-on-surface">Tiêu cực</td>
                <td className="px-4 py-4 text-on-surface-variant">Xử lý nội bộ</td>
                <td className="px-4 py-4 font-bold text-revolutionary-red">Không vùng cấm (CPI ↑)</td>
              </tr>
              <tr className="bg-white hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 font-bold text-on-surface">Đối ngoại</td>
                <td className="px-4 py-4 text-on-surface-variant">Bao vây, cấm vận</td>
                <td className="px-4 py-4 font-bold text-revolutionary-red">193 nước, 16 FTA</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-white transition-colors">
                <td className="px-4 py-4 font-bold text-on-surface">Quốc phòng</td>
                <td className="px-4 py-4 text-on-surface-variant">Phòng thủ thụ động</td>
                <td className="px-4 py-4 font-bold text-revolutionary-red">Chủ động từ sớm, từ xa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* KHỐI 4: TIMELINE 2030-2045 */}
      <div>
        <h2 className="font-display text-4xl md:text-5xl font-black text-on-surface mb-2 text-center">
          TẦM NHÌN CHIẾN LƯỢC
        </h2>
        <p className="text-center text-golden-silk font-bold text-lg mb-10 uppercase">
          2030 - 2045
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 2030 */}
          <div className="rounded-2xl border-3 border-golden-silk bg-gradient-to-br from-yellow-50 to-orange-50 p-8 group hover:shadow-xl transition-shadow">
            <h3 className="font-display text-4xl md:text-5xl font-black text-on-surface mb-2">
              2030
            </h3>
            <p className="font-label-mono text-golden-silk uppercase tracking-widest text-lg font-bold mb-8">
              100 Năm Lập Đảng
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Award className="w-8 h-8 text-golden-silk flex-shrink-0 mt-1" />
                <div>
                  <p className="font-display text-2xl font-black text-on-surface">Ổn định chính trị</p>
                  <p className="text-sm text-on-surface-variant">Tuyệt đối, thế trận lòng dân vững</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-8 h-8 text-golden-silk flex-shrink-0 mt-1" />
                <div>
                  <p className="font-display text-2xl font-black text-on-surface">Nước Đang Phát Triển</p>
                  <p className="text-sm text-on-surface-variant">Công nghiệp hiện đại, thu nhập cao</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2045 */}
          <div className="rounded-2xl border-3 border-revolutionary-red bg-gradient-to-br from-red-50 to-orange-50 p-8 group hover:shadow-xl transition-shadow">
            <h3 className="font-display text-4xl md:text-5xl font-black text-on-surface mb-2">
              2045
            </h3>
            <p className="font-label-mono text-revolutionary-red uppercase tracking-widest text-lg font-bold mb-8">
              100 Năm Lập Nước
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Award className="w-8 h-8 text-revolutionary-red flex-shrink-0 mt-1" />
                <div>
                  <p className="font-display text-2xl font-black text-on-surface">Nhà Nước Pháp Quyền XHCN</p>
                  <p className="text-sm text-on-surface-variant">Hiện đại, nhân dân, minh bạch</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-8 h-8 text-revolutionary-red flex-shrink-0 mt-1" />
                <div>
                  <p className="font-display text-2xl font-black text-on-surface">Nước Phát Triển</p>
                  <p className="text-sm text-on-surface-variant">Thu nhập cao, con người hạnh phúc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrap>
  )
}

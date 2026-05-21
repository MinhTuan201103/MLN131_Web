import {
  ContentCard,
  SectionHeader,
  StatCard,
  ListItem,
  SourceLink,
  SectionWrap,
} from "@/components/content-card"
import { TrendingUp } from "lucide-react"

const PORT_IMAGE =
  "https://lh3.googleusercontent.com/aida/ADBb0ujg4gk0c4yIv5crlENmAC85RioPXg6jP2XQCPtI8OaZ0GMX9PY9DXt9Y4Y6oGn-ZqN9JOIAHnSvT_G7mNfLTIsosYRg7gDNIB2KX5zlfabFCRgxPxllIO2XtzoYIPPrlelOvQW0Yp1v5tXV1v-7YGTlq9MxtKixTUhkG522lmrHCRsfNEb5Zs6ffZ-uuo9BYs_P4EwpQMOhVtA7yGqwqr8EREMW-tJjA5Er16NcZM3YV9sa105HQGYUg5Q"

const TECH_IMAGE =
  "https://lh3.googleusercontent.com/aida/ADBb0uhi4qmz1UFgLDCv47ccnnkQ-dDPtkXsoVLBn9W5RCUSoXB5BCbc5R4mldLLmFyURAS2Pjc4nE9rlEYvel8Rh7Gf-z_pZOkS9_6h6wWVAhNbdOL4nBqt_LOqKW8Jl8rXW7R2YZgfLMPU1fE_nZxCCp5HrZUQFVB4o6ZfooWuM7hlXe-scTYjRUO11PMs1B5b7CsCljeQD_tKNegInQbVuB33hv0oK8mWL86_fjxSq39pyxv-xVrsXQ8JuSHO"

export function Part3KinhTe() {
  return (
    <>
      <SectionWrap id="part-3" variant="high">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12 md:mb-20">
          <SectionHeader
            badge="Phần 3 · Kinh tế"
            title={
              <>
                Đột Phá <span className="text-revolutionary-red">Kinh Tế</span>
              </>
            }
            className="mb-0"
          />
          <span className="font-label-mono text-monument-grey uppercase pb-2 text-sm shrink-0">
            Gallery 01 // Hội nhập
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[500px] md:min-h-[700px] mb-16">
          <div className="md:col-span-8 group relative overflow-hidden bg-monument-grey border border-monument-grey min-h-[320px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Cảng biển logistics"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100 min-h-[320px]"
              src={PORT_IMAGE}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 md:p-12">
              <h3 className="font-display text-2xl md:text-[32px] font-bold text-white mb-3">
                Cổng Kết Nối Toàn Cầu
              </h3>
              <p className="text-on-surface-variant max-w-md text-sm md:text-base">
                Việt Nam trở thành trung tâm chuỗi cung ứng — cảng biển nước sâu kết nối mọi châu lục.
              </p>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex-1 group relative overflow-hidden border border-monument-grey min-h-[200px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Đổi mới công nghệ"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 min-h-[200px]"
                src={TECH_IMAGE}
              />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="bg-golden-silk text-black font-label-mono text-xs px-3 py-1 uppercase font-bold">
                  Đổi mới
                </span>
              </div>
            </div>
            <div className="flex-1 bg-revolutionary-red p-8 md:p-10 flex flex-col justify-center min-h-[180px]">
              <TrendingUp className="w-12 h-12 text-white mb-4" />
              <h4 className="font-display text-xl md:text-2xl font-bold text-white">193+ Đối tác</h4>
              <p className="text-white/80 mt-3 text-sm">
                Mạng lưới FTA thế hệ mới — CPTPP, EVFTA, RCEP — xuất khẩu tăng hàng trăm lần.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <StatCard value="Top 32" label="Quy mô GDP" accent="red" />
          <StatCard value="510 tỷ" label="GDP USD 2025" accent="gold" />
          <StatCard value="6.2%" label="Tăng trưởng BQ" accent="gold" />
          <StatCard value="Top 4" label="ASEAN" accent="grey" />
        </div>

        <h3 className="font-display text-xl font-bold text-on-surface mb-8 text-center">
          3 Đột phá chiến lược
        </h3>
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <ContentCard number="01." title="Thể chế kinh tế">
            <ul className="text-sm">
              <ListItem>Môi trường đầu tư cải thiện</ListItem>
              <ListItem>Cải cách thủ tục hành chính</ListItem>
            </ul>
          </ContentCard>
          <ContentCard number="02." title="Hạ tầng hiện đại">
            <ul className="text-sm">
              <ListItem>Đường bộ cao tốc Bắc — Nam</ListItem>
              <ListItem>Sân bay Long Thành</ListItem>
            </ul>
          </ContentCard>
          <ContentCard variant="red" number="03." title="KH-CN & Nhân lực">
            <ul className="text-sm">
              <ListItem>Kinh tế số ~30% GDP 2030</ListItem>
              <ListItem>Make in Vietnam</ListItem>
            </ul>
          </ContentCard>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <ContentCard badge="2030" title="100 năm thành lập Đảng">
            <ul className="text-sm">
              <ListItem>Thu nhập trung bình cao</ListItem>
              <ListItem>GDP ~900 tỷ USD</ListItem>
            </ul>
          </ContentCard>
          <ContentCard badge="2045" title="100 năm thành lập nước">
            <ul className="text-sm">
              <ListItem>Nước phát triển, thu nhập cao</ListItem>
              <ListItem>GDP ~2.500 tỷ USD</ListItem>
            </ul>
          </ContentCard>
          <ContentCard variant="gold" badge="ĐH XIV" title="Kỷ nguyên vươn mình">
            <ul className="text-sm">
              <ListItem>GDP {">"}10%/năm (2026-2030)</ListItem>
              <ListItem>Bứt phá tăng trưởng</ListItem>
            </ul>
          </ContentCard>
        </div>

        <div className="text-center">
          <SourceLink href="https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-xiii/chien-luoc-phat-trien-kinh-te-xa-hoi-10-nam-2021-2030-3735">
            Chiến lược KTXH 2021-2030
          </SourceLink>
        </div>
      </SectionWrap>
    </>
  )
}

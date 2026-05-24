import {
  SectionHeader,
  SourceLink,
  SectionWrap,
} from "@/components/content-card"
import { EvidenceStatStrip, GdpTimelineChart, ReformFlowDiagram } from "@/components/data-visuals"
import { RevealStagger } from "@/components/reveal"

const LIMITATION_IMAGES = [
  {
    title: "Năng suất và cạnh tranh",
    image: "https://tapchikinhtetaichinh.vn/stores/news_dataimages/kttc/2022/07/30/day-manh-nang-cao-nang-suat-chat-luong-de-tang-suc-canh-tranh-cho-doanh-nghiep-d203d63ec490.jpg",
  },
  {
    title: "Thể chế, môi trường đầu tư",
    image: "https://laodongthudo.vn/stores/news_dataimages/quocdai/042017/25/08/nam-2017-moi-truong-dau-tu-va-kinh-doanh-viet-nam-se-tiep-tuc-cai-thien-03-.7440.jpg",
  },
  {
    title: "Chênh lệch giàu nghèo",
    image: "https://file.thanhuyhanoi.vn/thanhuy/public/Uploads/TinTuc/2022/6/23/10019585/6fffeb5a-d295-43fd-b937-53d4a1212036.jpeg",
  },
  {
    title: "Môi trường, khí hậu",
    image: "https://tl.cdnchinhphu.vn/344445545208135680/2026/3/19/191-17738990498911232720683.jpg",
  },
  {
    title: "Thực thi chính sách",
    image: "https://kinhtevadubao.vn/stores/news_dataimages/vandl/102024/29/12/in_social/3529_csc_661744e950b5c.jpg?randTime=1778760035",
  },
]

export function Part2BoiCanh() {
  return (
    <SectionWrap id="part-2" variant="low">
      <SectionHeader
        badge="Phần 2 · Bối cảnh"
        title={
          <>
            Vì Sao Phải <span className="text-revolutionary-red">Đổi Mới?</span>
          </>
        }
      />

      <EvidenceStatStrip />
      <GdpTimelineChart />
      <ReformFlowDiagram />

      <p className="relative z-10 text-center font-display text-2xl md:text-3xl text-on-surface mb-10 max-w-4xl mx-auto font-semibold">
        Đổi mới = giải phóng lực lượng sản xuất khỏi cơ chế cũ, ổn định đời sống, rồi tiếp tục hoàn
        thiện mô hình XHCN Việt Nam.
      </p>

      <h3 className="font-label-mono text-left text-golden-silk uppercase tracking-widest mb-6 text-lg md:text-xl font-semibold">
        Hạn chế hiện nay — Đại hội XIII
      </h3>
      <RevealStagger staggerMs={90} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 items-stretch">
        {LIMITATION_IMAGES.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 overflow-hidden rounded-2xl border border-monument-grey bg-surface-container shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="aspect-square w-full overflow-hidden bg-surface-container-high">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-center text-sm md:text-base text-on-surface font-semibold px-3 pb-3">
              {item.title}
            </p>
          </div>
        ))}
      </RevealStagger>

      <div className="mt-8 flex flex-wrap gap-4">
        <SourceLink href="https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-vi/dai-hoi-dai-bieu-toan-quoc-lan-thu-vi-cua-dang-19">
          Đại hội VI
        </SourceLink>
        <SourceLink href="https://moit.gov.vn/gioi-thieu/cac-thoi-ky-phat-trien/giai-doan-1975-1985.html">
          Bộ Công Thương
        </SourceLink>
        <SourceLink href="https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=VN">
          Nguồn: World Bank
        </SourceLink>
        <SourceLink href="https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-xiii/bao-cao-chinh-tri-cua-ban-chap-hanh-trung-uong-dang-khoa-xii-tai-dai-hoi-dai-bieu-toan-quoc-lan-thu-xiii-cua-3734">
          Báo cáo Đại hội XIII
        </SourceLink>
      </div>
    </SectionWrap>
  )
}

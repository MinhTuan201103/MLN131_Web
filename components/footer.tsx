import { Sparkles, TriangleAlert } from "lucide-react"

const AI_TOOLS = [
  {
    index: "01",
    tool: "Vercel",
    purpose: "Thiết kế bố cục web và triển khai giao diện",
    result: "AI hỗ trợ dựng nền web, bố cục và nhịp trình bày ban đầu.",
    limit: "Một số nội dung và hình ảnh cần được kiểm duyệt để phù hợp với chủ đề bài.",
    edit: "Nhóm chỉnh lại hình ảnh, màu sắc, bố cục và nội dung để phù hợp với bài thuyết trình.",
  },
  {
    index: "02",
    tool: "GitHub Copilot",
    purpose: "Hỗ trợ viết và chỉnh code giao diện",
    result: "AI gợi ý component, class CSS và xử lý lỗi nhanh hơn.",
    limit: "Code gợi ý có thể chưa phù hợp hoàn toàn với dữ liệu thực tế.",
    edit: "Thành viên nhóm kiểm tra, sửa JSX, căn chỉnh responsive và đảm bảo web chạy ổn định.",
  },
  {
    index: "03",
    tool: "Gemini",
    purpose: "Tổng hợp, tóm tắt và gợi ý diễn đạt nội dung",
    result: "AI hỗ trợ tóm tắt ý chính thành các keyword súc tích.",
    limit: "AI có thể đưa ra nội dung chưa đúng hoặc thiếu ngữ cảnh chính thức.",
    edit: "Nhóm đối chiếu với Văn kiện Đại hội XIII, World Bank và tài liệu môn học trước khi đưa vào bài.",
  },
]

export function Footer() {
  return (
    <footer className="w-full py-16 md:py-20 bg-surface-container-lowest border-t-8 border-monument-grey">
      <div className="exhibition-container">
        <section className="overflow-hidden rounded-2xl border border-monument-grey bg-surface-container shadow-[0_18px_44px_rgb(23_33_43_/_0.08)]">
          <div className="border-b border-monument-grey bg-gradient-to-r from-revolutionary-red/8 via-surface-container to-golden-silk/10 px-5 py-8 md:px-8 md:py-10">
            <p className="font-label-mono text-sm uppercase tracking-[0.32em] text-golden-silk">
              Tuyên bố minh bạch
            </p>
            <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display text-4xl md:text-5xl font-black leading-tight text-on-surface">
                Khai báo sử dụng <span className="text-revolutionary-red">Trí tuệ nhân tạo</span>
              </h2>
              <Sparkles className="h-12 w-12 shrink-0 text-golden-silk" />
            </div>
            <p className="mt-4 max-w-4xl text-base md:text-lg leading-relaxed text-on-surface-variant">
              Dự án được xây dựng với sự hỗ trợ của các công cụ AI. Bảng dưới đây công khai quy trình sử dụng AI nhằm đảm bảo tính trung thực và trách nhiệm học thuật.
            </p>
          </div>

          <div className="px-5 py-6 md:px-8">
            <div className="mb-6 flex gap-3 rounded-xl border border-golden-silk/70 bg-golden-silk/10 px-4 py-3 text-on-surface">
              <TriangleAlert className="mt-1 h-5 w-5 shrink-0 text-golden-silk" />
              <p className="text-sm md:text-base leading-relaxed">
                Mọi nội dung do AI tạo ra đều được nhóm kiểm duyệt, đối chiếu với tài liệu chính thống trước khi đưa lên trang. AI không thay thế phần đánh giá và chỉnh sửa học thuật của con người.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-monument-grey">
              <table className="w-full min-w-[980px] table-fixed text-left">
                <colgroup>
                  <col className="w-[7%]" />
                  <col className="w-[14%]" />
                  <col className="w-[21%]" />
                  <col className="w-[21%]" />
                  <col className="w-[18%]" />
                  <col className="w-[19%]" />
                </colgroup>
                <thead className="bg-surface-container-high">
                  <tr className="font-label-mono text-xs uppercase tracking-[0.18em] text-on-surface-variant">
                    <th className="px-4 py-4">#</th>
                    <th className="px-4 py-4">Công cụ</th>
                    <th className="px-4 py-4">Mục đích</th>
                    <th className="px-4 py-4 text-emerald-700">Kết quả</th>
                    <th className="px-4 py-4 text-revolutionary-red">Hạn chế</th>
                    <th className="px-4 py-4 text-golden-silk">Chỉnh sửa</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-monument-grey bg-surface-container">
                  {AI_TOOLS.map((item) => (
                    <tr key={item.index} className="align-top">
                      <td className="px-4 py-5 font-label-mono text-sm text-revolutionary-red">{item.index}</td>
                      <td className="px-4 py-5">
                        <span className="inline-flex rounded-md bg-revolutionary-red/10 px-3 py-1 font-semibold text-revolutionary-red">
                          {item.tool}
                        </span>
                      </td>
                      <td className="px-4 py-5 text-sm md:text-base leading-relaxed text-on-surface">{item.purpose}</td>
                      <td className="px-4 py-5 text-sm md:text-base leading-relaxed text-on-surface-variant">{item.result}</td>
                      <td className="px-4 py-5 text-sm md:text-base leading-relaxed text-revolutionary-red">{item.limit}</td>
                      <td className="px-4 py-5 text-sm md:text-base leading-relaxed text-on-surface-variant">{item.edit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

    </footer>
  )
}

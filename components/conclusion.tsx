import { CheckCircle2 } from "lucide-react"
import { SectionHeader } from "@/components/content-card"

export function ConclusionSection() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="KẾT LUẬN"
          title="40 Năm Đổi Mới - Thành Tựu Lịch Sử"
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 via-card to-chart-2/10 rounded-2xl p-8 md:p-12 border border-primary/20 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  Có thể khẳng định rằng, sau <strong className="text-primary">40 năm Đổi mới</strong>, 
                  Việt Nam không chỉ đạt được thành tựu về kinh tế mà còn đạt nhiều thành tựu to lớn 
                  về văn hóa – xã hội.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Những kết quả đó là minh chứng rõ nét cho <strong>bản chất nhân văn của chủ nghĩa 
                  xã hội ở Việt Nam</strong> – một mô hình phát triển hướng đến hạnh phúc, chất lượng 
                  sống và sự phát triển toàn diện của con người.
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    &quot;Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay.&quot;
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">— Đại hội XIII</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key takeaways */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { value: "510", unit: "tỷ USD", label: "GDP 2025" },
              { value: "Top 32", unit: "", label: "Thế giới" },
              { value: "0.766", unit: "", label: "Chỉ số HDI" },
              { value: "193", unit: "", label: "Đối tác quốc tế" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-card border border-border"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {item.value}
                  {item.unit && <span className="text-sm font-normal text-muted-foreground ml-1">{item.unit}</span>}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

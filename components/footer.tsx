import { Star } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Sản phẩm sáng tạo học tập
            </span>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">
            Chủ Nghĩa Xã Hội Khoa Học
          </h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-md">
            Thuyết trình: Thành tựu xây dựng CNXH sau 40 năm Đổi mới tại Việt Nam
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {[
              { href: "#part-1", label: "Cơ sở lý luận" },
              { href: "#part-ii", label: "Bối cảnh" },
              { href: "#part-iii", label: "Kinh tế" },
              { href: "#part-iv", label: "Văn hóa - Xã hội" },
              { href: "#part-v", label: "Quốc phòng - Chính trị" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="text-xs text-muted-foreground">
            <p>Nguồn tham khảo: Văn kiện Đại hội XIII, Cổng Tư liệu - Văn kiện Đảng, World Bank, Bộ Công Thương</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

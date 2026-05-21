import { Share2, Download } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-16 md:py-20 bg-surface-container-lowest border-t-8 border-monument-grey">
      <div className="exhibition-container grid grid-cols-1 md:grid-cols-2 items-end gap-12">
        <div className="space-y-6">
          <div className="font-display text-2xl md:text-[32px] font-black text-on-surface tracking-tight">
            VIETNAM 40
          </div>
          <p className="text-on-surface-variant max-w-sm leading-relaxed">
            Sản phẩm sáng tạo học tập — Triển lãm kỹ thuật số tôn vinh 40 năm đổi mới và thành tựu
            xây dựng CNXH tại Việt Nam.
          </p>
          <div className="flex flex-wrap gap-6">
            {[
              { href: "#part-1", label: "Lý luận" },
              { href: "#part-2", label: "Bối cảnh" },
              { href: "#part-3", label: "Kinh tế" },
              { href: "#part-4", label: "Xã hội" },
              { href: "#part-5", label: "Chính trị" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-label-mono text-sm text-on-surface-variant hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="md:text-right">
          <div className="mb-6 flex md:justify-end gap-4">
            <button
              type="button"
              aria-label="Chia sẻ"
              className="w-12 h-12 rounded-full border border-monument-grey flex items-center justify-center hover:bg-revolutionary-red transition-colors text-on-surface"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Tải xuống"
              className="w-12 h-12 rounded-full border border-monument-grey flex items-center justify-center hover:bg-revolutionary-red transition-colors text-on-surface"
            >
              <Download className="w-5 h-5" />
            </button>
          </div>
          <p className="font-label-mono text-on-surface-variant uppercase tracking-widest text-xs">
            Nguồn: Văn kiện ĐH XIII · Cổng Tư liệu Đảng · World Bank
          </p>
          <p className="font-label-mono text-on-surface-variant uppercase tracking-widest text-xs mt-2">
            © 2026 · Chủ nghĩa Xã hội Khoa học · MLN131
          </p>
        </div>
      </div>
    </footer>
  )
}

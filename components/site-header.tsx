"use client"

const navItems = [
  { href: "#part-1", label: "Lý luận", active: true },
  { href: "#part-2", label: "Bối cảnh" },
  { href: "#part-3", label: "Kinh tế" },
  { href: "#part-4", label: "Xã hội" },
  { href: "#part-5", label: "Chính trị" },
]

export function SiteHeader() {
  const scrollToStart = () => {
    document.getElementById("part-1")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b-4 border-revolutionary-red site-header-enter">
      <nav className="flex justify-between items-center h-20 md:h-24 exhibition-container">
        <a
          href="#"
          className="font-display text-xl md:text-[32px] font-black tracking-tighter text-revolutionary-red transition-transform duration-300 hover:scale-[1.02]"
        >
          VIETNAM 40
        </a>
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={
                item.active
                  ? "text-golden-silk font-bold border-b-2 border-golden-silk pb-1 font-label-mono text-sm uppercase tracking-widest transition-all duration-300"
                  : "text-on-surface-variant font-label-mono text-sm uppercase tracking-widest hover:text-golden-silk hover:-translate-y-0.5 transition-all duration-300"
              }
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={scrollToStart}
          className="bg-revolutionary-red text-white px-4 md:px-8 py-2 md:py-3 font-label-mono text-xs md:text-sm uppercase tracking-widest hover:bg-golden-silk hover:text-black transition-all duration-300 active:opacity-80"
        >
          Khám phá
        </button>
      </nav>
    </header>
  )
}

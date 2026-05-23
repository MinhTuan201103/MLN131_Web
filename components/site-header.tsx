"use client"

export function SiteHeader() {
  return (
    <header className="absolute top-0 w-full z-50 bg-transparent site-header-enter">
      <nav className="flex items-center justify-between h-20 md:h-24 exhibition-container">
        <a
          href="#"
          className="flex items-center justify-start shrink-0 transition-transform duration-300 hover:scale-[1.01]"
          aria-label="FPT University"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/fpt-university-logo-fpt.png"
            alt="FPT University"
            className="h-12 w-36 object-contain drop-shadow-[0_8px_18px_rgb(255_255_255_/_0.75)] md:h-[72px] md:w-[220px]"
          />
        </a>
        <a
          href="#"
          className="flex items-center justify-end shrink-0 gap-3 transition-transform duration-300 hover:scale-[1.01]"
          aria-label="Cờ Đảng và Cờ Việt Nam"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/dang.png"
            alt="Cờ Đảng"
            className="h-12 w-16 object-contain drop-shadow-[0_8px_18px_rgb(255_255_255_/_0.75)] md:h-16 md:w-24"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/vn.webp"
            alt="Cờ Việt Nam"
            className="h-12 w-16 object-contain drop-shadow-[0_8px_18px_rgb(255_255_255_/_0.75)] md:h-16 md:w-24"
          />
        </a>
      </nav>
    </header>
  )
}

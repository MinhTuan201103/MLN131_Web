import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

/** Tiêu đề — Montserrat Bold / ExtraBold / Black */
const montserrat = Montserrat({
  subsets: ['latin', 'vietnamese'],
  weight: ['700', '800', '900'],
  variable: '--font-display-family',
})

/** Nội dung — Inter Regular */
const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'VIETNAM 40 | Thành tựu xây dựng Chủ nghĩa Xã hội sau 40 năm Đổi mới',
  description:
    'Thành tựu xây dựng Chủ nghĩa Xã hội sau 40 năm Đổi mới tại Việt Nam — Triển lãm kỹ thuật số',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="bg-background text-on-surface font-sans font-normal">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

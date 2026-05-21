import type { Metadata } from 'next'
import { Montserrat, JetBrains_Mono, Libre_Franklin } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin', 'vietnamese'],
  weight: ['700', '800', '900'],
  variable: '--font-display-family',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'vietnamese'],
  weight: ['500'],
  variable: '--font-mono-label',
})

const libreFranklin = Libre_Franklin({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '600'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'VIETNAM 40 | Kỷ Nguyên Vươn Mình',
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
    <html lang="vi" className={`${montserrat.variable} ${jetbrainsMono.variable} ${libreFranklin.variable}`}>
      <body className="bg-background text-on-surface">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

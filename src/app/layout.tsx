import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const nunitoSans = Nunito_Sans({ subsets: ['latin'], variable: '--font-nunito_sans', display: 'swap' })

export const metadata: Metadata = {
  title: {
    template: '%s | BookWise',
    default: 'bookWise'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={nunitoSans.variable}>
      <body>{children}</body>
    </html>
  )
}

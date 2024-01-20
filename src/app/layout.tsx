import './globals.css'

import type { Metadata } from 'next'
import { Nunito_Sans as NunitoSans } from 'next/font/google'

const nunitoSans = NunitoSans({
  subsets: ['latin'],
  variable: '--font-nunito_sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | BookWise',
    default: 'BookWise',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={nunitoSans.variable}>
      <body className="bg-bw-gray-800 text-bw-gray-100 antialiased">
        {children}
        <div id="modal-root" />
      </body>
    </html>
  )
}

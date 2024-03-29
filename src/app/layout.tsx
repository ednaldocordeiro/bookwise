import './globals.css'

import type { Metadata } from 'next'
import { Nunito_Sans as NunitoSans } from 'next/font/google'

import { SessionProvider } from '@/contexts/session'
import { serverSession } from '@/lib/auth/get-server-session'

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await serverSession()
  return (
    <html lang="pt" className={nunitoSans.variable}>
      <body className="bg-bw-gray-800 text-bw-gray-100 antialiased">
        <SessionProvider session={session}>
          {children}
          <div id="modal-root" />
        </SessionProvider>
      </body>
    </html>
  )
}

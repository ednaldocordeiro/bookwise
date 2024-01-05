import { ReactNode } from 'react'

import { SideBar } from '@/components/sidebar'

export default async function AppLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-screen gap-6">
      <div className="p-5">
        <SideBar />
      </div>
      <div className="flex-1 overflow-y-scroll">{children}</div>
    </main>
  )
}

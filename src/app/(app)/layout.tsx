import { ReactNode } from 'react'

import { SideBar } from '@/components/sidebar'

export default async function AppLayout({ children }: { children: ReactNode }) {
  return (
    <main className="grid h-screen grid-cols-6 gap-6">
      <div className="col-span-1 p-5">
        <SideBar />
      </div>
      <div className="col-span-5 overflow-y-scroll">{children}</div>
    </main>
  )
}

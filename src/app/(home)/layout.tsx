import { LineChart, LogOut, Search, User } from 'lucide-react'
import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { ReactNode } from 'react'

import { authOptions } from '../api/auth/[...nextauth]/auth-options'

export default async function HomeLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <main className="flex h-screen gap-6 p-5">
      <aside className="bg-sidebar flex h-full w-[320px] flex-col items-center gap-12 rounded-lg bg-cover bg-no-repeat p-10">
        <Image src="/logo.svg" alt="" width={150} height={40} />
        <div className="flex w-full flex-1 flex-col items-start">
          <div className="relative flex w-full items-end gap-4 p-4 before:absolute before:left-0 before:inline-block before:h-6 before:w-[5px] before:rounded-md before:bg-bw-gradient-vertical before:content-['']">
            <LineChart />
            <span>Início</span>
          </div>
          <div className="relative flex w-full items-end gap-4 p-4 ">
            <Search />
            <span>Buscar</span>
          </div>
          <div className="relative flex w-full items-end gap-4 p-4 ">
            <User />
            <span>Perfil</span>
          </div>
        </div>
        {session && session.user && (
          <div className="flex items-center gap-3">
            <Image
              src={session?.user.image ?? ''}
              alt=""
              width={60}
              height={60}
              className="h-8 w-8 rounded-full"
            />
            <span>{session?.user.name}</span>
            <LogOut className="text-red-500" />
          </div>
        )}
      </aside>
      {children}
    </main>
  )
}

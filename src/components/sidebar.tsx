import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options'
import { Routes } from '@/components/routes'

export async function SideBar() {
  const session = await getServerSession(authOptions)
  return (
    <aside className="m-w-[320px] flex h-full flex-col items-center gap-12 rounded-lg bg-sidebar bg-cover bg-no-repeat p-10">
      <Image src="/logo.svg" alt="" width={150} height={40} />
      <Routes session={session} />
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
  )
}

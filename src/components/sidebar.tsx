import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { getServerSession } from 'next-auth'

import { Routes } from '@/app/(app)/(home)/routes'
import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options'

export async function SideBar() {
  const session = await getServerSession(authOptions)
  return (
    <aside className="col-span-1 flex h-full w-[320px] flex-col items-center gap-12 rounded-lg bg-sidebar bg-cover bg-no-repeat p-10">
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

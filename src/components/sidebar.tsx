import Image from 'next/image'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options'
import { Routes } from '@/components/routes'

import { UserLogoutButton } from './user-logout-button'

export async function SideBar() {
  const session = await getServerSession(authOptions)
  return (
    <aside className="m-w-[320px] flex h-full flex-col items-center gap-12 rounded-lg bg-sidebar bg-cover bg-no-repeat p-10">
      <Image src="/logo.svg" alt="" width={150} height={40} />
      <Routes session={session} />
      {session && session.user && <UserLogoutButton session={session} />}
    </aside>
  )
}

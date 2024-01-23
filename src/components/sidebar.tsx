import Image from 'next/image'

import { Routes } from '@/components/routes'

import { UserLogoutButton } from './user-logout-button'

export async function SideBar() {
  return (
    <aside className="m-w-[320px] flex h-full flex-col items-center gap-12 rounded-lg bg-sidebar bg-cover bg-no-repeat p-10">
      <Image src="/logo.svg" alt="" width={150} height={40} />
      <Routes />
      <UserLogoutButton />
    </aside>
  )
}

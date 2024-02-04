import Image from 'next/image'

import { Routes } from '@/components/routes'

import { UserLogoutButton } from './user-logout-button'

export async function SideBar() {
  return (
    <aside className="flex h-full w-[320px] flex-col items-center gap-12 rounded-lg bg-sidebar bg-cover bg-no-repeat p-10 max-lg:w-full max-lg:flex-row max-lg:rounded-none max-lg:px-6 max-lg:py-0">
      <Image
        src="/logo.svg"
        alt=""
        width={150}
        height={40}
        className="h-auto w-auto max-xl:h-8 max-xl:w-28"
      />
      <Routes />
      <UserLogoutButton />
    </aside>
  )
}

'use client'

import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'

export function UserLogoutButton() {
  const { data } = useSession()

  async function handleSignOut() {
    await signOut({
      redirect: true,
      callbackUrl: '/',
    })
  }

  return (
    <button
      className="flex items-center gap-3 bg-transparent"
      onClick={handleSignOut}
    >
      <Image
        src={data?.user.image ?? ''}
        alt=""
        width={60}
        height={60}
        className="h-8 w-8 rounded-full"
      />
      <span>{data?.user.name}</span>
      <LogOut className="text-red-500" />
    </button>
  )
}

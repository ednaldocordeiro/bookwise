'use client'

import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'

interface UserLogoutButtonProps {
  session: Session | null
}

export function UserLogoutButton({ session }: UserLogoutButtonProps) {
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
        src={session?.user.image ?? ''}
        alt=""
        width={60}
        height={60}
        className="h-8 w-8 rounded-full"
      />
      <span>{session?.user.name}</span>
      <LogOut className="text-red-500" />
    </button>
  )
}

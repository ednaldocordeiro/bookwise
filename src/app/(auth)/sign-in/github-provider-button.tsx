'use client'

import Image from 'next/image'
import { signIn } from 'next-auth/react'

export function GithubProviderButton() {
  async function handleSignIn() {
    await signIn('github')
  }

  return (
    <button
      className="flex w-full gap-5 rounded-lg bg-gray-600 px-6 py-4 transition hover:bg-gray-500"
      onClick={handleSignIn}
    >
      <Image
        src="/github-logo.png"
        alt=""
        width={20}
        height={20}
        className="h-5 w-5"
      />
      <p className="font-bold">Entrar com o Github</p>
    </button>
  )
}

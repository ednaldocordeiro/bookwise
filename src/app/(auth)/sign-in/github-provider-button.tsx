'use client'

import Image from 'next/image'
import { signIn, SignInOptions } from 'next-auth/react'

interface GithubProviderButtonProps {
  signInOptions?: SignInOptions
}

export function GithubProviderButton({
  signInOptions,
}: GithubProviderButtonProps) {
  async function handleSignIn() {
    await signIn('github', signInOptions)
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
      <p className="font-bold text-bw-gray-200">Entrar com o Github</p>
    </button>
  )
}

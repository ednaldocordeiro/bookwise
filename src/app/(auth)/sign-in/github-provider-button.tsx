'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { signIn, SignInOptions, useSession } from 'next-auth/react'

import { env } from '@/env'

interface GithubProviderButtonProps {
  signInOptions?: SignInOptions
}

export function GithubProviderButton({
  signInOptions,
}: GithubProviderButtonProps) {
  const { status } = useSession()
  const searchParams = useSearchParams()

  const basePath = env.NEXT_PUBLIC_API_BASE_URL

  const callbackUrlPath = searchParams.get('callbackUrl')
  const callbackUrl = callbackUrlPath
    ? new URL(callbackUrlPath, basePath).toString()
    : undefined

  const options: SignInOptions = signInOptions ?? {
    callbackUrl: callbackUrl || '/home',
    redirect: true,
  }

  async function handleSignIn() {
    await signIn('github', options)
  }

  return (
    <button
      className="flex w-full gap-5 rounded-lg bg-gray-600 px-6 py-4 transition hover:bg-gray-500"
      onClick={handleSignIn}
      disabled={status === 'loading'}
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

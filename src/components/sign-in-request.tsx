'use client'

import { usePathname } from 'next/navigation'
import { memo } from 'react'

import { GithubProviderButton } from '@/app/(auth)/sign-in/github-provider-button'
import { GoogleProviderButton } from '@/app/(auth)/sign-in/google-provider-button'

function SignInRequestComponent() {
  const path = usePathname()
  const basePath = process.env.NEXT_PUBLIC_API_BASE_URL

  const callbackUrl = new URL(path, basePath)

  return (
    <div className="absolute flex h-full w-full flex-col justify-center gap-10 rounded-lg bg-bw-gray-700/40 px-8 py-6 backdrop-blur-md">
      <div className="mx-auto flex flex-col items-center justify-center gap-5">
        <GoogleProviderButton
          signInOptions={{
            redirect: true,
            callbackUrl: callbackUrl.href,
          }}
        />
        <GithubProviderButton
          signInOptions={{
            redirect: true,
            callbackUrl: callbackUrl.href,
          }}
        />
      </div>
    </div>
  )
}

export const SignInRequest = memo(SignInRequestComponent)

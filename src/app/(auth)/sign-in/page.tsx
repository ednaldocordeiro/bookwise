import { Metadata } from 'next'
import Image from 'next/image'

import { GithubProviderButton } from './github-provider-button'
import { GoogleProviderButton } from './google-provider-button'
import { VisitorAccess } from './visitor-access-button'

export const metadata: Metadata = {
  title: 'Sign-In',
}

export default async function SignInPage() {
  return (
    <div className="relative flex h-screen gap-6 p-5">
      <div className="flex h-full items-center justify-center max-lg:hidden">
        <Image
          className="h-full w-[620px] rounded-2xl object-cover"
          src="/login-image.svg"
          alt=""
          quality={100}
          width={600}
          height={900}
          priority
        />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="max-2xl flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col gap-1 text-left">
            <h1 className="text-2xl font-semibold ">Boas vindas!</h1>
            <p>Faça seu login ou acesse como visitante.</p>
          </div>
          <div className="flex w-full flex-col items-center gap-4">
            <GoogleProviderButton />
            <GithubProviderButton />
            <VisitorAccess />
          </div>
        </div>
      </div>
    </div>
  )
}

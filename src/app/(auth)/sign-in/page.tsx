import Image from 'next/image'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options'

import { GithubProviderButton } from './github-provider-button'
import { GoogleProviderButton } from './google-provider-button'
import { VisitorAccess } from './visitor-access-button'

export default async function SignInPage() {
  const session = await getServerSession(authOptions)

  if (session !== null) {
    redirect('/home')
  }

  return (
    <div className="flex h-screen gap-6 p-5">
      <div className="flex h-full items-center justify-center">
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

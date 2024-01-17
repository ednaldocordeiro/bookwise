import { User } from 'lucide-react'
import { getServerSession } from 'next-auth'
import { Suspense } from 'react'

import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options'
import { LoaderUserInfo } from '@/components/content-loaders/user-info'

import { SearchForm } from '../search-form'
import { UserInfo } from '../user-info'

export default async function Profile() {
  const session = await getServerSession(authOptions)

  return (
    <div className="mx-auto my-0 flex h-screen max-w-[1600px] flex-1 flex-col p-10">
      <header className="sticky top-0 mt-5 flex items-center gap-3 bg-bw-gray-800/15 py-3 backdrop-blur-md">
        <User className="text-3xl text-bw-green-100" />
        <h1 className="text-2xl font-bold leading-tight">Perfil</h1>
      </header>
      <div className="mb-5 mt-7 grid h-full grid-cols-3 gap-16">
        <div className="col-span-2 h-full w-full">
          <SearchForm />
        </div>
        <div className="col-span-1 h-full w-full border-l-2 border-l-bw-gray-700">
          <Suspense fallback={<LoaderUserInfo />}>
            <UserInfo userId={session?.user.id} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

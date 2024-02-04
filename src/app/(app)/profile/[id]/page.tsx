import { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { Suspense } from 'react'

import { LoaderUserInfo } from '@/components/content-loaders/user-info'
import { LoaderUserRatings } from '@/components/content-loaders/user-ratings'
import { serverSession } from '@/lib/auth/get-server-session'

import { UserRatingsSearchParams } from '../page'
import { SearchForm } from '../search-form'
import { UserInfo } from '../user-info'
import { UserRatings } from '../user-ratings'
import { BackButton } from './back-button'

interface BookPageProps {
  params: {
    id: string
  }
  searchParams: UserRatingsSearchParams
}

export const metadata: Metadata = {
  title: 'Perfil',
}

export default async function ProfilePage({
  params,
  searchParams,
}: BookPageProps) {
  const session = await serverSession()

  if (!session) {
    redirect('/sign-in')
  }
  return (
    <div className="mx-auto my-0 flex h-screen max-w-[1600px] flex-1 flex-col p-10 max-xl:p-6">
      <header className="sticky top-0 mt-5 flex items-center gap-3 bg-bw-gray-800/15 py-3 backdrop-blur-md">
        <BackButton />
      </header>
      <div className="mb-5 mt-7 grid grid-cols-3 gap-16 max-2xl:grid-cols-5 max-xl:grid-cols-5 max-xl:gap-10 max-lg:flex max-lg:grid-cols-none max-lg:flex-col-reverse">
        <div className="col-span-2 flex h-full w-full flex-col gap-8 max-2xl:col-span-3 max-xl:col-span-3">
          <SearchForm />
          <Suspense fallback={<LoaderUserRatings />}>
            <UserRatings userId={params.id} searchParams={searchParams} />
          </Suspense>
        </div>
        <div className="col-span-1 h-full w-full border-l-2 border-l-bw-gray-700 max-2xl:col-span-2 max-xl:col-span-2 max-lg:h-1/2 max-lg:border-l-0">
          <Suspense fallback={<LoaderUserInfo />}>
            <UserInfo userId={params.id} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

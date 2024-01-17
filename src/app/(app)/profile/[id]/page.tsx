import { ChevronLeft, User } from 'lucide-react'
import { Suspense } from 'react'

import { LoaderUserInfo } from '@/components/content-loaders/user-info'

import { SearchForm } from '../search-form'
import { UserInfo } from '../user-info'
import { BackButton } from './back-button'

interface BookPageProps {
  params: {
    id: string
  }
}

export default function ProfilePage({ params }: BookPageProps) {
  return (
    <div className="mx-auto my-0 flex h-screen max-w-[1600px] flex-1 flex-col p-10">
      <header className="sticky top-0 mt-5 flex items-center gap-3 bg-bw-gray-800/15 py-3 backdrop-blur-md">
        <BackButton />
      </header>
      <div className="mb-5 mt-7 grid h-full grid-cols-3 gap-16">
        <div className="col-span-2 h-full w-full">
          <SearchForm />
        </div>
        <div className="col-span-1 h-full w-full border-l-2 border-l-bw-gray-700">
          <Suspense fallback={<LoaderUserInfo />}>
            <UserInfo userId={params.id} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
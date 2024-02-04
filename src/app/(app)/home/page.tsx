import { LineChart } from 'lucide-react'
import { Metadata } from 'next'
import { Suspense } from 'react'

import { LoadFeed } from '@/components/content-loaders/feed'
import { LoaderPopularBooks } from '@/components/content-loaders/popular-books'

import { Feed } from './feed'
import { PopularBooks } from './popular-books'

export const metadata: Metadata = {
  title: 'Início',
}

export default async function Home() {
  return (
    <div className="mx-auto my-0 flex max-w-[1600px] flex-1 flex-col p-10 max-xl:p-6 max-lg:max-w-[800px]">
      <header className="sticky top-0 z-30 mt-5 flex items-center gap-3 bg-bw-gray-800/15 py-3 backdrop-blur-md">
        <LineChart className="text-3xl text-bw-green-100" />
        <h1 className="text-2xl font-bold leading-tight">Início</h1>
      </header>
      <div className="mb-5 mt-7 grid grid-cols-3 gap-16 max-2xl:grid-cols-5 max-xl:grid-cols-5 max-xl:gap-10 max-lg:flex max-lg:grid-cols-none max-lg:flex-col">
        <div className="col-span-2 h-full w-full max-2xl:col-span-3 max-xl:col-span-3">
          <Suspense fallback={<LoadFeed />}>
            <Feed />
          </Suspense>
        </div>
        <div className="col-span-1 h-full w-full max-2xl:col-span-2 max-xl:col-span-2">
          <Suspense fallback={<LoaderPopularBooks />}>
            <PopularBooks />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

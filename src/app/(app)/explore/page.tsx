import { Search } from 'lucide-react'
import { Metadata } from 'next'
import { Suspense } from 'react'

import { LoaderBooks } from '@/components/content-loaders/books'
import { LoaderCategories } from '@/components/content-loaders/categories'

import { BooksList } from './books-list'
import { CategoriesWrapper } from './categories-wrapper'
import { SearchForm } from './search-form'

export type ExploreSearchParams = {
  category?: string
  q?: string
}
interface ExploreProps {
  searchParams: ExploreSearchParams
}

export const metadata: Metadata = {
  title: 'Explorar',
}

export default function Explore({ searchParams }: ExploreProps) {
  return (
    <div className="mx-auto my-0 flex max-w-[1600px] flex-1 flex-col p-10 max-xl:p-6">
      <header className="sticky top-0 flex items-center justify-between gap-3 bg-bw-gray-800 max-sm:flex-col max-sm:items-start max-sm:py-3">
        <div className="mt-5 flex items-center gap-3 bg-bw-gray-800/15 py-3">
          <Search className="text-3xl text-bw-green-100" />
          <h1 className="text-2xl font-bold leading-tight">Explorar</h1>
        </div>
        <SearchForm />
      </header>
      <div className="mt-8 flex h-full w-full flex-col gap-6">
        <Suspense fallback={<LoaderCategories />}>
          <CategoriesWrapper />
        </Suspense>
        <Suspense fallback={<LoaderBooks />}>
          <BooksList searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  )
}

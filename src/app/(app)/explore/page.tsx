import { Search } from 'lucide-react'

import { BooksList } from './books-list'
import { CategoriesWrapper } from './categories-wrapper'
import { SearchForm } from './search-form'

interface ExploreProps {
  searchParams: {
    category?: 'string'
  }
}

export default function Explore({ searchParams }: ExploreProps) {
  return (
    <div className="mx-auto my-0 flex max-w-[1600px] flex-1 flex-col p-10">
      <header className="sticky top-0 flex items-center justify-between gap-3 backdrop-blur-md">
        <div className="mt-5 flex items-center gap-3 bg-bw-gray-800/15 py-3">
          <Search className="text-3xl text-bw-green-100" />
          <h1 className="text-2xl font-bold leading-tight">Explorar</h1>
        </div>
        <SearchForm />
      </header>
      <div className="mt-8 flex h-full w-full flex-col gap-6">
        <CategoriesWrapper />
        <BooksList category={searchParams.category} />
      </div>
    </div>
  )
}

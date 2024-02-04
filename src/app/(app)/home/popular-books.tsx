import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { BooksList } from './books-list'

export function PopularBooks() {
  return (
    <section className="flex h-full flex-col items-center">
      <div className="sticky top-20 flex w-full flex-col gap-4 max-2xl:top-16 max-lg:static">
        <div className="flex w-full justify-between">
          <h2 className="flex text-left text-sm text-bw-gray-100">
            Livros populares
          </h2>
          <Link
            prefetch={false}
            href="/explore"
            className="flex items-center gap-2 text-sm text-bw-purple-100"
          >
            <span>Ver todos</span>
            <ChevronRight className="size-4" />
          </Link>
        </div>
        <BooksList />
      </div>
    </section>
  )
}

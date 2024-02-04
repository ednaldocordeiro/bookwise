import { Metadata } from 'next'
import { Suspense } from 'react'

import { LoaderBookInfo } from '@/components/content-loaders/book-info'
import { LoadRatings } from '@/components/content-loaders/ratings'
import { RatingProvider } from '@/contexts/rating'
import { Book } from '@/data/books'
import { api } from '@/utils/api'

import { BookInfo } from './book-info'
import { RatingList } from './rating-list'

interface BookPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params,
}: BookPageProps): Promise<Metadata> {
  const bookId = params.id

  const response = await api(`/books/${bookId}`, {
    next: {
      tags: ['book'],
    },
  })

  const data: { book: Book } = await response.json()

  return {
    title: data.book.name,
    description: data.book.summary,
  }
}

export default async function BookPage({ params }: BookPageProps) {
  return (
    <div className="mx-auto my-0 flex max-w-4xl flex-1 flex-col gap-10 p-10 max-xl:p-6">
      <Suspense fallback={<LoaderBookInfo />}>
        <BookInfo id={params.id} />
      </Suspense>
      <RatingProvider>
        <Suspense fallback={<LoadRatings />}>
          <RatingList bookId={params.id} />
        </Suspense>
      </RatingProvider>
    </div>
  )
}

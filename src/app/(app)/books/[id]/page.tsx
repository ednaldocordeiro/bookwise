import { Metadata } from 'next'
import { Suspense } from 'react'

import { LoaderBookInfo } from '@/components/content-loaders/book-info'
import { LoadRatings } from '@/components/content-loaders/ratings'
import { RatingProvider } from '@/contexts/rating'

import { BookInfo } from './book-info'
import { RatingList } from './rating-list'

interface BookPageProps {
  params: {
    id: string
  }
}

export const metadata: Metadata = {
  title: 'Livro',
}

export default async function BookPage({ params }: BookPageProps) {
  return (
    <div className="mx-auto my-0 flex max-w-4xl flex-1 flex-col gap-10 p-10">
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

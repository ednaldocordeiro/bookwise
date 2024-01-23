import { Suspense } from 'react'

import { LoadRatings } from '@/components/content-loaders/ratings'

import { BookInfo } from './book-info'
import { RatingList } from './rating-list'

interface BookPageProps {
  params: {
    id: string
  }
}

export default async function BookPage({ params }: BookPageProps) {
  return (
    <div className="mx-auto my-0 flex max-w-4xl flex-1 flex-col gap-10 p-10">
      <BookInfo id={params.id} />
      <Suspense fallback={<LoadRatings />}>
        <RatingList bookId={params.id} />
      </Suspense>
    </div>
  )
}

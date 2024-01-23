import { Suspense } from 'react'

import { BookInfo } from '@/app/(app)/books/[id]/book-info'
import { RatingList } from '@/app/(app)/books/[id]/rating-list'
import { LoaderBookInfo } from '@/components/content-loaders/book-info'
import { LoadRatings } from '@/components/content-loaders/ratings'
import { Modal } from '@/components/modal'

interface BookPageProps {
  params: {
    id: string
  }
}

export default async function BookPage({ params }: BookPageProps) {
  return (
    <Modal>
      <div className="flex max-w-4xl flex-1 flex-col gap-10 overflow-y-scroll px-3">
        <Suspense fallback={<LoaderBookInfo />}>
          <BookInfo id={params.id} />
        </Suspense>
        <Suspense fallback={<LoadRatings />}>
          <RatingList bookId={params.id} />
        </Suspense>
      </div>
    </Modal>
  )
}

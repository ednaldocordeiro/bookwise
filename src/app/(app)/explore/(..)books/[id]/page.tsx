import { Suspense } from 'react'

import { BookCard } from '@/app/(app)/books/[id]/book-card'
import { RatingList } from '@/app/(app)/books/[id]/rating-list'
import { LoadRatings } from '@/components/content-loaders/ratings'
import { Modal } from '@/components/modal'
import { Book } from '@/data/books'
import { api } from '@/utils/api'

interface BookPageProps {
  params: {
    id: string
  }
}

async function getBook(
  id: string,
): Promise<{ message?: string; book: Book | null }> {
  try {
    const response = await api(`/books/${id}`, {
      next: {
        revalidate: 60 * 60, // 1 hour
      },
    })

    const data = await response.json()

    return data
  } catch (error) {
    return {
      book: null,
      message: 'Não foi possível encontrar o livro.',
    }
  }
}

export default async function BookPage({ params }: BookPageProps) {
  const data = await getBook(params.id)

  return (
    <Modal>
      <div className="flex max-w-4xl flex-1 flex-col gap-10 overflow-y-scroll px-3">
        <div className="flex h-full w-full flex-col gap-6">
          {data.book && <BookCard {...data.book} />}
        </div>
        <Suspense fallback={<LoadRatings />}>
          <RatingList bookId={params.id} />
        </Suspense>
      </div>
    </Modal>
  )
}

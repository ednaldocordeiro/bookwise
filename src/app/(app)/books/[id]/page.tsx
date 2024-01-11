import { Book } from '@/data/books'
import { api } from '@/utils/api'

import { BookCard } from './book-card'

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
    <div className="mx-auto my-0 flex max-w-4xl flex-1 flex-col p-10">
      <div className="mt-8 flex h-full w-full flex-col gap-6">
        {data.book && <BookCard {...data.book} />}
      </div>
    </div>
  )
}

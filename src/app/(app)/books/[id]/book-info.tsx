import { Bookmark, BookOpen, Star } from 'lucide-react'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Book } from '@/data/books'
import { api } from '@/utils/api'

interface BookInfoProps {
  id: string
}

async function getBook(
  id: string,
): Promise<{ message?: string; book: Book | null }> {
  try {
    const response = await api(`/books/${id}`, {
      next: {
        tags: ['book'],
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

export async function BookInfo({ id }: BookInfoProps) {
  const { book } = await getBook(id)

  if (!book) {
    notFound()
  }

  return (
    <div className="flex w-full flex-col gap-10 rounded-lg border-2 border-solid border-transparent bg-bw-gray-700 px-8 py-6 transition hover:border-bw-gray-600">
      <div className="flex gap-5 max-sm:flex-col">
        <Image
          src={book.cover_url}
          alt=""
          width={700}
          height={900}
          className="flex w-[175px] rounded-lg object-cover max-sm:h-52 max-sm:w-full"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="line-clamp-3 text-xl font-bold text-bw-gray-100 hover:text-bw-purple-100">
              {book.name}
            </h1>
            <span className="text-bw-gray-400">{book.author}</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => {
                return (
                  <Star
                    key={index}
                    className="text-bw-purple-100 max-sm:h-4 max-sm:w-4"
                    fill={index + 1 <= book.rate ? '#8381D9' : 'transparent'}
                  />
                )
              })}
            </div>
            <span className="text-sm text-bw-gray-400">
              {book.rates_count}{' '}
              {book.rates_count > 1 ? 'avaliações' : 'avaliação'}
            </span>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-wrap gap-14 border-t-2 border-bw-gray-600 py-6 max-sm:gap-10">
        <div className="flex items-center gap-4">
          <Bookmark className="text-bw-green-100" />
          <div>
            <span className="text-bw-gray-300">Categoria</span>
            <h1 className="line-clamp-3 text-xl font-bold text-bw-gray-100">
              {book.categories.map((category) => category.name).join(', ')}
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <BookOpen className="text-bw-green-100" />
          <div>
            <span className="text-bw-gray-300">Páginas</span>
            <h1 className="line-clamp-3 text-xl font-bold text-bw-gray-100">
              {book.total_pages}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

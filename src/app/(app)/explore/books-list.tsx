import { BookCard } from '@/components/book-card'
import { Book } from '@/data/popular-books'
import { api } from '@/utils/api'

interface BooksListProps {
  category?: string
}

async function getPopularBook(
  category?: string,
): Promise<{ message?: string; books: Book[] } | undefined> {
  try {
    const response = await api(`/books?category=${category}`, {
      next: {
        revalidate: 60 * 30, // 30 min
      },
    })
    const books = await response.json()

    return books
  } catch (error) {
    return {
      books: [],
      message: 'Não foi possível carregar os livros',
    }
  }
}

export async function BooksList({ category }: BooksListProps) {
  const data = await getPopularBook(category)

  return (
    <div className="grid grid-cols-4 gap-5 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1">
      {data?.books &&
        data?.books?.map((book) => {
          return (
            <div key={book.id} className="col-span-1 h-full w-full">
              <BookCard {...book} />
            </div>
          )
        })}
    </div>
  )
}

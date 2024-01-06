import { BookCard } from '@/components/book-card'
import { Book } from '@/data/popular-books'
import { api } from '@/utils/api'

async function getPopularBook(): Promise<Book[] | undefined> {
  try {
    const response = await api('/books/popular', {
      next: {
        revalidate: 60 * 30, // 30 min
      },
    })
    const books = response.json()

    console.log(response)

    if (response.status !== 200) throw new Error()

    return books
  } catch (error) {
    return []
  }
}

export async function BooksList() {
  const books = await getPopularBook()
  return (
    <div className="flex w-full flex-col gap-3">
      {books &&
        books?.map((book) => {
          return <BookCard key={book.id} {...book} />
        })}
    </div>
  )
}

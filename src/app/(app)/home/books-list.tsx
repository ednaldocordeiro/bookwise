import { Star } from 'lucide-react'
import Image from 'next/image'

import { PopularBook } from '@/data/popular-books'
import { api } from '@/utils/api'

async function getPopularBook(): Promise<PopularBook[] | undefined> {
  try {
    const response = await api('/books/popular')
    const books = response.json()

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
          return (
            <div
              key={book.id}
              className="flex gap-5 rounded-lg border-2 border-solid border-transparent bg-bw-gray-700 px-5 py-4 transition hover:border-bw-gray-600"
            >
              <Image
                src={book.cover_url}
                alt=""
                width={500}
                height={700}
                className="flex w-[100px] rounded-lg object-cover"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h1 className="text-xl font-bold text-bw-gray-100">
                    {book.name}
                  </h1>
                  <span className="text-bw-gray-400">{book.author}</span>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => {
                    return (
                      <Star
                        key={index}
                        className="text-bw-purple-100"
                        fill={
                          index + 1 <= book.rate ? '#8381D9' : 'transparent'
                        }
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

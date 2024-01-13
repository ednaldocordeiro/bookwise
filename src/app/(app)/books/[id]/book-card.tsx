import { Book as LRBook, Bookmark, Star } from 'lucide-react'
import Image from 'next/image'

import { Book } from '@/data/books'

type BookCardProps = Book

export function BookCard(props: BookCardProps) {
  return (
    <div className="flex flex-col gap-10 rounded-lg border-2 border-solid border-transparent bg-bw-gray-700 px-8 py-6 transition hover:border-bw-gray-600">
      <div className="flex gap-5">
        <Image
          src={props.cover_url}
          alt=""
          width={700}
          height={900}
          className="flex w-[175px] rounded-lg object-cover"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="line-clamp-3 text-xl font-bold text-bw-gray-100 hover:text-bw-purple-100">
              {props.name}
            </h1>
            <span className="text-bw-gray-400">{props.author}</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => {
                return (
                  <Star
                    key={index}
                    className="text-bw-purple-100"
                    fill={index + 1 <= props.rate ? '#8381D9' : 'transparent'}
                  />
                )
              })}
            </div>
            <span className="text-sm text-bw-gray-400">
              {props.rates_count}{' '}
              {props.rates_count > 1 ? 'avaliações' : 'avaliação'}
            </span>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-wrap gap-14 border-t-2 border-bw-gray-600 py-6">
        <div className="flex items-center gap-4">
          <Bookmark className="text-bw-green-100" />
          <div>
            <span className="text-bw-gray-300">Categoria</span>
            <h1 className="line-clamp-3 text-xl font-bold text-bw-gray-100">
              {props.categories.map((category) => category.name).join(', ')}
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <LRBook className="text-bw-green-100" />
          <div>
            <span className="text-bw-gray-300">Páginas</span>
            <h1 className="line-clamp-3 text-xl font-bold text-bw-gray-100">
              {props.total_pages}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

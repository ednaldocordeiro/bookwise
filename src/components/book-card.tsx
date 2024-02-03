import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { PopularBook } from '@/data/books'

interface BookCardProps extends PopularBook {
  onPress?: (id: string) => void
}

export function BookCard(props: BookCardProps) {
  return (
    <div
      key={props.id}
      className="flex gap-5 rounded-lg border-2 border-solid border-transparent bg-bw-gray-700 px-5 py-4 transition hover:border-bw-gray-600"
    >
      <Image
        src={props.cover_url}
        alt=""
        width={500}
        height={700}
        className="flex w-[100px] rounded-lg object-cover"
      />
      <div className="flex flex-col justify-between">
        <div>
          <Link
            prefetch={false}
            href={`/books/${props.id}`}
            className="line-clamp-3 text-xl font-bold text-bw-gray-100 hover:text-bw-purple-100"
            passHref
          >
            {props.name}
          </Link>
          <span className="text-bw-gray-400">{props.author}</span>
        </div>
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
      </div>
    </div>
  )
}

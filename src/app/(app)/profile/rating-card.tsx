import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { BookRating } from '@/data/ratings'

dayjs.extend(relativeTime)
dayjs.locale('pt-BR')

type RatingCardProps = BookRating

export function RatingCard(props: RatingCardProps) {
  return (
    <div>
      <time className="text-sm" dateTime={dayjs(props.created_at).toString()}>
        {dayjs().to(dayjs(props.created_at))}
      </time>
      <div className="flex flex-col gap-10 rounded-lg border-2 border-solid border-transparent bg-bw-gray-700 p-6 transition hover:border-bw-gray-600">
        <div className="flex gap-5">
          <Image
            src={props.book.cover_url}
            alt=""
            width={500}
            height={700}
            className="flex w-28 rounded-lg object-cover"
          />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <Link
                href={`/books/${props.book.id}`}
                className="line-clamp-3 text-xl font-bold text-bw-gray-100 hover:text-bw-purple-100"
              >
                {props.book.name}
              </Link>
              <span className="text-bw-gray-400">{props.book.author}</span>
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
            </div>
          </div>
        </div>
        <div>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

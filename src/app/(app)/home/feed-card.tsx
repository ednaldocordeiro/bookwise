import 'dayjs/locale/pt-br'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Avatar } from '@/components/avatar'
import { FeedItem } from '@/data/feed'

dayjs.extend(relativeTime)
dayjs.locale('pt-BR')

type FeedCardProps = FeedItem

export async function FeedCard(props: FeedCardProps) {
  return (
    <div className="flex w-full flex-col gap-8 rounded-lg border-2 border-solid border-transparent bg-bw-gray-700 p-6 transition hover:border-bw-gray-500">
      <header className="flex items-center justify-between">
        <div className="flex flex-1 items-center gap-4">
          <Avatar
            image={props.user.image}
            redirectToProfile
            userId={props.user_id}
          />
          <div className="flex flex-col">
            <Link
              href={`/profile/${props.user_id}`}
              className="text-base text-bw-gray-100 hover:text-bw-purple-100"
              prefetch={false}
            >
              {props.user.name}
            </Link>
            <span className="text-sm text-bw-gray-400">
              {dayjs().to(dayjs(props.created_at))}
            </span>
          </div>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <Star
                key={index}
                className="text-bw-purple-100 max-sm:h-4 max-sm:w-4"
                fill={index + 1 <= props.rate ? '#8381D9' : 'transparent'}
              />
            )
          })}
        </div>
      </header>
      <div className="flex gap-5 max-sm:flex-col">
        <Image
          src={props.book.cover_url}
          alt=""
          width={700}
          height={900}
          className="flex w-[100px] rounded-lg object-cover max-sm:h-[200px] max-sm:w-full"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <Link
              href={`/books/${props.book.id}`}
              className="text-xl font-bold text-bw-gray-100 hover:text-bw-purple-100"
              prefetch={false}
            >
              {props.book.name}
            </Link>
            <span className="text-bw-gray-400">{props.book.author}</span>
          </div>
          <p className="text-bw-gray-300">
            {props.book.summary}...
            <Link
              href={`/books/${props.book.id}`}
              className="text-bw-purple-100"
              prefetch={false}
            >
              ver mais
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

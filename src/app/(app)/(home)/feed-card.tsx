import 'dayjs/locale/pt-br'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Star } from 'lucide-react'
import Image from 'next/image'

import { FeedItem } from '@/data/feed'

dayjs.extend(relativeTime)
dayjs.locale('pt-BR')

type FeedCardProps = FeedItem

export async function FeedCard(props: FeedCardProps) {
  return (
    <div className="flex w-full flex-col gap-8 rounded-lg border-2 border-solid border-transparent bg-bw-gray-700 p-6 transition hover:border-bw-gray-500">
      <header className="flex items-center justify-between">
        <div className="flex flex-1 items-center gap-4">
          <Image
            src={props.user.image}
            alt=""
            width={60}
            height={60}
            className="h-10 w-10 rounded-full"
          />
          <div>
            <p className="text-base text-bw-gray-100">{props.user.name}</p>
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
                className="text-bw-purple-100"
                fill={index + 1 <= props.rate ? '#8381D9' : 'transparent'}
              />
            )
          })}
        </div>
      </header>
      <div className="flex gap-5">
        <Image
          src={props.book.cover_url}
          alt=""
          width={500}
          height={700}
          className="flex w-[100px] rounded-lg object-cover"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-bw-gray-100">
              {props.book.name}
            </h1>
            <span className="text-bw-gray-400">{props.book.author}</span>
          </div>
          <p className="text-bw-gray-300">
            {props.book.summary}...
            <span className="text-bw-purple-100">ver mais</span>
          </p>
        </div>
      </div>
    </div>
  )
}

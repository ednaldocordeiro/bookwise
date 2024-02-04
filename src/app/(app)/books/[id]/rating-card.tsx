import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Star } from 'lucide-react'
import Image from 'next/image'

import { Rating } from '@/data/ratings'

dayjs.extend(relativeTime)
dayjs.locale('pt-BR')

type RatingCardProps = Rating

export function RatingCard(props: RatingCardProps) {
  return (
    <div className="flex flex-col gap-10 rounded-lg border-2 border-solid border-transparent bg-bw-gray-700 px-8 py-6 transition hover:border-bw-gray-600">
      <header className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-2">
        <div className="flex flex-1 items-center gap-4">
          <Image
            src={props.user.image}
            alt=""
            width={60}
            height={60}
            className="h-10 w-10 rounded-full object-cover"
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
                className="text-bw-purple-100 max-sm:h-4 max-sm:w-4"
                fill={index + 1 <= props.rate ? '#8381D9' : 'transparent'}
              />
            )
          })}
        </div>
      </header>
      <p className="text-gray-200">{props.description}</p>
    </div>
  )
}

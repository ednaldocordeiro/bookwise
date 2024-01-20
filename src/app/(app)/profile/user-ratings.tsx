import { BookX } from 'lucide-react'

import { BookRating } from '@/data/ratings'
import { api } from '@/utils/api'

import { RatingCard } from './rating-card'

interface UserRatingProps {
  userId?: string
}

async function getUserRatings(id?: string): Promise<{
  message?: string
  ratings: BookRating[]
}> {
  try {
    const response = await api(`/ratings?userId=${id}`)

    const data = await response.json()

    return data
  } catch (error) {
    return {
      message: 'Não foi possível encontrar os livros avaliados do usuário.',
      ratings: [],
    }
  }
}

export async function UserRatings({ userId }: UserRatingProps) {
  const { ratings, message } = await getUserRatings(userId)

  if (message) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-5">
        <BookX className="h-12 w-12 text-bw-gray-400" />
        <p className="max-w-60 select-none text-center text-bw-gray-400">
          {message}
        </p>
      </div>
    )
  }

  return (
    <div className="mb-20 flex flex-col gap-6">
      {ratings.map((rating) => (
        <RatingCard key={rating.id} {...rating} />
      ))}
    </div>
  )
}

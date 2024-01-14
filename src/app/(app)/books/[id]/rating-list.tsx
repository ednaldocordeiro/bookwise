import { Rating } from '@/data/ratings'
import { api } from '@/utils/api'

import { RatingCard } from './rating-card'

interface RatingListProps {
  bookId: string
}

async function getRatings(
  bookId: string,
): Promise<{ message?: string; ratings: Rating[] }> {
  try {
    const response = await api(`/books/${bookId}/ratings`, {
      cache: 'no-store',
    })

    const data = await response.json()

    return data
  } catch (error) {
    return {
      ratings: [],
      message: 'Não foi possível encontrar as avaliações do livro.',
    }
  }
}

export async function RatingList({ bookId }: RatingListProps) {
  const data = await getRatings(bookId)

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex justify-between">
        <span className="text-sm text-bw-gray-200">Avaliações</span>
        <button className="text-sm text-bw-purple-100">Avaliar</button>
      </div>
      <div className="flex flex-col gap-3">
        {data.ratings.map((rating) => (
          <RatingCard key={rating.id} {...rating} />
        ))}
      </div>
    </div>
  )
}

import { Rating } from '@prisma/client'

import { api } from '@/utils/api'

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

  console.log(data)

  return (
    <div className="w-full gap-4">
      <div className="flex justify-between">
        <span className="text-sm text-bw-gray-200">Avaliações</span>
        <button className="text-sm text-bw-purple-100">Avaliar</button>
      </div>
    </div>
  )
}

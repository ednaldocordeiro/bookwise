'use client'

import { useRouter } from 'next/navigation'

export function RatingButton() {
  const router = useRouter()

  async function handleRatingBook() {
    router.push('/')
  }

  return (
    <button onClick={handleRatingBook} className="text-sm text-bw-purple-100">
      Avaliar
    </button>
  )
}

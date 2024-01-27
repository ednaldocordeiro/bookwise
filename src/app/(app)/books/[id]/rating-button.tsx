'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { useRatingForm } from '@/hooks/useRatingForm'

export function RatingButton() {
  const { ratingFormVisible, setRatingFormVisible } = useRatingForm()

  async function handleRatingBook() {
    if (!ratingFormVisible) setRatingFormVisible(true)
  }

  return (
    <button onClick={handleRatingBook} className="text-sm text-bw-purple-100">
      Avaliar
    </button>
  )
}

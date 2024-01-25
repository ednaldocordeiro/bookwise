'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export function RatingButton() {
  const router = useRouter()
  const { data } = useSession()

  async function handleRatingBook() {
    if (!data) {
      return router.push('/sign-in')
    }
  }

  return (
    <button onClick={handleRatingBook} className="text-sm text-bw-purple-100">
      Avaliar
    </button>
  )
}

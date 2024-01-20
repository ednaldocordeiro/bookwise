'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export function RatingButton() {
  const router = useRouter()
  const session = useSession()

  console.log(session)

  async function handleRatingBook() {
    router.push('/')
  }

  return (
    <button onClick={handleRatingBook} className="text-sm text-bw-purple-100">
      Avaliar
    </button>
  )
}

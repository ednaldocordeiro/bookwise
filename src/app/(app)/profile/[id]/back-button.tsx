'use client'

import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function BackButton() {
  const router = useRouter()
  return (
    <button onClick={router.back} className="flex items-center gap-3">
      <ChevronLeft className="text-md text-bw-gray-200" />
      <span className="text-md font-bold leading-tight text-bw-gray-200">
        Voltar
      </span>
    </button>
  )
}

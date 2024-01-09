'use client'

import { Rocket } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function VisitorAccess() {
  const router = useRouter()

  function handleAccessAsVisitor() {
    router.push('/home')
  }

  return (
    <button
      onClick={handleAccessAsVisitor}
      className="flex w-full gap-5 rounded-lg bg-gray-600 px-6 py-4 hover:bg-gray-500"
    >
      <Rocket className="h-5 w-5 text-bw-purple-100" />
      <p className="font-bold">Entrar como visitante</p>
    </button>
  )
}

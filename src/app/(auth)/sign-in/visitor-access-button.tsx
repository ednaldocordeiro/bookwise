'use client'

import { Rocket } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export function VisitorAccess() {
  const router = useRouter()
  const { data, status } = useSession()

  const isAuthenticated = status === 'authenticated'

  function handleAccessAsVisitor() {
    router.push('/home')
  }

  return (
    <button
      onClick={handleAccessAsVisitor}
      className="flex w-full items-center gap-5 rounded-lg bg-gray-600 px-6 py-4"
    >
      <Rocket className="h-5 w-5 text-bw-purple-100" />
      <p className="font-bold">
        Entrar {!isAuthenticated ? 'como visitante' : `como ${data?.user.name}`}
      </p>
    </button>
  )
}

'use client'

import { Search } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

export function SearchForm() {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const data = Object.fromEntries(formData)

    const query = data.q.toString()

    router.replace(pathName + '?' + (query ? `q=${query}` : ''))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="group flex gap-6 rounded border border-bw-gray-500 px-5 py-3 focus-within:border-bw-green-200"
    >
      <input
        type="text"
        name="q"
        placeholder="Buscar livro avaliado"
        defaultValue={query ?? ''}
        className="flex flex-1 bg-transparent text-sm outline-none placeholder:text-bw-gray-400"
      />
      <Search className="h-5 w-5 text-bw-gray-500 group-focus-within:text-bw-green-200" />
    </form>
  )
}

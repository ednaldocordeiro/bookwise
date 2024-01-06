'use client'

import { Search } from 'lucide-react'

export function SearchForm() {
  return (
    <form className="group flex gap-6 rounded border border-bw-gray-500 px-5 py-3 focus-within:border-bw-green-200">
      <input
        type="text"
        name="q"
        placeholder="Buscar livro ou autor"
        className="flex max-w-[550px] bg-transparent text-sm outline-none placeholder:text-bw-gray-400"
      />
      <Search className="h-5 w-5 text-bw-gray-500 group-focus-within:text-bw-green-200" />
    </form>
  )
}

import { Search } from 'lucide-react'

import { SearchForm } from './search-form'

export default function Explore() {
  return (
    <div className="flex flex-1 flex-col p-10">
      <header className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Search className="text-3xl text-bw-green-100" />
          <h1 className="text-2xl font-bold leading-tight">Explorar</h1>
        </div>
        <SearchForm />
      </header>
      <div className="mt-10 grid grid-cols-4 gap-16 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1">
        <div className="col-span-1 h-full w-full">
          <h1>asaaaa</h1>
        </div>
        <div className="col-span-1 h-full w-full">
          <h1>asaaaa</h1>
        </div>
        <div className="col-span-1 h-full w-full">
          <h1>asaaaa</h1>
        </div>
        <div className="col-span-1 h-full w-full">
          <h1>asaaaa</h1>
        </div>
        <div className="col-span-1 h-full w-full">
          <h1>asaaaa</h1>
        </div>
      </div>
    </div>
  )
}

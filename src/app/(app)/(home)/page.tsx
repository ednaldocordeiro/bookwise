import { LineChart } from 'lucide-react'

import { Feed } from './feed'

export default async function Home() {
  return (
    <div className="flex flex-1 flex-col p-10">
      <header className="sticky top-0 mt-5 flex items-center gap-3 bg-bw-gray-800/15 py-3 backdrop-blur-md">
        <LineChart className="text-3xl text-bw-green-100" />
        <h1 className="text-2xl font-bold leading-tight">Início</h1>
      </header>
      <div className="mb-5 mt-7 grid grid-cols-3 gap-16">
        <div className="col-span-2 h-full w-full">
          <Feed />
        </div>
        <div className="col-span-1 h-full w-full">
          <h1>Coluna 2</h1>
        </div>
      </div>
    </div>
  )
}

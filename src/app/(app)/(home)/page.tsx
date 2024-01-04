import { LineChart } from 'lucide-react'

export default async function Home() {
  return (
    <div className="flex flex-1 flex-col p-10">
      <header className="flex items-center gap-3">
        <LineChart className="text-3xl text-bw-green-100" />
        <h1 className="text-2xl font-bold leading-tight">Início</h1>
      </header>
      <div className="mt-10 grid grid-cols-3 gap-16">
        <div className="col-span-2 h-full w-full">
          <h1>Coluna 1</h1>
        </div>
        <div className="col-span-1 h-full w-full">
          <h1>Coluna 2</h1>
        </div>
      </div>
    </div>
  )
}

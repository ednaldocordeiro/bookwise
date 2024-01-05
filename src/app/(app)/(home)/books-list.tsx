import { Star } from 'lucide-react'
import Image from 'next/image'

export function BooksList() {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex gap-5 rounded-lg bg-bw-gray-700 px-5 py-4">
        <Image
          src="/images/books/a-revolucao-dos-bixos.png"
          alt=""
          width={500}
          height={700}
          className="flex w-[100px] rounded-lg object-cover"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-xl font-bold text-bw-gray-100">
              A revolução dos bichos
            </h1>
            <span className="text-bw-gray-400">George Orwell</span>
          </div>
          <div className="flex gap-1">
            <Star className="text-bw-purple-100" fill="#8381D9" />
            <Star className="text-bw-purple-100" fill="#8381D9" />
            <Star className="text-bw-purple-100" fill="#8381D9" />
            <Star className="text-bw-purple-100" fill="#8381D9" />
            <Star className="text-bw-purple-100" />
          </div>
        </div>
      </div>
    </div>
  )
}

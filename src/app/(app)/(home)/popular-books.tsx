import { ChevronRight, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function PopularBooks() {
  return (
    <section className="flex h-full flex-col items-center gap-4">
      <div className="mb-4 flex w-full justify-between">
        <h2 className="flex text-left text-sm text-bw-gray-100">
          Livros populares
        </h2>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-bw-purple-100"
        >
          <span>Ver todos</span>
          <ChevronRight className="size-4" />
        </Link>
      </div>
      <div className="flex flex-col gap-3">
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
    </section>
  )
}

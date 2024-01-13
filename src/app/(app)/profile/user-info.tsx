import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Book, BookOpen, LibraryBig, SquareUserRound } from 'lucide-react'
import Image from 'next/image'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options'

dayjs.extend(relativeTime)
dayjs.locale('pt-BR')

export async function UserInfo() {
  const session = await getServerSession(authOptions)

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-1 flex-col items-center gap-5">
        <Image
          src={session?.user.image ?? '/person.png'}
          alt=""
          width={80}
          height={80}
          className="h-20 w-20 rounded-full"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold text-bw-gray-100">
            {session?.user.name}
          </h1>
          <span className="text-sm text-bw-gray-400">membro desde de 2024</span>
          {/* <span className="text-sm text-bw-gray-400">
            {dayjs().to(dayjs(session.user.email))}
          </span> */}
        </div>
      </div>

      <div className="h-1 w-10 rounded-md bg-bw-gradient-vertical" />

      <div className="flex flex-col items-center gap-10 px-14 py-5">
        <div className="flex w-full items-center justify-start gap-5">
          <BookOpen className="h-8 w-8 text-bw-green-100" />
          <div className="flex flex-col">
            <span className="line-clamp-3 text-xl font-bold text-bw-gray-100">
              3853
            </span>
            <span className="text-sm text-bw-gray-300">Páginas lidas</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-start gap-5">
          <LibraryBig className="h-8 w-8 text-bw-green-100" />
          <div className="flex flex-col">
            <span className="line-clamp-3 text-xl font-bold text-bw-gray-100">
              10
            </span>
            <span className="text-sm text-bw-gray-300">Livros avaliados</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-start gap-5">
          <SquareUserRound className="h-8 w-8 text-bw-green-100" />
          <div className="flex flex-col">
            <span className="line-clamp-3 text-xl font-bold text-bw-gray-100">
              8
            </span>
            <span className="text-sm text-bw-gray-300">Autores lidos</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-start gap-5">
          <Book className="h-8 w-8 text-bw-green-100" />
          <div className="flex flex-col">
            <span className="line-clamp-3 text-xl font-bold text-bw-gray-100">
              Computação
            </span>
            <span className="text-sm text-bw-gray-300">
              Categoria mais lida
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

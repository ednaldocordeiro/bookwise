import dayjs from 'dayjs'
import {
  Book,
  BookDashed,
  BookOpen,
  LibraryBig,
  SquareUserRound,
} from 'lucide-react'

import { Avatar } from '@/components/avatar'
import { UserInfo } from '@/data/user'
import { api } from '@/utils/api'

interface UserInfoProps {
  userId?: string
}

async function getUserInfo(
  id?: string,
): Promise<{ message?: string; userInfo?: UserInfo }> {
  try {
    const response = await api(`/users/${id}`, {
      next: {
        revalidate: 60 * 30,
        tags: ['user-info'],
      },
    })

    const data = await response.json()

    return data
  } catch (error) {
    return {
      message: 'Não foi possível encontrar as informações do usuário usuário',
    }
  }
}

export async function UserInfo({ userId }: UserInfoProps) {
  const { userInfo, message } = await getUserInfo(userId)

  if (!userInfo) {
    return (
      <div className="sticky top-32 flex h-[calc(100vh-88px)] flex-col items-center justify-center gap-5">
        <BookDashed className="h-12 w-12 text-bw-gray-400" />
        <p className="max-w-60 select-none text-center text-bw-gray-400">
          {message}
        </p>
      </div>
    )
  }

  return (
    <section className="sticky top-32 flex flex-col items-center gap-8">
      <div className="flex flex-1 flex-col items-center gap-5">
        <Avatar image={userInfo.image} redirectToProfile={false} size="xl" />
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold text-bw-gray-100">
            {userInfo.name}
          </h1>
          <span className="text-sm text-bw-gray-400">
            membro desde {dayjs(userInfo.createdAt).get('year')}
          </span>
        </div>
      </div>

      <div className="h-1 w-10 rounded-md bg-bw-gradient-vertical" />

      <div className="flex flex-col items-center gap-10 px-14 py-5">
        <div className="flex w-full items-center justify-start gap-5">
          <BookOpen className="h-8 w-8 text-bw-green-100" />
          <div className="flex flex-col">
            <span className="line-clamp-3 text-xl font-bold text-bw-gray-100">
              {userInfo.totalPagesRead}
            </span>
            <span className="text-sm text-bw-gray-300">Páginas lidas</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-start gap-5">
          <LibraryBig className="h-8 w-8 text-bw-green-100" />
          <div className="flex flex-col">
            <span className="line-clamp-3 text-xl font-bold text-bw-gray-100">
              {userInfo.evaluatedBooks}
            </span>
            <span className="text-sm text-bw-gray-300">Livros avaliados</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-start gap-5">
          <SquareUserRound className="h-8 w-8 text-bw-green-100" />
          <div className="flex flex-col">
            <span className="line-clamp-3 text-xl font-bold text-bw-gray-100">
              {userInfo.authorsRead}
            </span>
            <span className="text-sm text-bw-gray-300">Autores lidos</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-start gap-5">
          <Book className="h-8 w-8 text-bw-green-100" />
          <div className="flex flex-col">
            <span className="line-clamp-3 text-xl font-bold text-bw-gray-100">
              {userInfo.categoryMoreRead ?? 'Ainda não possui'}
            </span>
            <span className="text-sm text-bw-gray-300">
              Categoria mais lida
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

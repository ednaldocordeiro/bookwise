import { Star } from 'lucide-react'
import Image from 'next/image'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options'

export async function FeedCard() {
  const session = await getServerSession(authOptions)
  return (
    <div className="flex max-w-[720px] flex-col gap-8 rounded-lg bg-bw-gray-700 p-6">
      <header className="flex items-center justify-between">
        <div className="flex flex-1 items-center gap-4">
          <Image
            src={session?.user.image ?? ''}
            alt=""
            width={60}
            height={60}
            className="h-10 w-10 rounded-full"
          />
          <div>
            <p className="text-base text-bw-gray-100">{session?.user.name}</p>
            <span className="text-sm text-bw-gray-400">Hoje</span>
          </div>
        </div>
        <div className="flex gap-1">
          <Star className="text-bw-purple-100" fill="#8381D9" />
          <Star className="text-bw-purple-100" fill="#8381D9" />
          <Star className="text-bw-purple-100" fill="#8381D9" />
          <Star className="text-bw-purple-100" fill="#8381D9" />
          <Star className="text-bw-purple-100" fill="#8381D9" />
        </div>
      </header>
      <div className="flex gap-5">
        <Image
          src={session?.user.image ?? ''}
          alt=""
          width={500}
          height={700}
          className="flex w-[100px] rounded-lg object-cover"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-bw-gray-100">O Hobbit</h1>
            <span className="text-bw-gray-400">J.R.R. Tolkien</span>
          </div>
          <p className="text-bw-gray-300">
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh...{' '}
            <span className="text-bw-purple-100">ver mais</span>
          </p>
        </div>
      </div>
    </div>
  )
}

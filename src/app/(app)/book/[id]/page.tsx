import { Book } from '@/data/books'

import { BookCard } from './book-card'

interface BookPageProps {
  params: {
    id: string
  }
}

export default async function Book({ params }: BookPageProps) {
  return (
    <div className="mx-auto my-0 flex max-w-[1600px] flex-1 flex-col p-10">
      <div className="mt-8 flex h-full w-full flex-col gap-6">
        {/* <BookCard /> */}
      </div>
    </div>
  )
}

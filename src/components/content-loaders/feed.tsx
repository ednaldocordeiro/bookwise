import { Skeleton } from '../skeleton'

export function LoadFeed() {
  return (
    <section className="flex h-full flex-col items-center gap-4">
      <div className="mb-4 flex w-full">
        <Skeleton className="h-5 w-44 rounded-lg" />
      </div>
      <div className="flex h-full w-full flex-col gap-3">
        <Skeleton className="h-72 w-full rounded-lg border-2 border-solid border-transparent" />
        <Skeleton className="h-72 w-full rounded-lg border-2 border-solid border-transparent" />
        <Skeleton className="h-72 w-full rounded-lg border-2 border-solid border-transparent" />
        <Skeleton className="h-72 w-full rounded-lg border-2 border-solid border-transparent" />
      </div>
    </section>
  )
}

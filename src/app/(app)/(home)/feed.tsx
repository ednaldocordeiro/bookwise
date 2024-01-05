import { FeedCard } from './feed-card'

export async function Feed() {
  return (
    <section className="flex h-full flex-col items-center">
      <div className="mb-4 flex w-full">
        <h2 className="flex text-left text-sm text-bw-gray-100">
          Avaliações mais recentes
        </h2>
      </div>
      <div className="flex h-full flex-col gap-3">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
    </section>
  )
}

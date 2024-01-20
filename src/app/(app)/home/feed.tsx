import { FeedItem } from '@/data/feed'
import { api } from '@/utils/api'

import { FeedCard } from './feed-card'

async function getFeed(): Promise<FeedItem[] | undefined> {
  try {
    const response = await api('/feed', {
      next: {
        revalidate: 60 * 30, // 30 min
      },
    })
    const feed = await response.json()
    return feed.rates
  } catch (error) {
    return []
  }
}

export async function Feed() {
  const feed = await getFeed()
  return (
    <section className="flex h-full flex-col items-center gap-4">
      <div className="flex w-full">
        <h2 className="flex text-left text-sm text-bw-gray-100">
          Avaliações mais recentes
        </h2>
      </div>
      <div className="flex h-full w-full flex-col gap-3">
        {feed &&
          feed?.map((feedItem) => <FeedCard key={feedItem.id} {...feedItem} />)}
      </div>
    </section>
  )
}

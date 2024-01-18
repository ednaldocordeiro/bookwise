import { RatingCard } from './rating-card'

export async function UserRatings() {
  return (
    <div className="mb-20 flex flex-col gap-6">
      <RatingCard />
      <RatingCard />
      <RatingCard />
      <RatingCard />
    </div>
  )
}

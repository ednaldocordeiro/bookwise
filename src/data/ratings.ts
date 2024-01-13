import { RatingUser } from './user'

export interface Rating {
  id: string
  created_at: string
  description: string
  rate: number
  user: RatingUser
}

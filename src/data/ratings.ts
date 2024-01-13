import { RatingUser } from './user'

export interface Root {
  id: string
  created_at: string
  description: string
  rate: number
  user: RatingUser
}

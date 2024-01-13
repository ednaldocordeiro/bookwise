export interface User {
  name: string
  image: string
}

export type RatingUser = Pick<User, 'name' | 'image'>

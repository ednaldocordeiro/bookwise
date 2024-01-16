export interface User {
  name: string
  image: string
  createdAt: string
}

export type RatingUser = Pick<User, 'name' | 'image'>

export type UserInfo = User & {
  createdAt: string
  evaluatedBooks: number
  authorsRead: number
  totalPagesRead: number
  userReadPages: string | null
  categoryMoreRead: string | null
}

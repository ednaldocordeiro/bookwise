import 'next-auth'

declare module 'next-auth' {
  export interface User {
    id: string
    name: string
    email: string
    image: string
  }
  interface Session {
    user: User
  }
}

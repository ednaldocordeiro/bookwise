import { withAuth } from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    authorized({ req }) {
      const authToken = req.cookies.get('next-auth.session-token')

      if (!authToken) return false

      return true
    },
  },
})

export const config = { matcher: ['/profile', '/profile/:id*'] }

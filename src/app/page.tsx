import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from './api/auth/[...nextauth]/auth-options'

export default async function Page() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/home')
  } else {
    redirect('/sign-in')
  }

  return <></>
}

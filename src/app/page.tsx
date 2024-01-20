import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

export default async function Page() {
  const session = await getServerSession()

  if (session) {
    redirect('/home')
  } else {
    redirect('/sign-in')
  }

  return <></>
}

import { LineChart, LogOut, Search, User } from 'lucide-react'
import Image from 'next/image'
import { getServerSession } from 'next-auth'

export default async function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Home</h1>
    </div>
  )
}

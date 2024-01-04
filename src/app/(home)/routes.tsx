'use client'

import { LineChart } from 'lucide-react'
import Link from 'next/link'
import { Session } from 'next-auth'

import { routes } from '@/utils/routes'

interface RoutesProps {
  session: Session | null
}

export function Routes({ session }: RoutesProps) {
  return (
    <div className="flex w-full flex-1 flex-col items-start">
      {routes.map((route) => {
        if (route.requireSession && !session) return null

        return (
          <Link
            key={route.path}
            href={route.path}
            className="relative flex w-full items-end gap-4 p-4 before:absolute before:left-0 before:inline-block before:h-6 before:w-[5px] before:rounded-md before:bg-bw-gradient-vertical before:content-['']"
          >
            <LineChart />
            <span>{route.label}</span>
          </Link>
        )
      })}
    </div>
  )
}

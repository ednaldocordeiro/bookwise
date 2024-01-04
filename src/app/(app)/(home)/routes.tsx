'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Session } from 'next-auth'

import { routes } from '@/utils/routes'
import { merge } from '@/utils/tw-werge'

interface RoutesProps {
  session: Session | null
}

export function Routes({ session }: RoutesProps) {
  const pathName = usePathname()

  return (
    <div className="flex w-full flex-1 flex-col items-start">
      {routes.map(({ icon: Icon, ...route }) => {
        if (route.requireSession && !session) return null

        return (
          <Link
            key={route.path}
            href={route.path}
            className={merge(
              'relative flex w-full items-end gap-4 p-4',
              pathName === route.path &&
                "before:absolute before:left-0 before:inline-block before:h-6 before:w-[5px] before:rounded-md before:bg-bw-gradient-vertical before:content-['']",
            )}
          >
            <Icon />
            <span>{route.label}</span>
          </Link>
        )
      })}
    </div>
  )
}

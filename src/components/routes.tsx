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
    <nav className="flex w-full flex-1 flex-col items-start">
      <ul>
        {routes.map(({ icon: Icon, ...route }) => {
          if (route.requireSession && !session) return null

          const sameRoute =
            pathName === route.path || pathName.includes(route.path)

          return (
            <li key={route.path}>
              <Link
                href={route.path}
                className={merge(
                  'relative flex w-full items-end gap-4 p-4',
                  sameRoute &&
                    "before:absolute before:left-0 before:inline-block before:h-6 before:w-[5px] before:rounded-md before:bg-bw-gradient-vertical before:content-['']",
                )}
              >
                <Icon />
                <span>{route.label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

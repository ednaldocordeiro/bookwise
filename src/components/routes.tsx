'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { routes } from '@/utils/routes'
import { merge } from '@/utils/tw-werge'

export function Routes() {
  const pathName = usePathname()
  const { data } = useSession()

  return (
    <nav className="flex w-full flex-1 flex-col items-start">
      <ul className="max-lg:flex max-lg:gap-4 max-lg:self-center">
        {routes.map(({ icon: Icon, ...route }) => {
          if (route.requireSession && !data) return null

          const sameRoute =
            pathName === route.path || pathName.includes(route.path)

          return (
            <li key={route.path}>
              <Link
                href={route.path}
                className={merge(
                  'relative flex w-full items-end gap-4 p-4 max-lg:p-1',
                  sameRoute &&
                    "before:absolute before:left-0 before:inline-block before:h-6 before:w-[5px] before:rounded-md before:bg-bw-gradient-vertical before:content-[''] max-lg:before:-bottom-1 max-lg:before:left-1 max-lg:before:h-[3px] max-lg:before:w-6",
                )}
              >
                <Icon />
                <span className="max-lg:hidden">{route.label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

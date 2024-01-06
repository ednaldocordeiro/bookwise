import { ComponentProps } from 'react'

import { merge } from '@/utils/tw-werge'

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={merge('animate-pulse bg-bw-gray-600/40', className)}
      {...props}
    ></div>
  )
}

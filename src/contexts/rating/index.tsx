'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

interface RatingProviderProps {
  children: ReactNode
}

interface RatingContextValue {
  availableForm: boolean
  ratingFormVisible: boolean
  setRatingFormVisible: (visible: boolean) => void
}

export const RatingContext = createContext({} as RatingContextValue)

export function RatingProvider({ children }: RatingProviderProps) {
  const [ratingFormAvailable, setRatingFormAvailable] = useState(false)
  const [ratingFormVisible, setRatingFormVisible] = useState(false)

  const { data: session } = useSession()

  useEffect(() => {
    if (session) setRatingFormAvailable(true)
    else setRatingFormAvailable(false)
  }, [session])

  // const handleRateBook = useCallback(
  //   async (bookId: string) => {

  //   },
  // )

  return (
    <RatingContext.Provider
      value={{
        availableForm: ratingFormAvailable,
        ratingFormVisible,
        setRatingFormVisible,
      }}
    >
      {children}
    </RatingContext.Provider>
  )
}

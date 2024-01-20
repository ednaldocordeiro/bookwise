'use client'

import { Session } from 'next-auth'
import { SessionProvider as NASessionProvider } from 'next-auth/react'
import { createContext, ReactNode } from 'react'

interface SessionProviderProps {
  children: ReactNode
  session?: Session | null
}

const SessionContext = createContext({})

export function SessionProvider({ children, session }: SessionProviderProps) {
  return (
    <NASessionProvider session={session}>
      <SessionContext.Provider value={{}}>{children}</SessionContext.Provider>
    </NASessionProvider>
  )
}

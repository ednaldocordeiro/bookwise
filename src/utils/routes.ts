import { LineChart, LucideIcon, Search, User } from 'lucide-react'

interface Route {
  path: string
  label: string
  requireSession: boolean
  icon: LucideIcon
}

export const routes: Route[] = [
  {
    label: 'Início',
    path: '/',
    requireSession: false,
    icon: LineChart,
  },
  {
    label: 'Explorar',
    path: '/explorar',
    requireSession: false,
    icon: Search,
  },
  {
    label: 'Perfil',
    path: '/perfil',
    requireSession: true,
    icon: User,
  },
]

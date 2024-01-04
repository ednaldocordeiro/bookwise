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
    path: '/explore',
    requireSession: false,
    icon: Search,
  },
  {
    label: 'Perfil',
    path: '/profile',
    requireSession: true,
    icon: User,
  },
]

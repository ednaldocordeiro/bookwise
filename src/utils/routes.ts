import { LineChart, LucideIcon, Search, User } from 'lucide-react'

interface Route {
  path: string
  label: string
  requireSession: boolean
  icon: LucideIcon
  params: string[]
}

export const routes: Route[] = [
  {
    label: 'Início',
    path: '/home',
    requireSession: false,
    icon: LineChart,
    params: [],
  },
  {
    label: 'Explorar',
    path: '/explore',
    requireSession: false,
    icon: Search,
    params: [],
  },
  {
    label: 'Perfil',
    path: '/profile',
    requireSession: true,
    icon: User,
    params: ['id'],
  },
]

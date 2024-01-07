import { Category } from '@/data/category'
import { api } from '@/utils/api'

import { CategoryItems } from './category-items'

async function getCategories(): Promise<{
  message?: string
  categories: Category[]
}> {
  try {
    const response = await api('/books/categories')
    const categories = await response.json()

    return categories
  } catch (error) {
    return {
      categories: [],
      message: 'Não foi possível carregar as categorias',
    }
  }
}

export async function CategoriesWrapper() {
  await new Promise((resolve) => setTimeout(resolve, 4000))
  const data = await getCategories()
  return (
    <div className="flex items-center justify-start gap-3 overflow-x-scroll py-2">
      <CategoryItems items={data.categories} />
    </div>
  )
}

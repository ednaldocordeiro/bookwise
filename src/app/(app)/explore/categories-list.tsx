import { Category } from '@/data/category'
import { api } from '@/utils/api'

import { CategoryButton } from './category-button'

async function getCategories(): Promise<
  { message?: string; categories: Category[] } | undefined
> {
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

export async function CategoriesList() {
  const data = await getCategories()
  return (
    <div className="flex items-center justify-start gap-3 overflow-x-scroll py-2">
      <CategoryButton name="Tudo" active />
      {data &&
        data.categories.map((category) => {
          return <CategoryButton key={category.id} name={category.name} />
        })}
    </div>
  )
}

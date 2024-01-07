import { CategoryButton } from './category-button'

export async function CategoriesList() {
  return (
    <div className="flex items-center justify-start gap-3 overflow-x-scroll py-2">
      <CategoryButton name="Tudo" active />
      <CategoryButton name="Computação" />
    </div>
  )
}

'use client'

import { useRouter, useSearchParams } from 'next/navigation'

import { CategoryButton } from '@/components/category-button'
import { Category } from '@/data/category'

interface CategoryItemsProps {
  items: Category[]
}

export function CategoryItems({ items }: CategoryItemsProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentCategory = searchParams.get('category')

  function handleSelectCategory(name: string) {
    router.push(`/explore?category=${name}`)
  }

  function handleListAllBooks() {
    router.push('/explore')
  }

  return (
    <>
      <CategoryButton
        name="Tudo"
        active={!currentCategory}
        onClick={handleListAllBooks}
      />
      {items &&
        items.map((category) => {
          return (
            <CategoryButton
              key={category.id}
              name={category.name}
              active={currentCategory === category.name}
              onClick={() => handleSelectCategory(category.name)}
            />
          )
        })}
    </>
  )
}

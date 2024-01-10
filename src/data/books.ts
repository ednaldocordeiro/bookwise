export interface Book {
  id: string
  cover_url: string
  name: string
  author: string
  rate: number
  summary: string
  total_pages: number
  categories: {
    id: string
    name: string
  }[]
}

export type PopularBook = Omit<Book, 'categories' | 'total_pages' | 'summary'>

import { NextRequest } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params

    const book = await prisma.book.findUnique({
      where: {
        id,
      },
    })
    const categories = await prisma.category.findMany({
      where: {
        books: {
          every: {
            book_id: id,
          },
        },
      },
    })
    const rates = await prisma.rating.aggregate({
      _avg: {
        rate: true,
      },
      where: {
        book_id: id,
      },
    })

    return Response.json({
      book: {
        ...book,
        categories,
        rate: rates._avg.rate,
      },
    })
  } catch (error) {
    return Response.json({
      book: null,
      message: 'Não foi possível encontrar o livro.',
    })
  }
}

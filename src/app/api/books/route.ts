import { NextRequest } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const category = searchParams.get('category')
    if (category) {
      const books = await prisma.$queryRawUnsafe(
        `
      SELECT 
        b.id, 
        b.cover_url, 
        b.name, 
        b.author, 
        AVG(r.rate) as rate
      FROM 
        books b
      JOIN 
        ratings r ON b.id = r.book_id
      LEFT JOIN
        "CategoriesOnBooks" cb ON b.id = cb.book_id
      LEFT JOIN
        "categories" ct ON ct.id = cb."categoryId"
      WHERE ct.name = $1
      GROUP BY 
        b.id
      ORDER BY 
        name ASC
    `,
        category,
      )

      return Response.json({ books })
    }

    const books = await prisma.$queryRaw`
      SELECT 
        b.id, 
        b.cover_url, 
        b.name, 
        b.author, 
        AVG(r.rate) as rate
      FROM 
        books b
      JOIN 
        ratings r ON b.id = r.book_id
      GROUP BY 
        b.id
      ORDER BY 
        name ASC
    `

    return Response.json({ books })
  } catch (error) {
    console.log(error)
    return Response.json(
      { message: 'Não foi possível encontrar os livros', books: [] },
      { status: 403 },
    )
  }
}

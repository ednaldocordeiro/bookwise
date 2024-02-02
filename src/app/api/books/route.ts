import { Prisma } from '@prisma/client'
import { NextRequest } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl

    const category = searchParams.get('category')
    const query = searchParams.get('q')

    if (category) {
      const books = await prisma.$queryRaw(
        Prisma.sql`SELECT 
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
      WHERE (b.name ILIKE '%' || ${
        query || ''
      } || '%' OR b.author ILIKE '%' || ${
        query || ''
      } || '%') AND ct.name ILIKE '%' || ${category || ''} || '%'
      GROUP BY 
        b.id, b.cover_url, b.name, b.author
      ORDER BY 
        name ASC;
    `,
      )

      return Response.json({ books })
    }

    const books = await prisma.$queryRaw(
      Prisma.sql`
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
      WHERE b.name ILIKE '%' || ${
        query || ''
      } || '%' OR b.author ILIKE '%' || ${query || ''} || '%'
      GROUP BY 
        b.id
      ORDER BY 
        name ASC
    `,
    )

    return Response.json({ books })
  } catch (error) {
    return Response.json(
      { message: 'Não foi possível encontrar os livros' },
      { status: 403 },
    )
  }
}

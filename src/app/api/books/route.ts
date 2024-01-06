import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
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
        nameaaa DESC
    `

    return Response.json({ books })
  } catch (error) {
    return Response.json(
      { message: 'Não foi possível encontrar os livros', books: [] },
      { status: 403 },
    )
  }
}

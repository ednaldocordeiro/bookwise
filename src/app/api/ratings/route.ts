import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest } from 'next/server'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  try {
    const query = searchParams.get('q')
    const userId = searchParams.get('userId')

    if (userId) {
      const ratings = await prisma.rating.findMany({
        where: {
          user_id: {
            contains: userId,
          },
          book: {
            name: {
              contains: query || '',
            },
          },
        },
        select: {
          book: {
            select: {
              id: true,
              cover_url: true,
              name: true,
              author: true,
            },
          },
          id: true,
          rate: true,
          description: true,
          created_at: true,
        },
        orderBy: {
          created_at: 'desc',
        },
      })

      return Response.json({ ratings })
    }

    const ratings = await prisma.rating.findMany({
      where: {
        book: {
          name: {
            contains: query || '',
          },
        },
      },
      select: {
        book: {
          select: {
            id: true,
            cover_url: true,
            name: true,
            author: true,
          },
        },
        id: true,
        rate: true,
        description: true,
        created_at: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    })

    return Response.json({ ratings })
  } catch (error) {
    return Response.json(
      {
        message: 'Não foi possível buscar os livros avaliados',
      },
      { status: 400 },
    )
  }
}

const bodySchema = z.object({
  rate: z.number().min(0).max(6),
  description: z.string(),
  userId: z.string(),
  bookId: z.string(),
})

export async function POST(request: NextRequest) {
  try {
    const body = request.body?.getReader()

    const readBody = await body?.read()

    const unitBody = readBody?.value && new Uint8Array(readBody.value)

    const bufferBody = unitBody && Buffer.from(unitBody)

    const parsedBody = bufferBody ? JSON.parse(bufferBody.toString()) : {}

    const { bookId, description, rate, userId } = bodySchema.parse(parsedBody)

    await prisma.rating.create({
      data: {
        description,
        rate,
        book_id: bookId,
        user_id: userId,
      },
    })

    revalidateTag('ratings')
    revalidateTag('book')
    revalidatePath('feed')
    revalidatePath('profile')

    return Response.json({}, { status: 201 })
  } catch (error) {
    return Response.json({}, { status: 400 })
  }
}

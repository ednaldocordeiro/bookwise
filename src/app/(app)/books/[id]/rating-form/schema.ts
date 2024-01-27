import { z } from 'zod'

export const ratingFormSchema = z.object({
  rate: z.number().min(0).max(6),
  description: z
    .string()
    .max(250, 'Sua avaliação está muito grande. O máximo é de 250 caracteres'),
})

export type RatingData = z.infer<typeof ratingFormSchema>

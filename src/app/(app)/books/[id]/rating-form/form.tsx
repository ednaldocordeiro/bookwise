'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Check, Loader, X } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Controller, useForm } from 'react-hook-form'

import { Avatar } from '@/components/avatar'
import { useRatingForm } from '@/hooks/useRatingForm'
import { api } from '@/utils/api'

import { Evaluation } from './evaluation'
import { RatingData, ratingFormSchema } from './schema'

interface FormProps {
  available: boolean
}

export function Form({ available }: FormProps) {
  const { data: session } = useSession()
  const { setRatingFormVisible } = useRatingForm()
  const params = useParams<{ id: string }>()

  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<RatingData>({
    resolver: zodResolver(ratingFormSchema),
    defaultValues: {
      rate: 0,
    },
  })

  const bookId = params.id

  async function handleSubmitForm(data: RatingData) {
    const body = {
      ...data,
      userId: session?.user.id,
      bookId,
    }
    await api('/ratings', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    setRatingFormVisible(false)
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="flex flex-col gap-10 rounded-lg border-2 border-solid border-transparent bg-bw-gray-700 px-8 py-6 transition hover:border-bw-gray-600"
    >
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar image={session?.user.image} />
          <span className="text-xl font-bold text-gray-200">
            {session?.user.name}
          </span>
        </div>
        <Controller
          name="rate"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Evaluation onChangeValue={onChange} value={value} />
          )}
        />
      </header>
      <label htmlFor="description" className="hidden">
        Avaliação
      </label>
      <textarea
        id="rate"
        rows={10}
        placeholder="Escreva sua avaliação"
        disabled={!available || isSubmitting}
        className="h-40 resize-none rounded border border-bw-gray-500 bg-bw-gray-800 px-4 py-4 text-bw-gray-200"
        {...register('description')}
      />
      <footer className="flex gap-2 self-end">
        <button
          disabled={!available || isSubmitting}
          className="flex items-center justify-center rounded bg-bw-gray-600 p-2"
          onClick={() => reset()}
        >
          <X className="text-bw-purple-100" />
        </button>
        <button
          disabled={!available || isSubmitting}
          type="submit"
          className="flex items-center justify-center rounded bg-bw-gray-600 p-2"
        >
          {isSubmitting ? (
            <Loader className="animate-spin text-bw-gray-400" />
          ) : (
            <Check className="text-bw-green-100" />
          )}
        </button>
      </footer>
    </form>
  )
}

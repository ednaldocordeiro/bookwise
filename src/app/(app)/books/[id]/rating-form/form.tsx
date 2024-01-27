'use client'

import { Check, X } from 'lucide-react'
import { useSession } from 'next-auth/react'

import { Avatar } from '@/components/avatar'

import { Evaluation } from './evaluation'

interface FormProps {
  available: boolean
}

export function Form({ available }: FormProps) {
  const { data } = useSession()
  return (
    <form className="flex flex-col gap-10 rounded-lg border-2 border-solid border-transparent bg-bw-gray-700 px-8 py-6 transition hover:border-bw-gray-600">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar image={data?.user.image} />
          <span className="text-xl font-bold text-gray-200">
            {data?.user.name}
          </span>
        </div>
        <Evaluation onChangeValue={(value) => console.log(value)} />
      </header>
      <label htmlFor="rate" className="hidden">
        Avaliação
      </label>
      <textarea
        name="rate"
        id="rate"
        rows={10}
        placeholder="Escreva sua avaliação"
        disabled={!available}
        className="h-40 resize-none rounded border border-bw-gray-500 bg-bw-gray-800 px-4 py-4"
      />
      <footer className="flex gap-2 self-end">
        <button
          disabled={!available}
          type="reset"
          className="flex items-center justify-center rounded bg-bw-gray-600 p-2"
        >
          <X className="text-bw-purple-100" />
        </button>
        <button
          disabled={!available}
          type="submit"
          className="flex items-center justify-center rounded bg-bw-gray-600 p-2"
        >
          <Check className="text-bw-green-100" />
        </button>
      </footer>
    </form>
  )
}

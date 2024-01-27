'use client'

import { Star } from 'lucide-react'
import { useEffect, useState } from 'react'

interface EvaluationProps {
  onChangeValue: (value: number) => void
}

export function Evaluation({ onChangeValue }: EvaluationProps) {
  const [evaluation, setEvaluation] = useState<number>(0)

  useEffect(() => {
    onChangeValue(evaluation)
  }, [evaluation, onChangeValue])

  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className="cursor-pointer"
          onClick={() => setEvaluation(index + 1)}
        >
          <Star
            className="text-bw-purple-100"
            fill={evaluation >= index + 1 ? '#8381D9' : 'transparent'}
          />
        </span>
      ))}
    </div>
  )
}

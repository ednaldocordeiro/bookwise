'use client'

import { Star } from 'lucide-react'

interface EvaluationProps {
  onChangeValue: (value: number) => void
  value: number
}

export function Evaluation({ onChangeValue, value }: EvaluationProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className="cursor-pointer"
          onClick={() => onChangeValue(index + 1)}
        >
          <Star
            className="text-bw-purple-100"
            fill={value >= index + 1 ? '#8381D9' : 'transparent'}
          />
        </span>
      ))}
    </div>
  )
}

import { Star } from 'lucide-react'
import Image from 'next/image'

export function RatingCard() {
  return (
    <div>
      <time className="text-sm" dateTime={new Date().toDateString()}>
        há 2 dias
      </time>
      <div className="flex flex-col gap-10 rounded-lg border-2 border-solid border-transparent bg-bw-gray-700 px-8 py-6 transition hover:border-bw-gray-600">
        <div className="flex gap-5">
          <Image
            src={'/images/books/refatoracao.png'}
            alt=""
            width={500}
            height={700}
            className="flex w-28 rounded-lg object-cover"
          />
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="line-clamp-3 text-xl font-bold text-bw-gray-100 hover:text-bw-purple-100">
                Refatoração
              </h1>
              <span className="text-bw-gray-400">Aditya Bhargava</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <Star className="text-bw-purple-100" fill="#8381D9" />
                {/* {Array.from({ length: 5 }).map((_, index) => {
                return (
                  <Star
                    key={index}
                    className="text-bw-purple-100"
                    fill={index + 1 <= props.rate ? '#8381D9' : 'transparent'}
                  />
                )
              })} */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            ducimus fugit facere, vero sed nulla. Porro necessitatibus, dolorem
            cumque vero libero recusandae consequuntur nulla dignissimos fugiat
            dolore veritatis, culpa nesciunt!
          </p>
        </div>
      </div>
    </div>
  )
}

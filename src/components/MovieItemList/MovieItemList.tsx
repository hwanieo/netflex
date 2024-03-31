import { ComponentProps } from 'react'
import Label from '../Label'
import MovieItem from '../MovieItem'

export type Movie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface MovieItemListProps {
  category: Array<ComponentProps<typeof MovieItem>['movie']>
  label: string
}

export default function MovieItemList({
  category: movies,
  label,
}: MovieItemListProps) {
  return (
    <div className='mt-10'>
      <Label>{label}</Label>

      <ul className='flex gap-10 overflow-scroll scrollbar-hide'>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieItem movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  )
}

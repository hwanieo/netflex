import { Link } from 'react-router-dom'
import { Movie } from '../MovieItemList/MovieItemList'

interface MovieItemProps {
  movie: Movie
}

export default function MovieItem({ movie }: MovieItemProps) {
  return (
    <Link to={`/detail/${movie.id}`}>
      <div className='w-80'>
        <div className='w-full h-full'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
            className='object-cover'
          />
        </div>
        <h5 className='font-semibold text-xl mt-2'>{movie.title}</h5>
      </div>
    </Link>
  )
}

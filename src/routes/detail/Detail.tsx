import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface Response {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: BelongsToCollection
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface Genre {
  id: number
  name: string
}

interface BelongsToCollection {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}

interface ProductionCompany {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

interface ProductionCountry {
  iso_3166_1: string
  name: string
}

interface SpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjYyOTUxMDA0NjM1ZTdjMmJmMjQwZWY2NTdmNDdjZiIsInN1YiI6IjY2MDgzMTA1YTZkZGNiMDE3YzQ3OTEwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3_KYIH5YNqVc33kRy-J6w0EHrr4RS2ytnFAzDVV9tfw',
  },
}

export default function Detail() {
  const { movieId } = useParams()

  const [movie, setMovie] = useState<Response | null>(null)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=ko`, options)
      .then((response) => response.json())
      .then((response) => setMovie(response))
      .catch((err) => console.error(err))
  }, [])

  if (!movie)
    return (
      <div className='h-screen flex justify-center items-center text-2xl'>
        디테일 페이지를 준비중입니다.
      </div>
    )

  return (
    <div className='px-20 mt-10 mb-20'>
      <div className='flex gap-x-5'>
        <div className='w-72'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className='flex-grow'>
          <div className='flex flex-col gap-y-5'>
            <h3 className='text-2xl font-bold'>{movie.title}</h3>
            <span>{movie.popularity}</span>
            <span className='mt-20 text-[18px] text-red-500 text-center hover:text-xl cursor-default'>{`"${movie.tagline}"`}</span>
          </div>
        </div>
      </div>
      <p className='mt-5'>{movie.overview}</p>
    </div>
  )
}

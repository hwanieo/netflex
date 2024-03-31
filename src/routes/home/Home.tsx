import { useEffect, useState } from 'react'
import MovieItemList from '../../components/MovieItemList'
import { Movie } from '../../components/MovieItemList/MovieItemList'

const tmdbSecretKey: string = import.meta.env.VITE_TMDB_SECRET_KEY!

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${tmdbSecretKey}`,
  },
}

type MovieState = {
  nowPlaying: Movie[]
  popular: Movie[]
  topRated: Movie[]
  upcoming: Movie[]
}

export default function Home() {
  const [movies, setMovies] = useState<MovieState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  })

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1',
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies((prevMovies) => ({
          ...prevMovies,
          nowPlaying: response.results,
        }))
      })
      .catch((err) => console.error(err))

    fetch(
      'https://api.themoviedb.org/3/movie/popular?language=ko&page=1',
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies((prevMovies) => ({
          ...prevMovies,
          popular: response.results,
        }))
      })
      .catch((err) => console.error(err))

    fetch(
      'https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1',
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies((prevMovies) => ({
          ...prevMovies,
          topRated: response.results,
        }))
      })
      .catch((err) => console.error(err))

    fetch(
      'https://api.themoviedb.org/3/movie/upcoming?language=ko&page=1',
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies((prevMovies) => ({
          ...prevMovies,
          upcoming: response.results,
        }))
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className='px-20 pb-20'>
      <MovieItemList category={movies.topRated} label='많은 사랑을 받은 영화' />
      <MovieItemList category={movies.nowPlaying} label='상영 중인 영화' />
      <MovieItemList category={movies.popular} label='현재 인기 영화' />
      <MovieItemList category={movies.upcoming} label='개봉 예정 영화' />
    </div>
  )
}

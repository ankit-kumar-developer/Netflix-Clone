import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainCotainer = () => {
  const movie = useSelector(store => store.movie?.nowPlayingMovies);

  if (!movie) return; // early return in react
  const { overview, id, title } = movie[4];

  return (
    <>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </>

  )
}

export default MainCotainer
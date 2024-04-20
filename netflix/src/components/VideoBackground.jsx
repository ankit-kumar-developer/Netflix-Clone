import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux'

const VideoBackground = ({ movieId, bool }) => {
  const trailerMovie = useSelector(store => store.movie.trailerMovie);

  useMovieById(movieId)
  return (
    <div className='w-[100vw] overflow-hidden
    
    lmb:w-[100vw] lmb:overflow-visible
    
    '>

      <iframe
        className={`${bool ? "w-[100%]" : "w-screen aspect-video lmb:w-[550px] lmb:h-[400px]"}`}
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=NHac9a29oKTL0bwY&autoplay=1&mute=1&loop=1`} title="YouTube video player" frameBorder="0" allowFullScreen>
      </iframe>

    </div>
  )
}

export default VideoBackground
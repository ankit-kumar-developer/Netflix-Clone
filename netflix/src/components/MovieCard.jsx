import React from 'react'
import { TMDB_IMG_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { setOpen, getId } from '../redux/movieSlice'

const MovieCard = ({ posterPath, movieId }) => {
    const dispatch = useDispatch()
    if (posterPath == null) {
        return null
    }

    const handleOpen = () => {
        dispatch(getId(movieId))
        dispatch(setOpen(true))
    }

    return (
        <div className='w-48 pr-2
        lmb:w-36
        ' onClick={handleOpen}>
            <img className='rounded-md' src={`${TMDB_IMG_URL}/${posterPath}`} alt='movie-card' />
        </div>
    )
}

export default MovieCard
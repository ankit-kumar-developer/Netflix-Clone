import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies, searchMovie }) => {
    return (
        <>
            <div className='px-8 my-2
            lg:my-20
            lmb:w-[550px] lmb:px-6
            '>
                <h1 className={`${searchMovie ? "text-black" : "text-white"} text-3xl py-3`}>{title}</h1>
                <div className='flex overflow-x-scroll cursor-pointer no-scrollbar'>
                    <div className='flex items-center'>

                        {
                            movies?.map((movie) => {
                                return (
                                    <MovieCard key={movie.id} movieId={movie.id} posterPath={movie.poster_path} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieList
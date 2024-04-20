import axios from 'axios';
import React, { useState } from 'react'
import { Search_Movie_URL, options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedMovieDetails } from '../redux/searchSlice';
import { setLoading } from '../redux/userSlice';
import MovieList from './MovieList';

const SearchMovie = () => {
    const [searchMovie, setSearchMovie] = useState("");
    const dispatch = useDispatch();
    const isLoading = useSelector(store => store.app.isLoading);
    const { movieName, searchedMovie } = useSelector(store => store.searchMovie);
    // console.log("Movie Name : ", movieName)

    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true))
        try {
            const resp = await axios.get(`${Search_Movie_URL}${searchMovie}&include_adult=false&language=en-US&page=1`, options)
            const movies = resp?.data?.results
            // console.log("Search Result \n", movieName, resp.data.results)
            dispatch(setSearchedMovieDetails({ searchMovie, movies }))
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading(false))
        }
        setSearchMovie("");
    }

    return (
        <>

            <div className='flex justify-center pt-[10%] w-[100%]'>
                <form className='w-[50%]' onSubmit={submitHandler}>
                    <div className='flex justify-between w-[100%] rounded-lg border-2 shadow-md border-gray-200 p-2'>
                        <input value={searchMovie} onChange={(e) => { setSearchMovie(e.target.value) }} className='w-full outline-none rounded-md text-lg pl-4' type="text" placeholder='Search Movies...' />
                        <button className='bg-[#e50913] text-white rounded-md px-4 py-2'>{isLoading ? "Loading.." : "Search"}</button>
                    </div>
                </form>

            </div>

            {
                searchMovie.length > 0 ? (<MovieList title={movieName} searchMovie={true} movies={searchedMovie} />) : (<h1 className='text-3xl pt-10 pl-10'>No Movie Found</h1>)
            }

        </>
    )
}

export default SearchMovie
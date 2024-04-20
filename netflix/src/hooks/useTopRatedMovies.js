import axios from 'axios'
import { Top_Rated_Movies, options } from '../utils/constant'
import { getTopRatedMovie } from '../redux/movieSlice'
import { useDispatch } from 'react-redux'

const useTopRatedMovies = async () => {

    const dispatch = useDispatch()
    try {
        const resp = await axios.get(Top_Rated_Movies, options)
        console.log(resp.data.results)
        dispatch(getTopRatedMovie(resp.data.results))
    } catch (error) {
        console.log(error)

    }
}

export default useTopRatedMovies
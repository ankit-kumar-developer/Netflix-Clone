import axios from 'axios'
import { Popular_Movies, options } from '../utils/constant'
import { getPopularMovie } from '../redux/movieSlice'
import { useDispatch } from 'react-redux'

const usePopularMovies = async () => {

    const dispatch = useDispatch()
    try {
        const resp = await axios.get(Popular_Movies, options)
        console.log(resp.data.results)
        dispatch(getPopularMovie(resp.data.results))
    } catch (error) {
        console.log(error)
    }
}

export default usePopularMovies
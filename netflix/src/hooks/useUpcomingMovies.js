import axios from 'axios'
import { Upcoming_Movies, options } from '../utils/constant'
import { getUpcomingMovies } from '../redux/movieSlice'
import { useDispatch } from 'react-redux'

const useUpcomingMovies = async () => {

    const dispatch = useDispatch()
    try {
        const resp = await axios.get(Upcoming_Movies, options)
        console.log(resp.data.results)
        dispatch(getUpcomingMovies(resp.data.results))
    } catch (error) {
        console.log(error)

    }
}

export default useUpcomingMovies
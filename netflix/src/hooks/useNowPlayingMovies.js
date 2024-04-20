import { Now_Playing_Movie, options } from '../utils/constant'
import axios from 'axios'
import { getNowPlayingMovies } from '../redux/movieSlice'
import { useDispatch } from 'react-redux'

const useNowPlayingMovies = async () => {
    const dispatch = useDispatch()
    try {
        const resp = await axios.get(Now_Playing_Movie, options);
        console.log(resp.data.results)
        dispatch(getNowPlayingMovies(resp.data.results))

    } catch (error) {
        console.log(error)
    }
}

export default useNowPlayingMovies;
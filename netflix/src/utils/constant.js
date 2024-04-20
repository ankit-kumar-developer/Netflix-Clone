export const API_END_POINT = `${window.location.origin}/api/v1/user`;

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2FjOGQ0ZmRmNzg1MGE1MDU5NjY2MzRlNjZmNWQxZCIsInN1YiI6IjY2MDU0YmYzOTU2NjU4MDE2MTdlMzExMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4GaV3XZ-K7JDHiKTnwiZlIJtvT4Bw74ZKtNHqVgpeZs'
    }
};

export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing";

export const Popular_Movies = "https://api.themoviedb.org/3/movie/popular";

export const Top_Rated_Movies = "https://api.themoviedb.org/3/movie/top_rated";

export const Upcoming_Movies = "https://api.themoviedb.org/3/movie/upcoming";

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";

export const Search_Movie_URL = "https://api.themoviedb.org/3/search/movie?query="
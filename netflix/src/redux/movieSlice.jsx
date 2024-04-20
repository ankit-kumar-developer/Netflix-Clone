import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        popularMovie: null,
        topRatedMovies: null,
        upcomingMovies: null,
        toggle: false,
        trailerMovie: null,
        open: false,
        id: "",
    },

    reducers: {
        // actions
        getNowPlayingMovies: (state, actions) => {
            state.nowPlayingMovies = actions.payload;
        },

        getPopularMovie: (state, actions) => {
            state.popularMovie = actions.payload;
        },

        getTopRatedMovie: (state, actions) => {
            state.topRatedMovies = actions.payload;
        },

        getUpcomingMovies: (state, actions) => {
            state.upcomingMovies = actions.payload;
        },
        setToggle: (state) => {
            state.toggle = !state.toggle;
        },
        getTrailerMovie: (state, actions) => {
            state.trailerMovie = actions.payload;
        },
        setOpen: (state, actions) => {
            state.open = actions.payload;
        },
        getId: (state, actions) => {
            state.id = actions.payload;
        }
    }
});

export const { getNowPlayingMovies, getPopularMovie, getTopRatedMovie, getUpcomingMovies, setToggle, getTrailerMovie, setOpen, getId } = movieSlice.actions;

export default movieSlice.reducer;
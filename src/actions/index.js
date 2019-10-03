import * as types from '../constants/ActionTypes'

export const getMoviesList=()=>({
    type:types.GET_MOVIES_LIST
})

export const getMovieDetails=(movieId,history)=>({
    type:types.GET_MOVIES_DETAILS,
    payload:{movieId,history}
})

export const getMovies=(searchText,history)=>({
    type:types.SEARCH_MOVIES,
    payload:{searchText,history}
})
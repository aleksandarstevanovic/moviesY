import { createSelector } from 'reselect'
 
 const popular=state=>state.movieLists.popular
 const nowPlaying=state=>state.movieLists.nowPlaying
 const upcoming=state=>state.movieLists.upcoming
 const trending=state=>state.movieLists.trending
 const topRated=state=>state.movieLists.topRated
 const related=state=>state.movieDetails.relatedMovies

const searchResult=state=>state.searchResults.results

export const poster=state=>state.movieDetails.poster
export const genres=state=>state.movieDetails.genres
export const trailer=state=>state.movieDetails.trailer
export const rating=state=>state.movieDetails.rating
export const title=state=>state.movieDetails.title
export const releaseDate=state=>state.movieDetails.releaseDate
export const status=state=>state.movieDetails.status
export const overview=state=>state.movieDetails.overview
const cast=state=>state.movieDetails.cast
export const runTime=state=>state.movieDetails.runTime

export const reviews=state=>state.movieDetails.reviews


export const popularMovies=createSelector(
    popular,
    movies=>movies.map(movie=> { return {id:movie.id,title:movie.original_title, poster:movie.backdrop_path}})
)

export const nowPlayingMovies=createSelector(
    nowPlaying,
    movies=>movies.map(movie=> { return {id:movie.id,title:movie.original_title, poster:movie.poster_path}})
)

export const upcomingMovies=createSelector(
    upcoming,
    movies=>movies.map(movie=> { return {id:movie.id,title:movie.original_title, poster:movie.poster_path}})
)

export const trendingMovies=createSelector(
    trending,
    movies=>movies.map(movie=> { return {id:movie.id,title:movie.original_title, poster:movie.poster_path}})
)

export const topRatedMovies=createSelector(
    topRated,
    movies=>movies.map(movie=> { return {id:movie.id,title:movie.original_title, poster:movie.poster_path}})
)

export const searchResultMovies=createSelector(
    searchResult,
    movies=>movies.map(movie=> { return {id:movie.id,title:movie.original_title, poster:movie.poster_path}}).filter(movie=>movie.poster)
)

export const relatedMovies=createSelector(
    related,
    movies=>movies.map(movie=> { return {id:movie.id,title:movie.original_title, poster:movie.poster_path}})
)

export const resultsNumber=createSelector(
    searchResultMovies,
    movies=>movies.length
)

export const castMembers=createSelector(
    cast,
    cast=>cast.map(actor=>{return {picture:actor.profile_path, name:actor.name, character:actor.character, id:actor.id}}).filter(actor=>actor.picture)
)
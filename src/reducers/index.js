import {combineReducers} from 'redux'
import movieDetails from './movieDetails'
import movieLists from './movieLists'
import searchResults from './searchResults'



const reducers=combineReducers({
    movieDetails,
    movieLists,
    searchResults
})

export default reducers
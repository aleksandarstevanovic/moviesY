import {takeEvery,put} from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'
import axios from 'axios';

function* watchMoviesResults(){
    yield takeEvery(types.SEARCH_MOVIES,workerMoviesResults)
}

function* workerMoviesResults(action){
    try{
    const {history}=action.payload
  
     let results=[]
     const {searchText}=action.payload
     yield axios.get('https://api.themoviedb.org/3/search/movie?api_key=2723acc7fd297371a17c0c81146c884f&language=en-US&query='+searchText+'&page=1&include_adult=false')
     .then(response=>{ 
     results=response.data.results
     
     })

     if(results){
        yield put({type:types.MOVIES_SEARCH_RESULTS, payload:results})
        yield history.push('/results')
     }
    }
    catch(e){
        console.log(e)
    }
    
}

export default watchMoviesResults
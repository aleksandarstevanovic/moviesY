import {takeEvery,put} from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'
import axios from 'axios';

function* watchMoviesLists(){
    yield takeEvery(types.GET_MOVIES_LIST,workerMoviesLists)
}

function* workerMoviesLists(){
    try{
     let results={
         popular:[],
         nowPlaying:[],
         upcoming:[],
         trending:[],
         topRated:[]
     }
     yield axios.get('https://api.themoviedb.org/3/movie/popular?api_key=2723acc7fd297371a17c0c81146c884f&language=en-US&page=1')
     .then(response=>{
      
      let movies=response.data.results.filter((movie,index)=>{
          return index<3? movie:''
      })
      results.popular=movies
     })

     yield axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=2723acc7fd297371a17c0c81146c884f&language=en-US&page=1')
     .then(response=>{
     results.nowPlaying=response.data.results.filter(movie=>{
     return typeof movie.id==='number'
     })
     })

     yield axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=2723acc7fd297371a17c0c81146c884f&language=en-US&page=1')
     .then(response=>{
         results.upcoming=response.data.results
     })

     yield axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=2723acc7fd297371a17c0c81146c884f')
     .then(response=>{
         results.trending=response.data.results
     })
     
     yield axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=2723acc7fd297371a17c0c81146c884f&language=en-US&page=1')
     .then(response=>{
         results.topRated=response.data.results
     })

     yield put({type:types.MOVIES_LIST, payload:results})

    }
    catch(e){
        console.log(e)
    }
    
}

export default watchMoviesLists
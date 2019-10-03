import {takeEvery,put} from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'
import axios from 'axios';

function* watchMovieDetails(){
    yield takeEvery(types.GET_MOVIES_DETAILS,workerMovieDetails)
}

function* workerMovieDetails(action){
    try{
        const {history,movieId}=action.payload
        let movieDetails={
            poster:'',
            genres:'',
            trailer:'',
            rating:null,
            title:'',
            releaseDate:'',
            status:'',
            overview:'',
            cast:[],
            relatedMovies:[],
            reviews:[],
            runTime:null
        }

        yield  axios.get('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=2723acc7fd297371a17c0c81146c884f')
        .then(movie=>{
            
            movieDetails.title=movie.data.original_title
            let categories=[];
            movie.data.genres.forEach((genre)=>{
              categories+=genre.name + " | "}
              );
              movieDetails.genres=categories
              movieDetails.poster=`https://image.tmdb.org/t/p/original${movie.data.backdrop_path}`
              movieDetails.rating=movie.data.vote_average
              movieDetails.releaseDate=movie.data.release_date.substring(0,4)
              movieDetails.status=movie.data.status
              movieDetails.overview=movie.data.overview  
              movieDetails.runTime=movie.data.runtime   
        })

        yield  axios.get('https://api.themoviedb.org/3/movie/'+movieId+'/videos?api_key=2723acc7fd297371a17c0c81146c884f&language=en-US')
        .then(response=>{
            if(response){movieDetails.trailer=`https://www.youtube-nocookie.com/embed/${response.data.results[0].key}`}
        })
        .catch(e=>{
            console.log('no trailer')
        })

        yield axios.get('https://api.themoviedb.org/3/movie/'+movieId+'/credits?api_key=2723acc7fd297371a17c0c81146c884f')
        .then(response=>{
        if(response.data.cast.length>0){
            movieDetails.cast=response.data.cast
        }
        })

        yield axios.get('https://api.themoviedb.org/3/movie/'+movieId+'/similar?api_key=2723acc7fd297371a17c0c81146c884f&language=en-US&page=1')
        .then(response=>{
            movieDetails.relatedMovies=response.data.results
        })

        yield axios.get('https://api.themoviedb.org/3/movie/'+movieId+'/reviews?language=en-US&page=1&api_key=2723acc7fd297371a17c0c81146c884f')
        .then(response=>{
           
            movieDetails.reviews=response.data.results
        })
       
        yield put({type:types.MOVIES_DETAILS,payload:movieDetails})
        if(history.location.pathname==='/movie'){
            yield history.replace({pathname:'/results'})
            yield history.push('/movie')
        }
        else{
            yield history.push('/movie')
        }
        
    }
    catch(e){
        console.log(e)
    }
}

export default watchMovieDetails
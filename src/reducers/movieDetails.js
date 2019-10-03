import * as types from '../constants/ActionTypes'

const initialState={
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

const movieDetails=(state=initialState,action)=>{
    if(action.type===types.MOVIES_DETAILS){
     return Object.assign({},state,{
     overview:action.payload.overview,
     status:action.payload.status,
     title:action.payload.title,
     relatedMovies:action.payload.relatedMovies,
     cast:action.payload.cast,
     trailer:action.payload.trailer,
     rating:action.payload.rating,
     reviews:action.payload.reviews,
     genres:action.payload.genres,
     poster:action.payload.poster,
     runTime:action.payload.runTime,
     releaseDate:action.payload.releaseDate
        }
        )
    }
    else{
        return state
    }
}

export default movieDetails
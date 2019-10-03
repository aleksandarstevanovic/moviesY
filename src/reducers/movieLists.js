import * as types from '../constants/ActionTypes'

const initialState={   
popular:[],
nowPlaying:[],
upcoming:[],
trending:[],
topRated:[],
}

const movieLists=(state=initialState,action)=>{
    if(action.type===types.MOVIES_LIST){
        return Object.assign({},state,{
            popular:action.payload.popular,
            nowPlaying:action.payload.nowPlaying,
            upcoming:action.payload.upcoming,
            trending:action.payload.trending,
            topRated:action.payload.topRated,
        })
    }
    else{
        return state
    }
}
export default movieLists
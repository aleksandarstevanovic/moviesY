import * as types from '../constants/ActionTypes'

const initialState={
results:[]
}

const searchResults=(state=initialState,action)=>{
    
    if(action.type===types.MOVIES_SEARCH_RESULTS){
     return Object.assign({},state,{
        results:action.payload
        }
        )
    }
    else{
        return state
    }
}
export default searchResults
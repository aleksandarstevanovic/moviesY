import {connect} from 'react-redux'
import ResultsComponent from '../components/Results'
import {searchResultMovies,resultsNumber} from '../selectors/Selectors'
import {getMovieDetails} from '../actions/index'


const mapStateToProps=state=>{
    return{
    results:searchResultMovies(state),
    resultsNumber:resultsNumber(state)
    }
}

const mapDispatchToProps=dispatch=>({
    dispatch:(e,id,history)=>{
        dispatch(getMovieDetails(id,history))
        e.preventDefault()
    }
    })

export default  connect(mapStateToProps,mapDispatchToProps) (ResultsComponent)
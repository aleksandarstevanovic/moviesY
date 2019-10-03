import {relatedMovies} from '../selectors/Selectors'
import RelatedMoviesComponent from '../components/RelatedMovies'
import {connect} from 'react-redux'
import {getMovieDetails} from '../actions/index'

const mapStateToProps=state=>{
    return {
        movies:relatedMovies(state)
    }
}

const mapDispatchToProps=dispatch=>({
    dispatch:(e,id,history)=>{
        dispatch(getMovieDetails(id,history))
        e.preventDefault()
    }
    })

export default connect (mapStateToProps,mapDispatchToProps) (RelatedMoviesComponent)

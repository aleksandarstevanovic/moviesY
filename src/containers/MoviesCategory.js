import {connect} from 'react-redux'
import MoviesCategoryComponent from '../components/MoviesCategory'
import {popularMovies,nowPlayingMovies,upcomingMovies,trendingMovies,topRatedMovies} from '../selectors/Selectors'
import {getMovieDetails} from '../actions/index'


const mapStateToProps=(state)=>{
    return{
        popular:popularMovies(state),
        nowPlaying:nowPlayingMovies(state),
        upcoming:upcomingMovies(state),
        trending:trendingMovies(state),
        topRated:topRatedMovies(state)
    }
}

const mapDispatchToProps=dispatch=>({
dispatch:(e,id,history)=>{
    dispatch(getMovieDetails(id,history))
    e.preventDefault()
}
})


export default connect (mapStateToProps,mapDispatchToProps) (MoviesCategoryComponent)
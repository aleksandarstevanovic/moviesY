import {popularMovies} from '../selectors/Selectors'
import CarouselComponent from '../components/Carousel'
import {connect} from 'react-redux'

const mapStateToProps=state=>{
    return {
        popular:popularMovies(state),
    }
}

export default connect (mapStateToProps) (CarouselComponent)

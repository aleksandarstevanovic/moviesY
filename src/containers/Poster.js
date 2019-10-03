import {poster,genres,rating,title,releaseDate,runTime} from '../selectors/Selectors'
import PosterComponent from '../components/Poster'
import {connect} from 'react-redux'

const mapStateToProps=state=>{
    return {
        poster:poster(state),
        genres:genres(state),
        rating:rating(state),
        title:title(state),
        date:releaseDate(state),
        time:runTime(state),
    }
}

export default connect (mapStateToProps) (PosterComponent)

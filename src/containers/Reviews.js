import {reviews} from '../selectors/Selectors'
import ReviewsComponent from '../components/Reviews'
import {connect} from 'react-redux'

const mapStateToProps=state=>{
    return {
        reviews:reviews(state)
    }
}

export default connect (mapStateToProps) (ReviewsComponent)

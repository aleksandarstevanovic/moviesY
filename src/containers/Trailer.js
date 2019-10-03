import {trailer} from '../selectors/Selectors'
import TrailerComponent from '../components/Trailer'
import {connect} from 'react-redux'

const mapStateToProps=state=>{
    return {
        trailer:trailer(state)
    }
}

export default connect (mapStateToProps) (TrailerComponent)

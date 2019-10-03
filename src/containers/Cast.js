import {castMembers} from '../selectors/Selectors'
import CastComponent from '../components/Cast'
import {connect} from 'react-redux'

const mapStateToProps=state=>{
    return {
     cast:castMembers(state)
    }
}

export default connect (mapStateToProps) (CastComponent)

import {overview} from '../selectors/Selectors'
import SummaryComponent from '../components/Summary'
import {connect} from 'react-redux'

const mapStateToProps=state=>{
    return {
        overview:overview(state)
    }
}

export default connect (mapStateToProps) (SummaryComponent)

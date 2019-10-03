import {connect} from 'react-redux'
import HomeComponent from '../components/Home'
import {getMoviesList} from '../actions/index'

const mapDispatchProps=dispatch=>({
    dispatch:(e)=>{
    dispatch(getMoviesList())
   
    }
})



export default connect(null,mapDispatchProps) (HomeComponent)
import {connect} from 'react-redux'
import NavbarComponent from '../components/Navbar'
import {getMovies} from '../actions/index'

const mapDispatchProps=dispatch=>({
    handleSubmit:(e,input,history)=>{
    dispatch(getMovies(input,history))  
    e.preventDefault()
    }
})

export  default connect(null,mapDispatchProps) (NavbarComponent)
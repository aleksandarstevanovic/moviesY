import React,{ Component } from 'react'
import Navbar from '../containers/Navbar'
import Footer from './Footer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { withRouter } from 'react-router-dom';
import loader from '../icons/loader.gif'
import ReactTimeout from 'react-timeout'
import PropTypes from 'prop-types'

const ShowMovie=({poster,id,title,dispatch,history})=>{
    return(  
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 m-0 title mb-4" >
        <div className='well text-center'>
         <a onClick={(e)=>{dispatch(e,id,history)}} href='href="javascript:void(0)' className='chooseMovie '>
        <img src={`https://image.tmdb.org/t/p/w342/${poster}`} alt='' className='imgslide'/>
        <h5>{title}</h5>
        </a>
        </div>
        </div>      
    )
}

class Results extends Component{
    state={
        loading:true
    }
    componentDidMount(){
    this.props.setTimeout(()=>{this.setState({loading:false})}, 1000)
    window.scrollTo(0, 0);
    }
    render(){
    const {history}=this.props
    return(
        <>
        {this.state.loading &&
        <div className="loader">
        <img src={loader} alt=""/>
        </div>
        }
        <Navbar/>
         <Container fluid>
             <Row>
             <h2 id="total-results" className="mb-5 text-center mx-auto">{`Showing ${this.props.resultsNumber} results`}</h2>
             <Col id="ResultsMovies" className="row col-11 mx-auto">
             {this.props.results.map((movie)=>{
             return <ShowMovie key={movie.id} poster={movie.poster} id={movie.id} title={movie.title} dispatch={this.props.dispatch} history={history}/>
             })}   
            
             </Col>
             </Row>
        </Container>
        <Footer/>
        </>
    )
}
}

Results.propTypes={
    results:PropTypes.array,
    resultsNumber:PropTypes.number,
    dispatch:PropTypes.func.isRequired
}

export default withRouter( ReactTimeout(Results))
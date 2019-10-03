import React, {Component} from 'react'
import Navbar from '../containers/Navbar'
import Sidebar from './SecondSidebar'
import Footer from './Footer'
import Poster from '../containers/Poster'
import RelatedMovies from '../containers/RelatedMovies'
import Cast from '../containers/Cast'
import Reviews from '../containers/Reviews'

import Trailer from '../containers/Trailer'
import Summary from '../containers/Summary'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import loader from '../icons/loader.gif'
import ReactTimeout from 'react-timeout'

class Movie extends Component{
    state={
        loading:true
    }
    componentDidMount(){
    this.props.setTimeout(()=>{this.setState({loading:false})}, 1000)
    window.scrollTo(0, 0);
    }
    render(){
    return(
     <>
     {this.state.loading &&
        <div className="loader">
        <img src={loader} alt=""/>
        </div>
        }
    
    <Navbar/>
     <Sidebar/>
     <Container className='offset-md-3  offset-lg-2 offset-xl-2 p-0 col-12 col-lg-10  col-md-9 '>
     <Poster/>
     </Container>
     <Container className='offset-md-4  offset-lg-3 offset-xl-3 p-0 col-10 col-lg-8  col-md-7 '>
     <Col className='col-10 mx-auto'>
     <Trailer  />
     </Col>
     <Summary/>
      <Cast/>
      <RelatedMovies/>
      <Reviews/>
      <Footer/>
      </Container>
     </>
     )
     }
     }

export default ReactTimeout(Movie)
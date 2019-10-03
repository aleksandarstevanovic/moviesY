import React, { Component } from 'react'
import Navbar from '../containers/Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviesCategory from '../containers/MoviesCategory'
import Carousel from '../containers/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import loader from '../icons/loader.gif'
import ReactTimeout from 'react-timeout'
import PropTypes from 'prop-types'


class Home extends Component {
    state={
        loading:true
    }
    componentDidMount(){
    this.props.dispatch()
    this.props.setTimeout(()=>{this.setState({loading:false})}, 1500)
    window.scrollTo(0, 0);
    }

    
    render() {
        return (
        <>
        {this.state.loading &&
        <div className="loader">
        <img src={loader} alt=""/>
        </div>
        }
               
               <Navbar/>
               <Container fluid>
               <Row>
               <Sidebar />
               <Col className='offset-md-3  offset-lg-2 offset-xl-2 p-0 col-12 col-lg-10  col-md-9 '>
               <Carousel />
               </Col>
               <Col className='movies offset-md-4  offset-lg-3 offset-xl-3 p-0 col-10 col-lg-8  col-md-7 '>
               
               <MoviesCategory/>  
              
               <Footer/>  
               </Col>    
               </Row>
               </Container>

            </>
        )
    }
}

Home.propTypes={
    dispatch:PropTypes.func.isRequired
}


export default  ReactTimeout(Home)

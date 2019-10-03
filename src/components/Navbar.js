import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../icons/logo.png'
import { withRouter } from 'react-router-dom';

const Navbar=props=>{
  let input
  const {history}=props
    return(
        <div>
       <Nav className="navbar  navbar-dark bg-dark p-0 " id="topnav" onSubmit={e=>{return props.handleSubmit(e,input.value,props.history)}}>
        <a className="navbar-brand pl-2"  href=" #/" onClick={(e)=>{history.push('/')}}>
        <img src={logo} width="80" height="80" id="logo" className="d-inline-block align-middle" alt="Movie Y"/>
        <span id="website-name">MOVIES Y</span>
        </a>
        <form className="form-inline mx-auto" id="searchForm">
        <input  ref={node => { input = node;}}  className="form-control m-0 border-0 rounded-0" id="searchText" type="search" placeholder="Search movies" aria-label="Search"/>
        <Button className="btn btn-dark m-0 border-0 rounded-0" id="search-btn" type="submit">Search</Button>
        </form>
        </Nav>
        </div>
    )
}

Navbar.propTypes={
  history:PropTypes.object
}
export default withRouter(Navbar)



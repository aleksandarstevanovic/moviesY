import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlay,faBolt, faChartLine,faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll";

const Sidebar=()=>{
    return(   
        <div className="bg-dark-grey d-none d-md-inline col-md-3  col-lg-2 col-xl-2" id="sidebar">
          <p className="sidebar-labels pt-5 mb-1 font-weight-bold" style={{color:'white'}}>BROWSE</p>
          <nav className="nav flex-column">
                <Link  
                className="nav-link"
                activeClass="active"
                to="nowPlaying"
                spy={true}
                smooth={true}
                offset={-320}
                duration={500}
              ><FontAwesomeIcon icon={faPlay} /> Now Playing</Link>
           
               <Link 
               className="nav-link"
                activeClass="active"
                to="upcoming"
                spy={true}
                smooth={true}
                offset={-250}
                duration={500}
              ><FontAwesomeIcon icon={faBolt} />  Upcoming</Link>
               <Link
                className="nav-link"
                activeClass="active"
                to="trending"
                spy={true}
                smooth={true}
                offset={-250}
                duration={500}
              > <FontAwesomeIcon icon={faChartLine} />  Trending</Link>

               <Link
               className="nav-link"
                activeClass="active"
                to="topRated"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              ><FontAwesomeIcon icon={faThumbsUp} /> Top Rated</Link>           
          </nav>
      </div> 
    )
}

export default Sidebar
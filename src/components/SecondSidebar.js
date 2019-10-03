import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faParagraph,faComments, faVideo,faFilm,faUsers} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll";

const SecondSidebar=()=>{
    return(   
        <div className="bg-dark-grey d-none d-md-inline col-md-3  col-lg-2 col-xl-2" id="sidebar">
          <p className="sidebar-labels pt-5 mb-1 font-weight-bold" style={{color:'white'}}>BROWSE</p>
          <nav className="nav flex-column">
                <Link  
                className="nav-link"
                activeClass="active"
                to="trailer"
                spy={true}
                smooth={true}
                offset={-230}
                duration={500}
              ><FontAwesomeIcon icon={faVideo} /> Trailer</Link>
           
               <Link 
               className="nav-link"
                activeClass="active"
                to="summary"
                spy={true}
                smooth={true}
                offset={-360}
                duration={500}
              ><FontAwesomeIcon icon={faParagraph} />  Summary</Link>
               <Link
                className="nav-link"
                activeClass="active"
                to="cast"
                spy={true}
                smooth={true}
                offset={-240}
                duration={500}
              > <FontAwesomeIcon icon={faUsers} />  Cast</Link>

               <Link
               className="nav-link"
                activeClass="active"
                to="relatedMovies"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              ><FontAwesomeIcon icon={faFilm}/> Related Movies</Link>         

              <Link
               className="nav-link"
                activeClass="active"
                to="reviews"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              ><FontAwesomeIcon icon={faComments}/> Reviews</Link>     
          </nav>
      </div> 
    )
}

export default SecondSidebar
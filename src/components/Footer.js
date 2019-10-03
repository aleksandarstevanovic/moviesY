import React from 'react'
import logo from '../icons/tmdb-logo.png'

const Footer=()=>{
    return ( 
        <footer className="mt-5 d-flex  justify-content-center">
        <a href="https://www.themoviedb.org/documentation/api" target="_blank" rel="noopener noreferrer" >
          <img id="powered-by" src={logo} alt="Powered By The Movie DB"/>
        </a>
      </footer>
      )
}

export default Footer
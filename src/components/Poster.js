import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const Poster=props=>{
    return(
      <>
      <div className='poster-container'>
      <img src={`${props.poster}`} alt='' className='poster'/>
      </div>
      <div className='meta'>
      <p className="lead m-0">
      <FontAwesomeIcon id='star' icon={faStar} />
      <span id="movie-rating">{`${props.rating}`}</span>/10
      </p>
      <h1 className="font-weight-bold"  id="movie-name">{`${props.title}`}</h1>
      <p className="lead">
        <span id="movie-release">{`${props.date.substring(0,4)}`}</span> &bull; <span id="movie-categories">{`${props.genres}`}</span> &bull; <span id="movie-runtime">{`${props.time!==null?`${props.time} mins`:''}`}</span>
      </p>
      </div>
    
      </>
    )
}

Poster.propTypes={
  poster:PropTypes.string,
  genres:PropTypes.string,
  rating:PropTypes.number,
  title:PropTypes.string,
  date:PropTypes.string,
  time:PropTypes.number,
}
export default Poster
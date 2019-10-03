import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { withRouter } from 'react-router-dom';
import {settings} from '../settings'
import PropTypes from 'prop-types'

const ShowMovie=({poster,id,title,dispatch,history})=>{

    return (
    <div className='slide'>
       <div className='well text-center ml-4'>
        <a data-id={id} onClick={(e)=>{dispatch(e,id,history)}} href='href="javascript:void(0)' className='chooseMovie'>
       <img src={`https://image.tmdb.org/t/p/w342/${poster}`}  alt='' className='imgslide'/>
       <h5>{title}</h5>
       </a>
       </div>
       </div>
    )
  }


  const RelatedMovies=props=>{
      const {history}=props
  return(
     <div id='relatedMovies'>
      {props.movies.length>0 &&
        <>
       <h2 className="section-headings mb-4 mt-5 text-center ">Related movies</h2>
       <Slider {...settings}>
       {props.movies.map(movie=>{
           return <ShowMovie key={movie.id} poster={movie.poster} id={movie.id} title={movie.title} dispatch={props.dispatch} history={history}/>
       })}
       </Slider>  
      </>
      }
     </div>
  )
  }
  
  RelatedMovies.propTypes={
      movies:PropTypes.array,
      dispatch:PropTypes.func.isRequired
  }


  export default withRouter(RelatedMovies)
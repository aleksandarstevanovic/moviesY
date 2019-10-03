import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { withRouter } from 'react-router-dom';
import {settings} from '../settings'
import PropTypes from 'prop-types'

const ShowMovie=({poster,id,title,dispatch,history})=>{

  return (
  <div className='slide' key={id}>
     <div className='well text-center ml-4'>
      <a data-id={id} onClick={(e)=>{dispatch(e,id,history)}} href='href="javascript:void(0)' className='chooseMovie'>
     <img src={`https://image.tmdb.org/t/p/w342/${poster}`} alt='' className='imgslide'/>
     <h5>{title}</h5>
     </a>
     </div>
     </div>
  )
}

const MoviesCategory=props=>{
  const {history}=props
  
  return (
    <> 
    <h2 className='text-center mt-5'>now playing</h2>
    <div id='nowPlaying'>
    <Slider {...settings}>
    { props.nowPlaying.map((movie)=>{
   return <ShowMovie  key={movie.id} poster={movie.poster} id={movie.id} title={movie.title} dispatch={props.dispatch} history={history}/>
 })} 
    </Slider>
    </div>


    <div id='upcoming'>
    <h2 className='text-center'>upcoming</h2>
    <Slider {...settings}>
    { props.upcoming.map((movie)=>{
     return <ShowMovie  key={movie.id} poster={movie.poster} id={movie.id} title={movie.title} dispatch={props.dispatch} history={history}/>
 })}
    </Slider>
    </div>


    <div id='trending'>
    <h2 className='text-center'>trending</h2>
    <Slider {...settings}>
    { props.trending.map((movie)=>{
     return <ShowMovie key={movie.id} poster={movie.poster} id={movie.id} title={movie.title} dispatch={props.dispatch} history={history}/>
 })}
   </Slider>
 </div>
   
  
    <div id='topRated'>
    <h2 className='text-center'>top rated</h2>
    <Slider {...settings}>
    { props.topRated.map((movie)=>{
     return <ShowMovie key={movie.id} poster={movie.poster} id={movie.id} title={movie.title} dispatch={props.dispatch} history={history}/>
 })}
    </Slider>
    </div>
    </>
  );
}


MoviesCategory.propTypes={
  popular:PropTypes.array,
  nowPlaying:PropTypes.array,
  upcoming:PropTypes.array,
  trending:PropTypes.array,
  topRated:PropTypes.array
}


export default withRouter(MoviesCategory)
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {settings} from '../settings'
import PropTypes from 'prop-types'

const ShowCast=({picture,name,character})=>{
    return(
        <div className='slide'>
           <div className='well text-center ml-4'>
          <img src={`https://image.tmdb.org/t/p/w342/${picture}`} alt='' className='imgslide'/>
          <p className='actorsName mb-0'>{`${name}`}</p>
          <p className="character ">{`${character}`}</p>
         </div>
         </div>
    )
}

const Cast=props=>{
   
      return(
          <div id='cast'> 
          
        {props.cast.length >0 &&
         <>
          <h2 className="section-headings mb-4 mt-5 text-center">Cast</h2>
          <Slider {...settings}>
          {props.cast.map(actor=>{
          return <ShowCast key={actor.id} picture={actor.picture} name={actor.name} character={actor.character}/>
          })}
          </Slider>
          </>
        }
          </div>
      )
}
Cast.propTypes={
  cast:PropTypes.array
}

export default Cast
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import PropTypes from 'prop-types'

const Carousell=props=>{
    return(   
<Carousel className="carousel">
<Carousel.Item>
  <img
    className="d-block w-100"
    src={props.popular[0]?`https://image.tmdb.org/t/p/original${props.popular[0].poster}`:''}
    alt="First slide"
  />
  <Carousel.Caption>
    <h1>{props.popular[0]? props.popular[0].title:''}</h1>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={props.popular[1]?`https://image.tmdb.org/t/p/original${props.popular[1].poster}`:''}
    alt="Third slide"
  />
  <Carousel.Caption>
  <h1>{props.popular[1]? props.popular[1].title:''}</h1>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={props.popular[2]?`https://image.tmdb.org/t/p/original${props.popular[2].poster}`:''}
    alt="Third slide"
  />
  <Carousel.Caption>
  <h1>{props.popular[2]? props.popular[2].title:''}</h1>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
    )
}

Carousell.propTypes={
  popular:PropTypes.array
}

export default  Carousell
import React from 'react'
import PropTypes from 'prop-types'

const Review=({content,author})=>{
return(
    <>
    <blockquote className="blockquote">
    <p className="mb-0">{content}</p>
    <footer className="blockquote-footer"><cite>{author}</cite></footer>
    </blockquote>
    </>
)
}
const Reviews=props=>{
    return(
        <div id='reviews'>
        {props.reviews.length >0 &&
        <div id="rewiews" className='mt-2'>
        <h2 className='mt-5 text-center'>Recent rewiews</h2>
         {props.reviews.map((review,index)=>{
          if(index<3){
         return <Review key={index} content={review.content} author={review.author}/>
         }
         else{
             return ''
         }
        
         })}
        </div>
        }
        </div>
    )
}

Reviews.propTypes={
    reviews:PropTypes.array
}

export default Reviews
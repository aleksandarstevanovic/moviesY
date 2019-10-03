import React from 'react'
import PropTypes from 'prop-types'

const Trailer=props=>{
    
    return(
         <div id='trailer' className='mt-5'>
          
        {props.trailer  &&
        <>
        <h2 className='text-center'>Watch thrailer</h2>
        <div className="embed-responsive embed-responsive-16by9">
        <iframe title='trailer' className="embed-responsive-item" id='trailer' 
        src={`${props.trailer}`}>
        </iframe></div>
        </>
        }
        </div>
    )
}

Trailer.propTypes={
    trailer:PropTypes.string
}

export default Trailer
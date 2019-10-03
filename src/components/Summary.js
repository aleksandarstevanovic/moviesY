import React from 'react'
import PropTypes from 'prop-types'

const Summary=props=>{
    return(
        <div id='summary'>
      <h2 className="mt-5 section-headings mb-3 text-center">Summary</h2>
      <p className='text-center'>{props.overview}</p>
        </div>
    )
}

Summary.propTypes={
  overview:PropTypes.string
}
export default Summary
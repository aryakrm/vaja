import React from 'react'
import LazyLoad from 'react-lazy-load'

function Intro() {
  return (
    <div className='Intro' >
      <LazyLoad>
        <img src="/assets/coalsBG.jpg" alt="coalsBG" />
      </LazyLoad>
    </div>
  )
}

export default Intro

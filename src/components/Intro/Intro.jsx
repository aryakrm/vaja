import React from 'react'
import './Intro.scss'
import LazyLoad from 'react-lazy-load'

function Intro() {
  return (
    <div className='Intro' >
      <LazyLoad>
        
        <video src="/assets/flame.mp4" id="background-video" autoPlay loop muted></video>
      </LazyLoad>
      <h1>100% Hight Quality Charcoal <br /> <span>Wholesale to All Over The World</span></h1>
      <div className='stickers' >
          <img src="/assets/prmQuality.png" alt="sticker" />
          <img src="/assets/100Natural.png" alt="sticker" />
      </div>
      
    </div>
  )
}

export default Intro

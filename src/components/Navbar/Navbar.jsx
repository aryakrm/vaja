import React from 'react';
import "./Navbar.scss"
import LazyLoad from 'react-lazy-load';

function Navbar() {
  return (
    <nav>
     <LazyLoad>
      <img src="/assets/vajaWhite.png" alt="Vaja Logo" />
      </LazyLoad>
    </nav>
  )
}

export default Navbar

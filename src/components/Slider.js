import React from 'react';
import OwlCarousel from 'react-owl-carousel';

export function Slider(props) {
  return (
    <OwlCarousel 
   		className="owl-theme"
    	margin={10} 
    	nav>
    	{props.children}
    </OwlCarousel>
  )
}



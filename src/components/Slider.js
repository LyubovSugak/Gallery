var React = require('react');
import OwlCarousel from 'react-owl-carousel';

export function Slider(props) {
  return (
    <OwlCarousel 
    className="owl-theme"
    loop margin={10} nav>
        {props.children}
    </OwlCarousel>
  )
}



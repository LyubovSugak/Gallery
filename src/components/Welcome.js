import React from 'react';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';

export class Welcome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		axios.get('/newest-works')
		.then((res) => this.setState({
			newImages: res.data.listNewestWorks		
		}))	
	}
	
	render() {
		if (!this.state.newImages) {
			return null
		}
		return (
			<div className="background-image-logo">
				<img src="https://s3.amazonaws.com/imageboard-lyuba/big_logo.png" />
				<h1>The newest works</h1>
					<div className="welcome-slider-row">
						<OwlCarousel 
						    className="owl-theme"
						    loop margin={10} nav
						>
							{this.state.newImages.map(item => {
								return (
									<div className="welcome-slider" key={item.image}><img src={item.image} /></div>
								)
							})}
						</OwlCarousel>
					</div>
			</div>
		)
	}
}
//  w W /



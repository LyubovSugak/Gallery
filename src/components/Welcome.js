import React from 'react';
import axios from 'axios';
import { Slider } from './Slider';

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
			<div>
				<img src="/static/abs.jpg" />
				<h1>The newest works</h1>
				<Slider>
					{this.state.newImages.map(item => {
						return (
							<img src={item.image} key={item.image} />
						)
					})}
				</Slider>
			</div>
		)
	}
}
//  w W /



import React from 'react';
import axios from 'axios';
import { Slider } from './Slider';

export class PaintLandscape extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			paintLandscape: []
		};
	}

	componentDidMount() {
		axios.get('/paint-landscape')
		.then((res) => this.setState({
			paintLandscape: res.data.paintLandscape
		}))
	}
	render() {
		return (
			<Render />
		)
		// if (!this.state.paintLandscape) {
		// 	return null
		// }
		// return (
		// 	<div>
		// 		<div>

		// 		</div>
		// 		<Slider>
		// 			{this.state.newImages.map(item => {
		// 				return (
		// 					<img src={item.image} key={item.image} />
		// 				)
		// 			})}
		// 		</Slider>
		// 	</div>
		// )
	}
}

import React from 'react';
import axios from 'axios';
import { PaintingsTechnique } from './PaintingsTechnique';

export class PaintWatercolor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			watercolorData: []
		};
	}

	componentDidMount() {
		axios.get('/paint-watercolor')
		.then((res) => this.setState({
			watercolorData: res.data.watercolorData

		}))
	}
	render() {
		return (
			<PaintingsTechnique techniqueData={this.state.watercolorData} />
		)
	}
}
//  w W /
import React from 'react';
import axios from 'axios';
import { PaintingsTechnique } from './PaintingsTechnique';

export class PaintWaterPencil extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			waterPencilData: []
		};
	}

	componentDidMount() {
		axios.get('/paint-water-pencil')
		.then((res) => this.setState({
			waterPencil: res.data.waterPencil

		}))
	}
	render() {
		return (
			<PaintingsTechnique techniqueData={this.state.waterPencil} />
		)
	}
}
//  w W /
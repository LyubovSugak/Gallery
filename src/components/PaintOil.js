import React from 'react';
import axios from 'axios';
import { PaintingsTechnique } from './PaintingsTechnique';

export class PaintOil extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			oilData: []
		};
	}

	componentDidMount() {
		axios.get('/paint-oil')
		.then((res) => this.setState({
			oilData: res.data.oilData

		}))
	}
	render() {
		return (
			<PaintingsTechnique techniqueData={this.state.oilData} />
		)
	}
}
//  w W /
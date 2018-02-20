import React from 'react';
import axios from 'axios';
import { PaintingsCategorie } from './PaintingsCategorie';

export class PaintStillLife extends React.Component {
	constructor(props) {
		console.log('COMPONENT CONSTRUCTOR')
		super(props);
		this.state = {
			stillLifeData: []
		};
	}

	componentDidMount() {

		axios.get('/paint-still-life')
		.then((res) => this.setState({
			stillLifeData: res.data.stillLifeData

		}))
	}
	render() {
		console.log('COMPONENT STILL LIFE')
		return (
			<PaintingsCategorie categorieData={this.state.stillLifeData} />
		)
	}
}
//  w W /
import React from 'react';
import axios from 'axios';
import { PaintingsCategorie } from './PaintingsCategorie';

export class PaintLife extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lifeData: []
		};
	}

	componentDidMount() {
		axios.get('/paint-everyday-life')
		.then((res) => this.setState({
			lifeData: res.data.lifeData

		}))
	}
	render() {
		return (
			<PaintingsCategorie categorieData={this.state.lifeData} />
		)
	}
}
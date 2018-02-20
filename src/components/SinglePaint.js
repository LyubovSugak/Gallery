import React from 'react';
import axios from 'axios';

export class SinglePaint extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			singlePaint: {}
		};
	}
	componentDidMount() {
		axios.get('/single-paint/' + this.props.match.params.id)
		.then((res) => {
			this.setState({
				singlePaint: res.data.singlePaint
			})
		})
	}

	render() {
		return (
			<div>
				<img src={this.state.singlePaint.image} />
				<p>Dimensions: {this.state.singlePaint.y}cm {this.state.singlePaint.x}cm</p>

			</div>

		)
	}
}
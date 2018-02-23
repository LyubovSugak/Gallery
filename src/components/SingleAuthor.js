import React from 'react';
import axios from 'axios';
import { Slider } from './Slider';
import { LinkToSingleImg } from './LinkToSingleImg';


export class SingleAuthor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			singleAuthor: {
				images: []
			}
			
		};
	}
	componentDidMount() {
		axios.get('/single-author/' + this.props.match.params.id)
		.then((res) => {
			this.setState({
				singleAuthor: res.data.singleAuthor
			})
		})
	}
	render() {

		return (
			<div className="single-author-container">
				<div className="container">
					<div className="single-author-data">
						<div className="single-author-img"><img src={this.state.singleAuthor.authorImage} /></div>
						<p>{this.state.singleAuthor.first} {this.state.singleAuthor.last}</p>
					</div>
					<Slider>
						{this.state.singleAuthor.images.map(img => {
							return (
								<div className="paints-slider" key={img.image}>
									<LinkToSingleImg img={img} />
								</div>
							)
						})}
					</Slider>
				</div>
			</div>
		)
	}
}
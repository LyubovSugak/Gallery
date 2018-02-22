import React from 'react';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import { LinkToFrame } from './LinkToFrame';

export class SinglePaint extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			singlePaint: {},
			color: ''
		};
		this.changeFrameColor = this.changeFrameColor.bind(this);
		this.changeFrameWidth = this.changeFrameWidth.bind(this);
	}
	componentDidMount() {
		axios.get('/single-paint/' + this.props.match.params.id)
		.then((res) => {
			this.setState({
				singlePaint: res.data.singlePaint
			})
		})
	}
	changeFrameColor(color) {
		this.setState({
			color: color
		})
	}
	changeFrameWidth(width) {
		this.setState({
			width: width
		})
	}

	render() {
		var  styleInterioFirst = {
			backgroundImage: `url("https://s3.amazonaws.com/imageboard-lyuba/showcase2.f2ffacc5.jpg")`, 
			backgroundSize: 'cover'
		}
		var  styleInterioSecond = {
			backgroundImage: `url("https://s3.amazonaws.com/imageboard-lyuba/showcase5.09582738.jpg")`, 
			backgroundSize: 'cover'
		}
		var  styleInterioThird = {
			backgroundImage: `url("https://s3.amazonaws.com/imageboard-lyuba/showcase6.68f22769.jpg")`, 
			backgroundSize: 'cover'
		}
		// var className = this.state.color
		// if (className == 'brown') {

		// }

		return (
			<div className="single-paint-container">
				<div className={"single-paint-img " + this.state.color + ' ' + this.state.width}>
					<img className="big-img-container" src={this.state.singlePaint.image} />
					<OwlCarousel 
					    className="owl-theme"
					    loop margin={10} nav
					    dots
					    responsive={{
					    	0: {
					    		items:1,
					    		nav: true
					    	},
					    	600: {
					    		items:1,
					    		nav: true
					    	}
					    }}
					>
					    <div className="interio-1" style={styleInterioFirst}>
					    	<div className="interio-1-2-img"><img src={this.state.singlePaint.image} /></div>
					    </div>
					    <div className="interio-2" style={styleInterioSecond}>
					    	<div className="interio-1-2-img"><img src={this.state.singlePaint.image} /></div>
					    </div>
					    <div className="interio-3" style={styleInterioThird}>
					    	<div className="interio-1-2-img"><img src={this.state.singlePaint.image} /></div>
					    </div>
					    
					</OwlCarousel>

				</div>
				<div className="single-paint-description">
					<p>Technique: {this.state.singlePaint.technique}</p>
					<p>Dimensions: {this.state.singlePaint.y} cm {this.state.singlePaint.x} cm</p>
					<LinkToFrame changeFrameColor={color => this.changeFrameColor(color)} 
					changeFrameWidth={width => this.changeFrameWidth(width)} />
				</div>

			</div>

		)
	}
}
//  w W /

// <LinkToFrame imgId={this.state.singlePaint.id} image={this.state.singlePaint.image}>
// 						<div>Try Frame</div></LinkToFrame>
// <OwlCarousel 
// 				   		className="owl-theme"
// 				    	margin={10}
// 				    	items={2} 
// 				    	nav
// 				    	>
// 				    	<div className="interio-1" style={styleInterioFirst}>
// 				    		<div className="interio-1-2-img"><img src={this.state.singlePaint.image} /></div>
// 				    	</div>
// 				    	<div className="interio-2" style={styleInterioSecond}>
// 				    		<div className="interio-1-2-img"><img src={this.state.singlePaint.image} /></div>
// 				    	</div>
// 				    </OwlCarousel>
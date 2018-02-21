import React from 'react';
// import { SinglePaint } from './SinglePaint';

export class LinkToFrame extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.showFrameMenu = this.showFrameMenu.bind(this);
		this.closeFrameMenu = this.closeFrameMenu.bind(this);
	}
	showFrameMenu() {
		var switcher = this.state.isMenuVisible ? false : true;
		this.setState({
			isMenuVisible: switcher
		})
	}	
	closeFrameMenu() {
		this.setState({
			isMenuVisible: false
		})
	}

	render() {
		return (
			<div>
				{!this.state.isMenuVisible && <div onClick={this.showFrameMenu}>Try Frame</div>}
				{this.state.isMenuVisible && 
					<div className="frame-menu-container">
						<p>Frame Color</p>
						<div className="colors-of-frame">
							<div className="black-button" onClick={() => this.props.changeFrameColor('black')}></div>
							<div className="brown-button" onClick={() => this.props.changeFrameColor('brown')}></div>
							<div className="beige-button" onClick={() => this.props.changeFrameColor('beige')}></div>
							<div className="pink-button" onClick={() => this.props.changeFrameColor('pink')}></div>
						</div>
						<p>Frame Width</p>
						<div className="width-of-frame">
							<div className="width-scail" onClick={() => this.props.changeFrameWidth('width-75')}>0.75"</div>
							<div className="width-scail" onClick={() => this.props.changeFrameWidth('width-1')}>1"</div>
							<div className="width-scail" onClick={() => this.props.changeFrameWidth('width-25')}>1.25"</div>
						</div>
						{this.state.isMenuVisible&& <div onClick={this.closeFrameMenu}>CLOSE</div>}
					</div>

				}
			</div>
		)
	}
}
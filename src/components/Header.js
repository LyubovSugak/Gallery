import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.showPainting = this.showPainting.bind(this);
		this.showPhotography = this.showPhotography.bind(this);
		this.showHandcraft = this.showHandcraft.bind(this);
		this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
	}
	showPainting() {
		var switcher = this.state.isPaintingVisible ? false : true;
		this.setState({
			isPaintingVisible: switcher
		})
	}
	showPhotography() {
		var switcher = this.state.isPhotographyVisible ? false : true;
		this.setState({
			isPhotographyVisible: switcher
		})
	}
	showHandcraft() {
		var switcher = this.state.isHandcraftVisible ? false : true;
		this.setState({
			isHandcraftVisible: switcher
		})
	}
	onMouseLeaveHandler() {
		this.setState({
			isHandcraftVisible: false,
			isPaintingVisible: false,
			isPhotographyVisible: false

		})
    }


	render() {
		return (
			<div id="header">
				{!this.state.isPaintingVisible && !this.state.isPhotographyVisible && 
					!this.state.isHandcraftVisible && <p onClick={this.showPainting}>Painting</p>}
				{this.state.isPaintingVisible && 
					<div className="paintings-menu" onMouseLeave={this.onMouseLeaveHandler}>
						<div>
							<h3>Painting Categories</h3>
							<Link to="/paintings/categorie/landscape"><p>Landscape</p></Link>
							<Link to="/paintings/categorie/everyday-life"><p>Everyday Life</p></Link>
							<Link to="/paintings/categorie/still-life"><p>Still Life</p></Link>
						</div>
						<div>
							<h3>Painting Techniques</h3>
							<Link to="/paintings/technique/oil"><p>Oil</p></Link>
							<Link to="/paintings/technique/watercolor"><p>Watercolor</p></Link>
							<Link to="/paintings/technique/watercolor-pencil"><p>Watercolor Pencil</p></Link>
							<Link to="/paintings/technique/pastel-crayon"><p>Pastel Crayon</p></Link>
							<Link to="/paintings/technique/pencil"><p>Pencil</p></Link>
						</div>
					</div>}
				{!this.state.isPhotographyVisible && !this.state.isPaintingVisible && 
					!this.state.isHandcraftVisible && <p onClick={this.showPhotography}>Photography</p>}
				{this.state.isPhotographyVisible && 
					<div className="photography-menu" onMouseLeave={this.onMouseLeaveHandler}>
						<div>
							<h3>Photography Genres</h3>
							<Link to="/photos/genre/abstract"><p>Abstract</p></Link>
							<Link to="/photos/genre/documentary"><p>Documentary</p></Link>
							<Link to="/photos/genre/nature"><p>Nature</p></Link>
							<Link to="/photos/genre/still-life"><p>Still Life</p></Link>
							<Link to="/photos/genre/marin"><p>Marin</p></Link>
						</div>
						<div>
							<h3>Photography Styles</h3>
							<Link to="/photos/style/black-white"><p>Black and White</p></Link>
							<Link to="/photos/style/color"><p>Color</p></Link>
							<Link to="/photos/style/street"><p>Street Photo</p></Link>
							<Link to="/photos/style/panoramic"><p>Panoramic</p></Link>
						</div>
					</div>}
				{!this.state.isHandcraftVisible && !this.state.isPhotographyVisible
					&& !this.state.isPaintingVisible && <p onClick={this.showHandcraft}>Handcraft</p>}
				{this.state.isHandcraftVisible && 
					<div onMouseLeave={this.onMouseLeaveHandler}>
						<Link to="/handcrafts/categorie/new-year"><p>New Year</p></Link>
						<Link to="/handcrafts/categorie/candlesticks"><p>Candlesticks</p></Link>
						<Link to="/handcrafts/categorie/pots"><p>Pots</p></Link>

					</div>}
			</div>

		)
	}
}
// <Link to="/photos/genre/potrait"><p>Potrait</p></Link>

//  w W /
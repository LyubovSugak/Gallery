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
	componentDidUpdate() {
		if (this.menu) {
			setTimeout(() => {
				this.menu.classList.add('menu-transition') 
				this.menu = null;
			}, 17)
			
			
		}
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

// onMouseLeave={this.onMouseLeaveHandler}
	render() {
		return (
			<div id="header">
				
				<div className="header-content">
					<Link to="/"><div className="mini-logo"><img src={`https://s3.amazonaws.com/imageboard-lyuba/belka_logo_small_white.png`} /></div></Link>
					<div className="header-menu">
						<img src={`https://s3.amazonaws.com/imageboard-lyuba/paint.png`} />
						<p onClick={this.showPainting}>Painting</p>
						{this.state.isPaintingVisible && 
							<div className="paintings-menu" ref={menu => this.menu = menu} onMouseLeave={this.onMouseLeaveHandler}>
								<img src="https://s3.amazonaws.com/imageboard-lyuba/paint-menu.jpg" />
								<div className="categorie-list">
									<h3>Painting Categories</h3>
									<Link to="/paintings/categorie/landscape" style={{ textDecoration: 'none' }}><p>Landscape</p></Link>
									<Link to="/paintings/categorie/everyday-life" style={{ textDecoration: 'none' }}><p>Everyday Life</p></Link>
									<Link to="/paintings/categorie/still-life" style={{ textDecoration: 'none' }}><p>Still Life</p></Link>
								</div>
								<div className="technique-list">
									<h3>Painting Techniques</h3>
									<Link to="/paintings/technique/oil" style={{ textDecoration: 'none' }}><p>Oil</p></Link>
									<Link to="/paintings/technique/watercolor" style={{ textDecoration: 'none' }}><p>Watercolor</p></Link>
									<Link to="/paintings/technique/watercolor-pencil" style={{ textDecoration: 'none' }}><p>Watercolor Pencil</p></Link>
									<Link to="/paintings/technique/pastel-crayon" style={{ textDecoration: 'none' }}><p>Pastel Crayon</p></Link>
									<Link to="/paintings/technique/pencil" style={{ textDecoration: 'none' }}><p>Pencil</p></Link>
								</div>
							</div>}
						<img src={`https://s3.amazonaws.com/imageboard-lyuba/photo.png`} />
						<p onClick={this.showPhotography}>Photography</p>
						{this.state.isPhotographyVisible && !this.state.isHandcraftVisible &&
							<div className="photography-menu" ref={menu => this.menu = menu} onMouseLeave={this.onMouseLeaveHandler}>
							<img src="https://s3.amazonaws.com/imageboard-lyuba/paint-menu.jpg" />
								<div className="genre-list">
									<h3>Photography Genres</h3>
									<Link to="/photos/genre/abstract" style={{ textDecoration: 'none' }}><p>Abstract</p></Link>
									<Link to="/photos/genre/documentary" style={{ textDecoration: 'none' }}><p>Documentary</p></Link>
									<Link to="/photos/genre/nature" style={{ textDecoration: 'none' }}><p>Nature</p></Link>
									<Link to="/photos/genre/still-life" style={{ textDecoration: 'none' }}><p>Still Life</p></Link>
									<Link to="/photos/genre/marin" style={{ textDecoration: 'none' }}><p>Marin</p></Link>
								</div>
								<div className="style-list">
									<h3>Photography Styles</h3>
									<Link to="/photos/style/black-white" style={{ textDecoration: 'none' }}><p>Black and White</p></Link>
									<Link to="/photos/style/color" style={{ textDecoration: 'none' }}><p>Color</p></Link>
									<Link to="/photos/style/street" style={{ textDecoration: 'none' }}><p>Street Photo</p></Link>
									<Link to="/photos/style/panoramic" style={{ textDecoration: 'none' }}><p>Panoramic</p></Link>
								</div>
							</div>}
						<img src={`https://s3.amazonaws.com/imageboard-lyuba/sculpture.png`} />
						<p onClick={this.showHandcraft}>Handcraft</p>
						{this.state.isHandcraftVisible && 
							<div className="hancraft-menu" ref={menu => this.menu = menu} onMouseLeave={this.onMouseLeaveHandler}>
								<img src="https://s3.amazonaws.com/imageboard-lyuba/paint-menu.jpg" />
								<div className="handcraft-categorie">
									<h3>Handcraft Categories</h3>
									<Link to="/handcrafts/categorie/new-year" style={{ textDecoration: 'none' }}><p>New Year</p></Link>
									<Link to="/handcrafts/categorie/candlesticks" style={{ textDecoration: 'none' }}><p>Candlesticks</p></Link>
									<Link to="/handcrafts/categorie/pots" style={{ textDecoration: 'none' }}><p>Pots</p></Link>
								</div>
						</div>}
					</div>	
				</div>		
			</div>

		)
	}
}
// <Link to="/photos/genre/potrait"><p>Potrait</p></Link>

//  w W /
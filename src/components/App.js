import React from 'react';
import { Header } from './Header';
import { Body } from './Body';
// import { Footer } from './Footer';

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Header />
				<Body />
				
			</div>
		)
	}
}

//  w W /
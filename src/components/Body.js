import React from 'react';
import { Route } from 'react-router-dom';

import { Welcome } from './Welcome';
import { PaintLandscape } from './PaintLandscape';


export function Body() {
	return (
		<div>
			<Route exact path="/" component={Welcome} />
			<Route path="/paintings/categorie/ladscape" component={PaintLandscape} />
			
		
		</div>
	)
}

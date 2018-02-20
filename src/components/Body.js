import React from 'react';
import { Route } from 'react-router-dom';

import { Welcome } from './Welcome';
import { PaintLandscape } from './PaintLandscape';
import { PaintWatercolor } from './PaintWatercolor';
import { PaintStillLife } from './PaintStillLife';
import { PaintLife } from './PaintLife';
import { PaintOil } from './PaintOil';
import { PaintWaterPencil } from './PaintWaterPencil';
import { SinglePaint } from './SinglePaint';


export function Body() {
	return (
		<div>
			<Route exact path="/" component={Welcome} />
			<Route path="/paintings/categorie/landscape" component={PaintLandscape} />
			<Route path="/paintings/categorie/everyday-life" component={PaintLife} />
			<Route path="/paintings/categorie/still-life" component={PaintStillLife} />
			<Route path="/paintings/technique/oil" component={PaintOil} />
			<Route path="/paintings/technique/watercolor" component={PaintWatercolor} />
			<Route path="/paintings/technique/watercolor-pencil" component={PaintWaterPencil} />
			<Route path="/item/:id" component={SinglePaint} />
		</div>
	)
}
//  w W /
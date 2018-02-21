import React from 'react';
import { Link } from 'react-router-dom';

export function LinkToSingleImg({img}) {
	// console.log('ITEM', item, 'IMG', img)
	return (
		<Link to={`/item/${img.id}`}><img src={img.image}  /></Link>
	)
}


import React from 'react';
import { Link } from 'react-router-dom';

export function LinkToSingleImg({item, img}) {
	// console.log('item, img',item, img)
	return (
		<Link to={`/item/${item.id}`}><img src={img.image}  /></Link>
	)
}


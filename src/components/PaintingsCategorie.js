import React from 'react';
import { Slider } from './Slider';
import { LinkToSingleImg } from './LinkToSingleImg';
import { LinkToSingleAuthor } from './LinkToSingleAuthor';

export function PaintingsCategorie(props) {
	// console.log('INSIDE PaintingsCategorie')
	if (props.categorieData.length === 0) {
		return (
			<div>
			 <p>No staff</p>
			</div>
		)
	}
	return (
		<div className="paint-categorie-container">
			{props.categorieData.map(item => {
				return (
					<div key={item.id}>
						<h3>Selection of Painting | {item.categorie}</h3>
						<div className="row">
							<div className="author-data-container">
								<LinkToSingleAuthor id={item.authorId} img={item.authorImage} />
								<p>{item.first} {item.last}</p>
							</div>
								<Slider>
									{item.images.map(img => {
										return (
											<div className="paints-slider" key={img.image}>
												<LinkToSingleImg item={item} img={img} />
											</div>
										)
									})}
								</Slider>
						</div>
					</div>
				)
			})}
		</div>
	)	
}

// function renderImages(imgArray) {
// 	return imgArray.map(img => {
// 		return (
// 			<div className="paints-slider" key={img.image}>
// 				<img src={img.image}  />
// 			</div>
// 		)
// 	})
// }

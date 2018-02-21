import React from 'react';
import { Slider } from './Slider';
import { LinkToSingleImg } from './LinkToSingleImg';

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
		<div>
			{props.categorieData.map(item => {
				return (
					<div key={item.id}>
						<p>Selection of Painting | {item.categorie}</p>
						<div className="row">
							<div className="author-data-container">
								<img src={item.authorImage} />
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

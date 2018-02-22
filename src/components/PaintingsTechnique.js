import React from 'react';
import { Slider } from './Slider';
import { LinkToSingleImg } from './LinkToSingleImg';

export function PaintingsTechnique(props) {
	if (props.techniqueData.length === 0) {
		return (
			<div>
			 <p>No staff</p>
			</div>
		)
	}
	return (
		<div className="paint-technique-container">
			{props.techniqueData.map(item => {
				return (
					<div key={item.id}>
						<h3>Selection of Painting | {item.technique}</h3>
						<div className="row">
							<div className="author-data-container">
								<img src={item.authorImage} />
								<p>{item.first} {item.last}</p>
							</div>
							<Slider>
								{item.images.map(img => {
									return (
										<div className="paints-slider" key={img.image}>
											<LinkToSingleImg img={img} />
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
// 				<Link to={`/photo/${img.image}`}><img src={img.image}  /></Link>
// 			</div>
// 		)
// 	})
// }
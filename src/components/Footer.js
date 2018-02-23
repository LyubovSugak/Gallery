import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
	return (
		<div id="footer">
			<div className="soc-net-container">
				<h3>FOLLOW AND CONNECT US</h3>
				<div>
					<a href="https://www.facebook.com/lyubov.dobroselskaya">
						<div className="soc-net-pic"><img src={`https://s3.amazonaws.com/imageboard-lyuba/fb.png`} /></div></a>
					<a href="https://www.instagram.com/napka84/">
						<div className="soc-net-pic"><img src={`https://s3.amazonaws.com/imageboard-lyuba/insta.png`} /></div></a>
				</div>
			</div>
			<div className="partners">
				<h3>OUR PARTNERS AND SUPPORT</h3>
				<p>Evgeniya Izotova: Logo Design</p>
				<p>Anton Reznichenko: <a href="https://www.behance.net/tohiro">Web Design</a></p>
			</div>
		</div>
	)
}
//  w W /
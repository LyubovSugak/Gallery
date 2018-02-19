

render() {
		return (
			<div>
				url
				
				<Slider>
					{this.state.newImages.map(item => {
						return (
							<img src={item.image} key={item.image} />
						)
					})}
				</Slider>

			</div>
		)
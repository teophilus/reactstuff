import React, { Component } from 'react';
import ImageBox from './imageBox';

export class MultiAsset extends React.Component {

	render() {
		var nodes = [];

		this.props.data.forEach(function(image) {
			nodes.push(<ImageBox key={image.id} title={image.title} image={image.image} />);
		});

		return (
			<div className="multi-asset">
				{nodes}
			</div>
		)
	}
}

export default MultiAsset
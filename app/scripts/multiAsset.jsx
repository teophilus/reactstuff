import React, { Component } from 'react';
import ImageBox from './imageBox';

export class MultiAsset extends React.Component {

	render() {
		var nodes = [];

		Object.keys(this.props.assets).forEach((assetId) => {
			let asset = this.props.assets[assetId];
			nodes.push(<ImageBox key={asset.id} asset={asset} />);
		});

		return (
			<div className="multi-asset">
				{nodes}
			</div>
		)
	}
}

export default MultiAsset